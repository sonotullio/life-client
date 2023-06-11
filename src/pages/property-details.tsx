import {useDelete, useGetIdentity, useShow} from "@refinedev/core";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Stack, Typography} from "@mui/material";
import {ChevronLeft, MoreHoriz} from "@mui/icons-material";
import {CustomButton} from "../components";

export const PropertyDetails: React.FC = () => {
    const navigate = useNavigate();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { queryResult } = useShow();
    const { mutate } = useDelete();
    const { id } = useParams();

    const { data, isLoading, isError } = queryResult;

    const propertyDetails = data?.data ?? {};

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    const isCurrentUser = user.email === propertyDetails.creator.email;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            borderRadius: 3,
            backgroundColor: 'background.paper',
        }}>

            {/*header*/}
            <Stack direction="row" gap={2} mb={2}>
                <ChevronLeft sx={{
                    borderRadius: '50%',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0 20px 45px 0 rgba(176, 176, 176, 0.3)'
                    }}} onClick={() => navigate(-1)}/>
                <Typography>Details</Typography>
            </Stack>

            {/*body*/}
            <Stack direction="row" gap={2}>

                {/*main*/}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                }}>
                    {/*first column*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}>
                        <img style={{
                            width: 541,
                            height: 346,
                            borderRadius: 1,
                        }} src={propertyDetails.photo} alt="property"/>
                    </Box>

                    {/*second column*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}>
                        {/*first img*/}
                        <img style={{
                            width: 203,
                            height: 162,
                            borderRadius: 1,
                        }} src={propertyDetails.photo} alt="property"/>

                        {/*clickable img*/}
                        <Box sx={{position: 'relative'}}>

                            <Box sx={{
                                display: 'flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                width: 203,
                                height: 162,
                                left: 0,
                                top: 0,
                                borderRadius: 1,
                                color: 'white',
                                background: 'rgba(0, 0, 0, 0.6)',
                            }}>
                                <Stack>+10</Stack>
                            </Box>
                            <img style={{
                                width: 203,
                                height: 162,
                                borderRadius: 1,
                            }} src={propertyDetails.photo} alt="property"/>
                        </Box>
                    </Box>
                </Box>

                {/*side*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                    padding: 2,
                }}>
                    <Stack width="100%" alignItems="end" justifyContent="flex-end">
                        <MoreHoriz />
                    </Stack>
                    <img src={propertyDetails.photo} style={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                    }} />
                    <Typography>Name</Typography>
                    <Typography variant="caption" color="text.secondary">Role</Typography>
                    <Typography variant="caption" color="text.secondary">Place</Typography>
                    <Typography variant="subtitle2">Props</Typography>
                    <Stack direction="row" justifyContent="center" gap={2}>
                        <CustomButton title={'Message'} handleClick={() => {}} />
                        <CustomButton title={'Call'} handleClick={() => {}} />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}