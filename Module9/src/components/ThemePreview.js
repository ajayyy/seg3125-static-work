import './ThemePreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function ThemePreview(props) {
    return (
        <div className="theme-preview">
            <div className="theme-preview-header">
                <Button variant="primary" className="backButton" onClick={() => props.pageChange('home')}>{"<"}</Button>

                {/* left panel */}
                <div>
                    <img className="theme-preview-image" src={props.image} alt={props.name} />
                </div>

                {/* Right panel */}
                <div className="theme-preview-right">
                    <div className="theme-preview-name">
                        {props.name}
                    </div>
                    <div className="theme-preview-rating">
                        <FontAwesomeIcon icon={faStar} />
                        {` ${props.rating}/10`}
                    </div>
                    <div className="theme-preview-category">
                        <FontAwesomeIcon icon={props.categoryIcon} />
                        {` ${props.category}`}
                    </div>
                </div>
            </div>

            <div className="theme-preview-comment">
                <InputGroup className="mb-3" id="commentBox">
                    <InputGroup.Text id="comment-addon">
                        <FontAwesomeIcon icon={faComment} /> 
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Comment"
                        aria-label="Comment"
                        aria-describedby="comment-addon" />
                </InputGroup>
            </div>
        </div>
    );
}

export default ThemePreview;