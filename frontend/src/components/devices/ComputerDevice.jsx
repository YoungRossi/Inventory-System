import { useState } from "react"

import { BsCpu,BsMemory, BsWindowStack, BsDeviceHdd } from "react-icons/bs"
import { PiDesktopTower, PiWindowsLogoFill } from "react-icons/pi"

export function ComputerDevice({device}){
    return(
        <>
            <div className="cursor-pointer flex gap-1 w-full items-center rounded-b-sm border-gray-400"> 
                <div className="flex flex-col gap-1 w-full -mr-4 rounded-sm pl-2">
                    <p className="text-xs flex gap-2 p-0.5">
                         <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsCpu className="text-blue-500"/>{device.cpu}</span>
                        | <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsMemory className="text-blue-500"/>{device.memory}</span>
                        | <span className="flex items-center justify-center gap-1 text-[12px] text-black"><BsDeviceHdd className="text-blue-500"/>{device.storage}</span> 
                        | <span className="flex items-center justify-center gap-1 text-[12px] text-black"><PiWindowsLogoFill className="text-blue-500"/>{device.os}</span> 
                    </p>
                </div>
            </div>
        </>
    )

}