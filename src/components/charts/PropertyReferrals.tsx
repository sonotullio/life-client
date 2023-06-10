import {Box, Stack, Typography} from "@mui/material";
import {propertyReferralsInfo} from "../../constants";

interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
}

const ProgressBar = ({title, percentage, color}: ProgressBarProps) => {
    return (
        <Box width="100%">
            <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
                <Typography fontSize={16}>
                    {title}
                </Typography>
                <Typography fontSize={14} color="text.secondary">
                    {percentage}%
                </Typography>
            </Stack>
            <Box
                width="100%"
                height="10px"
                bgcolor="#e4e8ef"
                borderRadius={5}
                position="relative"
            >
                <Box
                    width={`${percentage}%`}
                    height="10px"
                    bgcolor={color}
                    borderRadius={5}
                />
            </Box>
        </Box>
    );
}

export const PropertyReferrals = () => {
    return (
        <Box
            p={4}
            bgcolor="background.paper"
            id="chart"
            minWidth={490}
            display="flex"
            flexDirection="column"
            borderRadius={2}
        >
            <Typography fontSize={18}>
                PropertyReferrals
            </Typography>
            <Stack direction="column" my="20px" gap={4} width="100%">
                {propertyReferralsInfo.map((bar, i) => (
                    <ProgressBar key={i} title={bar.title} percentage={bar.percentage} color={bar.color}/>
                ))}
            </Stack>
        </Box>
    );
}