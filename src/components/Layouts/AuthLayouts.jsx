import FormLogin from "../Fragments/FormLogin"
import Navbar from "../Fragments/Navbar"

const AuthLayouts = (props) => {
    const {children}= props
    return (
        <div className="scroll-smooth">
        <Navbar/>

        {children}
        
        {/* <Footer/> */}
        </div>
    )
}

export default AuthLayouts