import FormLogin from "../Fragments/FormLogin"
import Navbar from "../Fragments/Navbar"

const AuthLayouts = (props) => {
    const {children}= props
    return (
        <>
        <Navbar/>

        {children}
        
        {/* <Footer/> */}
        </>
    )
}

export default AuthLayouts