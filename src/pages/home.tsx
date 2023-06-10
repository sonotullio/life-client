import { useList } from "@refinedev/core";

import { Typography, Box, Stack } from "@mui/material";

import {
    PieChart,
    PropertyCard,
    PropertyReferrals,
    TotalRevenue,
    TopAgent,
} from "../components";

export const Home: React.FC = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#111">
                Dashboard
            </Typography>
            <Box
                mt="20px"
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

            <Stack direction={{ xs: "column", lg: "row" }} mt="25px" width="100%" gap={2}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
        </Box>
    );
}