import {useNavigate, useParams} from "react-router-dom";
import {useOne} from "@refinedev/core";
import {ChevronLeft} from "@mui/icons-material";
import {Box, Stack, Typography} from "@mui/material";
import {Profile} from "../components";

export const AgentProfile: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
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
                <Typography>Details</Typography>
            </Stack>

            <Profile id={myProfile._id} type={myProfile.type} name={myProfile.name} email={myProfile.email} avatar={myProfile.avatar} properties={myProfile.allProperties} />
        </Box>
    );
}