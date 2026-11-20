
import { InputField } from "../assetsPage/InputField";
import { DeviceCard } from "../devices/DeviceCard";

import { TbDatabaseSearch } from "react-icons/tb";
import { PiDesktopTower, PiPrinter } from "react-icons/pi";
import { MdOutlineTabletMac } from "react-icons/md";
import { FaLaptop, FaTags} from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi"
import { Hp } from '@thesvg/react'



import { useState, useEffect } from "react";
import axios from 'axios'

export function DeviceList({
    
}) {

    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("All");
    const [btn, setBtn] = useState("All");
    const [isComputer, setIsComputer] = useState('true')
    const [assets, setAssets] = useState([])

     useEffect(() => {
        setFilter("All");
        setBtn("All");
        setSearchText("");
    }, [isComputer]);

   
    // Update selected category
    function displayItems(type) {
        setFilter(type);
        setBtn(type);
    }

    async function getAllAssets(){
        try{
            const result = await axios.get('/assets')
            setAssets(result.data)
        }catch(err){
            console.log('Error Retrieving Data: ', err)
        }
        
    }

     useEffect(()=>{
        getAllAssets()
    },[assets])


    {/*   
    const catalogueData = data.filter((device) => {

    const search = searchText.toLowerCase().trim();

    const matchesSearch =
        device.manufacturer.toLowerCase().includes(search) ||
        device.model.toLowerCase().includes(search);

    // Match the device being added
    const matchesType =
        isComputer
            ? device.type === "Computer"
            : device.type === "Printer";

    // Match selected catalogue category
    const matchesCategory =
        filter === "All" ||
        device.type?.toLowerCase() === filter.toLowerCase() ||
        device.formFactor?.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesType && matchesCategory;
});
    */}
    return (
        <div
            className=""
        >

            <div
                className="flex flex-col bg-white rounded-lg shadow-xlh-[120vh] max-h-150 min-h-150"
            >

                {/* Header */}
                <div className="flex gap-1 border-b border-gray-200 bg-white rounded-t-md px-2 py-1 items-center ">

                    <BsDatabaseAdd className="text-[30px] text-blue-700" />

                    <div className="flex flex-col w-full pb-1">
                        <p className="font-medium">
                            Device List
                        </p>

                        <p className="text-[12px] leading-none">
                            List of devices from the database 
                        </p>
                    </div>
                </div>


                {/* Search */}
                <div className="mx-3 mt-4">

                    <InputField
                        placeholder="Search device manufacturer or model..."
                        icon={TbDatabaseSearch}
                        onChange={setSearchText}
                    />

                </div>


                {/* Catalogue */}
                <div className="flex flex-col flex-1 gap-2 border border-gray-100 bg-white rounded-md shadow-lg shadow-gray-300 pb-2 m-3 h-[370px] overflow-hidden">

                    {/* Category buttons */}
                    <div className="flex h-8 gap-5 w-full items-center justify-center bg-blue-50 border-b border-gray-200">
                            <button
                            onClick={() => displayItems("All")}
                            className={`flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2   ${
                                btn === "All" ? "bg-blue-400 text-white border-blue-200 hover:scale-100 cursor-default" :
                                 "bg-white border-gray-200 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer"
                            }`}
                        >
                            All
                        </button>
                       
                            <button
                            onClick={() => displayItems("Computer")}
                            className={`flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2  ${
                                btn === "Computer" ? "bg-blue-400 text-white border-blue-200 hover:scale-100 cursor-default" :
                                 "bg-white border-gray-200 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer"
                            }`}
                        >
                            <PiDesktopTower className="text-[20px]" />
                            Computer
                        </button>
                        
                        <button
                            onClick={() => displayItems("Printer")}
                            className={`flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 ${
                                btn === "Printer" ? "bg-blue-400 text-white border-blue-200 hover:scale-100 cursor-default" :
                                 "bg-white border-gray-200 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer"
                            } `}
                        >
                            <TfiPrinter className="text-[14px] items-center" />
                            Printers
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto
                        gap-2 px-2 pb-3">
                            {assets.length > 0 ? (
                                assets.map((asset) => {
                                    const details = asset.type === "Computer"
                                        ? asset.computerDetails
                                        : asset.printerDetails;

                                    return (
                                        <div key={asset._id }
                                            className="border border-gray-200 h-20 rounded-md flex flex-col p-1 gap-1.5"
                                        >
                                            <span className="p-0.5 border rounded-md">
                                                {asset.type === "Computer" ? <PiDesktopTower className="text-[23px]"/> : <PiPrinter className="text-[23px]"/>}
                                            </span>
                                            <div>
                                                <div className="text-[9px]">
                                                    <div className="flex flex-col">
                                                        <p className='text-[12px] font-medium underline leading-tight'>{details?.manufacturer} {details?.model}</p>
                                                        <p className='text-[10px] italic leading-tight'>{asset.computerName}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className=" flex border-t border-gray-100 h-3 bg-blue-200">
                                                <FaTags className="leading-tight" />        
                                                <span className="text-[12px] leading-tight">{asset.assetTag}</span>
                                            </div>
                                            
                                        </div>
                                    );
                                })
                            ) : (
                                <div>
                                    <p>There are no assets on list</p>
                                </div>
                            )}
                            {/*
                        {catalogueData.length > 0 ? (

                            catalogueData.map((device) => (

                                <div
                                    key={device._id}
                                    onClick={() => setFields(device)}
                                    className="cursor-pointer"
                                >
                                    <DeviceCard
                                        device={device}
                                        needFilter={filter !== "All"}
                                        filter={filter}
                                    />
                                </div>

                            ))

                        ) : (

                            <div className="flex flex-1 items-center justify-center text-gray-400 text-sm">
                                No devices found.
                            </div>

                        )}
                        */}
                    </div>

                </div>

            </div>

        </div>
    );
}
