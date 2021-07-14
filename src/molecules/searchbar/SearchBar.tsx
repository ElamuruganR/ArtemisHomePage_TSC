import './style.css'
import Image from '../../atoms/image/Image';
import Input from '../../atoms/text/Input';
import { ReactElement } from 'react';

export default function SearchBar():ReactElement {
    return(
        <div className="search-bar">
            <Input 
                type="text"
                placeholder="Search for a show, episode, shorts etc."
                className="search-input" 
            />
            <Image
                source="/images/search-icon.png" 
                altText="search-icon-image"  
                className="search-icon"
            />
        </div>
    )
}