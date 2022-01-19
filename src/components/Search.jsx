import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';


const Search = ({ search, setSearch }) => {

    return (
        <div className='search'>
            <div className='section'>
                <div className='left'>
                    <h3>getir</h3>
                </div>
                <div className='center'>
                    <SearchIcon style={{ "color": "#ffd300" }} />
                    <input type="text" placeholder="Ürün ara"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

        </div>
    );
}

export default Search;      