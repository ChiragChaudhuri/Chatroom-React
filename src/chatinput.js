import React from 'react'
class ChatInput extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
         msg:''
        }
    }
    handleUsermessage=(e)=>{this.setState({msg:e.target.value})}            
    render(){
        return(
        <div>
            <input type="text" onChange={this.handleUsermessage} />
            <button onClick={()=>this.props.handleInput(this.state.msg)}>SEND</button>
        </div>
    );

    }

    
}
export default ChatInput;
