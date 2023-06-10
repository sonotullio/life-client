import {Box, Typography, Stack} from "@mui/material";
import {PieChartProps} from "../../interfaces/home";
import React from "react";
import ReactApexChart from "react-apexcharts";

export const PieChart = ({title, value, series, colors}: PieChartProps) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="background.paper"
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            pl={3.5}
            py={2}
            gap={2}
            borderRadius={2}
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">
                <Typography fontSize={14} color="text.secondary" >{title}</Typography>
                <Typography fontSize={24} fontWeight={700} mt={1} >{value}</Typography>
            </Stack>
            <ReactApexChart options={{
                chart: {
                    type: 'donut',
                },
                colors: colors,
                legend: {show: false},
                dataLabels: {enabled: false},
            }} series={series} type="donut" width="120px" />
        </Box>
    );
}