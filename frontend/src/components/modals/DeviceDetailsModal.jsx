import { InputField } from "../assetsPage/InputField"

import { TbDatabaseSearch } from "react-icons/tb"
import { PiDesktopTower } from "react-icons/pi"
import { GiLaptop } from "react-icons/gi"
import { BsCpu,BsMemory, BsWindowStack, BsDeviceHdd } from "react-icons/bs"

export function DeviceDetailsModal({ data, setShowModal }) {
    return (
        <div className="flex-col fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
            onClick={()=>setShowModal(false)}
        >

            <div className="flex flex-col bg-white gap-3 w-150 p-3 rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}>

                <div className="flex flex-col">
                    <p className="">Device Catalogue</p>
                    <p className="text-xs">Select device from the list </p>
                </div> 

                <div className="mt-3">
                    <InputField
                    placeholder='Search device model...'
                    icon={TbDatabaseSearch}
                />
                </div>
                
                <div className="flex flex-col gap-2 border border-blue-200 bg-blue-200 rounded-md shadow-lg shadow-gray-300 p-2">
                    {data.map((device)=>(
                        <div key={device._id}>
                            
                                {device.formFactor === 'Laptop' && 
                                    (
                                        <div className="flex gap-1 items-center border border-gray-300 p-1 bg-gray-100 rounded-md shadow-md shadows-gray-300"> 
                                            <div className="flex flex-col gap-1 w-full -mr-4  rounded-md">
                                                <span className="flex items-center -mb-1 bg-blue-300 w-full">
                                                    <PiDesktopTower className="text-[23px] text-white"/>
                                                    <p className="text-sm pl-1">{device.manufacturer} {device.model}</p>
                                                </span>
                                            
                                                <p className="text-xs flex gap-3">
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