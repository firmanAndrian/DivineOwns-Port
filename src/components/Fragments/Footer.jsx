import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";



const Footer = () =>{
return(
    <div className="bg-zinc-950 mt-[-1px] flex justify-center pt-[28px]">
        <div className=" w-[93%] flex flex-col sm:flex-row py-[27px]">
            <div className="basis-1/5 flex flex-col items-center  hidden sm:flex">
                <div>
                    <h2 className=" begining text-[25px] sm:text-[30px] lg:text-[40px]">
                        DO.<span className="text-[20px] sm:text-[20px] lg:text-[26px] champion">Tournament</span> 
                    </h2>
                </div>
                <div className="flex justify-center w-fit grid grid-cols-3 gap-2">
                    <FontAwesomeIcon icon={faTwitter} size='sm:sm lg:lg' color='#cececef8'/>
                    <FontAwesomeIcon icon={faInstagram} size='sm:sm lg:lg' color='#cececef8'/>
                    <FontAwesomeIcon icon={faWhatsapp} size='sm:sm lg:lg' color='#cececef8'/>
                </div>
            </div>
            <div className=" basis-4/5 pl-[6%] ">
                <div className="flex mb-[10px]">
                    <div className='basis-4/5'>
                        <ul className='grid grid-cols-3 gap-3 champion text-[11px] sm:text-[12px] lg:text-[14px] text-[#cececef8]'>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">About</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Tournament</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Regulation</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Sponsor</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Sign</li>
                        </ul>
                    </div>
                    <div className='basis-1/5 flex items-center'>
                        <button className='h-8 sm:h-9 lg:h-9 w-[80px] sm:w-full justify-center font-semibold rounded-md bg-[#3E2DFC] text-black text-[11px] sm:text-[13.5px] lg:text-[18px] bg-[#f8da6d] hover:bg-yellow-500 duration-500' type='submit'>Contact Us</button>
                    </div>
                </div>
                <div className='border-t-[1px] border-[#cececef8] flex flex-row justify-between sm:flex-col sm:items-end py-[10px]'>
                    <div className="basis-1/5 flex flex-col items-center sm:hidden">
                        <div>
                            <h2 className=" begining text-[25px] sm:text-[30px] lg:text-[40px]">
                                DO.<span className="text-[20px] sm:text-[20px] lg:text-[26px] champion">Tournament</span> 
                            </h2>
                        </div>
                        <div className="flex justify-center w-fit grid grid-cols-3 gap-2">
                            <FontAwesomeIcon icon={faTwitter} size='sm:sm lg:lg' color='#cececef8'/>
                            <FontAwesomeIcon icon={faInstagram} size='sm:sm lg:lg' color='#cececef8'/>
                            <FontAwesomeIcon icon={faWhatsapp} size='sm:sm lg:lg' color='#cececef8'/>
                        </div>
                    </div>
                    <div>
                        <h2 className='champion text-[10px] sm:text-[11px] lg:text-[13px] text-[#cececef8]  mb-2'><span><FontAwesomeIcon icon={faCopyright} size='sm' color='#cececef8'/></span> 2024 Firman</h2>
                        <h2 className="Champion text-[10px] sm:text-[11px] lg:text-[13px] text-[#cececef8]">
                            Play Together. Never Loser
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}


export default Footer