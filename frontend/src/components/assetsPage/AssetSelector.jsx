
import {useState} from 'react'

import section1 from '../../assets/section1.png'

import { FaComputer } from "react-icons/fa6"
import { ImPrinter } from "react-icons/im"

export function AssetSelector({isComputer, setIsComputer}){
    function selectDevice(bool){
        setIsComputer(bool)
        console.log(bool)
    }
    return(
        <>
            <div id="assetSelectorMainCtnr" className='flex flex-col items-center justify-center px-3 py-2 gap-3 border border-gray-200 shadow-gray-300 shadow-lg rounded-md'>
                <div id='assetSelectorCtnr' className='w-full rounded-xl pb-2'>
                    <div id="titleSec" className="flex gap-2 items-center w-full">
                         <div id="imgctnr">
                            <img src={section1} className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>Select Deivce</p>
                            <p className='text-xs'>Select the type of equipment you want to add to the inventory</p>
                        </div>
                    </div>
                    <div id='contentDiv' className='flex w-full justify-center gap-3'>
                    <button onClick={() => selectDevice(true)} id="computerAssetBtn" 
                        className={`group mt-2 flex h-9 w-60 items-center justify-center gap-3 rounded-md shadow shadow-gray-400 transition-colors duration-200 
                            ${
                                isComputer
                                    ? "bg-blue-500"
                                    : "bg-gray-100 hover:bg-blue-500"
                            }`}
                        >
                        <FaComputer
                            className={`text-[25px] ${
                                isComputer
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white"
                            }`}
                        />
                        <p
                            className={`font-medium ${
                                isComputer
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white"
                            }`}
                        >
                            Computer
                        </p>
                    </button>
                    <button onClick={() => selectDevice(false)} id="printerAssetBtn" 
                        className={`group mt-2 flex h-9 w-60 items-center justify-center gap-3 rounded-md shadow shadow-gray-400 transition-colors duration-200 
                            ${
                                !isComputer
                                    ? "bg-blue-500"
                                    : "bg-gray-100 hover:bg-blue-500"
                            }`}
                    >
                        <ImPrinter
                            className={`text-[25px] ${
                                !isComputer
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white"
                            }`}
                        />
                        <p
                            className={`font-medium ${
                                !isComputer
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white"
                            }`}
                        >
                            Printer
                        </p>
                    </button>

                    
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AssetSelector

