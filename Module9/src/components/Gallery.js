import './Gallery.css';
import ThemeThumbnail from "./ThemeThumbnail";
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const themes = [
    {
        name: "The moon",
        image: "wallpapers/wallpaper1.jpg",
        rating: 10,
        category: "Gaming",
        categoryIcon: faGamepad
    },
    {
        name: "Chaos Next",
        image: "wallpapers/wallpaper2.jpg",
        rating: 9,
        category: "Gaming",
        categoryIcon: faGamepad
    },
    {
        name: "Pasata",
        image: "wallpapers/wallpaper3.jpg",
        rating: 7,
        category: "Gaming",
        categoryIcon: faGamepad
    },
    {
        name: "Lexter",
        image: "wallpapers/wallpaper4.jpg",
        rating: 8,
        category: "Gaming",
        categoryIcon: faGamepad
    },
    {
        name: "Fun",
        image: "wallpapers/wallpaper5.jpg",
        rating: 6,
        category: "Gaming",
        categoryIcon: faGamepad
    },
    {
        name: "Oslwop",
        image: "wallpapers/wallpaper6.jpg",
        rating: 9,
        category: "Gaming",
        categoryIcon: faGamepad
    }
];

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
                image={themes[i].image}
                name={themes[i].name}
                rating={themes[i].rating}
                categoryIcon={themes[i].categoryIcon}
                category={themes[i].category} />
        );
    }

    return elements;
}

export default Gallery;