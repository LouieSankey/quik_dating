import React, { Component, useState } from 'react';
import '../connects.css'

export default function ConnectionProfile(props) {

    return(
           <>
            <img className={"connection-image"} src={props.connect.profileImage} alt="avatar" />
            <div className="about">
                <h2 className="name" >{props.connect.name}</h2>
                <h3 className="age" >Age: {props.connect.age}</h3>
            </div>
            
        </>
    )

}

ConnectionProfile.defaultProps = {
 connect: {
     profileImage: require('../../Images/male-avatar.png')
 }
}