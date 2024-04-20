import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= () =>{
      //  console.log("Uppercase was clicked." + " " +text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "Success");
    }
    const handleLoClick= () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "Success");
    }
    const clear= () =>{
        setText("");
        props.showAlert(" Text Cleared!", "Success");
    }
    const handleOnChange= (event) =>{
      //  console.log("on change");
        setText(event.target.value);
    }
    const handleCopy= ()=>{
      const text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied to Clipboard!", "Success");
    }
    const handleExtraSpaces= ()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "Success");
    }

    const[text, setText] = useState('');
    // text= "new text";        wrong way to change the state
    // setText("new text");     //correct way to change the state
  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'? 'white' : '#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3" style= {{ color: props.mode==='dark'? 'white': '#042743' }}>
            <textarea className="form-control" value={text} style= {{backgroundColor: props.mode==='dark'? '#042743': 'white' , color: props.mode==='dark'? 'white': '#042743'}} id="myBox" onChange= {handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clear} >Clear Text</button>  
        <button className="btn btn-primary mx-1" onClick= {handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick= {handleExtraSpaces}>handleExtraSpaces</button>
    </div>
    <div className="container my-3"  style= {{ color: props.mode==='dark'? 'white': '#042743' }}>
      <h2> Your text summary </h2> 
      <p> {text.split(" ").length } words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Enter something in the textbox above to preview it here"}</p> 
    </div>
    </>
  )
}
