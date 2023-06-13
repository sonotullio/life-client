import {Box, Stack, Typography} from "@mui/material";
import React, {useMemo, useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {AllProperties} from "./all-properties";
import UserForm from "../components/users/user-form";
import {useGetIdentity} from "@refinedev/core";
import {useForm} from "@refinedev/react-hook-form";
import {FieldValues} from "react-hook-form";

export const MyProfile: React.FC = () => {
    const navigate = useNavigate();

    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { isLoading, errors, defaultValues },
        getValues,
    } = useForm({
        refineCoreProps: {
            action: "edit",
            resource: "users",
            id: user?.userid,
            redirect: false,
        },
    });

    const handleImageChange = (file: File) => {
        const reader = (readFile: File) =>
            new Promise<string>((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result as string);
                fileReader.readAsDataURL(readFile);
            });

        reader(file).then((result: string) =>
            setPropertyImage({ name: file?.name, url: result }),
        );
    };

    const onFinishHandler = async (data: FieldValues) => {
        if (!propertyImage.name) return alert("Please select an image");

        await onFinish({
            ...data,
            photo: propertyImage.url,
            email: user.email,
        });
    };

    return (
        <Box>
            <Stack direction="row" gap={2} mb={2}>
                <ChevronLeft sx={{
                    borderRadius: '50%',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0 20px 45px 0 rgba(176, 176, 176, 0.3)'
                    }}} onClick={() => navigate(-1)}/>
                <Typography>My Profile</Typography>
            </Stack>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}>
                <UserForm
                    type="Edit"
                    register={register}
                    onFinish={onFinish}
                    formLoading={formLoading}
                    handleSubmit={handleSubmit}
                    handleImageChange={handleImageChange}
                    onFinishHandler={onFinishHandler}
                    propertyImage={propertyImage}
                    avatar={getValues().photo}
                />

                <AllProperties hideHeader />
            </Box>
        </Box>
    );
}