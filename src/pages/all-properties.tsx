import { Add } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useList } from '@refinedev/core';
import { useNavigate } from "react-router-dom";

import { PropertyCard, CustomButton } from '../components';

export const AllProperties: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography fontSize={25} fontWeight={700}>
                    All Properties
                </Typography>
                <CustomButton
                    title={"Add Property"}
                    handleClick={() => navigate("/properties/create")}
                    icon={<Add />} />
            </Stack>
        </Box>
    );
}