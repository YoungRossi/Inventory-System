import { InputField } from "../assetsPage/InputField"

import { TbDatabaseSearch } from "react-icons/tb"
import { PiDesktopTower } from "react-icons/pi"
import { GiLaptop } from "react-icons/gi"
import { BsCpu,BsMemory, BsWindowStack, BsDeviceHdd, BsDatabaseAdd } from "react-icons/bs"
import { VscCloseAll } from "react-icons/vsc"

export function DeviceDetailsModal({ data, setShowModal, setFields }) {
    return (
        <div className="flex-col fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
            onClick={()=>setShowModal(false)}
        >

            <div className="flex flex-col bg-blue-100 w-150 rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}>

                <div className="flex gap-1 border-b border-gray-200 bg-gray-100 rounded-t-md px-2 py-1 items-center"> 
                    <BsDatabaseAdd className="text-[30px] text-blue-700"/>
                    <div className="flex flex-col w-full pb-1">
                        <p className="font-medium">Device Catalogue</p>
                        <p className="text-[12px] leading-none">Select device from the list </p>
                    </div> 

                    <VscCloseAll className="ml-auto text-red-500"/>  

                </div>    

                <div className="mx-3 mt-4">
                    <InputField
                    placeholder='Search device model...'
                    icon={TbDatabaseSearch}
                />
                </div>
                
                <div className="flex flex-col gap-1 border border-gray-200 bg-gray-100 rounded-md shadow-lg shadow-gray-300 p-2 m-3">
                    {data.map((device)=>(
                        <div key={device._id} onClick={()=>setFields(device)}>
                            
                                {device.formFactor === 'Laptop' && 
                                    (
                                        <div onClick={''} className="flex gap-1 items-center border border-gray-200 rounded-lg shadow-md shadows-gray-500"> 
                                            <div className="flex flex-col gap-1 w-full bg-gray-200 -mr-4 rounded-md">
                                                <span className="flex items-center -mb-1 bg-blue-400 rounded-t-md p-0.5 w-full">
                                                    <PiDesktopTower className="text-[23px] text-white ml-0.5"/>
                                                    <p className="text-sm pl-1 text-white">{device.manufacturer} {device.model}</p>
                                                </span>
                                            
                                                <p className="text-xs flex gap-3 p-0.5 ml-1">
                                                    <span className="flex items-center justify-center gap-1 text-[12px]"><BsCpu/>{device.cpu}</span>
                                                    <span className="flex items-center justify-center gap-1 text-[12px]"><BsMemory/>{device.memory}</span>
                                                    <span className="flex items-center justify-center gap-1 text-[12px]"><BsDeviceHdd/>{device.storage}</span> 
                                                    <span className="flex items-center justify-center gap-1 text-[12px]"><BsWindowStack/>{device.os}</span> 
                                                </p>
                                            </div>

                                            <span className="flex">
                                                
                                            </span>
                                     </div>
                                    )
                                   
                                }
                           
                           
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
}