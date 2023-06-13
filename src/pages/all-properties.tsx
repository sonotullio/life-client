import {Add} from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material';
import {useTable} from '@refinedev/core';
import { useNavigate } from "react-router-dom";

import { PropertyCard, CustomButton } from '../components';
import {useMemo} from "react";
import PropertyFilters from "../components/property/property-filters";
import PropertyPagination from "../components/property/property-pagination";


export interface AllPropertiesProps {
    hideHeader?: boolean;
}

export const AllProperties = ({hideHeader}: AllPropertiesProps) => {
    const navigate = useNavigate();
    const {
        tableQueryResult: { data, isLoading, isError },
        current, setCurrent,
        setPageSize,
        pageCount,
        sorter, setSorter,
        filters, setFilters,
    } = useTable({
        resource: 'properties',
    });

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
            status:
                logicalFilters.find((item) => item.field === "status")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error!</Typography>;

    return (
        <Box>

            {/*header*/}
            {
                !hideHeader &&
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
            }

            {/*body*/}

            <Card>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <PropertyFilters
                            currentFilterValues={currentFilterValues}
                            currentPrice={currentPrice}
                            setFilters={setFilters}
                            toggleSort={toggleSort} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 2,
                    }}>
                        {allProperties.map((property: any) => (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                width: '100%',
                                gap: 4
                            }}>
                                <PropertyCard key={property._id}
                                              id={property._id}
                                              title={property.title}
                                              price={property.price}
                                              status={property.status}
                                              location={property.location}
                                              photo={property.photo}
                                />
                            </Box>
                        ))}
                    </Box>

                    {allProperties.length > 0 && (
                        <PropertyPagination
                            current={current}
                            setCurrent={setCurrent}
                            pageCount={pageCount}
                            setPageSize={setPageSize}
                        />
                    )}
                </CardContent>
            </Card>

        </Box>
    );
}