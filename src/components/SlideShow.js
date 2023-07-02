import React, { useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
// https://velog.io/@rkio/React-%EB%AC%B4%ED%95%9C-%EC%9E%90%EB%8F%99-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0ft.-Typescript-Tailwind

const Slideshow = ({ slides }) => {
    // 반응형을 위한 state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // 중심이 되는 슬라이드 컨텐츠 인덱스 state
    const [slideIndex, setSlideIndex] = useState(0);
    // 이미지 이동 시간 state
    const [customInterval, setCustomInterval] = useState(3000);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useInterval(() =>
        setSlideIndex((slideIndex) => slideIndex + 1), customInterval
    );

    // 슬라이드 배열의 길이
    const SlideNum = slides.length;
    // 원래 배열의 마지막 부분
    const beforeSlide = slides[SlideNum - 1];
    // 원래 배열의 첫 부분
    const afterSlide = slides[0]
    // 슬라이드 순환을 위해 새로운 배열
    let copiedArr = [beforeSlide, ...slides, afterSlide];

    // 반응형 보여주는 img 갯수 조절
    const visibleImageStyle = (index) => {
        const centerIndex = Math.floor(copiedArr.length / 2);

        if (windowWidth <= 640) {
            if (index === centerIndex) {
                return ''
            } else {
                return 'hidden'
            }
        } else if (windowWidth <= 1024) {
            if (index === centerIndex) {
                return ''
            } else if (index >= centerIndex - 1 && index <= centerIndex + 1) {
                return 'opacity-50'
            } else {
                return 'hidden'
            }
        } else {
            if (index === centerIndex) {
                return ''
            } else if (index >= centerIndex - 2 && index <= centerIndex + 2) {
                return 'opacity-50'
            } else {
                return 'hidden'
            }
        }
    };

    // 슬라이드쇼 중앙 이미지 style 설정
    const imageStyle = (index) => {
        const centerIndex = Math.floor(copiedArr.length / 2);
        if (index === centerIndex) {
            return 'w-full'
        } else {
            return 'w-4/5'
        }
    }

    return (
        <div className='relative flex mt-32'>
            {copiedArr.map((slide, index) => (
                <div className={`${visibleImageStyle(index)} flex border border-red-700`}>
                    {index === 3 && (
                        <div className='absolute inset-0 justify-center text-center font-SUIT'>
                            <p className='text-lg lg:text-xl'>메이커 <span className='mx-1 lg:mx-2 text-3xl lg:text-4xl font-NanumPenScript font-bold text-cyan-300'>{slide.name}</span> 입니다.</p>
                            <p className='sm:text-center text-xl lg:text-2xl font-bold mt-5'>"{slide.text}"</p>
                        </div>
                    )}
                    <div className='flex mt-36 border border-red-700'
                        style={{
                            transition: "all 500ms ease-in-out",
                            transform: `translateX(${-1 * ((500 / 5) * slideIndex)
                                }%)`
                        }}>
                        <img className={`${imageStyle(index)} m-auto rounded-3xl`} src={slide.img} alt={slide.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
