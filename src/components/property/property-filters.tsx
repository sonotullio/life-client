import {Box, MenuItem, Select, TextField, useMediaQuery} from "@mui/material";
import {CustomButton} from "../common/CustomButton";
import {Theme} from "@mui/material/styles";

const PropertyFilters = ({ currentFilterValues, setFilters, toggleSort, currentPrice }: any) => {
    const matchesXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
        }}>
            <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value={currentFilterValues.title}
                onChange={(e) => {
                    setFilters([
                        {
                            field: "title",
                            operator: "contains",
                            value: e.currentTarget.value
                                ? e.currentTarget.value
                                : undefined,
                        },
                    ]);
                }}
            />
            <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.propertyType}
                onChange={(e) => {
                    setFilters(
                        [
                            {
                                field: "propertyType",
                                operator: "eq",
                                value: e.target.value,
                            },
                        ],
                        "replace",
                    );
                }}
            >
                <MenuItem value="">Any Type</MenuItem>
                {[
                    "Apartment",
                    "Villa",
                    "Farmhouse",
                    "Condos",
                    "Townhouse",
                    "Duplex",
                    "Studio",
                    "Chalet",
                ].map((type) => (
                    <MenuItem
                        key={type}
                        value={type.toLowerCase()}
                    >
                        {type}
                    </MenuItem>
                ))}
            </Select>
            <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.status}
                onChange={(e) => {
                    setFilters(
                        [
                            {
                                field: "status",
                                operator: "eq",
                                value: e.target.value,
                            },
                        ],
                        "replace",
                    );
                }}
            >
                <MenuItem value="">Any Status</MenuItem>
                {[
                    "For Sale",
                    "For Rent",
                ].map((type) => (
                    <MenuItem
                        key={type}
                        value={type.toLowerCase()}
                    >
                        {type}
                    </MenuItem>
                ))}
            </Select>

            <CustomButton
                fullWidth={matchesXs ? true : false}
                title={`Price ${
                    currentPrice === "asc" ? "↑" : "↓"
                }`}
                handleClick={() => toggleSort("price")}
            />
        </Box>
    );
}

export default PropertyFilters;