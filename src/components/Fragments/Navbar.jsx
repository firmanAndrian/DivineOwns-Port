const Navbar =()=>{
return(
    <div className="w-full h-[80px] flex items-center fixed">
            <div className="flex items-center w-full mx-[50px] justify-between ">
                <div className="h-[45px] basis-1/4 flex items-center text-zinc-100 text-[36px] font-black capitalize"><h1>DIVINE OWNS</h1></div>
                <div className="basis-4/6">
                    <ul  className="flex justify-end ">
                        <li className=" hed">About We</li>
                        <li className="ml-10 hed">Product</li>
                        <li className="ml-10 hed">Tourney</li>
                        <li className="ml-5 border-2 border-[#A1A1A1]"></li>
                        <li className="ml-5 hed">Sign In</li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Navbar