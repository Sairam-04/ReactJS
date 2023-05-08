import React, { useState } from 'react';

const CalculatorApp = () => {
    const [input, setInput] = useState("");
    const handler = e =>{
        setInput(e.target.value)
    }
    function evil(fn) {
        return new Function('return ' + fn)();
      }
    return (
        <div>
            <center>
                <input 
                    type='text' 
                    style={{"font-size":"32px","margin-top":"1.5rem","width":"40%","height":"50px"}}
                    value={input}
                    name='input'
                    onChange={handler}    
                />
                <br/>
                {input}
                {/* {evil(input)} */}
            </center>
        </div>
    )
}

export default CalculatorApp
