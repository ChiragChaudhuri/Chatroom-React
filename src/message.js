import React from 'react'
class Message extends React.Component{

    render()
    {
        return(
           <p> {this.props.uname}:{this.props.ms}</p>
        );
    }

}
export default Message;