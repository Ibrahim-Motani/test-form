import React from 'react'

function TextInput({label}) {
    return (
        <div>
            <label htmlFor="">{ label}</label> <br />
            <input type="text" /> <br />
        </div>
    )
}

export default TextInput
