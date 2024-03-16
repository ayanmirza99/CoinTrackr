"use client"
import React, { useEffect, useState } from 'react'
import { cryptoCarouselImages } from './baseData'
import "./Carousel.css"

const Carousel = () => {
    const [extendedImages, setExtendedImages] = useState([]);

    useEffect(() => {
        const repetitions = 5;
        const extendedImagesArray = [];
        for (let i = 0; i < repetitions; i++) {
            extendedImagesArray.push(...cryptoCarouselImages);
        }
        setExtendedImages(extendedImagesArray);
    }, []);

    return (
        <>
            <div className="slider">
                <div className="slide-track gap-[1.2rem] md:gap-[5rem]">
                    {extendedImages.length > 0 ? extendedImages.map((item, index) => {
                        return (
                            <div className="slide w-[50px] md:w-[500px]" key={index}>
                                <img src={item} alt="" />
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
        </>
    )
}

export default Carousel