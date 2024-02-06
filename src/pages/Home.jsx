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
                            <h3 className="basis-6/12 sm:basis-4/12 lg:basis-3/12 p-3 bnnr bg-[#D8D6D6b2] text-stone-950 sm:text-[#000] sm:text-[23px] md:text-[28px] lg:text-[32px] sm:h-full" >Face off with skilled opponents and prove that you have what it takes to claim victory.</h3>
                            <div className="basis-full sm:basis-4/12 lg:basis-6/12 h-[100px] sm:h-full bnnr bg-[#474747e4] sm:bg-[#47474733] flex flex-col items-center justify-between p-2 sm:pb-7 sm:text-[23px] md:text-[28px] lg:text-[32px]">
                                <h3 className="text-[#FFF] ">why wait ?</h3>
                                
                                <h3 className="text-[#FFF] text-[12px] w-max decro duration-500 hover:text-[12px] sm:text-[23px]  sm:hover:text-[23.5px] md:text-[28px] md:hover:text-[29.5px] lg:text-[32px] lg:hover:text-[33.5px]"><a href="/login">Join now !</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col items-center pb-[80px] bg-[#D9D9D9af]">
                    <h1 className="champion text-[#313131] mt-[3%] mb-[5%] text-[25px] sm:text-[28px] md:text-[35px] lg:text-[47px]">CHAMPIONS</h1>
                    <div className=" flex flex-col border-gray-950 w-[96%] mt-6">
                            <div className="mb-2 flex flex-row justify-end ">
                                <p className="border-[1px] hover:border-b-neutral-950 duration-300 text-[14px] sm:text-[18px] lg:text-[22px]">See More</p>
                            </div>
                            <div className="sm:relative sm:h-[300px] lg:h-[320px] bg-gradient-to-r from-slate-700 from-1% via-stone-900 via-20% to-zinc-800 to-99% flex flex-col items-center sm:items-end sm:pr-[8%] py-5">
                                <div className="w-[240px] sm:w-[260px] lg:w-[290px] h-[340px] sm:h-[360px] lg:h-[385px] rounded-2xl sm:absolute sm:-top-9 sm:left-16 bg-champion bg-cover bg-center shadow-lg shadow-neutral-700 hover:blur-[1px]">
                                </div>
                                    <p className="champion w-[70%] sm:w-[45%] lg:w-[65%] text-zinc-300 text-[13px] sm:text-[18px] lg:text-[24px] mt-4 lg:mt-14 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus earum beatae mollitia, delectus magnam sed optio fugiat pariatur nam itaque id, iste maiores. Cumque praesentium tenetur dolore adipisci, alias laboriosam.</p>
                                     <p className="champion sm:w-[40%] lg:w-[60%] text-zinc-400 text-[12px] lg:text-[14px] mt-2 ml-2 lg:mt-4 lg:ml-4">Winner Season 12</p>
                            </div>
                    </div>
                </div>
            </div>
        </AuthLayouts>
    )
}

export default Home

