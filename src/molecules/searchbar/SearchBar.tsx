import './style.css'
import Image from '../../atoms/image/Image';
import Text from '../../atoms/text/Text';

export default function SearchBar() {
    return(
        <div className="search-bar">
            <Text 
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