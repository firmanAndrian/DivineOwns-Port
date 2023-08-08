const Button = (props)=>{
    const {children} = props
    return (
        <button className= "h-9 items-center w-full font-semibold rounded-md bg-[#3E2DFC] text-white" type="submit">{children}</button>
    )
}

export default Button