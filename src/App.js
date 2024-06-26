import React, { useEffect, useState } from 'react';
import Photos from './component/Photos';
import FetchComponent from './component/FetchComponent';
import EnhancedView from './component/EnhancedView';
import './index.css'

function App() {
    const [selectedPhoto, setSelectedPhoto] = useState("");
    console.log(selectedPhoto)

    const [photoData, setPhotoData] = useState([]);
    useEffect(() => {
        FetchComponent(setPhotoData)
    }, []);
    console.log("fetched photo data", photoData);

    return (
        <div className="App">
            <header>
                <div className="container">
                    <h1>Joshua Weiss Photography</h1>
                </div>
            </header>
            <main>
                <section className="section-one">
                    <h2>Portrait's</h2>
                    <Photos setSelectedPhoto={setSelectedPhoto} photos={photoData.filter((photo) => photo.section === 1)} />
                </section>

                <section className="section-two">
                    <h2>Shows</h2>
                    <Photos setSelectedPhoto={setSelectedPhoto} photos={photoData.filter((photo) => photo.section === 2)} />
                </section>

                <section className="section-three">
                    <h2>Landscape/Random</h2>
                    <Photos setSelectedPhoto={setSelectedPhoto} photos={photoData.filter((photo) => photo.section === 3)} />
                </section>
                <footer>
                    <p>&copy; <em>Joshua Weiss Photography</em></p>
                </footer>
                {selectedPhoto && <EnhancedView setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} />}
            </main>
        </div>
    );
}

export default App;