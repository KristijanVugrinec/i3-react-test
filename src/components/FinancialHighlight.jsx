import organicSales from './financialpictures/OrganicSalesGrowth.png'
import coreOps from './financialpictures/CoreOpsGrowth.png'
import adjustedFreeCash from './financialpictures/AdjustedFreeCash.png'
import { useEffect, useState } from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import style from './FinancialHighlight.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Highlight = () => {

    const images = [
        {
            id:1,
            image:organicSales,
            description : "ORGANIC SALES GROWTH"
        },
        {
            id:2,
            image:coreOps,
            description : "CORE OPS GROWTH"
        },
        {
            id:3,
            image:adjustedFreeCash,
            description : "ADJUSTED FREE CASH FLOW PRODUCTIVITY"
        }
    ]

    const [currentIndex,setCurrentIndex] = useState(0)
    const [isMobile,setIsMobile] = useState(window.innerWidth <= 768)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    const nextPicture = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevPicture = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <>
        <div className={style.mainDiv}>
            {isMobile ? (
                <div className={style.mobileDiv}>
                <button onClick={prevPicture}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
                <div className={style.imageWrapper}>
                    <div className={style.imageContainer}>
                    <div className={style.imageAndDescr}>
                        <img src={images[currentIndex].image} />
                        <p>{images[currentIndex].description}</p>
                    </div>
                
                    </div>
                </div>
                <button onClick={nextPicture}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
                </div>
            ) : (
                <div className={style.imageWrapper}>
                  {images.map((image) => (
                    <div key={image.id} className={style.imageAndDescr}>
                        <img src={image.image} />
                        <p>{image.description}</p>
                    </div>
                  ))}
                </div>
            )}
        </div>
        </>
    )
}


export default Highlight