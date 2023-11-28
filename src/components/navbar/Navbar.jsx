import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <div className="wrapper">
                <span className='title'>Majba</span>
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