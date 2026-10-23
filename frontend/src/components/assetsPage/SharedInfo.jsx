import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'

import { FaTag, FaLocationDot, FaMemory } from "react-icons/fa6"
import { BsSdCardFill, BsDeviceHddFill } from "react-icons/bs"
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
                            <h2>Basic Information</h2>
                            <p className=''>Please fill out these essential fields</p>
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

       <InputSelectField 
            id
            label='Manufacturer'
            options = {[
                { label: "Dell", value: "dell" },
                { label: "HP", value: "hp" },
                { label: "Lenovo", value: "lenovo" }
                ]}
            required={true}
            desc="Select the Brand Name"
            icon={SiDell}
        />

        <InputField
            id="model"
            label="Model"
            placeholder='e.g. Optiplex 3000'
            desc="Enter the computer model"
            icon={TbFileInfoFilled}
            required={true}
        />

        <InputField
            id="processor"
            label="Processor"
            placeholder='e.g. Intel Core i7 13700K'
            desc="Enter the CPU model"
            icon={HiMiniCpuChip}
            required={true}
        />

        <InputSelectField 
            id
            label='RAM'
            options = {[
                { label: "4GB", value: "4GB" },
                { label: "6GB", value: "6GB" },
                { label: "8GB", value: "8GB" },
                { label: "16GB", value: "16GB" },
                { label: "32GB", value: "32GB" }
                ]}
            required={true}
            icon={FaMemory}
            desc='Enter the total amount of RAM memory'
        />
        <InputSelectField
            id="HDD"
            label="Storage Capacity"
            options={[
                {label: "256GB", value: "256GB"},
                {label: "512GB", value: "512GB"},
                {label: "1TB", value: "1TB"},
                {label: "2TB", value: "2TB"},
                {label: "3TB", value: "3TB"},
            ]}
            desc="Enter the storage "
            icon={BsDeviceHddFill}
            required={true}
        />

        <InputSelectField 
            id
            label='Assigned Location'
            options = {[
                { label: "Head Office", value: "Head Office" },
                { label: "Port of Spain General Hospital", value: "Port of Spain General Hospital" },
                { label: "St. James Medical Complex", value: "St. James Medical Complex" },
                { label: "St. Anns Psychiatric Hospital", value: "St. Anns Psychiatric Hospital" }

                ]}
            required={true}
            icon={FaLocationDot}
            desc='Select the assigned institution for the device'
        />
        <InputSelectField 
            id
            label='Form Factor'
            options = {[
                { label: "Dell", value: "dell" },
                { label: "HP", value: "hp" },
                { label: "Lenovo", value: "lenovo" },
                { label: "Cisco", value: "cisco" },
                { label: "Other", value: "other" }
                ]}
            required={true}
            icon={GiLaptop}
            desc='Select what type of device it is'
        />

         <InputField
            id=""
            label="Assigned User"
            placeholder='e.g. Jane Doe'
            desc="Enter the CPU model"
            icon={HiMiniCpuChip}
            required={false}
        />

    </form>
</div>
            </div>
        </>
    )
}