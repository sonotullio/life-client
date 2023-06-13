import {
    Box, Button,
    Card,
    CardContent,
    FormControl, MenuItem, Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import profile2 from "../../assets/profile-bg2.png";
import {CustomButton} from "../common/CustomButton";
import {BaseButton} from "../common/BaseButton";

import "../../index.css";
import {FormProps} from "../../interfaces/common";

const UserForm = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage, avatar}: FormProps) => {
    return (
        <Box>

            {/*<Typography fontSize={25} fontWeight={700}>{type} Profile</Typography>*/}
            <Card>
                <img src={profile2} alt="profile" width="100%" style={{ maxHeight: '300px', borderRadius: 2}} />
                <form onSubmit={handleSubmit(onFinishHandler)}
                      style={{
                          marginTop: 20,
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          gap: 4,
                          padding: 20
                      }}>

                    <Box sx={{
                        position: 'relative',
                    }}>
                        <img className="img_profile_upload" src={propertyImage.url ? propertyImage.url : avatar} alt="profile" width="100%" />
                        <Stack sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 4,
                        }}>
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
                                Update *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    // @ts-ignore
                                    onChange={(e) => handleImageChange(e.target.files[0])}
                                />
                            </Button>
                        </Stack>
                        <TextField id="outlined-basic"
                                   fullWidth
                                   required
                                   color="primary"
                                   variant="outlined"
                                   sx={{
                                       display: "none"
                                   }}
                            {...register('photo', {required: true })}
                        />
                    </Box>

                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                    }}>
                        <FormControl fullWidth>
                            <Typography sx={{
                                fontSize: 16,
                                margin: "10px 0"
                            }}>Name</Typography>
                            <TextField id="outlined-basic"
                                       fullWidth
                                       required
                                       color="primary"
                                       variant="outlined"
                                       {...register('name', {required: true })}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <Typography sx={{
                                fontSize: 16,
                                margin: "10px 0"
                            }}>Role</Typography>
                            <Select
                                variant="outlined"
                                color="primary"
                                required
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                defaultValue="agent"
                                {...register('role', {required: true })}
                            >
                                <MenuItem value={"agent"}>Agent</MenuItem>
                                <MenuItem value={"private"}>Private</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                    }}>
                        <FormControl fullWidth>
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

                        <FormControl fullWidth>
                            <Typography sx={{
                                fontSize: 16,
                                margin: "10px 0"
                            }}>Phone</Typography>
                            <TextField id="outlined-basic"
                                       fullWidth
                                       required
                                       color="primary"
                                       variant="outlined"
                                       {...register('phone', {required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <Typography fontSize={14} fontWeight={500} sx={{ wordBreak: "break-all" }}>{propertyImage?.name}</Typography>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        fullWidth
                    />
                </form>
            </Card>
        </Box>
    );
}

export default UserForm;