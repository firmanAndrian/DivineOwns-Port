import AuthLayouts from "../components/Layouts/AuthLayouts"



const Home =() => {
    
    return(
        <AuthLayouts>
            <div className="max-w-full h-full">
                <div className="max-w-full  layout h-[568px] sm:h-screen md:h-full flex  flex-col  bg-cover bg-center">
                    <div className=" flex flex-col h-full justify-end sm:justify-between">
                        <div className="flex flex-col w-[96%] sm:w-min ml-[9px] sm:ml-[33px] lg:ml-[52px] h-max mt-32 mb-14 sm:mt-52 md:mt-56 lg:mt-[193px] md:mb-[178px] lg:mb-[168px]">
                            <h2 className="w-[160px] sm:w-[200px] h-max md:w-[555px] sm:text-[28px] md:text-[35px] lg:text-[40px] begining-home sm:text-[#fff]">Get Ready</h2>
                            <div className="w-[98%] sm:w-[380px] md:w-[565px] sm:text-[24px] md:text-[28px] lg:text-[32px] pl-[20px] mt-[27px] sm:mt-[35px] md:mt-[50px] lg:mt-[46px] lg:pl-[44px] h-max begining-home">
                                <h3>For an adrenaline-pumping gaming experience like never before!</h3>
                                <h3 className="mt-[27px] sm:mt-[35px] md:mt-[50px] lg:mt-[45px] ">Step into the battleground and unleash your competitive spirit in our spectacular Tournament Game!</h3>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap sm:h-[300px]">
                            <h3 className="basis-6/12 sm:basis-4/12 lg:basis-3/12 p-4   bnnr bg-[#4747478c] text-[#FFF] sm:text-[23px] md:text-[28px] lg:text-[32px] sm:h-full" >Test your gaming prowess against the best of the best!</h3>
                            <h3 className="basis-6/12 sm:basis-4/12 lg:basis-3/12 p-4  bnnr bg-[#D8D6D6b2] text-[#000] sm:text-[23px] md:text-[28px] lg:text-[32px] sm:h-full" >Face off with skilled opponents and prove that you have what it takes to claim victory.</h3>
                            <div className="basis-full sm:basis-4/12 lg:basis-6/12 h-[100px] sm:h-full bnnr bg-[#474747e4] sm:bg-[#47474733] flex flex-col items-center justify-between p-2 sm:pb-7 sm:text-[23px] md:text-[28px] lg:text-[32px]">
                                <h3 className="text-[#FFF] ">why wait ?</h3>
                                
                                <h3 className="text-[#FFF] text-[12px] w-max decro duration-500 hover:text-[12px] sm:text-[23px]  sm:hover:text-[23.5px] md:text-[28px] md:hover:text-[29.5px] lg:text-[32px] lg:hover:text-[33.5px]"><a href="/login">Join now !</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center border-2 pb-[80px] bg-[#D9D9D9af]">
                    <h1 className="champion mt-[4%] mb-[8%] sm:text-[28px] md:text-[35px] lg:text-[47px]">CHAMPIONS</h1>
                    <div className="flex flex-row border-gray-950 w-[75%] h-[210px]">
                            
                    </div>
                </div>
            </div>
        </AuthLayouts>
    )
}

export default Home

