import React from 'react'
import Message from './message'
class Messages extends React.Component {

    render() {
        return (
            <div>
                {this.props.m_array.map((message) =>
                    <Message ms={message.message} uname={message.username} />)
                }
            </div>
        );
    }
}
export default Messages;