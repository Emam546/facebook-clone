import {FormEvent } from "react";

import "./style.css";
import "./responsive.css";
import SelectBirth from "../../components/birthDay";

export interface CompleteLogin {
    setUser: Function;
}
export default function SignUp(props: CompleteLogin) {
    return (
        <>
            {/* <!--End Header Area--> */}
            <LoginArea {...props} />
            {/* <!--Start Sign Up Area--> */}
            <SingUPArea {...props} />
            {/* <!--End Sign Up Area--> */}

            {/* <!-- Start Footer Area--> */}
            <footer className="footer-area">
                <div className="container">
                    <div className="top">
                        <ul>
                            <li className="active">
                                <a href="#">English (UK)</a>
                            </li>
                            <li>
                                <a href="#">বাংলা</a>
                            </li>
                            <li>
                                <a href="#">অসমীয়া</a>
                            </li>
                            <li>
                                <a href="#">हिन्दी</a>
                            </li>
                            <li>
                                <a href="#">नेपाली</a>
                            </li>
                            <li>
                                <a href="#">Bahasa Indonesia</a>
                            </li>
                            <li>
                                <a href="#">العربية</a>
                            </li>
                            <li>
                                <a href="#">中文(简体)</a>
                            </li>
                            <li>
                                <a href="#">Bahasa Melayu</a>
                            </li>
                            <li>
                                <a href="#">Español</a>
                            </li>
                            <li>
                                <a href="#">Português (Brasil)</a>
                            </li>
                            <li>
                                <a href="#">+</a>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className="middel">
                        <ul>
                            <li>
                                <a href="#">Sign Up</a>
                            </li>
                            <li>
                                <a href="#">Log In</a>
                            </li>
                            <li>
                                <a href="#">Messenger</a>
                            </li>
                            <li>
                                <a href="#">Facebook Lite </a>
                            </li>
                            <li>
                                <a href="#"> Watch</a>
                            </li>
                            <li>
                                <a href="#">People</a>
                            </li>
                            <li>
                                <a href="#">Profiles</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Page categories</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Places</a>
                            </li>
                            <li>
                                <a href="#">Games</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Marketplace</a>
                            </li>
                            <li>
                                <a href="#">Groups</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Local</a>
                            </li>
                            <li>
                                <a href="#">Fundraisers</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Create ad</a>
                            </li>
                            <li>
                                <a href="#">Create Page</a>
                            </li>
                            <li>
                                <a href="#">Developers</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Cookies</a>
                            </li>
                            <li>
                                <a href="#">AdChoices</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Account security</a>
                            </li>
                            <li>
                                <a href="#">Login help</a>
                            </li>
                            <li>
                                <a href="#">Help Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <span>Facebook &copy; 2019</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
function LoginForm({ setUser }: CompleteLogin) {
    function FetchData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log([...formData.entries()]);
    }
    return (
        <form action="#" method="POST" onSubmit={FetchData}>
            <div className="email">
                <label htmlFor="Email">Email or phone</label>
                <input type="text" id="Email" name="email" />
            </div>
            <div className="password">
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" name="password" />
                <a href="#">Forgotten account?</a>
            </div>
            <div className="login">
                <input type="submit" value="Log In" />
            </div>
        </form>
    );
}
function LoginArea(props: CompleteLogin) {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-area">
                    <img src="images/logo.png" alt="Facebook" />
                </div>
                <div className="login-area">
                    <LoginForm {...props} />
                </div>
            </div>
        </header>
    );
}
function SingUPForm({ setUser }: CompleteLogin) {
    function FetchData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log([...formData.entries()]);

    }
    return (
        <form action="#" method="POST" onSubmit={FetchData}>
            <div className="fast-name">
                <input type="text" name="first-name" placeholder="First name" />
            </div>
            <div className="surname">
                <input type="text" name="sur-name" placeholder="Surname" />
            </div>
            <input
                type="text"
                name="email"
                placeholder="Mobile number or email address"
            />
            <input type="password" name="password" placeholder="New password" />
            <div className="birthday">
                <h4>Birthday</h4>
                <SelectBirth />
                <div className="birth-link">
                    <a href="#">Why do I need to provide my date of birth?</a>
                </div>
            </div>
            <div className="gender">
                <input id="female" name="gender" type="radio" value="female" />
                <label htmlFor="female">Female</label>
                <input id="male" name="gender" type="radio" value="male" />
                <label htmlFor="male">Male</label>
                <input id="custom" name="gender" type="radio" value="custom" />
                <label htmlFor="custom">Custom</label>
            </div>
            <div className="text-box">
                <p>
                    By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
                    <a href="#">Data Policy</a> and{" "}
                    <a href="#">Cookie Policy</a>. You may receive SMS
                    notifications from us and can opt out at any time.
                </p>
            </div>
            <div className="btn">
                <input type="submit" value="Sign Up" />
            </div>
        </form>
    );
}
function SingUPArea(props: CompleteLogin) {
    return (
        <section className="signup-area">
            <div className="container">
                <div className="left-area">
                    <p>
                        Facebook helps you connect and share with the people in
                        your life.
                    </p>
                    <img
                        src="images/connect-with-people.png"
                        alt="connect-with-people"
                    />
                </div>
                <div className="right-area">
                    <h2>Create an account</h2>
                    <h4>It's free and always will be.</h4>
                    <SingUPForm {...props} />
                    <span className="business">
                        <a href="#">Creat a Page</a> htmlFor a celebratey, band
                        or business.
                    </span>
                    
                </div>
            </div>
        </section>
    );
}
