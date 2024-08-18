import { toast } from "react-toastify"
import "./login.css"
import { useState } from "react"

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            }) 
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        toast.success("Logged in successfully");
    }

    return (
        <div className='login-container'>
            <div className="login">
                <div className="seperator">
                    <div className="logo">
                        <h1>Chatify</h1>
                        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Circle.png" alt="White Circle" width="50" height="50" />
                    </div>
                    <p>Connect easy. Connect fast.</p>
                </div>
                <div className="line"></div>
                <div className="item">
                    <h2>Have an Account?</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="password" placeholder="Password" name="password" />
                        <button class="animated-button">
                        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Sign In</span>
                        <span class="circle"></span>
                        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        </button>
                    </form>
                </div>
                <div className="line"></div>
                <div className="item">
                <h2>Create an Account</h2>
                    <form>
                        <label htmlFor="file">
                            <img src={avatar.url || "./avatar.png"} alt="" />
                            Upload an Image
                        </label>
                        <input type="file" id="file" style={{ display: "none" } } onChange={handleAvatar} />
                        <input type="text" placeholder="Username" name="username" />    
                        <input type="text" placeholder="Email" name="email" />
                        <input type="password" placeholder="Password" name="password" />
                        <button class="animated-button">
                        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Sign Up</span>
                        <span class="circle"></span>
                        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        </button>

                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login