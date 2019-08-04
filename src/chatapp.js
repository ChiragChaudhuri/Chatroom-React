import React from 'react';
import io from 'socket.io-client';
import ChatInput from './chatinput';
import Messages from './messages';
class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []

        }
        this.socket = io('localhost:4001', { query: `username=${props.SendName}`});
        this.socket.on("server-message",message=>{    
                                 this.addMessage(message);
        });
    }

    addMessage = (msgOb) => {
        let newarray = this.state.messages.concat(msgOb);
        this.setState(
            { messages: newarray })
    }

    onSend = (text) => {
        const messageObject = {
            username:this.props.SendName,
            message : text,
            fromMe : true
        };
 
        this.socket.emit("client:message",messageObject);
        this.addMessage(messageObject);
    }

    render() {
        return (<div>
            <Messages m_array={this.state.messages} />
            <ChatInput handleInput={this.onSend} />
        </div>

        )
    }
}

export default ChatApp;