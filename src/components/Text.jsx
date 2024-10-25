import Header from "./Header"

import picture from './pictures/cruelty-free.png'

import testTube from './vectors/test-tube.svg'
import shakingHands from './vectors/shaking.svg'
import megaphone from './vectors/megaphone.svg'


import style from './Text.module.scss'
import { useEffect } from "react"

const AboutUs = () => {

    useEffect(() => {
        const animations = document.querySelectorAll(`.${style.animated}`)
    
        const observer = new IntersectionObserver((entries,observer) => {
            entries.forEach((entry,index) => {
                if(entry.isIntersecting){
                    entry.target.classList.add(style.visible)
                    
                    entry.target.style.transitionDelay = `${index * 0.2}s`
                    observer.unobserve(entry.target)
                }
            })
        },{
            threshold: 0.1
        });
    
        animations.forEach(element => {
            observer.observe(element)
        })

        return () => {
            animations.forEach(element => observer.unobserve(element))
        }
    },[])



    return (
        <>
        <Header />
        <main>
            <div className={style.mainText}>
                <div>
                    <p className={style.mainTitle}>Our Commitment
                    To #BeCrueltyFree</p>
                </div>
                <div>
                    <p>We are calling for an end to all animal testing of cosmetic products globally, and we’re proud to partner with Humane Society International’s #BeCrueltyFree Campaign to advance that vision.</p>
                </div>
                <div>
                    <p>
                    Our support of #BeCrueltyFree is another step in our long-term commitment to make animal testing obsolete. Our journey began over 40 years ago through ongoing research, investment and partnerships to develop and promote the use of alternatives to animal testing. These efforts have contributed to the greater good, enabling us and others to develop products that have not been tested on animals. Our contributions include:
                    </p>
                </div>
                <div className={style.picturesDiv} > 
                    {/* WRAPPER ZA SLIKE */}
                    <div className={style.animated}>
                        <div>
                        <img src={testTube} />
                        </div>
                        <div>
                        <p><strong>Investing</strong> more than $480 million over 40 years in alternatives to animal testing, our researchers pioneering over 25 non-animal methods, publishing more than 1,000 scientific articles.</p>
                        </div>
                    </div>
                    <div className={style.animated}>
                        <div>
                            <img src={shakingHands} />
                        </div>
                        <div>
                            <p><strong>Partnering</strong> with leading international animal welfare organizations, academia, and industry coalitions to promote use of non-animal, cruelty-free methods around the world.</p>
                        </div>
                    </div>
                    <div className={style.animated}>
                        <div>
                            <img src={megaphone}  />
                        </div>
                        <div>
                            <p><strong>Advocating</strong> for public use of non-animal methods and adoption by scientists and policy makers around the world for over 25 years.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.mainPicture}>
                <img src={picture} />
            </div>
        </main>
        </>
    )
}


export default AboutUs