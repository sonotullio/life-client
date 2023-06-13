import {AgentCardProp} from "../../interfaces/agent";
import {Box, Stack, Typography} from "@mui/material";
import {Business, Call, Email, MoreHoriz, Place} from "@mui/icons-material";
import {useGetIdentity} from "@refinedev/core";
import {useNavigate} from "react-router-dom";

export const AgentCard = ({id, name, email, avatar, noOfProperties}: AgentCardProp) => {
    const {data: currentUser} = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

    const navigate = useNavigate();

    const generateLink = () => {
        if (currentUser.email === email) return `/my-profile`;

        return `/agents/show/${id}`;
    }

    const InfoBar = ({icon, text}: any) => (
        <Stack direction="row" flex={1} minWidth={{ xs: '100%', sm: 300 }} gap={1}>
            {icon}
            <Typography variant="subtitle2">{text}</Typography>
        </Stack>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                padding: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                width: '100%',
                '&:hover': {
                    boxShadow: '0px 22px 45px 2px rgba(176, 176, 176, 0.1)',
                }
            }}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
                <Box sx={{
                    width: '200px', /* Adjust this value based on your desired width */
                }}>
                    <img src={avatar} style={{ width: '100%', height: '150px', borderRadius: 6 }} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
                <Stack display="flex" direction="column" mb={{ xs: 1, sm: 6 }} width="100%">
                    <Stack display="flex" direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <Typography color="text.primary">{name}</Typography>
                        <MoreHoriz onClick={() => navigate(generateLink())} sx={{ cursor: 'pointer' }} />
                    </Stack>
                    <Typography variant="subtitle2" color="text.secondary">Real Estate Agent</Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2} color="text.secondary">
                    <InfoBar icon={<Email />} text={email} />
                    <InfoBar icon={<Call />} text={"+234 123 456 7890"} />
                    <InfoBar icon={<Place />} text={"Lagos, Nigeria"} />
                    <InfoBar icon={<Business />} text={noOfProperties + "Properties"} />
                </Stack>
            </Box>
        </Box>
    );
}