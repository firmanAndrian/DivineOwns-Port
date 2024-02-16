import Navbar from "../Fragments/Navbar"
import Footer from "../Fragments/Footer"

const AuthLayouts = (props) => {
    const {children}= props
    return (
        <div className="scroll-smooth">
        <Navbar/>

        {children}
        
        <Footer/>
        </div>
    )
}

export default AuthLayouts