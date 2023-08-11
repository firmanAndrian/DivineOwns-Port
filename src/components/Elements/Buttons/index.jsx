const Button = (props)=>{
    const {children} = props
    return (
        <button className= "h-8 sm:h-9 w-full font-semibold rounded-md bg-[#3E2DFC] text-white text-[15px] sm:text-[18px]" type="submit">{children}</button>
    )
}

export default Button