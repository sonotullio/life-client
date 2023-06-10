import React, {useContext} from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo, life, lifeDark } from "assets";
import {ColorModeContext} from "../../../contexts";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();
    const {mode} = useContext(ColorModeContext);

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="Logo" width="28px" />
                ) : (
                    mode === 'light' ?
                    <img src={life} alt="Life Logo" width="140px" /> : <img src={lifeDark} alt="Logo Dark" width="140px" />
                )}
            </Link>
        </Button>
    );
};