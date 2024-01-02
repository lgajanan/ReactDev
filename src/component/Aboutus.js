import { Component } from "react";
import UserClass from "./UserClass";
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
          {/* <UserCard name={"Gajanan from function"}  />    */}
          <UserClass firstName={"First"} lastName={"Pune"} image={"alt"} />
          <UserClass firstName={"Second"} lastName={"Mumbai"}  image={"alt2"} />
        </div>
    )
    }
}
export default Aboutus;