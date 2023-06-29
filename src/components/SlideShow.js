import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [slides.length]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 반응형 보여주는 img 갯수 조절
    const getImageCount = () => {
        if (windowWidth <= 640) {
            return 1
        } else if (windowWidth <= 1024) {
            return 3
        } else {
            return 5
        };
    };

    // 반응형 이미지 style 설정
    const imgStyle = (index) => {
        if (windowWidth <= 640) {
            if (index === 0) {
                return 'w-full h-auto'
            } else {
                return 'w-2/3 m-auto opacity-50'
            }
        } else if (windowWidth <= 1024) {
            if (index === 1) {
                return 'w-full h-auto'
            } else {
                return 'w-2/3 m-auto opacity-50'
            }
        } else {
            if (index === 2) {
                return 'w-full h-auto'
            } else {
                return 'w-2/3 m-auto opacity-50'
            }
        }
    }

    // 반응형 글씨 선택
    const selectText = (index) => {
        if (windowWidth <= 640) {
            return index === 0
        } else if (windowWidth <= 1024) {
            return index === 1
        } else {
            return index === 2
        }
    }

    const visibleSlides = slides.slice(0, getImageCount());
    console.log(selectText)

   

    return (
        <div className='relative flex w-full mt-32'>
            {visibleSlides.map((slide, index) => (
                <div className={`${imgStyle(index)} mx-3 border border-red-700`}>
                    {selectText(index) && (
                        <div className='absolute inset-0 justify-center text-center'>
                            <p className='text-lg lg:text-xl'>메이커 <span className='font-bold'>{slide.name}</span> 입니다.</p>
                            <p className='sm:text-center text-xl lg:text-2xl font-bold mt-5'>"{slide.text}"</p>
                        </div>
                    )}
                    <div className='mt-36 border border-red-700'>
                        <img className='rounded-3xl m-auto' src={slide.img} alt={slide.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
