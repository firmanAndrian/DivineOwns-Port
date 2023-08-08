import '../../index.css'
const AuthFormLayouts =(props)=>{
    const {children,type,parp} = props
    return (
    <div className="flex h-screen items-center justify-center lg:px-8 layoutForm bg-cover bg-center" >
        <div className="sm:mx-auto sm:w-full sm:max-w-[460px] h-[521px] bg-[#FFFFFFB6]">
          <h2 className="mt-5 text-center judul">
            {type}
          </h2>
          <p className='flex mt-[1px] text-black justify-center text-[15px] font-light tracking-wide'>
            {parp}
          </p>
          <div className="flex mt-[30px] flex justify-center">
          {children}
          </div>
        </div>
    </div>
    )
}

export default AuthFormLayouts