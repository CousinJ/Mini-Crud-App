import React from 'react';
import "./UserInput.css"
import { useState } from 'react'
import axios from 'axios';
import { createClient } from '@supabase/supabase-js'


function UserInput() {

    const supaUrl = process.env.REACT_APP_DATABASE_URL;
    const supaKey = process.env.REACT_APP_DATABASE_KEY;
    
const supabase = createClient(supaUrl, supaKey)



const [text, setText] = useState('')



const handleChange = (e) => {
    setText(e.target.value)
}


const handleSubmit = async (e) => {
    e.preventDefault();
    // add server fucntionality (axios)
    try {
        //database supabase api stuff
            await supabase.from('UserText').insert([
                {text: text}
            ])
            setText('');

        //server stuff
        const response = await axios.post('http://localhost:3008/createText', {text},)
        console.log(response.data);
        
    } catch(e) {
        console.log(e, 'oops something went wrong on the front end...');
    }
    
}



    return(
        <div className='input-container'>

            <form className='input-form'>
                <input value={text} onChange={handleChange} placeholder='say something' className="input-text" type="text"></input>
                <button onClick={handleSubmit} className='input-button' >submit</button>
            </form>


        </div>
    )
}

export default UserInput;