import { useState } from 'react'
import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <nav className={navStyles.nav}>
                <div className={navStyles.logo}>
                    <p>logo</p>
                </div>
                <ul className={showMenu ? navStyles.navmenu + ' ' + navStyles.active : navStyles.navmenu}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li><li>
                        <Link href="/contact">
                            {showMenu ? "Contact Us" : (<button className={navStyles.contactButton}>
                                Contact Us
                            </button>)}
                        </Link>
                    </li>
                </ul>
                <div
                    className={showMenu ? navStyles.burger + ' ' + navStyles.active : navStyles.burger}
                    onClick={openMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation