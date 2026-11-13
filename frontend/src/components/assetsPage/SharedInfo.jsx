import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'

import section2 from '../../assets/section2.png'

import { FaTag, FaUsersViewfinder } from "react-icons/fa6"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"
import { FaHospital } from "react-icons/fa"
import { ImUsers } from "react-icons/im"
import { BiRename } from "react-icons/bi"
import { BsPciCardNetwork } from "react-icons/bs"
import { PiNetworkFill } from "react-icons/pi"
import { useState } from 'react'

export function SharedInfo({isComputer, data, setData}){
    const[assetTag, setAssetTag]= useState('')
    const[serialNo, setSerialNo]= useState('')
    const[arrivalDate, setArrivalDate]= useState('')
    const[warrantyDate, setWarrantDate]= useState('')
    const[status, setStatus]= useState('')
    const[institution, setInstitution]= useState('')
    const[department, setDepartment]= useState('')
    const[assignedUser, setAssignedUser]= useState('')
    const[macAddress, setMacAddress]= useState('')
    const[ip, setIp]= useState('')
    const[computerName, setComputerName]= useState('')

    const handleChange = (name,value)=>{
        setData(prev =>({
            ...prev,
            [name]:value
        }))
    }

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
            value={data.assetTag}
            onChange={(value) => handleChange("assetTag", value)}
        />

        <InputField
            id="serialNumber"
            label="Serial Number / Service Tag"
            placeholder='e.g. MV47891'
            desc="Enter the serial number"
            icon={IoMdBarcode}
            required={true}
            value={data.serialNo}
            onChange={(value) => handleChange("serialNo", value)}
        />
        {isComputer &&
            <InputField
                id="Computer Name"
                label="Computer Name"
                placeholder='e.g. NW-ICT-CS-003'
                value={data.computerName}
                desc="The PC name"
                icon={BiRename}
                required={true}
                onChange={(value) => handleChange("computerName", value)}
            />
        }    
        <InputField
            label='IP Address'
            desc='Enter the IP Address'
            placeholder='e.g. 192.168.1.1'
            required={true}
            icon={PiNetworkFill}
            value={data.ip}
            onChange={(value) => handleChange("ip", value)}
        />
        
        <InputField
            label='MAC Address'
            desc="Enter Computer's MAC Address"
            placeholder='.e.g. A4-BB-6D-12-34-56'   
            value={data.macAddress}
            required={true}
            icon={ BsPciCardNetwork }
            onChange={(value) => handleChange("macAddress", value)}
        />

        <InputDateField
        id=""
        label="Arrival Date"
        desc='Select the date'
        required={true}
        value={data.arrivalDate}
        onChange={(value) => handleChange("arrivalDate", value)}
        />

        <InputDateField
        id=""
        label="Warranty Expiry Date"
        desc='Expiry date of the warranty'
        required={true}
        value={data.warrantyDate}
        onChange={(value) => handleChange("warrantyDate", value)}
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
        value={data.status}
        onChange={(value) => handleChange("status", value)}  
        
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
        icon={FaHospital}
        value={data.institution}
        onChange={(value) => handleChange("institution", value)}  
        
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
        icon={FaUsersViewfinder}
        value={data.department}
        onChange={(value) => handleChange("department", value)}  
        
        />

        <InputField
            id=""
            label="Assigned User"
            placeholder='e.g. MV47891'
            desc="Enter the assigned user"
            icon={ImUsers}
            required={true}
            value={data.assignedUser}
            onChange={(value) => handleChange("assignedUser", value)}
        />

    </form>
    </div>
    </div>
        </>
    )
}