import {ProfileProps} from "../../interfaces/common";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider, FormControl,
    IconButton,
    MenuItem,
    Select,
    Stack, TextField,
    Typography
} from "@mui/material";

import profile from "../../assets/profile_bg.png";
import {CheckCircle, Instagram, LinkedIn, Photo} from "@mui/icons-material";
import React, {useState} from "react";
import {PieChart} from "../charts/PieChart";
import {PropertyCard} from "./PropertyCard";
import {CustomButton} from "./CustomButton";
import {useForm} from "@refinedev/react-hook-form";
import {FieldValues} from "react-hook-form";

export const PersonalProfile = ({id, type, name, avatar, email, properties}: ProfileProps) => {
    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();

    const handleImageChange = (file: File) => {
        const reader = (readFile: File) =>
            new Promise<string>((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result as string);
                fileReader.readAsDataURL(readFile);
            });

        reader(file).then((result: string) =>
            setPropertyImage({ name: file?.name, url: result }),
        );
    };

    const onFinishHandler = async (data: FieldValues) => {
        if (!propertyImage.name) return alert("Please select an image");

        await onFinish({
            ...data,
            photo: propertyImage.url,
            email: email,
        });
    };

    const ProfileForm = () => (
        <Card id="profile_form" sx={{borderRadius: 3}} >
            <CardContent>
                <Stack display="flex" direction="row" justifyContent="flex-start">
                    <CardMedia sx={{
                        backgroundImage: `url(${profile})`,
                        width: "30%",
                        borderRadius: 3,
                    }}>
                        <Box sx={{
                            padding: 2,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "bottom",
                        }}>
                            <Button component="label" sx={{
                                width: "fit-content",
                                backgroundColor: "secondary.main",
                                textTransform: "capitalize",
                                '&:hover': {
                                    backgroundColor: "secondary.dark",
                                    opacity: [0.9, 0.8, 0.7],
                                }
                            }}>
                                <Photo />
                                Change Photo
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    // @ts-ignore
                                    onChange={(e) => handleImageChange(e.target.files[0])}
                                />
                            </Button>
                        </Box>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>{name}</Typography>
                        <Typography color="text.secondary">Admin</Typography>
                        <form onSubmit={handleSubmit(onFinishHandler)}
                              style={{
                                  marginTop: "20px",
                                  display: "flex",
                                  flexDirection: "column",
                                  width: "100%",
                                  gap: "20px"
                              }}>
                            <FormControl>
                                <Typography sx={{
                                    fontSize: 16,
                                    margin: "10px 0"
                                }}>Address</Typography>
                                <TextField id="outlined-basic"
                                           fullWidth
                                           required
                                           color="primary"
                                           variant="outlined"
                                           {...register('address', {required: true })}
                                />
                            </FormControl>

                            <Stack direction="row" gap={4}>
                                <FormControl>
                                    <Typography sx={{
                                        fontSize: 16,
                                        margin: "10px 0"
                                    }}>Phone Number</Typography>
                                    <TextField id="phone"
                                               fullWidth
                                               required
                                               color="primary"
                                               variant="outlined"
                                               placeholder={"Insert your phone number"}
                                               {...register('phone', {required: true })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Typography sx={{
                                        fontSize: 16,
                                        margin: "10px 0"
                                    }}>Email</Typography>
                                    <TextField id="outlined-basic"
                                               fullWidth
                                               required
                                               color="primary"
                                               variant="outlined"
                                               {...register('email', {required: true })}
                                    />
                                </FormControl>
                            </Stack>

                            <CustomButton
                                type="submit"
                                title={formLoading ? "Submitting..." : "Submit"}
                                fullWidth
                            />
                        </form>
                    </CardContent>
                </Stack>
            </CardContent>
        </Card>
    );

    const PropertiesCard = () => (
        <Card id="properties_card" sx={{borderRadius: 3}} >
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>Properties</Typography>
                    <Stack direction="row" gap={2}>
                        <Button color="primary">Popular</Button>
                        <Button color="primary">Reccomanded</Button>
                        <Button color="primary">Newest</Button>
                        <Select
                            variant="outlined"
                            color="primary"
                            required
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            defaultValue="Most Recent>"
                        >
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

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap:2
        }}>
            <ProfileForm />
            <PropertiesCard />
        </Box>
    );
}