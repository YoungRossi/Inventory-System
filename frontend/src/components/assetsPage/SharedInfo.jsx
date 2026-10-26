import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'

import { FaTag, FaLocationDot, FaMemory } from "react-icons/fa6"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"
import { HiMiniCpuChip } from "react-icons/hi2"
import { TbFileInfoFilled } from "react-icons/tb"
import { SiDell } from "react-icons/si"
import { GiLaptop } from "react-icons/gi"

export function SharedInfo(){
    return(
        <>
            <div id="mainCntr" className="flex flex-col w-full">
                <div id="titleSec" className="flex bg-amber-100 gap-2 items-center px-4 w-full ">
                         <div id="imgctnr">
                            <img src="" className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>Basic Information</p>
                            <p className='text-xs'>Please fill out these essential fields</p>
                        </div>
                </div>

                 <div id="formCtnr" className="w-full">
    <form className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center">

        <InputField
            id="assetTag"
            label="Asset Tag"
            placeholder="e.g. 4-2026-17"
            desc="Enter the NWRHA Asset Tag"
            icon={FaTag}
            required={true}
        />

        <InputField
            id="serialNumber"
            label="Serial Number / Service Tag"
            placeholder='e.g. MV47891'
            desc="Enter the serial number"
            icon={IoMdBarcode}
            required={true}
        />

        <InputDateField
        id=""
        label="Arrival Date"
        desc='Select the date'
        required={true}
        />
        <InputDateField
        id=""
        label="Warranty Expiry Date"
        desc='Expiry date of the warranty'
        required={true}
        />
        
        <InputSelectField
        label='Status'
        required={true}
        desc='Select the status of the equipment'
        options={
            [
                {label:'In-Service', value:'In-Service'},
                {label:'Out-of-Service', value:'Out-of-Service'},
                {label:'Under-Repair', value:'Under-Repair'}
            ]
        }
        icon={BsFillInfoCircleFill}   
        />

    </form>
</div>
            </div>
        </>
    )
}