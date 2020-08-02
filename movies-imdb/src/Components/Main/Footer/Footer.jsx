import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="container-fluid">
                <div className="container">
                    <div className="row footer__links p-2">
                        <a
                            name="instagram"
                            href="https://www.instagram.com/danielkhakbaz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            name="twitter"
                            href="https://twitter.com/DanielKhakbaz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            name="telegram"
                            href="https://t.me/danielkhakbaz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-telegram-plane" />
                        </a>
                        <a
                            name="mail"
                            href="mailto:danialkhakbaz.dk@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="far fa-envelope" />
                        </a>
                        <a
                            name="linkedin"
                            href="https://www.linkedin.com/in/danielkhakbaz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            name="github"
                            href="https://github.com/Danielkhakbaz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className="row footer__h4">
                        Made By Danial Khakbaz.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;