import { Typography, Box, Stack } from "@mui/material";

import {
    PropertyReferrals,
    TotalRevenue,
} from "../components";

import React from "react";
import {AllProperties} from "./all-properties";
import KPI from "../components/home/KPIS";

export const Home: React.FC = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
        }}>
            <Typography fontSize={25} fontWeight={700}>
                Dashboard
            </Typography>

            <KPI />

            <Stack direction={{ xs: "column", lg: "row" }} width="100%" gap={4}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

            <AllProperties hideHeader />
        </Box>
    );
}