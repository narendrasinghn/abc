import React,{ useState } from 'react';
export default function TextForm(props) {
  const handleUpclick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowerclick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleclearclick=()=>{
    // console.log("Uppercase was clicked");
    let newText='';
    setText(newText);
  }
  const handleExtraSpaces=()=>{
  
    let newText=text.split(/[ ]+/);

    setText(newText.join(" "));
  }
  // const handlecopyclick=()=>{
  //   // console.log("Uppercase was clicked");
  //   var text=document.getElementById("myBox");
  //   text.Select();
  //   navigator.clipboard.writeText(text.value);
  // }
  const handleonChange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743s'}} id="myBox"  rows="10"></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerclick}>convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear text</button>
 <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h3>Your text summary</h3>
<p>{text.split(" ").length} words and {text.length} characters</p>
<h4>Preview</h4>
<p>{text}</p>
</div>
</>
  )
}
