import './SubmitPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SubmitPage(props) {
    return (
        <div className="submit-page">
            <div className="submit-page-top">
                {/* Left panel */}
                <div className="submit-preview-image">
                    {/* <img className="theme-preview-image" src={props.image} alt={props.name} /> */}
                    {"Click to upload"}
                </div>

                {/* Right panel */}
                <div className="submit-preview-right">
                    <div className="submit-preview-colour">
                        <input type="color"/>
                        {`Main colour/10`}
                    </div>
                    <div className="submit-preview-colour">
                        <input type="color"/>
                        {`Accent colour`}
                    </div>
                </div>
            </div>

            <div className="theme-preview-name">
                <InputGroup className="mb-3" id="nameBox">
                    <InputGroup.Text id="search-addon">
                        <FontAwesomeIcon icon={faTag} /> 
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="name-addon" />
                </InputGroup>
            </div>

            <Button variant="primary">Publish</Button>
        </div>
    )
}

export default SubmitPage;