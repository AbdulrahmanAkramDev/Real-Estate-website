import { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className=" flexCenter innerWidth paddings h-container">
                <img src='/logo.png' alt="logo" width={100} />
                <div className="flexCenter h-menu" style={
                    getMenuStyles(menuOpened)
                }>

                    <a href=""> Residencies</a>


                    <a href=""> Our Value</a>


                    <a href=""> Get Started </a>



                    <a href="">Contact Us</a>



                    <button className='button'><a href="">Contact </a></button>

                </div>
                <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>

        </section >
    )
}

export default Header
