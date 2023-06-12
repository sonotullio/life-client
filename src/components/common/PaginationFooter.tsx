import {Box, MenuItem, Select} from "@mui/material";
import {CustomButton} from "./CustomButton";

interface PaginationFooterProps {
    current: number;
    setCurrent: (value: (prev: number) => number) => void;
    pageCount: number;
    setPageSize: (value: number) => void;
}

const PaginationFooter = ({current, setCurrent, pageCount, setPageSize}: PaginationFooterProps) => (
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
)

export default PaginationFooter;