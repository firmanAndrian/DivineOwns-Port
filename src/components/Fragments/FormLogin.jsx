import InputForm from "../Elements/Inputs"
import Button from "../Elements/Buttons"
const FormLogin = () => {
    return (
          <form className="flex-wrap w-9/12 justify-center" action="#" method="POST">
            <InputForm type="text" name="Email" pholder="" judul = "Email"/>
            <InputForm type="password" name="Password" pholder="" judul = "Password"/>
            <div className="flex items-center w-full mt-7 mb-6">
                <div className="bg-[#9B9B9B9C] flex basis-2/5 mr-3 h-14 items-center">ddd</div>
                <div className="basis-3/5 justify-center">
                    <input
                        className="flex kotak text-sm w-full h-10 bg-white bg-opacity-60 rounded-[5px] border-b-indigo-500 border pl-4 placeholder: opacity-90"
                    />
                </div>
            </div>

            <Button>Sign in</Button>


        <p className="justify-center flex mt-6 text-neutral-600 text-[14px] font-light leading-3">
            Not already have account?{'   '}
            <a href="register" className=" flex font-semibold text-indigo-600 ml-[2px] hover:text-indigo-500">
              Register
            </a>
        </p>
          </form> 
    )
}

export default FormLogin