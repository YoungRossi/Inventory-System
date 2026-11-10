import { InputField } from "../assetsPage/InputField"
import { DeviceCard } from '../devices/DeviceCard'

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
    const [btn, setBtn] = useState('All')
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    function displayItems(type, bool=false){
        setNeedFilter(bool)
        setFilter(type)
        setBtn(type)  
        }
    
    
    function searchCatalogue(devices, text) {

    const searchText = text.toLowerCase().trim();

        const results = devices
            .map((device, index) => ({
                ...device,
                index: index
            }))
            .filter((device) =>
                device.manufacturer.toLowerCase().includes(searchText) ||
                device.model.toLowerCase().includes(searchText)
            );

        return results;
    }


    function handleSearch(value) {
        setSearchText(value);

        const results = searchCatalogue(data, value);

        console.log(results)
        console.log(value)
         console.log(typeof value);
}
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

                    <VscCloseAll onClick={()=>setShowModal(false)} className="ml-auto text-[25px] rounded-3xl text-red-500"/>  

                </div>    

                <div className="mx-3 mt-4">
                    <InputField
                    placeholder='Search device model...'
                    icon={TbDatabaseSearch}
                    onChange={handleSearch}
                />
                </div>
                
                <div className="flex flex-col gap-2 border border-gray-100 bg-white rounded-md shadow-lg shadow-gray-300 pb-2 m-3">
                    <div className="flex h-8 gap-2 w-full items-center justify-center bg-gray-100 border-b border-gray-200">
                        <button onClick={()=>displayItems('All')} 
                        className={`cursor-pointer flex border border-gray-50 rounded-4xl 
                        text-white font-medium text-xs h-6 items-center gap-1 px-2
                        hover:scale-104 hover:bg-blue-500 ${
                            btn==='All' 
                            ? 'bg-blue-500' 
                            : 'bg-blue-300'
                        }`}                               
                        >
                            All 
                        </button>
                        <button onClick={()=>displayItems("Desktop", true)} className={`cursor-pointer flex border border-gray-50 rounded-4xl 
                        text-white font-medium text-xs h-6 items-center gap-1 px-2
                        hover:scale-104 hover:bg-blue-500 ${
                            btn==='Desktop' 
                            ? 'bg-blue-500' 
                            : 'bg-blue-300'
                        }`}                    >
                            <PiDesktopTower className="text-[20px]"/>Desktop
                        </button>
                        <button onClick={()=>displayItems("Laptop", true)} className={`cursor-pointer flex border border-gray-100 rounded-4xl 
                        text-white font-medium text-xs h-6 items-center gap-1 px-2
                        hover:scale-104 hover:bg-blue-500 ${
                            btn==='Laptop' 
                            ? 'bg-blue-500' 
                            : 'bg-blue-300'
                        }`}                    >
                            <FaLaptop className="text-[17px]"/>Laptop
                        </button>
                        <button onClick={()=>displayItems("Tablet", true)} className={`cursor-pointer flex border border-gray-100 rounded-4xl 
                        text-white font-medium text-xs h-6 items-center gap-1 px-2
                        hover:scale-104 hover:bg-blue-500 ${
                            btn==='Tablet' 
                            ? 'bg-blue-500' 
                            : 'bg-blue-300'
                        }`}                    >
                            <MdOutlineTabletMac className="text-[14px] items-center"/>Tablet
                        </button>
                        
                    </div>
                    {data.map((device)=>(
                        <div key={device._id} onClick={()=>setFields(device)} className="px-3">
                                 <DeviceCard
                                    key={device._id}
                                    device={device}
                                    needFilter={needFilter}
                                    filter={filter}
                                />
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
