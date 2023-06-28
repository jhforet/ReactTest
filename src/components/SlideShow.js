import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className='slideshow'>
            {slides.map((slide, index) => (
                <div>
                    <p>메이커 <span>{slide.name}</span> 입니다.</p>
                    <p>"{slide.text}"</p>
                    <img src={slide.img} alt={slide.name} />
                </div>
            ))}
        </div>
    );
};

// <div className="slideshow">
//       <div className="flex relative h-full transition-transform duration-500 ease-in-out">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-full h-full slide ${index === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.img})` }}
//           >
//             <div className="absolute inset-0 flex items-center justify-center text-white text-center slide-content">
//               <p className="text-lg font-bold">메이커 <span>{slide.name}</span> 입니다.</p>
//               <p>{slide.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex">
//         <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded" onClick={handlePrevSlide}>&lt;</button>
//         <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={handleNextSlide}>&gt;</button>
//       </div>
//     </div>

export default Slideshow;
