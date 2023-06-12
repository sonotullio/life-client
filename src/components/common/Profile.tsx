import {ProfileProps} from "../../interfaces/common";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    IconButton,
    Typography
} from "@mui/material";

import profile from "../../assets/profile_bg.png";
import {CheckCircle, Instagram, LinkedIn} from "@mui/icons-material";
import React from "react";
import {PieChart} from "../charts/PieChart";
import PropertiesCard from "./Properties";

export const Profile = ({id, type, name, avatar, email, properties}: ProfileProps) => {

    const AgentDetails = () => (
        <Card sx={{borderRadius: 3}}>
            <CardContent>
                <Typography>Agent Details</Typography>

                <Divider sx={{ my: 2 }} />

                <Typography color="text.secondary">
                    Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per
                    annum. However, talented customers also earn a commission for finding their client's work.
                    Typically, agents receive around 10% of what the client is paid.
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/*info*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        <Typography sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}> <CheckCircle color="primary" /> Agency</Typography>
                        <Typography sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}> <CheckCircle color="primary" />Agent License</Typography>
                        <Typography sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}> <CheckCircle color="primary" />Tax Number</Typography>
                        <Typography sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}> <CheckCircle color="primary" />Service Area</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: "text.secondary",
                        gap: 2
                    }}>
                        <Typography>Value</Typography>
                        <Typography>Value</Typography>
                        <Typography>Value</Typography>
                        <Typography>Value</Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography>Agent Status</Typography>

                <Divider sx={{ my: 2 }} />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        borderRadius: 2,
                        border: '1px solid #c1c1c1',
                        padding: 2
                    }}>
                        <PieChart
                            title="Total Listings"
                            value={684}
                            series={[75, 25]}
                            colors={["#fa5480", "#e4e8ef"]}
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        borderRadius: 2,
                        border: '1px solid #c1c1c1',
                        padding: 2
                    }}>
                        <PieChart
                            title="Properties Sold"
                            value={684}
                            series={[75, 25]}
                            colors={["#2ed480", "#e4e8ef"]}
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        borderRadius: 2,
                        border: '1px solid #c1c1c1',
                        padding: 2
                    }}>
                        <PieChart
                            title="Properties Rent"
                            value={684}
                            series={[75, 25]}
                            colors={["#475be8", "#e4e8ef"]}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    const ProfileCard = () => (
        <Card id="profile_card" sx={{borderRadius: 3}} >
            <CardMedia>
                <img src={profile} width="100%"/>
            </CardMedia>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    position: 'relative',
                }}>
                    <img src={avatar} style={{
                        position: 'absolute',
                        top: -50,
                        left: 50,
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                    }} />
                </Box>

                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography>{name}</Typography>
                        <Typography color="text.secondary" >Agent</Typography>
                    </Box>

                    {/*info*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}>
                            <Typography color="text.secondary">Age</Typography>
                            <Typography color="text.secondary">City</Typography>
                            <Typography color="text.secondary">State</Typography>
                            <Typography color="text.secondary">Country</Typography>
                            <Typography color="text.secondary">Agent ID</Typography>
                            <Typography color="text.secondary">Phone</Typography>
                            <Typography color="text.secondary">Email</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}>
                            <Typography>Value</Typography>
                            <Typography>Value</Typography>
                            <Typography>Value</Typography>
                            <Typography>Value</Typography>
                            <Typography># {id}</Typography>
                            <Typography>Value</Typography>
                            <Typography>{email}</Typography>
                        </Box>
                    </Box>

                    {/*footer*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                    }}>
                        <IconButton color="primary">
                            <Instagram />
                        </IconButton>
                        <IconButton color="primary">
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap:2
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
            }}>
                <ProfileCard />
                <AgentDetails />
            </Box>
            <Box sx={{ gap: 2 }}>
                <PropertiesCard properties={properties} />
            </Box>
        </Box>
    );
}