import {Box, Stack, Typography} from "@mui/material";
import {ArrowCircleUpRounded, ArrowUpwardRounded} from "@mui/icons-material";
import ReactApexChart from "react-apexcharts";
import {TotalRevenueOptions, TotalRevenueSeries} from "./chart.config";

export const TotalRevenue = () => {
    return (
        <Box
            p={4}
            flex={1}
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius={2}
            bgcolor="background.paper"
        >
            <Typography fontSize={18}>TotalRevenue</Typography>

            <Stack my={2} direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28}>$236,535</Typography>
                <Stack direction="row" alignItems="center" gap={2}>
                    <ArrowUpwardRounded sx={{fontSize: 18, bgcolor: "primary.main", borderRadius: '50%', color: 'primary.contrastText'}}/>
                    <Stack>
                        <Typography fontSize={15} color="primary">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="text.secondary">
                            Than Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
            />
        </Box>
    );
}