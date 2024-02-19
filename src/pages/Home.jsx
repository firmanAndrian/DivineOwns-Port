import AuthLayouts from "../components/Layouts/AuthLayouts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';



const Home =() => {
    
    return(
        <AuthLayouts>
            <div className="max-w-full h-full">
                <div className="max-w-full layout h-[568px] sm:h-screen md:h-full flex flex-col bg-cover bg-center">
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
                                <h3 className="text-[#FFF] text-[14px] w-max bdr duration-500 hover:text-[17px] sm:text-[23px]  sm:hover:text-[23.5px] md:text-[28px] md:hover:text-[29.5px] lg:text-[32px] lg:hover:text-[33.5px]"><a href="/login">Join now !</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section champion */}
                <div className="w-full h-auto flex flex-col items-center pb-[80px] bg-[#474747e4] ">
                    <h1 className="champion text-[#313131] mt-[3%] mb-[5%] text-[25px] sm:text-[28px] md:text-[35px] lg:text-[47px] text-zinc-300">CHAMPIONS</h1>
                    <div className=" flex flex-col border-gray-950 w-[96%] my-10">
                        <div className=" flex flex-row justify-end">
                            <p className="bdr text-[13px] sm:text-[16px] lg:text-[18px] text-white h-[34px] mb-[5px]">See More</p>
                        </div>
                        <div className="sm:relative sm:h-[300px] lg:h-[320px] bg-gradient-to-r from-slate-700 from-1% via-stone-900 via-20% to-zinc-800 to-99% flex flex-col items-center sm:items-end sm:pr-[8%] py-5">
                            <div className="w-[240px] sm:w-[230px] md:w-[270px] lg:w-[290px] h-[340px] sm:h-[320px]  lg:h-[385px] rounded-2xl sm:absolute sm:-top-2 sm:left-16 bg-champion bg-cover bg-center shadow-lg shadow-neutral-700 hover:blur-[1px]">
                            </div>
                            <p className="champion w-[70%] sm:w-[40%] md:w-[50%] lg:w-[65%] text-zinc-300 text-[13px] sm:text-[16px] lg:text-[24px] mt-4 lg:mt-14 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus earum beatae mollitia, delectus magnam sed optio fugiat pariatur nam itaque id, iste maiores. Cumque praesentium tenetur dolore adipisci, alias laboriosam.</p>
                            <p className="champion sm:w-[40%] md:w-[50%] lg:w-[60%] text-zinc-400 text-[12px] lg:text-[14px] mt-2 ml-2 lg:mt-4 lg:ml-4">Winner PES Season 12</p>
                        </div>
                    </div>
                </div>
                {/* end section champions */}


                <div className="bg-zinc-950 py-[9%] px-[2%]">
                    <div className="champion text-zinc-300 text-[#313131] mb-[5%] text-[25px] sm:text-[28px] md:text-[35px] lg:text-[47px]">
                        Tournaments 
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="w-full flex justify-end">
                           <p className="bdr text-[13px] sm:text-[16px] lg:text-[18px] text-white h-[34px] mb-[14px]"> More Tournament</p> 
                        </div>
                        <div className="flex flex-row flex-wrap justify-center  xl:justify-start xl:mx-[25px] pb-[3%] grid gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4 w-fit lg:w-[90%]">
                            <div className='flex flex-col  w-[290px] h-[385px] rounded-2xl border-[1px] border-yellow-500'>
                                <div className="basis-2/5 bg-white bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: "url('src/assets/images/mobile-legends-tour.jpg')"}}>
                                </div>
                                <div className="border-black basis-3/5 bg-slate-800 flex flex-col rounded-b-2xl">
                                    <div className="basis-4/5 flex flex-col p-[3%]">
                                        <div className="flex flex-row justify-between my-[6px]">
                                            <p className="border-[1px] border-gray-500 rounded-md px-[8px] text-[12px] text-gray-500">
                                                Mobile legend
                                            </p>
                                            <div className="bg-yellow-500 w-[25%] ">
                                                <p className="text-[12px] text-slate-700 mx-[50%]">30%</p>
                                            </div>
                                        </div>
                                        <div className="text-[15px] my-[5px] text-slate-200">
                                            Mobile legend seasons 23
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-2/3 flex flex-row">
                                                <div className="mr-[10px]">
                                                    <FontAwesomeIcon icon={faCalendarDays} size="md" color='white'/>
                                                </div>
                                                <div className="text-gray-400">
                                                    <p className="text-[10px]">Registration Starts</p>
                                                    <p className="text-[12px]">22-08-2024</p>
                                                </div>
                                            </div>
                                            <div className="basis-1/3 flex flex-row">
                                                <FontAwesomeIcon icon={faUsers} size="sm" color='#f8da6d' />
                                                <div className="text-[11px] ml-[6px] text-[#f8da6d]">
                                                    <p>1/67 teams</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-600 my-[12px] h-[45px] rounded-md px-[13px] flex items-center">
                                            <div className="text-[11px]">
                                                <p className="text-slate-200"> Tournament By - <i className="text-[14px] text-[white] bold ml-[6px]">Divine Owns</i></p>          
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative basis-1/5 bg-black rounded-b-2xl rounded-t-lg ">
                                        <div className=" parent absolute top-[-10px] inset-5 flex flex-row justify-between mx-[7px]">
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Details
                                            </div>
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Registration
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col  w-[290px] h-[385px] rounded-2xl border-[1px] border-yellow-500'>
                                <div className="basis-2/5 bg-white bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: "url('src/assets/images/mobile-legends-tour.jpg')"}}>
                                </div>
                                <div className="border-black basis-3/5 bg-slate-800 flex flex-col rounded-b-2xl">
                                    <div className="basis-4/5 flex flex-col p-[3%]">
                                        <div className="flex flex-row justify-between my-[6px]">
                                            <p className="border-[1px] border-gray-500 rounded-md px-[8px] text-[12px] text-gray-500">
                                                Mobile legend
                                            </p>
                                            <div className="bg-yellow-500 w-[25%] ">
                                                <p className="text-[12px] text-slate-700 mx-[50%]">30%</p>
                                            </div>
                                        </div>
                                        <div className="text-[15px] my-[5px] text-slate-200">
                                            Mobile legend seasons 23
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-2/3 flex flex-row">
                                                <div className="mr-[10px]">
                                                    <FontAwesomeIcon icon={faCalendarDays} size="md" color='white'/>
                                                </div>
                                                <div className="text-gray-400">
                                                    <p className="text-[10px]">Registration Starts</p>
                                                    <p className="text-[12px]">22-08-2024</p>
                                                </div>
                                            </div>
                                            <div className="basis-1/3 flex flex-row">
                                                <FontAwesomeIcon icon={faUsers} size="sm" color='#f8da6d' />
                                                <div className="text-[11px] ml-[6px] text-[#f8da6d]">
                                                    <p>1/67 teams</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-600 my-[12px] h-[45px] rounded-md px-[13px] flex items-center">
                                            <div className="text-[11px]">
                                                <p className="text-slate-200"> Tournament By - <i className="text-[14px] text-[white] bold ml-[6px]">Divine Owns</i></p>          
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative basis-1/5 bg-black rounded-b-2xl rounded-t-lg ">
                                        <div className=" parent absolute top-[-10px] inset-5 flex flex-row justify-between mx-[7px]">
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Details
                                            </div>
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Registration
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col  w-[290px] h-[385px] rounded-2xl border-[1px] border-yellow-500'>
                                <div className="basis-2/5 bg-white bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: "url('src/assets/images/mobile-legends-tour.jpg')"}}>
                                </div>
                                <div className="border-black basis-3/5 bg-slate-800 flex flex-col rounded-b-2xl">
                                    <div className="basis-4/5 flex flex-col p-[3%]">
                                        <div className="flex flex-row justify-between my-[6px]">
                                            <p className="border-[1px] border-gray-500 rounded-md px-[8px] text-[12px] text-gray-500">
                                                Mobile legend
                                            </p>
                                            <div className="bg-yellow-500 w-[25%] ">
                                                <p className="text-[12px] text-slate-700 mx-[50%]">30%</p>
                                            </div>
                                        </div>
                                        <div className="text-[15px] my-[5px] text-slate-200">
                                            Mobile legend seasons 23
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-2/3 flex flex-row">
                                                <div className="mr-[10px]">
                                                    <FontAwesomeIcon icon={faCalendarDays} size="md" color='white'/>
                                                </div>
                                                <div className="text-gray-400">
                                                    <p className="text-[10px]">Registration Starts</p>
                                                    <p className="text-[12px]">22-08-2024</p>
                                                </div>
                                            </div>
                                            <div className="basis-1/3 flex flex-row">
                                                <FontAwesomeIcon icon={faUsers} size="sm" color='#f8da6d' />
                                                <div className="text-[11px] ml-[6px] text-[#f8da6d]">
                                                    <p>1/67 teams</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-600 my-[12px] h-[45px] rounded-md px-[13px] flex items-center">
                                            <div className="text-[11px]">
                                                <p className="text-slate-200"> Tournament By - <i className="text-[14px] text-[white] bold ml-[6px]">Divine Owns</i></p>          
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative basis-1/5 bg-black rounded-b-2xl rounded-t-lg ">
                                        <div className=" parent absolute top-[-10px] inset-5 flex flex-row justify-between mx-[7px]">
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Details
                                            </div>
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Registration
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col  w-[290px] h-[385px] rounded-2xl border-[1px] border-yellow-500'>
                                <div className="basis-2/5 bg-white bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: "url('src/assets/images/mobile-legends-tour.jpg')"}}>
                                </div>
                                <div className="border-black basis-3/5 bg-slate-800 flex flex-col rounded-b-2xl">
                                    <div className="basis-4/5 flex flex-col p-[3%]">
                                        <div className="flex flex-row justify-between my-[6px]">
                                            <p className="border-[1px] border-gray-500 rounded-md px-[8px] text-[12px] text-gray-500">
                                                Mobile legend
                                            </p>
                                            <div className="bg-yellow-500 w-[25%] ">
                                                <p className="text-[12px] text-slate-700 mx-[50%]">30%</p>
                                            </div>
                                        </div>
                                        <div className="text-[15px] my-[5px] text-slate-200">
                                            Mobile legend seasons 23
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="basis-2/3 flex flex-row">
                                                <div className="mr-[10px]">
                                                    <FontAwesomeIcon icon={faCalendarDays} size="md" color='white'/>
                                                </div>
                                                <div className="text-gray-400">
                                                    <p className="text-[10px]">Registration Starts</p>
                                                    <p className="text-[12px]">22-08-2024</p>
                                                </div>
                                            </div>
                                            <div className="basis-1/3 flex flex-row">
                                                <FontAwesomeIcon icon={faUsers} size="sm" color='#f8da6d' />
                                                <div className="text-[11px] ml-[6px] text-[#f8da6d]">
                                                    <p>1/67 teams</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-600 my-[12px] h-[45px] rounded-md px-[13px] flex items-center">
                                            <div className="text-[11px]">
                                                <p className="text-slate-200"> Tournament By - <i className="text-[14px] text-[white] bold ml-[6px]">Divine Owns</i></p>          
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative basis-1/5 bg-black rounded-b-2xl rounded-t-lg ">
                                        <div className=" parent absolute top-[-10px] inset-5 flex flex-row justify-between mx-[7px]">
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Details
                                            </div>
                                            <div className="child bg-[#f8da6d] rounded-md text-[12px] flex items-center px-[10px] py-[6px] hover:bg-yellow-500 duration-1000">
                                                Registration
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayouts>
    )
}

export default Home

