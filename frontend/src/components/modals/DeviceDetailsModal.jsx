import { InputField } from "../assetsPage/InputField"

import { TbDatabaseSearch } from "react-icons/tb"
import { PiDesktopTower } from "react-icons/pi"
import { BsCpu,BsMemory, BsWindowStack, BsDeviceHdd, BsDatabaseAdd } from "react-icons/bs"
import { MdOutlineTabletMac } from "react-icons/md"
import { FaLaptop } from "react-icons/fa"
import { VscCloseAll } from "react-icons/vsc"

import { useState } from "react"




export function DeviceDetailsModal({ data, setShowModal, setFields, isComputer }) {
    const [filter, setFilter] = useState('Desktop')
    const [needFilter, setNeedFilter] = useState(false)

    function displayItems(type){
        setNeedFilter(true)
        setFilter(type)
            
        }

    return (
        <div className="flex-col fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
            onClick={()=>setShowModal(false)}
        >

            <div className="flex flex-col bg-blue-100 w-150 rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}>

                <div className="flex gap-1 border-b border-gray-200 bg-white rounded-t-md px-2 py-1 items-center"> 
                    <BsDatabaseAdd className="text-[30px] text-blue-700"/>
                    <div className="flex flex-col w-full pb-1">
                        <p className="font-medium">Device Catalogue</p>
                        <p className="text-[12px] leading-none">Select device from the list </p>
                    </div> 

                    <VscCloseAll className="ml-auto rounded-3xl text-red-500"/>  

                </div>    

                <div className="mx-3 mt-4">
                    <InputField
                    placeholder='Search device model...'
                    icon={TbDatabaseSearch}
                />
                </div>
                
                <div className="flex flex-col gap-2 border border-gray-100 bg-white rounded-md shadow-lg shadow-gray-300 pb-2 m-3">
                    <div className="flex h-7 gap-2 w-full items-center justify-center bg-gray-200 border-b border-gray-200">
                        <button onClick={()=>setNeedFilter(false)} 
                        className="cursor-pointer flex border border-gray-100 rounded-4xl 
                        bg-gray-400 text-white font-medium text-xs h-5 items-center gap-1 px-2">
                            All 
                        </button>
                        <button onClick={()=>displayItems("Desktop")} className="cursor-pointer flex border border-gray-500 rounded-4xl 
                        bg-gray-400 text-white font-medium text-xs items-center h-5 gap-1 px-2">
                            <PiDesktopTower className="text-[20px]"/>Desktop
                        </button>
                        <button onClick={()=>displayItems("Laptop")} className="cursor-pointer flex border border-gray-500 rounded-4xl 
                        bg-gray-400 text-white font-medium text-xs items-center h-5 gap-1 px-2">
                            <FaLaptop className="text-[17px]"/>Laptop
                        </button>
                        <button onClick={()=>displayItems("Tablet")} className="cursor-pointer flex border border-gray-500 rounded-4xl 
                        bg-gray-400 text-white font-medium text-xs gap-1 px-2 items-center h-5">
                            <MdOutlineTabletMac className="text-[14px] items-center"/>Tablet
                        </button>
                        
                    </div>
                    {data.map((device)=>(
                        <div key={device._id} onClick={()=>setFields(device)} className="px-3">
                            
                                {(!needFilter || device.formFactor === filter) && 
                                    (
                                        <div className="cursor-pointer flex gap-1 items-center border border-gray-300 shadow-lg shadows-gray-600 hover:scale-102"> 
                                            <div className="flex flex-col gap-1 w-full bg-white -mr-4 rounded-md">
                                                <span className="flex items-center -mb-1 bg-blue-700 p-0.5 w-full ml">
                                                    <PiDesktopTower className="text-[22px] text-gray-200 ml-1"/>
                                                    <p className="text-[13px]  pl-1 font-medium text-white">{device.manufacturer} {device.model}</p>
                                                </span>
                                            
                                                <p className="text-xs flex gap-3 p-0.5 ml-2">
                                                    <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsCpu className="text-blue-500"/>{device.cpu}</span>
                                                    <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsMemory className="text-blue-500"/>{device.memory}</span>
                                                    <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsDeviceHdd className="text-blue-500"/>{device.storage}</span> 
                                                    <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsWindowStack className="text-blue-500"/>{device.os}</span> 
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