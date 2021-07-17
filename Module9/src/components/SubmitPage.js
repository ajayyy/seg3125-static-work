import './SubmitPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SubmitPage(props) {
    return (
        <div className="submit-page">
            <div className="submit-page-top">
                {/* Left panel */}
                <div className="submit-preview-image" onDrop={(e) => fileDropped(e)}  onDragOver={(e) => fileDragOver(e)}>
                    <img id="theme-preview-image" className="theme-preview-image hidden" src={props.image} alt={props.name} />
                    <input type="file" className="hidden" id="theme-preview-upload"/>
                    {"Drag an image or click to upload"}
                </div>

                {/* Right panel */}
                <div className="submit-preview-right">
                    <div className="submit-preview-colour">
                        <input type="color" id="main-color"/>
                        {`Main colour`}
                    </div>
                    <div className="submit-preview-colour">
                        <input type="color" id="accent-color"/>
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

function fileDropped(e) {
    console.log("dragged")
    // Prevent file being opened
    e.preventDefault();

    const files = e.dataTransfer.items || e.dataTransfer.files;
    const file = files[0].getAsFile();

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            const imageElement = document.getElementById('theme-preview-image');
            imageElement.classList.remove('hidden');
            imageElement.onload = () => {
                const topColours = findTopColours(imageElement);
                const colour1 = topColours[0].allColours[0];
                const colour2 = topColours[1]?.allColours[0];

                if (colour1) document.getElementById("main-color").value = rgbaToHex(colour1);
                if (colour2) document.getElementById("accent-color").value = rgbaToHex(colour2);
            }

            imageElement.src = reader.result;
        }

        reader.readAsDataURL(file);
    }
}

function fileDragOver(e) {
    console.log("drag over")
    // Prevent file being opened
    e.preventDefault();
}

function findTopColours(imageElement) {
    // Convert image to canvas
    const canvas = document.createElement('canvas');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    const context = canvas.getContext('2d');
    context.drawImage(imageElement, 0, 0);

    const imageData = context.getImageData(0, 0, imageElement.width, imageElement.height);
    const topColours = new Map(); //key: [r,g,b,a] | value: colour: {count, allColours: []}
    for (let i = 0; i < imageData.data.length; i += 4) {
        const colours = imageData.data.slice(i, i + 4);
        // find key in topColours that is closest to colour
        const closeKey = [...topColours.keys()].find((key) => {
            for (let i = 0; i < 3; i++) { // ignore alpha
                if (Math.abs(key[i] - colours[i]) > 100) {
                    return false;
                }
            }
            
            return true;
        });

        if (closeKey) {
            const closeColour = topColours.get(closeKey)
            closeColour.count++;
            closeColour.allColours.push(colours);
        } else {
            topColours.set(colours, { count: 1, allColours: [colours] });
        }
    }

    const topColoursArray = [...topColours.values()].sort((a, b) => b.count - a.count);

    canvas.remove();

    return topColoursArray;
}

function rgbaToHex(rgba) {
    return `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
}


export default SubmitPage;