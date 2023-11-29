import Sidebar from '../sidebar/Sidebar';
import './Navbar.css'
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar></Sidebar>
            <div className="wrapper">
                <motion.span className='title' initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
                transition={{duration: 0.5}}
                >Majba</motion.span>
                <div>
                    <ul className='nav-details'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>CV</li>
                    </ul>
                </div>
                <div className="social">
                    <a href=""><img className='fixed-image' src="/facebook.png" alt="" /></a>
                    <a href=""><img className='fixed-image' src="/github.png" alt="" /></a>
                    <a href=""><img className='fixed-image' src="/linkedin.png" alt="" /></a>
                    <a href=""><img className='fixed-image' src="/instagram.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;