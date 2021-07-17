import './SearchPage.css';
import Gallery from "./Gallery";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchPage(props) {
    return (
        <div className="search-page">
            <InputGroup className="mb-3" id="searchBox">
                <InputGroup.Text id="search-addon">
                    <FontAwesomeIcon icon={faSearch} /> 
                </InputGroup.Text>
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon" />
            </InputGroup>

            <div className="colors">
                {"Preferred Colour "}
                <input type="color"/>
            </div>
            
            <Gallery />
        </div>
    );
}

export default SearchPage;