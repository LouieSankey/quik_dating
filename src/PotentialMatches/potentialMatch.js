import React from 'react';
import './potentialMatch.css'
import { withRouter } from "react-router-dom";


const connectButton = require('../Images/connect-button.jpg')
const likeButton = require('../Images/likebutton.jpeg')



function PotentialMatch(props) {


    const indicatorText = props.potentialMatch.connectedStatus === 0
        ? "Send " + props.potentialMatch.name + " a Like"
        : "She Liked You"

    let button = props.potentialMatch.connectedStatus === 0 ? likeButton : connectButton

    const onLikeOrConnect = () => {
        props.changeStatus(props.potentialMatch, props)
    }

    return (
        <>
            <div className="result-container">
                <img className="result-img" src={props.potentialMatch.profileImage} alt=""></img>
                <div className="result-box">
                    <h3 className="potentialName">{props.potentialMatch.name}</h3>
                    <h4 className="potentialAge"> Age: {props.potentialMatch.age}</h4>
                    {props.potentialMatch.connectedStatus < 2 &&
                        <div className="like-indicator">
                       
                            <p>{indicatorText}</p>
                            <img onClick={() => onLikeOrConnect()} className="like-button" src={button} alt=""></img>
                            
                        </div>}
                    {props.potentialMatch.connectedStatus === 2 &&
                        <p>{"You Sent " + props.potentialMatch.name
                            + " a Like! If he chooses to connect, he'll show up in your 'Connects'"}
                        </p>}
                    {props.potentialMatch.connectedStatus === 3 &&
                        <p>{"Congrats! You're now connected with " + props.potentialMatch.name
                            + ". Check your 'Connects' tab to start a chat."}
                        </p>}

                </div>
            </div>
        </>

    )
}

PotentialMatch.defaultProps = {
    potentialMatch: {
        connectedStatus: ""
    }
}

export default withRouter(PotentialMatch);


