const Button = (props)=>{
    const {children} = props
    return (
        <button className= "h-8 sm:h-9 w-[50%] justify-center font-semibold rounded-md bg-[#3E2DFC] text-white text-[15px] sm:text-[18px] hover:bg-gradient-to-r hover:from-indigo-800 hover:to-blue-500" type="submit">{children}</button>
    )
}

export default Button