import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'


import { FaTag } from "react-icons/fa6"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"

export function DeviceDetails({isComputer}){
    return(
        <>
            <div id="mainCntr" className="flex flex-col w-full">
                <div id="titleSec" className="flex bg-amber-100 gap-2 items-center px-4 w-full ">
                         <div id="imgctnr">
                            <img src="" className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>{isComputer ? 'Computer ': 'Printer '}Details</p>
                            <p className='text-xs'>Please fill out the details</p>
                        </div>
                </div>

                 <div id="formCtnr" className="w-full">
                    {isComputer ? (
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center">
                        <InputSelectField
                            label='Form Factor'
                            required={true}
                            desc='What type of Computer it is'
                            options={
                                [
                                    {label:'Desktop', value:'Desktop'},
                                    {label:'Laptop', value:'Laptop'},
                                    {label:'All in One (AIO)', value:'All in One (AIO)'},
                                    {label:'Tablet', value:'Tablet'},
                                    {label:'Thin Client', value:'Thin Client'}
                                ]
                            }
                            icon={BsFillInfoCircleFill}   
                        />

                        <InputField
                            id="assetTag"
                            label="Asset Tag"
                            placeholder="e.g. 4-2026-17"
                            desc="Enter the NWRHA Asset Tag"
                            icon={FaTag}
                            required={true}
                        />

                        <InputField
                            id="Computer Name"
                            label="Computer Name"
                            placeholder='e.g. NW-ICT-CS-003'
                            desc="The PC name"
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
                    ):(<h2>Printer</h2>)
                    }
                </div>
            </div>
        </>
    )
}