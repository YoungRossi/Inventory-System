
import { InputField } from "../assetsPage/InputField";
import { DeviceCard } from "../devices/DeviceCard";

import { TbDatabaseSearch } from "react-icons/tb";
import { PiDesktopTower } from "react-icons/pi";
import { MdOutlineTabletMac } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";
import { TfiPrinter } from "react-icons/tfi"

import { useState, useEffect } from "react";

export function DeviceList({
    
}) {

    // Search and filter states
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("All");
    const [btn, setBtn] = useState("All");
    const [isComputer, setIsComputer] = useState('true')

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
                className="flex flex-col bg-white rounded-lg shadow-xl"
                
            >

                {/* Header */}
                <div className="flex gap-1 border-b border-gray-200 bg-white rounded-t-md px-2 py-1 items-center">

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
                    <div className="flex h-8 gap-2 w-full items-center justify-center bg-blue-300 border-b border-gray-200">
                            <button
                            onClick={() => displayItems("All")}
                            className={`cursor-pointer flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104 hover:bg-blue-500 hover:text-white hover:border-gray-400 ${
                                btn === "All" ? "bg-gray-600 text-white" : "bg-blue-500 border-blue-300 text-white"
                            }`}
                        >
                            All
                        </button>
                       
                            <button
                            onClick={() => displayItems("Computer")}
                            className={`cursor-pointer flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104 hover:bg-blue-500 hover:text-white hover:border-gray-400 ${
                                btn === "Computer" ? "bg-gray-600 text-white" : "bg-blue-500 border-blue-300 text-white"
                            }`}
                        >
                            <PiDesktopTower className="text-[20px]" />
                            Computer
                        </button>
                        
                        <button
                            onClick={() => displayItems("Printer")}
                            className={`cursor-pointer flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104 hover:bg-blue-500 hover:text-white hover:border-gray-400 ${
                                btn === "Printer" ? "bg-gray-600 text-white" : "bg-blue-500 border-blue-300 text-white"
                            } `}
                        >
                            <TfiPrinter className="text-[14px] items-center" />
                            Printers
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto
                        gap-2 px-3 pb-3">
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
