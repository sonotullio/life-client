
import {CustomButtonProps} from "../../interfaces/common";
import {Button} from "@mui/material";

export const CustomButton = ({type, title, fullWidth, icon, handleClick, disabled, color, bgColor, size}: CustomButtonProps) => {
    return (
        <Button
            type={type === "submit" ? "submit" : "button"}
            sx={{
                flex: fullWidth ? 1 : 'unset',
                width: fullWidth ? "100%" : "fit-content",
                backgroundColor: bgColor ? bgColor : "primary.main",
                color: color ? color : "primary.contrastText",
                fontSize: 14,
                gap: 1,
                px: 2,
                minWidth: 100,
                textTransform: "capitalize",
                '&:hover': {
                    opacity: 0.8,
                    backgroundColor: bgColor ? bgColor : "primary.main",
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