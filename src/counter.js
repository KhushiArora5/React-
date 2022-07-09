//there are 2 types of components in react:
// 1. class - stateful(can update changes)
//2. function - stateless(cannot update changes) before but now have hooks
//hooks (special powers of class given to function in this form.)
//hooks used to change the state of the component

//PROJECT TO MAKE:incease or decrese the no.
import React, {useState, useRef, useEffect} from "react";
import axios from "axios"; //axios for fetching the data 
//import {Button,Row,Col} from 'react-bootstrap';
function Counter()
{
    //useState
    const [count, setCount] = useState(0);

    //useRef
    const newref = useRef();

    //api
    const [data, setData] = useState(0);

    const Handle = async () => //for promises(success or unsuccess)
    {
        try
        {
            const val = (await axios.get("https://randomuser.me/api/")).data
            .results[0].name.first;
          console.log(val);
          setData(val);
        } catch (error) 
        {
          console.log(error);
        }
    };

    return (
    <div>
    COUNTER APP
        <div>
        <h2>{count}</h2> //for tailwindcss we use className="property"
        </div>
        <div>
            <button onClick = {() => {
                setCount(count+1);
            }}>Increase</button>
            <button onClick = {() => {
                setCount(count-1);
            }}>Decrese</button>
        </div>
        <br />
        <div>
        <input ref={newref} placeholder="value" />
        <button onClick = {() => {
            newref.current.focus();
            }}>Focus</button>
        </div>
        <br />
        <div>
            <h2>Data</h2>
            <h3>{data}</h3>
            <button onClick = {Handle}>Handle</button>
        </div>
    </div>
    );
}

export default Counter;
//document.getElementbyId instead use useState.
//axion to fetch data 
//props- properties that are send to another.