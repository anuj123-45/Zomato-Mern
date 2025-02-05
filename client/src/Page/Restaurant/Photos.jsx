import React, { useState } from 'react'
import PhotoCollection from '../../components/Restaurant/PhotoCollection';
import ImageViewer from "react-simple-image-viewer";

const Photos = () => {
    const [photos, setPhotos] = useState(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXVh1DpQGyA8ncLqLKa93to56nJFTQnrLlg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfZZQYcgmp-XrZahsPsR3NUSneyuCOrtEqQ&s"])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={0}
                    disableScroll={false}
                    onClose={closeViewer}
                />
            )}
            <div className='flex flex-wrap gap-3'>

                {
                    photos.map((photo) => {
                       return   <PhotoCollection image={photo} openViewer={openViewer} />
                    })

                }

            </div>

        </>
    )
}

export default Photos
