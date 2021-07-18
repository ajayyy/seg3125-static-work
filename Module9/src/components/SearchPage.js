import './SearchPage.css';
import Gallery from "./Gallery";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function SearchPage(props) {
    const [state, setState] = useState({
        search: ""
    });

    return (
        <div className="search-page">
            <InputGroup className="mb-3" id="searchBox">
                <InputGroup.Text id="search-addon">
                    <FontAwesomeIcon icon={faSearch} /> 
                </InputGroup.Text>
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setState({search: e.target.value})} />
            </InputGroup>

            <div className="colors">
                {"Preferred Colour "}
                <input type="color"/>
            </div>
            
            <Gallery
                search={state.search} />

            <Button variant="primary" onClick={() => props.pageChange('submit')}>Create your own</Button>
        </div>
    );
}

export default SearchPage;