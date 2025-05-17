import React, {useState} from 'react'

 

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value);
  }

  const clearText = ()=>{
    setText("")
    props.showAlert("Cleared Text","success")

    
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1a4c76':'white' ,color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>ClearText</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
    </div>
    </>
  )
}