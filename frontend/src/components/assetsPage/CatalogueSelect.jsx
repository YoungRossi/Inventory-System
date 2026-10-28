import { useState } from 'react'
import computerType from '../../assets/computerType.avif'

import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'


import { GrCatalog, GrAddCircle } from "react-icons/gr"
import { BsFillCpuFill, BsMemory, BsFillDeviceHddFill, BsWindows} from "react-icons/bs"
import { RiCloseCircleFill } from "react-icons/ri"
import { FaComputer } from "react-icons/fa6"
import { ImPrinter } from "react-icons/im"
import { FaWindows, FaDroplet } from "react-icons/fa6"
import { BsDeviceHddFill } from "react-icons/bs"

import { HiMiniCpuChip } from "react-icons/hi2"
import { LiaMemorySolid, LiaBarcodeSolid } from "react-icons/lia"
import { SiDell, SiHp } from "react-icons/si"
import { PiDesktopTowerBold, PiBarcodeDuotone } from "react-icons/pi"
import { TiPrinter } from "react-icons/ti"




export function CatalogueSelect(){
    const [btnClicked, setBtnClicked] = useState(false)
    const [isComputer, setIsComputer] = useState(true)
    return(
        <>
        {!btnClicked ? (
            <>
            <div className="flex flex-col w-full border rounded-md gap-2">
            <div className="flex mt-2 gap-2 ml-2">
                <GrCatalog className="text-[30px] text-blue-600"/>
                <div className="flex flex-col -mt-1" >
                    <p className=" text-sm font-medium">Device Catalogue</p>
                    <p className="text-xs">Add new device models to the catalogue </p>
                </div>
            </div>

            <div className="flex mt-3 gap-2">
                <img src={computerType} className="w-40 h-40"/>
                <div className="flex flex-col gap-2 mt-3">
                    
                    <div className='flex gap-1'><SiDell className='text-[23px]'/><p className="text-xs"> Optiplex 7010 </p></div> 
                    <div className='flex gap-1'><BsFillCpuFill className ='text-[20px]'/><p className="text-xs">Intel Core i5 13500f</p></div>
                    <div className='flex gap-1'><BsMemory className ='text-[20px]'/><p className="text-xs">RAM: 16GB</p></div>
                     <div className='flex gap-1'><BsFillDeviceHddFill className='text-[20px]'/><p className="text-xs">SSD: 512GB</p></div>
                     <div className='flex gap-1'><BsWindows className='text-[20px]'/><p className="text-xs">Windows 11</p></div>
                </div>
            </div>

        </div>

        <button onClick={()=>{setBtnClicked(true)}} className='flex justify-center items-center w-full h-8 rounded-md bg-blue-500 text-white text-sm mt-1 shadow-md shadow-gray-500'><GrAddCircle className='text-sm mr-1'/>Add new device</button>
        </>
        ):(
            <div className="flex flex-col w-full border rounded-md gap-2">
                <div className="flex mt-2 gap-2 ml-2">
                    <GrCatalog className="text-[30px] text-blue-600"/>
                    <div className="flex flex-col -mt-1" >
                        <p className=" text-sm font-medium">Device Catalogue</p>
                        <p className="text-xs">Add new device models to the catalogue </p>
                    </div>
                    <RiCloseCircleFill className='text-red-500' onClick={()=>{setBtnClicked(false)}}/>
                </div>

                 <div id='contentDiv' className='flex w-full justify-center gap-3 px-2'>
                                    <button onClick={() => setIsComputer(true)} id="computerAssetBtn" 
                                        className={`text-sm group mt-2 flex h-7 w-45 items-center justify-center gap-3 rounded-md shadow shadow-gray-400 transition-colors duration-200 
                                            ${
                                                isComputer
                                                    ? "bg-blue-500 text-sm"
                                                    : "bg-gray-100 hover:bg-blue-500"
                                            }`}
                                        >
                                        <FaComputer
                                            className={`text-[20px] ${
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
                                    <button onClick={() => setIsComputer(false)} id="printerAssetBtn" 
                                        className={`group text-sm mt-2 flex h-7 w-45 items-center justify-center gap-3 rounded-md shadow shadow-gray-400 transition-colors duration-200 
                                            ${
                                                !isComputer
                                                    ? "bg-blue-500"
                                                    : "bg-gray-100 hover:bg-blue-500"
                                            }`}
                                    >
                                        <ImPrinter
                                            className={`text-[20px] ${
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

                                    <div id="formCtnr" className="w-full p-2">
                                                        {isComputer ? (<>
                                                        <form className="grid grid-cols-1 md:grid-cols-1 gap-1 items-center justify-center">
                                                           <div className='border rounded-md p-2'>
                                                            <InputSelectField
                                                                label='Form Factor'
                                                                required={true}
                                                            
                                                                options={
                                                                    [
                                                                        {label:'Desktop', value:'Desktop'},
                                                                        {label:'Laptop', value:'Laptop'},
                                                                        {label:'All in One (AIO)', value:'All in One (AIO)'},
                                                                        {label:'Tablet', value:'Tablet'},
                                                                        {label:'Thin Client', value:'Thin Client'}
                                                                    ]
                                                                }
                                                                icon={ PiDesktopTowerBold }   
                                                            />
                                    
                                                            <InputSelectField
                                                                id="Manufacturer"
                                                                label="Manufacturer"
                                                                
                                                                icon={SiDell}
                                                                required={true}
                                                                options={[
                                                                    { label:'DELL', value:'DELL' },
                                                                    { label:'HP', value:'HP' },
                                                                    { label:'Lenovo', value:'Lenovo' },
                                                                    { label:'Samsung', value:'Samsung' },
                                                                    { label:'Apple', value:'Apple' },
                                                                ]}
                                    
                                                            />
                                                            <InputField
                                                                id="Model"
                                                                label="Model"
                                                                placeholder='e.g. Optiplex 7040'
                                                                
                                                                icon={LiaBarcodeSolid}
                                                                required={true}
                                                            />
                                        
                                                            <InputField
                                                                label='Processor'
                                                                
                                                                placeholder='13th Gen Intel(R) Core(TM) i5-13500'   
                                                                required={true}
                                                                icon={HiMiniCpuChip}
                                                            />
                                    
                                                            <InputSelectField
                                                                label='RAM Capacity'
                                                                
                                                                options={[
                                                                    { label:'4GB', value:'4GB' },
                                                                    { label:'8GB', value:'8GB' },
                                                                    { label:'12GB', value:'12GB' },
                                                                    { label:'16GB', value:'16GB' },
                                                                    { label:'32GB', value:'32GB' },
                                                                ]}
                                                                required={true}
                                                                icon={LiaMemorySolid}
                                                            />
                                                            <InputSelectField
                                                                label='Storage Drive Capacity'
                                                                
                                                                options={[
                                                                    { label:'64GB', value:'64GB' },
                                                                    { label:'128GB', value:'128GB' },
                                                                    { label:'256GB', value:'256GB' },
                                                                    { label:'512GB', value:'512GB' },
                                                                    { label:'1TB', value:'1TB' },
                                                                    { label:'2TB', value:'2TB' },
                                                                    { label:'3TB', value:'3TB' },
                                                                    { label:'4TB', value:'4TB' }
                                    
                                                                ]}
                                                                required={true}
                                                                icon={BsDeviceHddFill}
                                                            />
                                    
                                                            <InputSelectField
                                                                label='Operating System'
                                                                
                                                                options={[
                                                                    { label:'Windows 10', value:'WIndows 10' },
                                                                    { label:'Windows 11', value:'Windows 11' },
                                                                    { label:'Android', value:'Android' },
                                                                    { label:'macOS', value:'macOS' },
                                                                    { label:'Linux', value:'Linux' },
                                                                ]}
                                                                required={true}
                                                                icon={FaWindows}
                                                            />
                                                        
                                                        </div>
                                                            
                                                            </form>
                                                        </>
                                                        ):(
                                    
                                                            <form className="">
                                                            <div className='grid grid-cols-1 md:grid-cols-1 gap-2 items-center justify-center border p-2 rounded-md'>
                                                                <InputSelectField
                                                                id="Manufacturer"
                                                                label="Manufacturer"
                                                                
                                                                icon={SiHp}
                                                                required={true}
                                                                options={[
                                                                    { label:'HP', value:'HP' },
                                                                    { label:'Xerox', value:'Xerox' },
                                                                    { label:'Zebra', value:'Zebra' },
                                                                    { label:'Brother', value:'Brother' },
                                                                ]}
                                    
                                                            />
                                                            <InputField
                                                                id="Model"
                                                                label="Model"
                                                                placeholder='e.g. HP LaserJet Enterprise M506n'
                                                                
                                                                icon={LiaBarcodeSolid}
                                                                required={true}
                                                            />
                                                             <InputSelectField
                                                                label='Printer Functionality'
                                                                required={true}
                                                                
                                                                options={
                                                                    [
                                                                        {label:'Mulitfunction', value:'Multifunction'},
                                                                        {label:'Print-Only', value:'Print-Only'}
                                                                       
                                                                    ]
                                                                }
                                                                icon={ TiPrinter }   
                                                            />
                                                           <InputSelectField
                                                                id="colour"
                                                                label="Color Capability"
                                                            
                                                                icon={FaDroplet}
                                                                required={true}
                                                                options={[
                                                                    { label:'Colour', value:'Colour' },
                                                                    { label:'Black/White (Monochrome)', value:'Black/White (Monochrome)' }
                                                                ]}
                                    
                                                            />
                                    
                                                            <InputField
                                                                label='Toner Model'
                                                                
                                                                placeholder='e.g. HP 414A/414X'   
                                                                required={true}
                                                                icon={PiBarcodeDuotone}
                                                            />
                                                            </div>
                                                            
                                                                                           
                                                        </form>
                                                        )
                                                        }
                                                    </div>
                                </div>
            
           )}
        </>
    )
}