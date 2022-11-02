import React ,{useState} from 'react'




export default function TextForm(props) {

  const handleUpClick=() =>{
    // console.log("Uppercase was click" + text)
    let newText = text.toUpperCase();
    setText(newText)
  };

  const handleloClick=() =>{
    // console.log("Uppercase was click" + text)
    let newText = text.toLowerCase();
    setText(newText)
  };
  
  
  const handleClearClick=() =>{
    // console.log("Uppercase was click" + text)
    let newText =" "
    setText(newText)
  };


  

  const handleOnChange=(event) =>{
    // console.log("On change")
    setText(event.target.value);
  }
  const [text, setText]= useState(" ")
  
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convenr To 
        lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
        {/* <button className="btn btn-primary" onClick={handleUndoClick} disabled={!canUndo}>Undo</button> */}
       


    </div>

    <div className="container my-2">
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
