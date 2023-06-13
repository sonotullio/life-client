import { Box, Typography, FormControl, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from "@mui/material";
import { FormProps } from "interfaces/common";
import { CustomButton } from "./CustomButton";
import {BaseButton} from "./BaseButton";
import {useNavigate} from "react-router-dom";

export const Form = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage, avatar}: FormProps) => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            p: 0
        }}>
            <Typography fontSize={25} fontWeight={700}>{type} a Property</Typography>
            <Box
                width="100%"
                mt={2.5}
                borderRadius={2}
                padding={2.5}
                bgcolor="background.paper">
                <form onSubmit={handleSubmit(onFinishHandler)}
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {xs: "column", md: "row"},
                        gap: "20px",
                        width: "100%"
                    }} >
                        <Stack direction="column" gap={2}>
                            <img src={propertyImage.url ? propertyImage.url : avatar} alt="property" height={420} width="fit-content" style={{ maxWidth: '100%' }} />
                        </Stack>
                        <Stack direction="column" gap={2} width="100%">
                            <FormControl sx={{
                                display: 'none'
                            }}>
                                <TextField id="outlined-basic"
                                           fullWidth
                                           required
                                           color="primary"
                                           variant="outlined"
                                           {...register('photo', {required: true })}
                                />
                            </FormControl>

                            <FormControl>
                                <Typography sx={{
                                    fontSize: 16,
                                    margin: "10px 0"
                                }}>Property Name</Typography>
                                <TextField id="outlined-basic"
                                           fullWidth
                                           required
                                           color="primary"
                                           variant="outlined"
                                           {...register('title', {required: true })}
                                />
                            </FormControl>

                            <FormControl>
                                <Typography sx={{
                                    fontSize: 16,
                                    margin: "10px 0"
                                }}>Location</Typography>
                                <TextField id="outlined-basic"
                                           fullWidth
                                           required
                                           color="primary"
                                           variant="outlined"
                                           {...register('location', {required: true })}
                                />
                            </FormControl>

                            <FormControl sx={{ flex: 1 }}>
                                <Typography sx={{
                                    fontSize: 16,
                                    margin: "10px 0"
                                }}>Property Type</Typography>
                                <Select
                                    variant="outlined"
                                    color="primary"
                                    required
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    defaultValue="apartment"
                                    {...register('propertyType', {required: true })}
                                >
                                    <MenuItem value={"apartment"}>Apartment</MenuItem>
                                    <MenuItem value={"villa"}>Villa</MenuItem>
                                    <MenuItem value={"farmhouse"}>Farmhouse</MenuItem>
                                    <MenuItem value={"condos"}>Condos</MenuItem>
                                    <MenuItem value={"townhouse"}>Townhouse</MenuItem>
                                    <MenuItem value={"duplex"}>Duplex</MenuItem>
                                    <MenuItem value={"studio"}>Studio</MenuItem>
                                    <MenuItem value={"chalet"}>Chalet</MenuItem>
                                </Select>
                            </FormControl>

                            <Stack direction="row" gap={4} width="100%">
                                <FormControl sx={{ flex: 1 }}>
                                    <Typography sx={{
                                        fontSize: 16,
                                        margin: "10px 0"
                                    }}>Property Status</Typography>
                                    <Select
                                        variant="outlined"
                                        color="primary"
                                        required
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        defaultValue="for sale"
                                        {...register('status', {required: true })}
                                    >
                                        <MenuItem value={"for sale"}>For Sale</MenuItem>
                                        <MenuItem value={"for rent"}>For Rent</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <Typography sx={{
                                        fontSize: 16,
                                        margin: "10px 0"
                                    }}>Property Price</Typography>
                                    <TextField id="outlined-basic"
                                               type="number"
                                               fullWidth
                                               required
                                               color="primary"
                                               variant="outlined"
                                               {...register('price', {required: true })}
                                    />
                                </FormControl>
                            </Stack>
                        </Stack>
                    </Box>

                    <FormControl>
                        <Typography sx={{
                            fontSize: 16,
                            margin: "10px 0"
                        }}>Description</Typography>
                        <TextField id="description"
                                   fullWidth
                                   required
                                   color="primary"
                                   variant="outlined"
                                   placeholder={"Write a Description"}
                                   {...register('description', {required: true })}
                        />
                    </FormControl>

                    <Stack direction="column" justifyContent="center" gap={1} >
                        <Stack direction="row" alignItems="center" gap={2}>
                            <Typography fontSize={16}>Property Photo</Typography>
                            <Button component="label" sx={{
                                width: "fit-content",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "success.main",
                                textTransform: "capitalize",
                                '&:hover': {
                                    opacity: 0.8,
                                    backgroundColor: "transparent"
                                }
                            }}>
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    // @ts-ignore
                                    onChange={(e) => handleImageChange(e.target.files[0])}
                                />
                            </Button>
                        </Stack>
                        <Typography fontSize={14} fontWeight={500} sx={{ wordBreak: "break-all" }}>{propertyImage?.name}</Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="flex-end" gap={8}>
                        <BaseButton title={"Cancel"} fullWidth handleClick={() => navigate(-1)} />
                        <CustomButton
                            type="submit"
                            title={formLoading ? "Submitting..." : "Submit"}
                            fullWidth
                        />
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}