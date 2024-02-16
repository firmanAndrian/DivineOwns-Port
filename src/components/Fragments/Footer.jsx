import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Buttons"



const Footer = () =>{
return(
    <div className=" bg-zinc-950 text-white flex justify-center ">
        <div className=" w-[93%] flex py-[26px]">
            <div className="basis-1/5 flex flex-col items-center py-[26px]">
                <div>
                    <h2 className=" begining lg:text-[40px]">
                        DO.<span className="lg:text-[26px] champion">Tournament</span> 
                    </h2>
                </div>
                <div className="flex justify-center w-fit grid grid-cols-3 gap-2">
                    <FontAwesomeIcon icon={faTwitter} size='lg' color='#cececef8'/>
                    <FontAwesomeIcon icon={faInstagram} size='lg' color='#cececef8'/>
                    <FontAwesomeIcon icon={faWhatsapp} size='lg' color='#cececef8'/>
                </div>
            </div>
            <div className=" basis-4/5 pl-[6%] ">
                <div className="flex mb-[10px]">
                    <div className='basis-4/5'>
                        <ul className='grid grid-cols-3 gap-3'>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                            <li className="border-l-2 border-[#cececef8] pl-[4px]">Home</li>
                        </ul>
                    </div>
                    <div className='basis-1/5 flex items-center'>
                        <Button>Contact Us</Button>
                    </div>
                </div>
                <div className='border-t-[1px] border-[#cececef8] flex flex-col items-end py-[10px]'>
                    <h2 className='champion lg:text-[13px] lg:text-[#cececef8]'><span><FontAwesomeIcon icon={faCopyright} size='sm' color='#cececef8'/></span> 2024 Firman</h2>
                    <h2 className="Champion lg:text-[12px] lg:text-[#cececef8]">
                        Play together. Never loser
                    </h2>
                </div>
            </div>
        </div>
    </div>
)
}


export default Footer