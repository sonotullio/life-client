import { Add } from '@mui/icons-material';
import {Box, MenuItem, Select, Stack, TextField, Typography} from '@mui/material';
import {useTable} from '@refinedev/core';
import { useNavigate } from "react-router-dom";

import { PropertyCard, CustomButton } from '../components';
import {useMemo} from "react";

export const AllProperties: React.FC = () => {
    const navigate = useNavigate();
    const {
        tableQueryResult: { data, isLoading, isError },
        current, setCurrent,
        setPageSize,
        pageCount,
        sorter, setSorter,
        filters, setFilters,
    } = useTable();

    const allProperties = data?.data ?? [];

    const currentPrice = sorter.find((item) => item.field === "price")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            title:
                logicalFilters.find((item) => item.field === "title")?.value ||
                "",
            propertyType:
                logicalFilters.find((item) => item.field === "propertyType")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error!</Typography>;

    return (
        <Box>

            {/*header*/}
            <Box mt={2} sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3
            }}>
                    <Stack
                        width="100%"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography fontSize={25} fontWeight={700}>
                            {!allProperties.length ? "There are no Properties" : "All Properties"}
                        </Typography>
                        <CustomButton
                            title={"Add Property"}
                            handleClick={() => navigate("/properties/create")}
                            icon={<Add />} />
                    </Stack>

            </Box>

            {/*body*/}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                padding: 2,
                borderRadius: 3,
                backgroundColor: 'background.paper'
            }}>
                <Box
                    display="flex"
                    width="84%"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <Box
                        display="flex"
                        gap={2}
                        flexWrap="wrap"
                        mb={{ xs: "20px", sm: 0 }}
                    >
                        <CustomButton
                            title={`Sort price ${
                                currentPrice === "asc" ? "↑" : "↓"
                            }`}
                            handleClick={() => toggleSort("price")}
                        />
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
                            <MenuItem value="">All</MenuItem>
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
                    </Box>
                </Box>

                {allProperties.map((property: any) => (
                    <PropertyCard key={property._id}
                                  id={property._id}
                                  title={property.title}
                                  price={property.price}
                                  location={property.location}
                                  photo={property.photo}
                    />
                ))}

                {/*footer*/}
                {allProperties.length > 0 && (
                    <Box display="flex" justifyContent="flex-end" width="100%" gap={2} flexWrap="wrap">
                        <CustomButton
                            title="Previous"
                            handleClick={() => setCurrent((prev) => prev - 1)}
                            disabled={!(current > 1)}
                        />
                        <Box
                            display={{ xs: "hidden", sm: "flex" }}
                            alignItems="center"
                            gap="5px"
                        >
                            Page{" "}
                            <strong>
                                {current} of {pageCount}
                            </strong>
                        </Box>
                        <CustomButton
                            title="Next"
                            handleClick={() => setCurrent((prev) => prev + 1)}
                            disabled={current === pageCount}
                        />
                        <Select
                            variant="outlined"
                            color="info"
                            displayEmpty
                            required
                            inputProps={{ "aria-label": "Without label" }}
                            defaultValue={10}
                            onChange={(e) =>
                                setPageSize(
                                    e.target.value ? Number(e.target.value) : 10,
                                )
                            }
                        >
                            {[10, 20, 30, 40, 50].map((size) => (
                                <MenuItem key={size} value={size}>
                                    Show {size}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                )}
            </Box>

        </Box>
    );
}