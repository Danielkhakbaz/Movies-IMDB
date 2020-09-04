import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="container-fluid">
                <div className="row p-2 footer__links">
                    <a
                        name="instagram"
                        href="https://www.instagram.com/danielkhakbaz"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    <a
                        name="twitter"
                        href="https://twitter.com/DanielKhakbaz"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                    <a
                        name="telegram"
                        href="https://t.me/danielkhakbaz"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-telegram-plane" />
                    </a>
                    <a
                        name="mail"
                        href="mailto:danialkhakbaz.dk@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="far fa-envelope" />
                    </a>
                    <a
                        name="linkedin"
                        href="https://www.linkedin.com/in/danielkhakbaz/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                        name="github"
                        href="https://github.com/Danielkhakbaz"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-github" />
                    </a>
                </div>
                <div className="row p-2 footer__text">
                    Made By Danial Khakbaz.
                </div>
            </footer>
        </>
    );
};

export default Footer;
