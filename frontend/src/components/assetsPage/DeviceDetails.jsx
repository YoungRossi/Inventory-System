import { InputField } from './InputField'
import { InputSelectField } from './InputSelectField'
import { InputDateField } from './InputDateField'
import { DeviceDetailsModal } from '../../components/modals/DeviceDetailsModal'

import section3 from '../../assets/section3.png'

import { FaWindows, FaDroplet } from "react-icons/fa6"
import { BsDeviceHddFill } from "react-icons/bs"
import { IoMdBarcode } from "react-icons/io"
import { HiMiniCpuChip } from "react-icons/hi2"
import { LiaMemorySolid, LiaBarcodeSolid } from "react-icons/lia"
import { SiDell, SiHp } from "react-icons/si"
import { PiDesktopTowerBold } from "react-icons/pi"
import { TiPrinter } from "react-icons/ti"
import { PiBarcodeDuotone } from "react-icons/pi"
import { TbDeviceDesktopUp } from "react-icons/tb"
import { RiPrinterCloudLine } from "react-icons/ri"
import { TfiSave } from "react-icons/tfi"

import { useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'


export function DeviceDetails({isComputer, data, setData, output}){
    const[catalogueDevices, setCatalogueDevices]=useState([])
    const[showModal, setShowModal] = useState(false)
    const[deviceData, setDeviceData] = useState({})
    const[formFactor, setFormFactor] = useState('')
    const[manufacturer, setManufacturer] = useState('')
    const[model, setModel] = useState('')
    const[computerName, setComputerName] = useState('')
    const[cpu, setCpu] = useState('')
    const[memory, setMemory] = useState('')
    const[storage, setStorage] = useState('')
    const[os, setOs] = useState('')
    const[macAddress, setMacAddress] = useState('')
    const[toner, setToner] = useState('')
    const[colour, setColour] = useState('')
    const[functionality, setFunctionality] = useState('')
    const[ip, setIp] = useState('')

     const handleChangeComputer = (name, value) => {

        setData(prev => ({
            ...prev,

            computerDetails: {
                ...prev.computerDetails,
                [name]: value
            }
        }));
    }

     const handleChangePrinter = (name, value) => {

        setData(prev => ({
            ...prev,

            printerDetails: {
                ...prev.printerDetails,
                [name]: value
            }
        }));

     }

    
    function setFields(deviceData){
        const { formFactor, manufacturer, model, cpu, memory, storage, os, toner, colour, functionality } = deviceData
        setFormFactor(formFactor)
        setManufacturer(manufacturer)
        setModel(model)
        setCpu(cpu)
        setMemory(memory)
        setStorage(storage)
        setOs(os)
        setToner(toner)
        setColour(colour)
        setFunctionality(functionality)

        setShowModal(false)

        console.log(`${formFactor} ${manufacturer} ${model} ${cpu} ${memory} ${storage} ${os}`)
    }

   async function getAllDevices() {
    try {
        const response = await axios.get('/devices');

        if (!Array.isArray(response.data) || response.data.length === 0) {
            toast.info("There are no devices to choose from");
            return;
        }

        setCatalogueDevices(response.data);
        setShowModal(true);

    } catch (err) {
        console.error("Error retrieving devices:", err);
        toast.error("An error occurred while retrieving devices");
    }
}
    

    return(
        <>
            <div id="mainCntr" className="flex flex-col w-full p-3 border border-gray-200 rounded-md shadow-lg shadow-gray-400">
                <div id="titleSec" className="flex gap-2 items-center w-full mb-3">
                         <div id="imgctnr">
                            <img src={section3} className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>{isComputer ? 'Computer ': 'Printer '}Details</p>
                            <p className='text-xs'>Please fill out the details</p>
                        </div>
                        <button className='flex ml-auto bg-blue-500 w-45 h-7 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500  
                        hover:bg-blue-600 rounded-md hover:scale-103 text-xs text-white gap-2 items-center justify-center'
                        onClick={()=>getAllDevices()}>
                            {isComputer ? <TbDeviceDesktopUp  className='text-[20px] text-white'/> : <RiPrinterCloudLine className='text-[20px] text-white'/>}
                            Auto-Fill from Catalogue
                        </button>

                        {showModal && <DeviceDetailsModal setShowModal={setShowModal} data={catalogueDevices} setFields={setFields} isComputer={isComputer}/>}

                </div>

                 <div id="formCtnr" className="w-full border border-blue-100 rounded-lg p-3 bg-blue-100">
                    {isComputer ? (
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">

                        <InputSelectField
                            label='Form Factor'
                            required={true}
                            desc='What type of Computer it is'
                            value={formFactor}
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
                            onChange={setFormFactor}   
                        />

                        <InputSelectField
                            id="Manufacturer"
                            label="Manufacturer"
                            desc="Select the Brand of the Computer"
                            value={manufacturer}
                            icon={SiDell}
                            required={true}
                            options={[
                                { label:'DELL', value:'DELL' },
                                { label:'HP', value:'HP' },
                                { label:'Lenovo', value:'Lenovo' },
                                { label:'Samsung', value:'Samsung' },
                                { label:'Apple', value:'Apple' },
                            ]}
                            onChange={setManufacturer}

                        />
                        <InputField
                            id="Model"
                            label="Model"
                            placeholder='e.g. Optiplex 7040'
                            desc="Enter the cpmputer model"
                            value={model}
                            icon={LiaBarcodeSolid}
                            required={true}
                            onChange={setModel}
                        />

                        <InputField
                            label='Processor'
                            desc='The name of the processor'
                            placeholder='13th Gen Intel(R) Core(TM) i5-13500'   
                            required={true}
                            value={cpu}
                            icon={HiMiniCpuChip}
                            onChange={setCpu}
                        />

                        <InputSelectField
                            label='RAM Capacity'
                            desc='Select the total memory'
                            value={memory}
                            options={[
                                { label:'4GB', value:'4GB' },
                                { label:'8GB', value:'8GB' },
                                { label:'12GB', value:'12GB' },
                                { label:'16GB', value:'16GB' },
                                { label:'32GB', value:'32GB' },
                            ]}
                            required={true}
                            icon={LiaMemorySolid}
                            onChange={setMemory}
                        />
                        <InputSelectField
                            label='Storage Drive Capacity'
                            desc='Select the total memory'
                            value={storage}
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
                            onChange={setStorage}
                        />

                        <InputSelectField
                            label='Operating System'
                            desc="Select the computer's OS"
                            value={os}
                            options={[
                                { label:'Windows 10', value:'Windows 10' },
                                { label:'Windows 11', value:'Windows 11' },
                                { label:'Android', value:'Android' },
                                { label:'macOS', value:'macOS' },
                                { label:'Linux', value:'Linux' },
                            ]}
                            required={true}
                            icon={FaWindows}
                            onChange={setOs}
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
                            value={manufacturer}
                            onChange={setManufacturer}

                        />
                        <InputField
                            id="Model"
                            label="Model"
                            placeholder='e.g. HP LaserJet Enterprise M506n'
                            desc="Enter the cpmputer model"
                            icon={LiaBarcodeSolid}
                            required={true}
                            value={model}
                            onChange={setModel}
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
                            value={functionality}
                            onChange={setFunctionality}   
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
                            value={colour}
                            onChange={setColour}

                        />

                        <InputField
                            label='Toner Model'
                            desc='Enter the Toner Model'
                            placeholder='e.g. HP 414A/414X'   
                            required={true}
                            icon={PiBarcodeDuotone}
                            value={toner}
                            onChange={setToner}
                        />
                    </form>
                    )
                    }
                </div>

                <button onClick={()=>output()} className="h-7 w-35 text-[15px] rounded-md ml-auto shadow-md shadow-gray-500 bg-blue-600
                 text-white flex items-center justify-center gap-x-2 mt-3">
                    <TfiSave className='text-[17px]'/> Review & Save
                </button>
            </div>
        </>
    )

    }
