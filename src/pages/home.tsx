import { useList } from "@refinedev/core";

import { Typography, Box, Stack } from "@mui/material";

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
} from "../components";
import PropertiesCard from "../components/common/Properties";
import React from "react";

export const Home: React.FC = () => {
    const { data, isLoading, isError } = useList({
        resource: "properties",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestProperties = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
        }}>
            <Typography fontSize={25} fontWeight={700}>
                Dashboard
            </Typography>
            <Box
                display="flex"
                flexWrap="wrap"
                gap={4}
            >
                <PieChart
                    title="Properties for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={["#475be8", "#e4e8ef"]}
                />
                <PieChart
                    title="Properties for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={["#475be8", "#e4e8ef"]}
                />
                <PieChart
                    title="Total customers"
                    value={5684}
                    series={[75, 25]}
                    colors={["#475be8", "#e4e8ef"]}
                />
                <PieChart
                    title="Properties for Cities"
                    value={555}
                    series={[75, 25]}
                    colors={["#475be8", "#e4e8ef"]}
                />
            </Box>

            <Stack direction={{ xs: "column", lg: "row" }} width="100%" gap={4}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

            <Box>
                <PropertiesCard properties={latestProperties} />
            </Box>
        </Box>
    );
}