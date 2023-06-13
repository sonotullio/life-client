import { Place } from "@mui/icons-material";
import {Box, Typography, Card, CardMedia, CardContent, Stack, Chip} from "@mui/material";

import { PropertyCardProps } from "../../interfaces/property";
import {Link} from "react-router-dom";

export const PropertyCard = ({id, title, price, status, location, photo}: PropertyCardProps) => {
    return (
        <Card
            component={Link}
            to={`/properties/show/${id}`}
            elevation={0}
            sx={{
                width: '100%',
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
                height={210}
                image={photo}
                alt="card image"
                sx={{ borderRadius: 1 }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 1,
                width: '100%',
            }}>
                <Stack direction="column" gap={1}>
                    <Typography>{title}</Typography>
                    <Stack direction="row" alignItems="center" color="text.secondary">
                        <Place sx={{fontSize: 18}}/>
                        <Typography variant="body2">{location}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="column" gap={1}>
                    <Chip label={`$${price}`} sx={{ backgroundColor: 'secondary.main' }} />

                    <Chip label={`${status}`} />
                </Stack>
            </CardContent>
        </Card>
    );
}