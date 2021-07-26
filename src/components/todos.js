import React from 'react'
import './todos.css'

import 'font-awesome/css/font-awesome.min.css';
import { useState,useEffect } from 'react';
import { auth, db } from '../firebase_config';
import firebase from 'firebase';






const signOut=()=>auth.signOut();
export default function Todos() {
    const [todos,setTodos]=useState([])
    const [toDoInput, settoDoInput] = useState('')
    
    useEffect(() => {
        
        getTodo()
    }, [])

    

    function getTodo(){
        db.collection(`users/${auth.currentUser.uid}/mytodo`).onSnapshot(function (querySnapshop){
            setTodos(querySnapshop.docs.map((doc)=>({
                timeStamp:doc.data().timeStamp,
                id:doc.id,
                todo: doc.data().todo,
                isComplete:doc.data().isComplete
                
            })))
        })
        
        
    }

    const onSubmitTodo=(e)=>{
        e.preventDefault()
        console.log(auth.currentUser.uid);
        db.collection(`users/${auth.currentUser.uid}/mytodo`).add({
            isComplete:false,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            todo:toDoInput
        });
        
        settoDoInput("")
    }
    

    return (
        
        <div className="main-container">
            
            <div className="header">
                <div className="app-name">
                    <h1>TO-DO-LIST</h1>
                </div>
                <div className="btn-container">
                    <button onClick={signOut} className="sign-out-btn">Sign Out</button>
                </div>
            
            
            </div>
            
            <div className="input-bar">
            <form >
                <input value={toDoInput} onChange={(e)=>{settoDoInput(e.target.value)}} type="text" classNameName="todo-input"/>
                <button type="submit" className="todo-button" onClick={onSubmitTodo}>
                    <i className="fa fa-plus-square"></i>
                </button>
                
                    
            </form>
            </div>
            
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo)=>(
                        
                        <div className="todo ">
                            <li className={todo.isComplete?"todo-list completed":"todo-list"}>
                                {todo.todo}
                                
                            </li>
                            <button onClick={()=>{
                                    
                                    db.collection(`users/${auth.currentUser.uid}/mytodo`).doc(todo.id).update({
                                        isComplete:!todo.isComplete
                                    })
                                    
                                    

                                }} className="completed-btn"><i className="fa fa-check-square"></i></button>
                            <button onClick={()=>{
                                
                                db.collection(`users/${auth.currentUser.uid}/mytodo`).doc(todo.id).delete()
                                    
                                }} className="trash-btn"><i class="fa fa-trash" ></i></button>
                            
                            
                            
                        </div>
                        
                    ))}
                </ul>
            </div>
        </div>
        
    )
}
