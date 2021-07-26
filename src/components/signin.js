import React from 'react'
import { auth } from '../firebase_config'
import firebase from 'firebase';
import image1 from './Checklist.jpg'
import './signin.css'
import 'font-awesome/css/font-awesome.min.css';

const signInWithGoogle=()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export default function SignIn() {
    
    return (
        <>
            <div className="sign-in-container">
                <div className="bucket-one">
                <div className="sign-in-btn">
                    <button onClick={signInWithGoogle}>Sign in with Google <i class="fa fa-google"></i></button>
                    
                </div>
                </div>
                <div className="bucket-two">
                    <div className="info">
                        <h1>WORK EFFICIENTLY, WORK CLEAN</h1>
                        <img src={image1} alt="" width="50%" />
                    </div>
                </div>
            </div>
        
        </>
    )
}
