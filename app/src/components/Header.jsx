import React from "react";


const Header=()=>{

    return(
        <div className="row" style={{background:'#f9fafb'}}>
            <div style={{flex:0.2,width:'20%'}}>
            <b>Name</b>
            </div>
            <div style={{flex:0.4,width:'40%'}}>
            <b>Email</b>
            </div>
            <div style={{flex:0.10,width:'10%'}}>
            <b>Age</b>
            </div>
            <div style={{flex:0.10,width:'10%'}}>
            <b>Gender</b>
            </div>
        <div className="item" style={{flex:0.15,width:'15%'}}>
            <b>Action</b>
            </div>
        </div>
    )
}
export default Header