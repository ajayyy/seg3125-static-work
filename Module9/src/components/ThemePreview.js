import './ThemePreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ThemePreview(props) {
    return (
        <div className="theme-preview">
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
                    {`${props.rating}/10`}
                </div>
                <div className="theme-preview-category">
                    <FontAwesomeIcon icon={props.categoryIcon} />
                    {props.category}
                </div>
            </div>
        </div>
    );
}

export default ThemePreview;