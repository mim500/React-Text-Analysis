import React, {useState} from 'react'


export default function TextForm(props) {
    // Change the text to toUpperCase
    const toUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

     // Change the text to toLowerCase
    const toLower = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    // Clear the text area
    const clearArea = ()=>{
        let newText = '';
        setText(newText);
    }
    
    //copy text from textBox
    const copyText = () =>{
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectorRange(0,9000);
        navigator.clipboard.writeText(text.value);
        alert("Copied");
    }

    // update the text area
    const handleOnChange = (event) => {
        setText(event.target.value);
        if(char_remain<=0){
            document.getElementById("text-limit").innerHTML = "END";
            // setText(disable);
        }
    }
    
    const [text,setText] = useState("");
    
    const max_length = 100;
    const char_remain = max_length - text.length;

    

    return (
    <>
    <div className="container">
    <div className="mb-3">
        <h2 className="text-center">{props.heading}</h2>
        <p id="text-limit" className="badge bg-light text-wrap">Character Remaining: {char_remain}</p>
        <textarea className="form-control"  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={toUpper} >Convert To UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={toLower} >Convert To LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearArea} >Clear Text Area</button>
        <button className="btn btn-primary my-3 mx-2" onClick={copyText} >Copy Text</button>
      </div>
    </div>
      <div className="container my-3">
          <h2>Your Text Summery</h2>
          <p className="text-end">Total {text.split(" ").length} Words and Character: {text.length}</p>
          <p>Time Need: {text.split("").length*0.008}</p>
          {/* <h5></h5> */}
          <p className="text-center">Preview:</p>
          <h6 id="size">{text}</h6>
</div>

</>
    )
}
