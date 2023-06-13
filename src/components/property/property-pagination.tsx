import {Box, Button, MenuItem, Select} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

const PropertyPagination = ({ current, setCurrent, pageCount, setPageSize }: any) => {

    return (
        <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2}>
            <Button onClick={() => setCurrent((prev: any) => prev - 1)}
                    disabled={!(current > 1)}>
                <ChevronLeft />
            </Button>
            {
                [...Array(pageCount <= 5 ? pageCount : 5)].map((value, index) => (
                    <Button
                        key={index}
                        onClick={() => setCurrent(current + index)}
                        sx={{
                            backgroundColor: current === current + index ? "primary" : "inherit"
                        }}
                    >
                        {current + index}
                    </Button>
                ))
            }
            <Button onClick={() => setCurrent((prev: any) => prev + 1)}
                    disabled={current === pageCount}>
                <ChevronRight />
            </Button>
            <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue={20}
                onChange={(e) =>
                    setPageSize(
                        e.target.value ? Number(e.target.value) : 20,
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
    );
}

export default PropertyPagination;