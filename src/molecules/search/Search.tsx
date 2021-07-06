import './style.css';
import Button from '../../atoms/button/Button';
import SearchBar from '../searchbar/SearchBar';

export default function Search(){
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