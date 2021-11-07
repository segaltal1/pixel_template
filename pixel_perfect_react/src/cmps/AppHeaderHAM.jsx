import { useState } from 'react'
// import logoSvg from '../assets/img/logo.svg'

export const AppHeaderHAM = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleNav = () => {
        setOpen((prevState) => !prevState)
    }
    return (
        <section className="app-header main-container flex align-center ">
            <div className="logo ">
                {/* <img src={logoSvg} alt="logo" /> */}
                <h1>Logo</h1>
            </div>
            <nav className={`header-nav flex align-center space-between ${isOpen ? 'open' : ''}`}>
                <div className="left-nav flex align-center">
                    <a href="#"  onClick={toggleNav}>Features</a >
                    <a href="#">Pricing</a >
                    <a href="#">Resources</a >
                </div>
                <div className="right-nav flex align-center ">
                    <a href="#">Login</a >
                    <button className="sign-btn">Sign Up</button>
                </div>
            </nav>
            <button onClick={toggleNav} className="menu-btn">☰</button>

        </section>
    )
}