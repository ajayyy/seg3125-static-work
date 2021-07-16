import './Gallery.css';
import ThemeThumbnail from "./ThemeThumbnail";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    return (
        <div className="gallery-div">
            {getThemeThumbnails()}
        </div>
    );
}

function getThemeThumbnails() {
    const elements = [];
    for (let i = 0; i < 3; i++) {
        elements.push(
            <ThemeThumbnail 
                key={i}
                image="none"
                name={"Theme " + (i + 1)}
                rating={Math.ceil(Math.random() * 10)}
                categoryIcon={faGamepad}
                category={"Gaming"} />
        );
    }

    return elements;
}

export default Gallery;