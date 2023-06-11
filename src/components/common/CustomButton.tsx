
import {CustomButtonProps} from "../../interfaces/common";
import {Button} from "@mui/material";

export const CustomButton = ({type, title, fullWidth, icon, handleClick, disabled}: CustomButtonProps) => {
    return (
        <Button
            type={type === "submit" ? "submit" : "button"}
            sx={{
                flex: fullWidth ? 1 : 'unset',
                padding: "10px 15px",
                width: fullWidth ? "100%" : "fit-content",
                minWidth: 130,
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                fontSize: 16,
                fontWeight: 600,
                gap: '10px',
                textTransform: "capitalize",
                '&:hover': {
                    opacity: 0.8,
                    backgroundColor: "primary.main",
                },
            }}
            onClick={handleClick}
            disabled={disabled}
        >
            {icon}
            {title}
        </Button>
    );
}