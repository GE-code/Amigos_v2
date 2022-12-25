import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import './css/SwipeButton.css'
import { IconButton } from "@mui/material";

const SwipeButton = () => {
    return(
        <div className="SwipeButton">
            <IconButton className="closeButton">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className ='favorButton'>
                <FavoriteIcon fontSize="large"/>
            </IconButton>

        </div>
    );
};

export default SwipeButton;
