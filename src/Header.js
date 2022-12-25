import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from "@mui/material";
import "./css/Header.css";
import { Link, useHistory } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Auth } from "aws-amplify";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({back}) => {
    const history = useHistory();
    return (
        <div>
            <div className="header">
            {back ?(
                <IconButton onClick={()=>history.replace(back)}>
                    <ArrowBackIosNewIcon className="icon" />
                </IconButton>
            ):(
                <IconButton onClick={()=>Auth.signOut()}>
                    <LogoutIcon className="icon"/>
                </IconButton>
            )}
            <h2 className="a">Amigos</h2>
            <div>
                <Link to ="/account">
                    <IconButton>
                        <AccountCircleIcon className="icon" />
                    </IconButton>
                </Link>
                <Link to ="/chat">
                    <IconButton>
                        <ChatIcon className="icon" />
                    </IconButton>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Header;