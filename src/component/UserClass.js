import React from "react";

class UserClass extends React.Component{
    //whenever class load first constructor will call / whenver class instanciated then constructor will call.
    constructor(props){ //To get props from parent class. 
        super(props); 
        //Create state varibale like useState() hook   
        //can create big object of state
        this.state = {
            userInfo:{
                firstName:"Dummy",
                lastName:"Default"
            }         
        };
    //    console.log(this.props.name+" Child Cunstructor") 
    }
    //used to make API call.
   async componentDidMount(){
         const data = await fetch("https://dummyjson.com/users/1");
         const json = await data.json();
         this.setState({
            userInfo: json,
         })         
        console.log(this.props.name+" Child conponent Did mount called")
    }
    componentDidUpdate(){
        console.log("component did update called")
    }
    componentWillUnmount(){
        //use for memory cleanup.
        //clear SetInterval
         //clalled unmounting when change url/page
        
        console.log("component will unmount called")
    }
    render() {
        // const {firstName,lastName,image} = this.state.userInfo;
        //  console.log(this.state.userInfo)
        return(
            <div className="user-card">        
            <img  className="user-image" src={this.state.userInfo.image} alt="img" />
            <p>Name: {this.state.userInfo.firstName} </p>
            <p>Last Name:{this.state.userInfo.lastName} </p>
            <p>Contact: 020-304050 </p>
            </div>
        )
    }
}
export default UserClass;