
import {useState} from 'react'

import computerType from '../../assets/computerType.avif'
import printerType from '../../assets/printerType.avif'

export function AssetSelector({isComputer, setIsComputer}){
    function selectDevice(bool){
        setIsComputer(bool)
        console.log(bool)
    }
    return(
        <>
            <div id="assetSelectorMainCtnr" className='flex flex-col items-center justify-center gap-3'>
                <div id='assetSelectorCtnr' className='bg-amber-400 w-full rounded-xl border border-gray-500 pb-2'>
                    <div id="titleSec" className="flex bg-amber-100 gap-2 items-center px-4 w-full ">
                         <div id="imgctnr">
                            <img src="" className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <p className='text-10 font-medium'>What are you adding?</p>
                            <p className='text-xs'>Select the type of equipment you want to add to the inventory</p>
                        </div>
                </div>
                <div id='contentDiv' className='flex w-full justify-center gap-3'>
                    <div onClick={() => selectDevice(true)} id="computerAssetCtnr" className='border border-radius rounded-md mt-2'>
                        <div id="computerAsset" className='flex flex-col items-center'>
                            <img src={computerType} alt="Computer asset" className="w-32 h-32 object-contain" />
                            <h2>Computer</h2>
                            <p>Desktops, Laptops, Tablets and AIOs</p>
                        </div>     
                    </div>

                    <div onClick={() => selectDevice(false)} id="printerAsset" className='border border-radius rounded-md flex flex-col items-center mt-2'>
                        <img src={printerType} alt="Computer asset" className="w-32 h-32 object-contain" />
                        <h2>Computer</h2>
                        <p>Desktops, Laptops, Tablets and AIOs</p>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default AssetSelector

