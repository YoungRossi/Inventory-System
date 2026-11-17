import { NavBar } from '../components/NavBar'
import { AssetSelector } from '../components/assetsPage/AssetSelector'
import { SharedInfo } from '../components/assetsPage/SharedInfo'
import { DeviceDetails } from '../components/assetsPage/DeviceDetails'
import { DeviceCatalogue } from '../components/assetsPage/DeviceCatalogue'
import { DeviceList } from '../components/assetsPage/DeviceList'

import { useState } from 'react'
import axios from 'axios'

import { TfiSave } from "react-icons/tfi"


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
            formfactor: '',
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

        setData(prev => ({
            ...prev,

            computerDetails: {
                ...prev.computerDetails,
                [name]: value
            }
        }));
    }

    function handleChangePrinter (name, value){

        setData(prev => ({
            ...prev,

            printerDetails: {
                ...prev.printerDetails,
                [name]: value
            }
        }));

     }
    

    function showSharedInfoData(){
        console.log(newDeviceData)
    }

    async function handleSubmit(){
        showSharedInfoData()

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

        const response = await axios.post('/api/assets', assetPayload);

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

    function selectDevice(bool){
        setIsComputer(bool)
        console.log(bool)
    }

    return(
        <> 
            <div id='mainContainer' className='w-full min-h-screen flex flex-col bg-gray-200' >
                <NavBar/>
                <div id="ctnContainer" className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(0,25fr)_minmax(0,50fr)_minmax(0,25fr)] content-start items-stretc ml-3 gap-3">
                    <div id="leftContainer" className="bg-blue-100 w-full min-h-full mt-2">
                        <DeviceList/>
                    </div>

                    <div id="middleContainer" className="bg-white grid grid-rows-[auto_auto_auto] rounded-x-lg content-start p-3 gap-3">
                        <AssetSelector 
                            isComputer={isComputer}
                            setIsComputer={setIsComputer}
                        />
                        <SharedInfo 
                            isComputer={isComputer}
                            data={newDeviceData}
                            setData={setNewDeviceData}
                        />
                        <DeviceDetails 
                            onSubmit={handleSubmit}
                            isComputer={isComputer}
                            data={newDeviceData}
                            setData={setNewDeviceData}
                            handleChangePrinter={handleChangePrinter}
                            handleChangeComputer={handleChangeComputer}

                        />
                       
                    </div>

                    <div id="rightContainer" className="py-2 pr-3">
                        <DeviceCatalogue/>
                    </div>
                </div>
                
            </div>
                
            
        </>
    )
 }

