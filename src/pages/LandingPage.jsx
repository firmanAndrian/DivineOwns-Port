import { TypeAnimation } from "react-type-animation";

const Landingpages = ()=>{
    
    return (
        <div className="w-full h-screen flex items-center layout bg-cover bg-center"> 
            <div className="pl-[20px] pr-[10px] md:pt-[50px] md:pl-[40px] h-[140px] sm:h-[400px] lg:w-[50%]">
                <div className="flex flex-col min-w-[160px] md:w-[555px] lg:w-[100%] begining">
                    <h2 id="typed-text" className="md:text-[26px] lg:text-[30px] lg:mb-5">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Are you ready to experience heart-pounding excitement, fierce competition, and unforgettable moments?',
                                1000,]}
                            wrapper="span"
                            speed={120}
                            easing='ease-in'
                        />
                    </h2> 
                </div>
                <div className="flex w-max h-min begining mt-6 ml-8 md:mt-10 md:ml-16 text-[18px] md:text-[26px] lg:text-[30px] md:hover:text-[29px] lg:hover:text-[33px]  duration-500 " >
                    <h2 className="delayed-content bdr"><a href="/home">STEP INTO</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Landingpages