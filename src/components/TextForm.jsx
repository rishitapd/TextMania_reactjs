import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpclick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase :) ","Success");
    }
     const handlelowclick=()=>{
        //console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase :)  ","Success");
    }
    const handleclearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared :D ","Success");
    }
    const handleOnChange=()=>{
        //console.log("On Change");
        setText(event.target.value)
        //with this i can edit and add new text //
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard :D ","Success");
    }
    const[text,setText]=useState('');//usestate hooks//
    //setText("new text")//for changing//
   return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/*<label for="myBox" class="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
     </div>
     <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to Upper case</button>
     <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handlelowclick} >Convert to lower case</button>
     <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleclearClick} >Clear your Box</button>
     <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleCopy} > Copy Text </button>
    </div>
    <div className='containers my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview :( "}</p>

    </div>
    </>
    )
}
