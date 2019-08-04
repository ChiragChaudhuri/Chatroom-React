import React from 'react'
import ChatApp from './chatapp'
class ChatHome extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            status:false
            }
        }
        handleUsername=(e)=>{this.setState({name:e.target.value})}
        render()
        {
                if(this.state.status==false)
                {
                    return(<div>
                        <input onChange={this.handleUsername} placeholder ="Enter username "/>
                        <button onClick ={()=>this.setState({status:true})}>Submit</button>
                        </div>
                    );
                }
                else
                    return (<ChatApp SendName={this.state.name}/>);
        }
    }
    export default ChatHome;