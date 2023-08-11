import InputForm from "../Elements/Inputs"
import Button from "../Elements/Buttons"
const FormRegist = () => {
    return (
        <form className="w-10/12 sm:w-[78%] justify-center" action="#" method="POST">
            
            <InputForm type="text" name="TeamName" pholder="insert your team name" judul = "Team Name"/>
            <InputForm type="text" name="email" pholder="contoh@gmail.com" judul = "Email"/>
            <InputForm type="password" name="password" pholder="" judul = "Password"/>
            <InputForm type="password" name="confirm" pholder="" judul = "Confirmation Password"/>
              <br />
            <Button>Sign Up</Button>

            <p className="justify-center flex mt-6 text-neutral-600 text-[13px] sm:text-[14px] font-light leading-3">
            Already have account ?{''}
            <a href="login" className=" flex font-semibold text-indigo-600 ml-[2px] hover:text-indigo-500">
              Login
            </a>
        </p>
        </form>
    )
}

export default FormRegist