
import {CustomButtonProps} from "../../interfaces/common";
import {Button} from "@mui/material";

export const BaseButton = ({type, title, fullWidth, icon, handleClick, disabled}: CustomButtonProps) => {
    return (
        <Button
            type={type === "submit" ? "submit" : "button"}
            sx={{
                flex: fullWidth ? 1 : 'unset',
                padding: "10px 15px",
                width: fullWidth ? "100%" : "fit-content",
                minWidth: 130,
                backgroundColor: "text.disabled",
                color: "text.primary",
                fontSize: 14,
                gap: '10px',
                textTransform: "capitalize",
                '&:hover': {
                    opacity: 0.8,
                    backgroundColor: "text.secondary",
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