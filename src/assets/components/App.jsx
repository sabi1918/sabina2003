const { Component } = require("react");

class App extends Component {

    state={
        name:"",
        email:"",
        password:"",
        ischecked:false
    }
   handleInput=(e)=>{
    this.setState({[e.target.name]:e.terget.value})
   }


   handleClick=()=>{
    this.setState({name:"sabina nahmetova"})
   }

   render() {

    console.log(this.state)
    return (
        <div className="App">

        <p>
                {JSON.stringify(this.state)}

        </p>

        <label htmlFor="name">Name</label>
        <input value={this.state.value}type="text" id="name" name="name" onChanfe={this.handleInput}/>
        <label htmlFor='email'>Email</label>
        <input type="text" id="email" name="email"onChange={this.handleInput}/>
        <label htmlFor='password'>Password</label>
        <input type="text" id="password"name="password"onChange={this.handleInput}/>
    
    )
    <button onClick={this.handleClick}>Change input text to "John"</button>

    <input type="checkbox" checked={this.state.ischecked} onChange={(e)=>this.setState  ({ischecked:this.state.ischecked})}/>
    <input disabled={this.state.ischecked}onChange={()=>this.setState({isactive:this.state.isactive})}/>


   </div>

   )
           }
                }
                
export default App