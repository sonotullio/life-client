import { Place } from "@mui/icons-material";
import { Box, Typography, Card, CardMedia, CardContent, Stack } from "@mui/material";

import { PropertyCardProps } from "../../interfaces/property";
import {Link} from "react-router-dom";

export const PropertyCard = ({id, title, price, location, photo}: PropertyCardProps) => {
    return (
        <Card
            component={Link}
            to={`/properties/show/${id}`}
            elevation={0}
            sx={{
                maxWidth: 330,
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                    boxShadow: '0 20px 45px 0 rgba(176, 176, 176, 0.3)'
                }
            }}
        >
            <CardMedia
                component="img"
                width="100%"
                height="210"
                image={photo}
                alt="card image"
                sx={{ borderRadius: 1 }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 1,
                paddingX: 0.5
            }}>
                <Stack direction="column" gap={1}>
                    <Typography>{title}</Typography>
                    <Stack direction="row"  alignItems="center" gap={0.5}>
                        <Place sx={{fontSize: 18}}/>
                        <Typography variant="body2" color="text.secondary">{location}</Typography>
                    </Stack>
                </Stack>
                <Box px={1.5} py={0.5} borderRadius={1} bgcolor="secondary.main" height="fit-content">
                    <Typography variant="body2" color="text.secondary">${price}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}