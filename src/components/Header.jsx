import { useEffect, useState } from "react"
import data from '../nav.json'
import { Link } from "react-router-dom"
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [link,setLink] = useState([])
    const [dropDown,setDropDown] = useState(false)


    useEffect(() => {

        setLink(data)
    },[])

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    return (
        <>
        <header>
            <div className={style.mainNav}>
                <button onClick={toggleDropDown} className={style.dropdownButton}>
                    2020 Annual Report
                    {dropDown ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                    ):
                        <FontAwesomeIcon icon={faChevronDown} />
                    
                    }
                    
                    </button>
                {dropDown && (
                    <div className={style.dropdownMenu}>
                        {link.map((links) => (
                    <Link key={links.id} to={links.href}>
                        <p>{links.mobileTitle}</p>
                    </Link>
                ))}
                    </div>
                )}

                <nav className={style.destkopNav}>
                {link.map((links) => (
                    <Link key={links.id} to={links.href}>
                        <p>{links.title}</p>
                    </Link>
                ))}
                </nav>
            </div>
        </header>
        </>
    )
}


export default Header