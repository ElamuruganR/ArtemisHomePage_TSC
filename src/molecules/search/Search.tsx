import './style.css';
import Button from '../../atoms/button/Button';
import SearchBar from '../searchbar/SearchBar';
import { ReactElement } from 'react';

export default function Search():ReactElement{
    return(
        <div className="search">
            <SearchBar></SearchBar>
            <Button 
                className="primary-btn"
                style = {{width: "68px"}}
            >
            Sign in
            </Button>
        </div>
    )
}