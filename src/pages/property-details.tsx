import {useDelete, useGetIdentity, useShow} from "@refinedev/core";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Stack, Typography} from "@mui/material";
import {Call, Chat, ChevronLeft, Delete, Edit, MoreHoriz, Place, StarRounded} from "@mui/icons-material";
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

    const handleDeleteProperty = () => {
        const response = window.confirm(
            "Are you sure you want to delete this property?",
        );
        if (response) {
            mutate(
                {
                    resource: "properties",
                    id: id as string,
                },
                {
                    onSuccess: () => {
                        navigate("/properties");
                    },
                },
            );
        }
    };

    const header = (
        <Stack direction="row" gap={2} mb={2}>
            <ChevronLeft sx={{
                borderRadius: '50%',
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: '0 20px 45px 0 rgba(176, 176, 176, 0.3)'
                }}} onClick={() => navigate(-1)}/>
            <Typography>Details</Typography>
        </Stack>
    )

    const imgPrimary = (
        <img style={{
            height: 374,
            width: '100%',
            objectFit: 'cover',
            borderRadius: '1rem',
        }} src={propertyDetails.photo} alt={propertyDetails.title}/>
    )

    const imgSecondary = (
        <img style={{
            width: '100%',
            height: 180,
            borderRadius: 1,
        }} src={propertyDetails.photo} alt="property"/>
    )

    const imgClickable = (
        <Box sx={{position: 'relative'}}>

            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                width: '100%',
                height: 180,
                left: 0,
                top: 0,
                borderRadius: 1,
                color: 'white',
                background: 'rgba(0, 0, 0, 0.6)',
            }}>
                <Stack>+10</Stack>
            </Box>
            <img style={{
                width: '100%',
                height: 180,
                borderRadius: 1,
            }} src={propertyDetails.photo} alt="property"/>
        </Box>
    )

    const imgSection = (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {imgPrimary}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {imgSecondary}
                {imgClickable}
            </Box>
        </Box>
    )

    const textDetails = (
        <>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Box sx={{
                    borderRadius: 1,
                    backgroundColor: 'secondary.main',
                    padding: 1,
                }}>
                    <Typography textTransform="capitalize" variant="subtitle2">{propertyDetails.propertyType}</Typography>
                </Box>
                <Box>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <StarRounded
                            key={`star-${item}`}
                            sx={{ color: "#F2C94C" }}
                        />
                    ))}
                </Box>
            </Stack>

            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Typography textTransform="capitalize" fontSize={22}>{propertyDetails.title}</Typography>
                <Typography textTransform="capitalize" variant="subtitle2">Price</Typography>
            </Stack>

            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                color: 'text.disabled'
            }}>
                <Stack direction="row" gap={1}>
                    <Place  />
                    <Typography textTransform="capitalize" variant="subtitle2" >{propertyDetails.location}</Typography>
                </Stack>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'baseline' }}>
                    <Typography color="primary.main" fontSize={22}>${propertyDetails.price}</Typography>
                    <Typography textTransform="capitalize" variant="subtitle2"> For One Day</Typography>
                </Box>
            </Stack>
            <Stack>
                <Typography>{propertyDetails.description}</Typography>
            </Stack>
        </>
    )

    const propertySection = (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            {imgSection}
            {textDetails}
        </Box>
    )

    const userSection = (
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
            <img style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
            }} src={propertyDetails.photo} alt="property"/>
            <Typography>Name</Typography>
            <Typography variant="caption" color="text.secondary">Role</Typography>
            <Typography variant="caption" color="text.secondary">Place</Typography>
            <Typography variant="subtitle2">Props</Typography>
            <Stack direction="row" justifyContent="center" gap={2}>
                <CustomButton title={'Message'} handleClick={() => {}} icon={<Chat />} />
                <CustomButton title={'Call'} handleClick={() => {}} icon={<Call />} color="success.main" />
            </Stack>
        </Box>
    )

    const editSection = (
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
            <img  style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
            }} src={user.avatar} alt="user avatar"/>
            <Typography>{user.name}</Typography>
            <Typography variant="caption" color="text.secondary">Agent</Typography>
            <Typography variant="caption" color="text.secondary">{user.email}</Typography>
            <Typography variant="subtitle2">
                {
                    propertyDetails.creator.allProperties?.length > 0 ?
                        propertyDetails.creator.allProperties.length + ' Properties' : 'No Properties'
                }
            </Typography>
            <Stack direction="row" justifyContent="center" gap={2}>
                <CustomButton title={'Edit'} handleClick={() => navigate("/properties/edit/" + propertyDetails._id)} icon={<Edit />} />
                <CustomButton title={'Delete'} handleClick={() => handleDeleteProperty()} icon={<Delete />} color="error.main" />
            </Stack>
        </Box>
    )

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: 2,
            borderRadius: 3,
            backgroundColor: 'background.paper',
        }}>
            {header}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', justifyContent: 'center', gap: 2 }}>
                {propertySection}
                <Box display="flex" flexDirection="column" gap={2}>
                    {isCurrentUser ? editSection : userSection }
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <img src={propertyDetails.photo} alt="maps" width={320} height={306} />
                        <CustomButton title={'Book Now'} handleClick={() => {}} fullWidth={true} />
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}

