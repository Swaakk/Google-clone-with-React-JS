import React from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core'

function Search() {
  return (
    <div className='search'>
        <div className='search_input'>
            <div className='search-icon text-gray-500'>
                <SearchIcon/>
                <input/>
                <MicIcon/>
            </div>
        </div>
        <div className='search_button'>
            <Button variant="outlined">Google Search</Button>
            <Button variant="outlined">im feeling lucky</Button>
        </div>
        <div className='search_lang'>
            <h3>Google offered in : മലയാളം हिन्दी नेपाली मराठी </h3>
            
        </div>
    </div>
  )
}

export default Search