import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import React, { FC, useState, useRef, useEffect } from 'react';

type child = { children: React.ReactNode | JSX.Element, imgWidth: number }

const Slides: FC<child> = ({ children, imgWidth }) => {
    const [widthTransfrom, setWidthTransfrom] = useState(0);

    const scrollMethods = {
        scrollRight() {
            setWidthTransfrom(prev => (prev >= 1500 ? 0 : prev + imgWidth));
        },
        scrollLeft() {
            setWidthTransfrom(prev => (prev <= 0 ? 1500 : prev - imgWidth));
        },
    };
    const slides = document.getElementById('slides');
    if (slides) { slides.style.cssText = `transform:translate3d(-${widthTransfrom}px, 0px, 0px);`; }
    return (
        <div className="flex flex-row items-center justify-center bg-black" >
            <BiChevronLeft
                onClick={(ev) => {
                    ev.stopPropagation()
                    scrollMethods.scrollLeft()
                }}
                cursor='pointer'
                size={'3rem'}
                color="#fff"
                className='hidden md:block'
            />
            <div className='w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[56rem] overflow-scroll md:overflow-hidden flex snap-mandatory snap-x'
            >
                <div id='slides'
                    className={`w-max flex flex-row p-4 gap-4 transition-transform `}
                >
                    {children}
                </div>
            </div>

            <BiChevronRight
                onClick={(ev) => {
                    ev.stopPropagation();
                    scrollMethods.scrollRight()
                }}
                cursor='pointer'
                size={'3rem'}
                color="#fff" className='hidden md:block'
            />
        </div>
    );
}

export default Slides


