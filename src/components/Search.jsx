import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';

class Search extends Component {
    render() {
        return (
            <div className='search'>
                <div className='section'>
                    <div className='left'>
                        <h3>getir</h3>
                    </div>
                    <div className='right'>
                    <SearchIcon style={{"color":"#ffd300"}} />
                    <input type="text" placeholder="Ürün ara" /> 
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Search;      