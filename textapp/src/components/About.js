import React from 'react'

export default function About() {
    let  myStyle = {
        color: 'white',
        backgroundColor: 'black'
    }

    return (
       <>
        <div className="container">
<div className="alert alert-secondary" role="alert" style={myStyle}>
  About US
</div>
</div>
        <div className="container">
            <button className="btn btn-primary">Dark Mode</button>
        </div>
       </>
    )
}
