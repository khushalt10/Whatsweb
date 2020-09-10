import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import './Chat.css'
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined'

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at . . . </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                    <SearchOutlined />   
                    </IconButton>
                    <IconButton>
                    <AttachFile />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
            <p className={'chat__message chat__reciever'}>
            <span className="chat__name">Khushal</span>
                Hey guys
            <span className="chat__timestamp">3:53pm</span>
            </p>
            </div>

            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
