import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: 15,
        transform: 'translateY(50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the color as needed
        color: 'white', // Text color
        border: '1px solid rgba(0, 0, 0, 0.3)', // Border color matches the background
        opacity: 0.7, // Adjust transparency
        cursor: 'pointer'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative' }}>
            <img
                src={images[currentIndex]}
                style={{ width: '256px', height: '256px', display: 'block' }}
                alt={`carousel-${currentIndex}`}
            />
            <button onClick={goToPrevious} style={{ ...buttonStyle, left: 8 }}>&larr;</button>
            <button onClick={goToNext} style={{ ...buttonStyle, right: 8 }}>&rarr;</button>
        </div>
    );
}

export default ImageCarousel;