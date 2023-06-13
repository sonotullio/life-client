import {Box} from "@mui/material";
import {PieChart} from "../charts/PieChart";
import {KPIS, Palette} from "../../constants";
import React from "react";

// interface KPIProps {
//     charts: {title: string, total: number, series: number[]}[];
// }

const charts = KPIS;

//Todo: retrieve KPIS data from backend.
const KPI = () => (
    <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
    >
        {
            charts.map((chart, index) => (
                <PieChart
                    key={index}
                    title={chart.title}
                    value={chart.total}
                    series={chart.series}
                    colors={[Palette[index], "#e4e8ef"]}
                />
            ))
        }
    </Box>
);

export default KPI;