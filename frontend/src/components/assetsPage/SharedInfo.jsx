import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'

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
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <InputField
            id="assetTag"
            label="Asset Tag"
            desc="Enter the NWRHA Asset Tag"
        />

        <InputField
            id="serialNumber"
            label="Serial Number"
            desc="Enter the serial number"
        />

        <InputField
            id="model"
            label="Model"
            desc="Enter the computer model"
        />

        <InputField
            id="manufacturer"
            label="Manufacturer"
            desc="Enter the manufacturer"
        />

        <InputField
            id="processor"
            label="Processor"
            desc="Enter the CPU model"
        />

        <InputField
            id="ram"
            label="RAM"
            desc="Enter the RAM capacity"
        />

        <InputSelectField 
            id
            label='Location'
            options = {[
                { label: "Dell", value: "dell" },
                { label: "HP", value: "hp" },
                { label: "Lenovo", value: "lenovo" },
                { label: "Cisco", value: "cisco" },
                { label: "Other", value: "other" }
                ]}
            required={true}
        />
        <InputSelectField 
            id
            label='Location'
            options = {[
                { label: "Dell", value: "dell" },
                { label: "HP", value: "hp" },
                { label: "Lenovo", value: "lenovo" },
                { label: "Cisco", value: "cisco" },
                { label: "Other", value: "other" }
                ]}
            required={true}
        />

    </form>
</div>
            </div>
        </>
    )
}