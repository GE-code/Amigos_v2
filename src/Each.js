import React from "react";
import { Avatar } from "@mui/material";
import "./css/Each.css";

const Each = ( {name, pro, message}) => {
    return(
        <div className="Each">
            <Avatar className="i" src = {pro} />
            <div className ="chat_row">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Each;