import React, {useState} from 'react'


export default function TextForm(props) {
    // Change the text to toUpperCase
    const toUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","sucess")
    }

     // Change the text to toLowerCase
    const toLower = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","sucess")
    }

    // Clear the text area
    const clearArea = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear Clipboard","sucess")
    }
    
    //copy text from textBox
    const copyText = () =>{
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectorRange(0,9000);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied","sucess");
    }

    // update the text area
    const handleOnChange = (event) => {
        setText(event.target.value);
        if(char_remain<=0){
            document.getElementById("text-limit").innerHTML = "END";
            // setText(disable);
        }
    }

    // remove extra space
    const removeSpace = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join("  "));
        props.showAlert("Removed Extra Space","sucess")
    }
    
    const [text,setText] = useState("");
    
    const max_length = 1000;
    const char_remain = max_length - text.length;

    

    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#05304e'}}>
    <div className="mb-3">
        <h2 className="text-center">{props.heading}</h2>
        <p id="text-limit" className="badge bg-light text-wrap text-primary">Character Remaining: {char_remain}</p>
        <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor:  props.mode==='dark'?'darkblue':'white',color: props.mode==='dark'?'white':'#05304e'}} value={text} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={toUpper} >Convert To UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={toLower} >Convert To LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={clearArea} >Clear Text Area</button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={copyText} >Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0}onClick={removeSpace}>Remove Space</button>
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0}>Replace Worlds</button>
      </div>
    </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#05304e'}}>
          <h2>Your Text Summery</h2>
          <p className="text-end">Total {text.split(" ").filter((element)=>{return element.length !==0}).length} Words and Character: {text.length}</p>
          <p>Time Need: {text.split(" ").filter((element)=>{return element.length !==0}).length*0.008}</p>
          {/* <h5></h5> */}
          <p className="text-center">Preview:</p>
          <h6 id="size">{text.length>0 ? text : "Nothing To Preview"}</h6>
</div>

</>
    )
}
