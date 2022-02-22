import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core'
import {useNavigate} from "react-router-dom"



function Search() {
    const[input,setInput] = useState("");
    const navigate = useNavigate();
    const search=(e)=>{
        e.preventDefault()
        console.log(input);
        navigate.push("/")
        
    }
  return (
    <form className='search'>
        <div className='search_input '>
            <div className='search-icon text-gray-500'>
                <SearchIcon/>
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon/>
            </div>
        </div>
        <div className='search_button'>
            <Button  onClick={search} variant="outlined" type='submit'>Google Search</Button>
            <Button variant="outlined">im feeling lucky</Button>
        </div>
        <div className='search_lang'>
            <h3>Google offered in : മലയാളം हिन्दी नेपाली मराठी </h3>
            
        </div>
    </form>
  )
}

export default Search