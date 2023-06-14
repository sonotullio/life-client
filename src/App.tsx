import React from "react";

import {
    Refine,
    LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ReadyPage,
    ErrorComponent,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, {AxiosRequestConfig} from "axios";
import {Title, Sider, Layout, Header} from "components/layout";
import {ColorModeContextProvider} from "contexts";
import {CredentialResponse} from "interfaces/google";
import {parseJwt} from "utils/parse-jwt";

import {
    Login, Home, AllProperties, PropertyDetails, CreateProperty, EditProperty, Agents, AgentProfile, MyProfile
} from "pages";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

function App() {
    const authProvider: AuthProvider = {
        login: async ({credential}: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            if (profileObj) {
                const response = await axiosInstance(
                    `/api/v1/users`,
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        data: {
                            email: profileObj.email,
                            name: profileObj.name,
                            avatar: profileObj.picture,
                        }
                    },
                );

                const {data} = await response;

                if (response.status === 200) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            ...profileObj,
                            avatar: profileObj.picture,
                            userid: data._id,
                        }),
                    );
                } else {
                    return Promise.reject();
                }
            }
            localStorage.setItem("token", `${credential}`);

            return Promise.resolve();
        },
        logout: () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return Promise.resolve();
                });
            }

            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: async () => {
            const token = localStorage.getItem("token");

            if (token) {
                return Promise.resolve();
            }
            return Promise.reject();
        },

        getPermissions: async () => null,
        getUserIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return Promise.resolve(JSON.parse(user));
            }
        },
    };

    console.log('base url: ', process.env.BASE_URL)

    return (
        <ColorModeContextProvider>
            <CssBaseline/>
            <GlobalStyles styles={{html: {WebkitFontSmoothing: "auto"}}}/>
            <RefineSnackbarProvider>
                <Refine
                    dataProvider={dataProvider(`${process.env.REACT_APP_API_BASE_URL}/api/v1`)}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent/>}
                    resources={[
                        {
                            name: "properties",
                            list: () => <AllProperties />,
                            show: PropertyDetails,
                            create: CreateProperty,
                            edit: EditProperty,
                            icon: <VillaOutlined/>,
                        },
                        {
                            name: "agents",
                            list: Agents,
                            show: AgentProfile,
                            icon: <PeopleAltOutlined/>,
                        },
                        {
                            name: "reviews",
                            list: Home,
                            icon: <StarOutlineRounded/>,
                        },
                        {
                            name: "messages",
                            list: Home,
                            icon: <ChatBubbleOutline/>,
                        },
                        {
                            name: "my-profile",
                            list: MyProfile,
                            options: {label: 'My Profile'},
                            icon: <AccountCircleOutlined/>,
                        },
                    ]}
                    Title={Title}
                    Sider={Sider}
                    Layout={Layout}
                    Header={Header}
                    DashboardPage={Home}
                    legacyRouterProvider={routerProvider}
                    legacyAuthProvider={authProvider}
                    LoginPage={Login}
                />
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;