
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

export function DeviceDetailsModal({
    data,
    setShowModal,
    setFields,
    isComputer
}) {

    // Search and filter states
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("All");
    const [btn, setBtn] = useState("All");

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

    return (
        <div
            className="flex-col fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
            onClick={() => setShowModal(false)}
        >

            <div
                className="flex flex-col bg-blue-100  w-[90vw] max-w-[600px]
                h-[75vh] max-h-[500px] min-h-[400px] rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex gap-1 border-b border-gray-200 bg-white rounded-t-md px-2 py-1 items-center">

                    <BsDatabaseAdd className="text-[30px] text-blue-700" />

                    <div className="flex flex-col w-full pb-1">
                        <p className="font-medium">
                            Device Catalogue
                        </p>

                        <p className="text-[12px] leading-none">
                            Select device from the list
                        </p>
                    </div>

                    <VscCloseAll
                        onClick={() => setShowModal(false)}
                        className="ml-auto text-[25px] rounded-3xl text-red-500 cursor-pointer"
                    />

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

                        {isComputer ? (
                            <>
                            <button
                            onClick={() => displayItems("All")}
                            className={`cursor-pointer flex border rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104  ${
                                btn === "All" ? "bg-gray-600 text-white border-gray-500 hover:bg-blue-500 hover:text-white hover:border-gray-400" :
                                 "bg-blue-500 border-blue-400 text-white hover:bg-gray-600 hover:text-white hover:border-gray-400"
                            }`}
                        >
                            All
                        </button>
                            <button
                            onClick={() => displayItems("Desktop")}
                            className={`cursor-pointer flex border border-gray-50 rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104 ${
                                btn === "Desktop" ? "bg-gray-600 text-white border-gray-500 hover:bg-blue-500 hover:text-white hover:border-gray-400" :
                                 "bg-blue-500 border-blue-400 text-white hover:bg-gray-600 hover:text-white hover:border-gray-400"
                            }`}
                        >
                            <PiDesktopTower className="text-[20px]" />
                            Desktop
                        </button>


                        <button
                            onClick={() => displayItems("Laptop")}
                            className={`cursor-pointer flex border border-gray-100 rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104 ${
                                btn === "Laptop" ? "bg-gray-600 text-white border-gray-500 hover:bg-blue-500 hover:text-white hover:border-gray-400" :
                                 "bg-blue-500 border-blue-300 text-white hover:bg-gray-600 hover:text-white hover:border-gray-400"
                            }`}
                        >
                            <FaLaptop className="text-[17px]" />
                            Laptop
                        </button>


                        <button
                            onClick={() => displayItems("Tablet")}
                            className={`cursor-pointer flex border border-gray-100 rounded-4xl font-medium text-xs h-6 items-center gap-1 px-2 hover:scale-104  ${
                                btn === "Tablet" ? "bg-gray-600 text-white border-gray-500 hover:bg-blue-500 hover:text-white hover:border-gray-400" :
                                 "bg-blue-500 border-blue-300 text-white hover:bg-gray-600 hover:text-white hover:border-gray-400"
                            }`}
                        >
                            <MdOutlineTabletMac className="text-[14px] items-center" />
                            Tablet
                        </button>
                        </>
                        ):(<button
                            onClick={() => displayItems("Printer")}
                            className="cursor-pointer flex border bg-blue-500 border-gray-100 rounded-4xl 
                                text-white font-medium text-xs h-6 items-center gap-1 px-2"
                        >
                            <TfiPrinter className="text-[14px] items-center" />
                            Printers
                        </button>)}
                    </div>

                    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto
                        gap-2 px-3 pb-3">

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

                    </div>

                </div>

            </div>

        </div>
    );
}
