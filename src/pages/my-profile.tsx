import {useGetIdentity, useOne} from "@refinedev/core";
import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import {ChevronLeft} from "@mui/icons-material";
import {PersonalProfile} from "../components/common/PersonalProfile";
import {useNavigate} from "react-router-dom";

export const MyProfile: React.FC = () => {
    const navigate = useNavigate();

    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user?.userid,
    });

    const myProfile = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

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

            <PersonalProfile id={myProfile._id} type={myProfile.type} name={myProfile.name} email={myProfile.email} avatar={myProfile.avatar} properties={myProfile.allProperties} />
        </Box>
    );
}