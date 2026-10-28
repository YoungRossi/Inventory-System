import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'

import section3 from '../../assets/section3.png'

import { FaWindows, FaDroplet } from "react-icons/fa6"
import { BsDeviceHddFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"
import { HiMiniCpuChip } from "react-icons/hi2"
import { LiaMemorySolid, LiaBarcodeSolid } from "react-icons/lia"
import { SiDell, SiHp } from "react-icons/si"
import { PiDesktopTowerBold } from "react-icons/pi"
import { TiPrinter } from "react-icons/ti"
import { PiBarcodeDuotone, PiNetworkFill } from "react-icons/pi"
import { BsPciCardNetwork } from "react-icons/bs"


export function DeviceDetails({isComputer}){
    return(
        <>
            <div id="mainCntr" className="flex flex-col w-full px-3 border rounded-md">
                <div id="titleSec" className="flex gap-2 items-center w-full mb-3 mt-2">
                         <div id="imgctnr">
                            <img src={section3} className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>{isComputer ? 'Computer ': 'Printer '}Details</p>
                            <p className='text-xs'>Please fill out the details</p>
                        </div>
                </div>

                 <div id="formCtnr" className="w-full">
                    {isComputer ? (
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">
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
                            icon={ PiDesktopTowerBold }   
                        />

                        <InputSelectField
                            id="Manufacturer"
                            label="Manufacturer"
                            desc="Select the Brand of the Computer"
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
                            desc="Enter the cpmputer model"
                            icon={LiaBarcodeSolid}
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

                        <InputField
                            label='Processor'
                            desc='The name of the processor'
                            placeholder='13th Gen Intel(R) Core(TM) i5-13500'   
                            required={true}
                            icon={HiMiniCpuChip}
                        />

                        <InputSelectField
                            label='RAM Capacity'
                            desc='Select the total amount of memory'
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
                            desc='Select the total amount of memory'
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
                            desc="Select the computer's OS"
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

                        <InputField
                            label='MAC Address'
                            desc="Enter Computer's MAC Address"
                            placeholder='.e.g. A4-BB-6D-12-34-56'   
                            required={true}
                            icon={ BsPciCardNetwork }
                        />

                    </form>

                    ):(

                        <form className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">
                       
                        <InputSelectField
                            id="Manufacturer"
                            label="Manufacturer"
                            desc="Select the Brand of the Computer"
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
                            desc="Enter the cpmputer model"
                            icon={LiaBarcodeSolid}
                            required={true}
                        />
                         <InputSelectField
                            label='Printer Functionality'
                            required={true}
                            desc='Select the features of the Printer'
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
                            desc="Select what colour the printer use"
                            icon={FaDroplet}
                            required={true}
                            options={[
                                { label:'Colour', value:'Colour' },
                                { label:'Black/White (Monochrome)', value:'Black/White (Monochrome)' }
                            ]}

                        />

                        <InputField
                            label='Toner Model'
                            desc='Enter the Toner Model'
                            placeholder='e.g. HP 414A/414X'   
                            required={true}
                            icon={PiBarcodeDuotone}
                        />

                        <InputField
                            label='IP Address'
                            desc='Enter the IP Address'
                            placeholder='e.g. 192.168.1.1'
                            required={true}
                            icon={PiNetworkFill}
                        />

                        <InputField
                            label='MAC Address'
                            desc="Enter Computer's MAC Address"
                            placeholder='.e.g. A4-BB-6D-12-34-56'   
                            required={true}
                            icon={BsPciCardNetwork}
                        />

                    </form>
                    )
                    }
                </div>
            </div>
        </>
    )
}