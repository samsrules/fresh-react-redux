import React from 'react';

import {connect} from "react-redux";
import {DeshboardAction} from "./../action/AuthAction"

 
class About extends React.Component{
   
constructor(props){
    super(props)
    console.log(props)
}

componentDidMount(){
   this.props.DeshboardAction();
}
    render(){
        return (
            <div>About</div>
        )
    }
} 

const mapStateProps = ({auth}) =>{
 const {users} = auth;
 return {users}
}
export default connect(mapStateProps,{DeshboardAction})(About);