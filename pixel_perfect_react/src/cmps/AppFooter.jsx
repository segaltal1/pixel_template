import { Component } from "react";
// import logoSvg from '../assets/img/logo.svg'


export class AppFooter extends Component {
    render() {
        return (
            <section className="app-footer">
                <div className="footer-container main-container align-start flex space-around">
                    <div className="logo">
                        {/* <img src={logoSvg} alt="" /> */}
                        <h2>LOGO</h2>
                    </div>
                    <div className="links flex col">
                        <span className="title">Company</span>
                        <span>About</span>
                        <span>Our Team</span>
                        <span>Careers</span>
                        <span>Contact</span>
                    </div>
                    <div className="icons flex align-center">
                    </div>
                </div>
            </section>
        )
    }
}