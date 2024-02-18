import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";

// import UserCard from "./userCard";

class Aboutus extends Component {
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }
    componentDidMount(){
        // console.log("Parent componentDidmound callled.. ")
    }
    render(){
    //   console.log("Parent Render() called")  
    return (
        <div>
            <p>About us..</p>
           <UserContext.Consumer>
            {(data) =>(
                <h1 className="font-bold">{data.loggedInUser}</h1>
            )
            }  
            </UserContext.Consumer>     
          {/* <UserCard name={"Gajanan from function"}  />    */}
          <UserClass firstName={"First"} lastName={"Pune"} image={"alt"} />
          <UserClass firstName={"Second"} lastName={"Mumbai"}  image={"alt2"} />
        </div>
    )
    }
}
export default Aboutus;