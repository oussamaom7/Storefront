import { GiTicket } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function Features (){
    return(
        <div className="flex justify-around my-20">
            {/*ticket */}
            <div className="text-center">
            <div className={`relative rounded-full w-28 h-28 grid place-items-center mx-auto bg-color2`}>
                <GiTicket className="text-white w-28 h-28 p-3"/>
            </div>
            <div className="flex justify-center flex-col mt-5">
                <p className=" font-semibold text-color2">TICKETING AGENCY</p>
                <p>100% GUARANTEED ORDER</p>
            </div>
          </div>
            {/* securety */}
            <div className="text-center">
            <div className={`relative rounded-full w-28 h-28 grid place-items-center mx-auto bg-color2`}>
                <MdSecurity className="text-white w-28 h-28 p-3"/>
            </div>
            <div className="flex justify-center flex-col mt-5">
                <p className=" font-semibold text-color2 ">SECURE PAYMENT</p>
                <p>PROTECTED PAYMENT GATEWAY HERE</p>
            </div>
          </div>
            {/* customer service */}
            <div className="text-center">
            <div className={`relative rounded-full w-28 h-28 grid place-items-center mx-auto bg-color2 `}>
                <BiSupport className="text-white w-28 h-28 p-3" />
            </div>
            <div className="flex justify-center flex-col mt-5">
                <p className=" font-semibold text-color2">CUSTOMER SERVICE</p>
                <p>WE ARE AT YOUR DISPOSAL</p>
            </div>
          </div>
        </div>
    )
}