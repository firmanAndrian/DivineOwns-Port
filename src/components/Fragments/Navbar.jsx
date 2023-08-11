const Navbar =()=>{
return(
    <div className="w-full h-[80px] flex items-center fixed">
            <div className="flex items-center w-full sm:mx-[30px] lg:mx-[50px] justify-between">
                <div className="flex-auto  h-full basis-1/4 flex items-center text-zinc-100 sm:text-[22px] lg:text-[36px] font-black capitalize"><h1>DIVINE OWNS</h1></div>
                <div className="basis-4/6 h-[45px] flex items-center justify-end hidden sm:inline-flex">
                    <ul  className="flex">
                        <li className="sm:text-[20px] lg:text-[26px] hed">About We</li>
                        <li className="ml-10 sm:text-[20px] lg:text-[26px] hed">Product</li>
                        <li className="ml-10 sm:text-[20px] lg:text-[26px] hed">Tourney</li>
                        <li className="ml-5 sm:text-[20px] lg:text-[26px] border-[1px] border-[#A1A1A1]"></li>
                        <li className="ml-5 sm:text-[20px] lg:text-[26px] hed">Sign In</li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Navbar