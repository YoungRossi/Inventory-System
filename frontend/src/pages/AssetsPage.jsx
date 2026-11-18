import { NavBar } from '../components/NavBar'
import { AssetSelector } from '../components/assetsPage/AssetSelector'
import { SharedInfo } from '../components/assetsPage/SharedInfo'
import { DeviceDetails } from '../components/assetsPage/DeviceDetails'
import { DeviceCatalogue } from '../components/assetsPage/DeviceCatalogue'
import { DeviceList } from '../components/assetsPage/DeviceList'

import { useState, useEffect } from 'react'
import axios from 'axios'
import{ toast } from 'sonner'


export function AssetsPage (){
    const [isComputer, setIsComputer] = useState(true)
    const [newDeviceData, setNewDeviceData] = useState({
        type:'Computer',
        assetTag: '',
        serialNo: '',
        arrivalDate: '',
        warrantyDate: '',
        status: '',
        computerName: '',
        macAddress: '',
        assignedUser:'',
        institution:'',
        ip: '',
        department:'',
        computerDetails:{
            formFactor: '',
            manufacturer: '',
            model: '',
            cpu: '',
            memory: '',
            storage: '',
            os: '',
        },
        printerDetails:{
            manufacturer: '',
            model: '',
            printTech: '',
            functionality: '',
            colour: '',
            toner: '',
        }
});

    function handleChangeComputer(name, value){

        setNewDeviceData(prev => ({
            ...prev,

            computerDetails: {
                ...prev.computerDetails,
                type:'Computer',
                [name]: value
            }
        }));
    }

    function handleChangePrinter (name, value){

        setNewDeviceData(prev => ({
            ...prev,

            printerDetails: {
                ...prev.printerDetails,
                type:'Printer',
                [name]: value
            }
        }));

     }

    function handleComputerUpload(device) {

    setNewDeviceData(prev => ({
        ...prev,
        computerDetails: {
            ...prev.computerDetails,
            formFactor: device.formFactor,
            manufacturer: device.manufacturer,
            model: device.model,
            cpu: device.cpu,
            memory: device.memory,
            storage: device.storage,
            os: device.os
        }
    }));
}

    function handlePrinterUpload(device) {

    setNewDeviceData(prev => ({
        ...prev,
        printerDetails: {
            ...prev.printerDetails,
            manufacturer: device.manufacturer,
            model: device.model,
            printTech: device.printTech,
            functionality: device.functionality,
            colour: device.colour,
            toner: device.toner
        }
    }));
    }
    
    function handleAssetTypeChange(isComputerSelected) {
    setIsComputer(isComputerSelected);

    setNewDeviceData(prev => ({
        ...prev,
        type: isComputerSelected ? 'Computer' : 'Printer'
    }));
    }


    async function handleSubmit(e) {
        e.preventDefault()
        console.log(newDeviceData)

    try {

        const assetPayload = {
            ...newDeviceData,

            ...(newDeviceData.type === 'Computer' && {
                computerDetails: newDeviceData.computerDetails
            }),

            ...(newDeviceData.type === 'Printer' && {
                printerDetails: newDeviceData.printerDetails
            })
        };

        const response = await axios.post('/assets', assetPayload);

        if (response.status === 201) {
            toast.success(response.data.message);

            console.log('Registered Asset:', response.data.asset);
        }

    } catch (err) {

        console.error('Asset Registration Error:', err);

        toast.error(
            err.response?.data?.error || 'Something went wrong.'
        );

    }
}

    useEffect(() => {
    console.log("Updated computer details:", newDeviceData.computerDetails);
}, [newDeviceData.computerDetails]);

    return(
        <> 
            <div id='mainContainer' className='w-full min-h-screen flex flex-col bg-gray-200' >
                <NavBar/>
                <div id="ctnContainer" className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(0,25fr)_minmax(0,50fr)_minmax(0,25fr)] content-start items-stretc ml-3 gap-3">
                    <div id="leftContainer" className="bg-blue-100 w-full min-h-full mt-2">
                        <DeviceList/>
                    </div>

                    <div id="middleContainer" className="bg-white rounded-x-lg content-start p-3">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-rows-[auto_auto_auto] gap-3"
                        >
                            <AssetSelector
                                isComputer={isComputer}
                                setIsComputer={handleAssetTypeChange}
                            />

                            <SharedInfo
                                isComputer={isComputer}
                                data={newDeviceData}
                                setData={setNewDeviceData}
                            />

                            <DeviceDetails
                                isComputer={isComputer}
                                data={newDeviceData}
                                setData={setNewDeviceData}
                                handleChangePrinter={handleChangePrinter}
                                handleChangeComputer={handleChangeComputer}
                                handlePrinterUpload={handlePrinterUpload}
                                handleComputerUpload={handleComputerUpload}
                            />
                        </form>
                    </div>

                    <div id="rightContainer" className="py-2 pr-3">
                        <DeviceCatalogue/>
                    </div>
                </div>
                
            </div>
                
            
        </>
    )
 }

