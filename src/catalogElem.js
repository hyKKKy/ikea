import './catalogElem.css'

const images = [
    '/IkeaImages/Component 19.png',
    '/IkeaImages/Component 20.png',
    '/IkeaImages/Component 21.png',
    '/IkeaImages/Component 22.png',
    '/IkeaImages/Component 23.png',
    '/IkeaImages/Component 24.png',
    '/IkeaImages/Component 25.png',
    '/IkeaImages/Component 26.png',
    '/IkeaImages/Component 27.png',
    '/IkeaImages/Component 28.png',
    '/IkeaImages/Component 29.png',
    '/IkeaImages/Component 30.png',
    '/IkeaImages/Component 31.png',
    '/IkeaImages/Component 32.png',
    '/IkeaImages/Component 33.png',
    '/IkeaImages/Component 34.png',
    '/IkeaImages/Component 35.png',
    '/IkeaImages/Component 36.png',
]

export function CreateElem() {
    return (
        <div id='catalogContainer'>
           {images.map((imgPath, index) => (
                <img id='cPicture' key={index} src={imgPath}/>
            ))}
        </div>
    );
}
