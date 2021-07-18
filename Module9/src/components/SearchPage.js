import './SearchPage.css';
import Gallery from "./Gallery";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const strings = {
    en: {
        search: 'Search',
        preferredColour: 'Preferred Colour',
        createYourOwn: 'Create your own'
    },
    fr: {
        search: 'Rechercher',
        preferredColour: 'Couleur préférée',
        createYourOwn: 'Créer votre propre'
    }
}

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
                    placeholder={strings[props.language].search}
                    aria-label={strings[props.language].search}
                    aria-describedby="search-addon"
                    onChange={(e) => setState({search: e.target.value})} />
            </InputGroup>

            <div className="colors">
                {strings[props.language].preferredColour + " "}
                <input type="color"/>
            </div>
            
            <Gallery
                search={state.search}
                pageChange={props.pageChange} />

            <Button variant="primary" onClick={() => props.pageChange('submit')}>{strings[props.language].createYourOwn}</Button>
        </div>
    );
}

export default SearchPage;