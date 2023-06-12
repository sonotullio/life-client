import {Button, Card, CardContent, MenuItem, Select, Stack, Typography} from "@mui/material";
import {PropertyCard} from "./PropertyCard";
import React from "react";

interface PropertiesCardProps {
    properties: any[]
}

const PropertiesCard = ({properties}: PropertiesCardProps) => (
    <Card id="properties_card" sx={{borderRadius: 3}} >
        <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>Properties</Typography>
                <Stack direction="row" gap={2}>
                    <Button color="primary">Popular</Button>
                    <Button color="primary">Popular</Button>
                    <Button color="primary">Popular</Button>
                    <Select>
                        <MenuItem>Most Recent</MenuItem>
                    </Select>
                </Stack>
            </Stack>
            <Stack direction="row" gap={2}>
                {properties.map((property: any, index: number) => (
                    <PropertyCard
                        key={property._id}
                        id={property._id}
                        title={property.title}
                        price={property.price}
                        location={property.location}
                        photo={property.photo} />
                ))}
            </Stack>
        </CardContent>
    </Card>
);

export default PropertiesCard;