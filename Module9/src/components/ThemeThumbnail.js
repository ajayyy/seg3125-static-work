import './ThemeThumbnail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ThemeThumbnail(props) {
    return (
        <div className="theme-thumbnail">
            <img className="theme-image" src={props.image} alt={props.name} />
            <div className="theme-name">
                {props.name}
            </div>
            <div className="theme-rating">
                <FontAwesomeIcon icon={faStar} />
                {` ${props.rating}/10`}
            </div>
            <div className="theme-category">
                <FontAwesomeIcon icon={props.categoryIcon} />
                {` ${props.category}`}
            </div>
        </div>
    );
}

export default ThemeThumbnail;