import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'

import section2 from '../../assets/section2.png'

import { FaTag, FaLocationDot, FaMemory } from "react-icons/fa6"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"
import { HiMiniCpuChip } from "react-icons/hi2"
import { TbFileInfoFilled } from "react-icons/tb"
import { SiDell } from "react-icons/si"
import { GiLaptop } from "react-icons/gi"
import { useState } from 'react'



export function SharedInfo({isComputer}){
    const[assetTag, setAssetTag]= useState('')
    const[serialNo, setSerialNo]= useState('')
    const[arrivalDate, setArrivalDate]= useState('')
    const[warrantyDate, setWarrantDate]= useState('')
    const[status, setStatus]= useState('')
    const[institution, setInstitution]= useState('')
    const[department, setDepartment]= useState('')
    const[assignedUser, setAssignedUser]= useState('')

    return(
        <>
            <div id="mainCntr" className="flex flex-col w-full p-3 shadow-lg shadow-gray-300 border-gray-200 border rounded-md">
                <div id="titleSec" className="flex gap-2 items-center w-full mb-3">
                         <div id="imgctnr">
                            <img src={section2} className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium -mb-1'>{isComputer ? 'Computer':'Printer'} Information</p>
                            <p className='text-xs'>Please fill out these essential fields</p>
                        </div>
                </div>

                 <div id="formCtnr" className="w-full">
    <form className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-0 items-center justify-center border rounded-lg border-gray-200 bg-blue-100 p-3">

        <InputField
            id="assetTag"
            label="Asset Tag"
            placeholder="e.g. 4-2026-17"
            desc="Enter the NWRHA Asset Tag"
            icon={FaTag}
            required={false}
            value={assetTag}
            onChange={setAssetTag}
        />

        <InputField
            id="serialNumber"
            label="Serial Number / Service Tag"
            placeholder='e.g. MV47891'
            desc="Enter the serial number"
            icon={IoMdBarcode}
            required={true}
            value={serialNo}
            onChange={setSerialNo}
        />

        <InputDateField
        id=""
        label="Arrival Date"
        desc='Select the date'
        required={true}
        value={arrivalDate}
        onChange={setArrivalDate}
        />

        <InputDateField
        id=""
        label="Warranty Expiry Date"
        desc='Expiry date of the warranty'
        required={true}
        value={arrivalDate}
        onChange={setWarrantDate}
        />
        
        <InputSelectField
        label='Status'
        required={true}
        desc='Select equipment status'
        options={
            [
                {label:'In-Service', value:'In-Service'},
                {label:'Out-of-Service', value:'Out-of-Service'},
                {label:'Under-Repair', value:'Under-Repair'}
            ]
        }
        icon={BsFillInfoCircleFill}
        value={status}
        onChange={setStatus}  
        
        />
        <InputSelectField
        label='Institution'
        required={true}
        desc='Select Institution'
        options={
            [
                {label:'Port of Spain General', value:'Port of Spain General'},
                {label:'St. Anns Phychiatric', value:'St. Anns Phychiatric'},
                {label:'St. James Medical', value:'St. James Medical'}
            ]
        }
        icon={BsFillInfoCircleFill}
        value={institution}
        onChange={setStatus}  
        
        />
        <InputSelectField
        label='Department'
        required={true}
        desc='Select Department'
        options={
            [
                {label:'Human Resource', value:'Human Resource'},
                {label:'Transport', value:'Transport'},
                {label:'Finance', value:'Finance'}
            ]
        }
        icon={BsFillInfoCircleFill}
        value={department}
        onChange={setStatus}  
        
        />

        <InputField
            id=""
            label="Assigned User"
            placeholder='e.g. MV47891'
            desc="Enter the assigned user"
            icon={IoMdBarcode}
            required={true}
            value={assignedUser}
            onChange={setSerialNo}
        />

    </form>
</div>
            </div>
        </>
    )
}