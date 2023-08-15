import AuthLayouts from "../components/Layouts/AuthLayouts"



const Home =() => {
    return(
        <AuthLayouts>
            <div className="max-w-full h-full">
                <div className="max-w-full md:h-[1024px] layout h-screen flex  flex-col justify-center  bg-cover bg-center">
                        <div className="flex flex-col w-[96%] -mt-10 sm:w-max ml-[9px] sm:ml-[40px] lg:ml-[52px] h-min sm:h-min ">
                            <h2 className="w-[160px] sm:w-[200px] h-max md:w-[555px] sm:text-[28px] md:text-[32px] lg:text-[35px] begining">Get ready</h2>
                            <div className="w-[98%] sm:w-[350px] md:w-[555px] sm:text-[24px] md:text-[28px] lg:text-[30px] pl-[20px] mt-[30px] sm:mt-[35px] md:mt-[40px] h-max begining-home">
                                <h3>For an adrenaline-pumping gaming experience like never before!</h3>
                                <h3 className="mt-[25px]">Step into the battleground and unleash your competitive spirit in our spectacular Tournament Game!</h3>
                            </div>
                        </div>
                        <div>halloooooo</div>
                </div>
                <div></div>
            </div>
        </AuthLayouts>
    )
}

export default Home

