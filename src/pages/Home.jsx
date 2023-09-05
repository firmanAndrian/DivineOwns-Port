import AuthLayouts from "../components/Layouts/AuthLayouts"



const Home =() => {
    return(
        <AuthLayouts>
            <div className="max-w-full h-full">
                <div className="max-w-full  layout h-[568px] sm:h-screen md:h-full flex  flex-col  bg-cover bg-center">
                    <div className=" flex flex-col h-full justify-end sm:justify-between">
                        <div className="flex flex-col w-[96%] sm:w-min ml-[9px] sm:ml-[33px] lg:ml-[52px] h-max mt-32 mb-14 sm:mt-52 md:mt-56 lg:mt-[193px] md:mb-[178px] lg:mb-[168px]">
                            <h2 className="w-[160px] sm:w-[200px] h-max md:w-[555px] sm:text-[28px] md:text-[35px] lg:text-[47px] begining-home sm:text-[#fff]">Get Ready</h2>
                            <div className="w-[98%] sm:w-[380px] md:w-[565px] sm:text-[24px] md:text-[28px] lg:text-[32px] pl-[20px] mt-[27px] sm:mt-[35px] md:mt-[50px] lg:mt-[46px] lg:pl-[44px] h-max begining-home">
                                <h3>For an adrenaline-pumping gaming experience like never before!</h3>
                                <h3 className="mt-[27px] sm:mt-[35px] md:mt-[50px] lg:mt-[45px] ">Step into the battleground and unleash your competitive spirit in our spectacular Tournament Game!</h3>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap ">
                            <h3 className="basis-6/12 sm:basis-4/12 lg:basis-3/12 p-4 sm:p-7  bnnr bg-[#474747b2] text-[#FFF] sm:text-[23px] md:text-[28px] lg:text-[32px]" >Test your gaming prowess against the best of the best!</h3>
                            <h3 className="basis-6/12 sm:basis-4/12 lg:basis-3/12 p-4 sm:p-7  bnnr bg-[#D8D6D6b2] text-[#000] sm:text-[23px] md:text-[28px] lg:text-[32px]">Face off with skilled opponents and prove that you have what it takes to claim victory.</h3>
                            <div className="basis-full sm:basis-4/12 lg:basis-6/12 h-[90px] md:h-[310px] lg:h-[330px] sm:h-full bnnr bg-[#474747b2] flex flex-col items-center justify-between p-2 sm:p-7 sm:text-[23px] md:text-[28px] lg:text-[32px]">
                                <h3 className="text-[#FFF] ">why wait ?</h3>
                                
                                <h3 className="text-[#FFF] text-[12px] w-max decro duration-500 hover:text-[12px] sm:text-[23px]  sm:hover:text-[23.5px] md:text-[28px] md:hover:text-[29.5px] lg:text-[32px] lg:hover:text-[33.5px]"><a href="/login">Join now !</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center border-2">
                    <h1 className="champion mt-[4%]">CHAMPIONS</h1>
                    <div className="flex flex-row border-2 w-[60%] justify-center ">
                        <div className="flex flex-row  basis-full justify-center">
                            <div className="flex flex-col items-center basis-6/12 border-2">
                                <ul className="text-[11px] pt-2">
                                    <li>Naruto</li>
                                    <li>Sasuke</li>
                                    <li>Sakura</li>
                                    <li>Kakashi</li>
                                </ul>
                                <h4 className="text-[15px] py-4 ">Team Seven</h4>
                                <h5 className="text-[12px] border-2">Champion Season 32</h5>
                            </div>
                            <div className="basis-6/12 border-2 img-champion bg-cover"></div>
                        </div>
                        {/* <div className="border-2 basis-3/6 ml-4">
                            hallooo
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </AuthLayouts>
    )
}

export default Home

