import FormRegist from "../components/Fragments/FormRegist"
import AuthFormLayouts from "../components/Layouts/AuthFormLayouts"

const RegistPages = (props) => {
    const {children} = props
    return (
      <AuthFormLayouts type="REGISTER" parp="">
            <FormRegist/>
        </AuthFormLayouts>
    )
}

export default RegistPages