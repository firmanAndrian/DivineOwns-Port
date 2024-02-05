import '../../index.css'
const AuthFormLayouts =(props)=>{
    const {children,type,parp} = props
    return (
    <div className="flex h-screen items-center justify-center layout bg-cover bg-center" >
        <div className="h-auto py-8 w-[80%] sm:w-[450px] sm:h-auto bg-[#FFFFFFa6] flex items-center justify-center rounded-[6px] ">
          <div className=" w-full h-auto">
            <div className=''>
              <h2 className=" sm:text-[28px] text-center judul">
                {type} 
              </h2>
              <p className='flex text-[12px] text-black justify-center sm:text-[15px] font-light tracking-wide'>
                {parp}
              </p>
            </div>
            <div className="mt-[10px] sm:mt-[30px] flex justify-center">
            {children}
            </div>
          </div>
        </div>
    </div>
    )
}

export default AuthFormLayouts