import React, {useContext} from "react";
import {useGetIdentity} from "@refinedev/core";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";
import {ColorModeContext} from "../../../contexts";

export const Header: React.FC = () => {
    const {data: user} = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const showUserInfo = user && (user.name || user.avatar);
    const {mode, setMode} = useContext(ColorModeContext);

    return (
        <AppBar
            color="default"
            position="sticky"
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={() => {
                        setMode();
                    }}
                >
                    {mode === "dark" ? <LightModeOutlined/> : <DarkModeOutlined/>}
                </IconButton>
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                >

                    {showUserInfo && (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {user.avatar && (
                                <Avatar src={user?.avatar} alt={user?.name} sx={{ bgcolor: "primary.main" }} />
                            )}
                            {user.name && (
                                <Typography variant="subtitle2">
                                    {user?.name}
                                </Typography>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};