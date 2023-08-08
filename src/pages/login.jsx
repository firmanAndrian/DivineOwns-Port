import FormLogin from "../components/Fragments/FormLogin"
import AuthFormLayouts from "../components/Layouts/AuthFormLayouts"

const LoginPages = (props) => {
    const {children} = props
    return (
        <AuthFormLayouts type="Login" parp="For level up your Gaming !">
            <FormLogin/>
        </AuthFormLayouts>
            
    )
}

export default LoginPages