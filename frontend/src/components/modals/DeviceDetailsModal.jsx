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

            <div className="bg-white w-150 p-3 rounded-lg shadow-xl"
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
                
                <div className="mt-2 border border-blue-400 rounded-md shadow-lg shadow-gray-300 p-2">
                    {data.map((device)=>(
                        <div key={device._id}>
                            
                                {device.formFactor === 'Desktop' && 
                                    (
                                        <div className="flex gap-1"> 
                                            <PiDesktopTower className="text-[30px]"/> 
                                            <span className="flex flex-col">
                                                <p className="text-sm pl-1">{device.manufacturer} {device.model}</p>
                                                <p className="text-xs flex gap-1"><BsCpu/>:{device.cpu} <BsMemory/>:{device.memory} <BsDeviceHdd/>:{device.storage}<BsWindowStack/>:{device.os} </p>
                                            </span>

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