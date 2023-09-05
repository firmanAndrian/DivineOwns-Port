const Navbar =()=>{
return(
    <div className="w-full h-[80px]  flex items-center fixed">
            <div className="flex h-full items-center w-full mx-[15px] sm:mx-[30px] lg:mx-[50px] justify-between">
                <div className=" flex-auto basis-1/4 flex items-center text-zinc-100 text-[20px] sm:text-[22px] md:text-[30px] lg:text-[36px] font-black capitalize"><h1>DIVINE OWNS</h1></div>
                <div className=" basis-4/6  flex  items-center justify-end hidden sm:inline-flex">
                    <ul  className="flex">
                        <li className="sm:text-[17px] md:text-[20px] lg:text-[29px] hed">About</li>
                        <li className="sm:ml-6 lg:ml-10 sm:text-[17px] md:text-[20px] lg:text-[29px] hed">Product</li>
                        <li className="sm:ml-6 lg:ml-10 sm:text-[17px] md:text-[20px] lg:text-[29px] hed">Tourney</li>
                        <li className="sm:ml-3 lg:ml-5 sm:text-[17px] md:text-[20px] lg:text-[29px] border-[1px] border-[#A1A1A1]"></li>
                        <li className="sm:ml-3 lg:ml-5 sm:text-[17px] md:text-[20px] lg:text-[29px] hed"><a href="/login">Sign In</a></li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Navbar