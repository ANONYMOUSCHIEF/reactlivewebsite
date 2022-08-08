import React ,{useState} from 'react'

export default function Textform(props) {
    //function to covert uppercase
    const upperCase = () =>{               
        setText(text.toUpperCase());
        props.showAlert("coverted to uppercase",'success');
    }
    //function to covert lowercase
    const lowerCase = () =>{
        setText(text.toLowerCase());
        props.showAlert("coverted to lowercase",'success');
    }
    //function to covert captialise
    const captalise = () =>{
        const str1=text.trim();
        const array=str1.toLowerCase().split(". ");
        for (let index = 0; index < array.length; index++) {
            array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1); 
        }
        const str= array.join(". ")
        setText(str);
        props.showAlert("coverted to capitalise case",'success');
    }
    //function to clear
    const clear = () =>{
        setText('');
        props.showAlert("cleared",'success');
    }
    //function to handle change in the content 
    const handleOnChange= (event) =>{
        setText(event.target.value);
    }
    // using useState we define to variable text(by default value) and setText (to update text )
    const[text,setText]= useState('');
    return (
        <>
        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
            <h1>{props.heading}</h1>
        <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}`} value={text} placeholder="enter the text to analayis" id="mybox" rows="10" onChange={handleOnChange}></textarea>
            <label htmlFor="mybox"></label> 
        <button disabled={text.length===0} className={`btn btn-${props.mode==='primary'?"danger":"primary"} mx-0 my-1`} onClick={upperCase}>convert to uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='primary'?"danger":"primary"} mx-1 my-0`} onClick={lowerCase}>convert to lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='primary'?"danger":"primary"} mx-0 my-1`} onClick={captalise}>convert to capitalise case</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='primary'?"danger":"primary"} mx-1 my-0`} onClick={clear}>clear</button>
        </div>
        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`} >
            <h1>Counter</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h3>Summary</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
