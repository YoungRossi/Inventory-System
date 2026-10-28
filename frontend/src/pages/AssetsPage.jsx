import { NavBar } from '../components/NavBar'
import { AssetSelector } from '../components/assetsPage/AssetSelector'
import { SharedInfo } from '../components/assetsPage/SharedInfo'
import { DeviceDetails } from '../components/assetsPage/DeviceDetails'
import { DeviceCatalogue } from '../components/assetsPage/DeviceCatalogue'

import { useState } from 'react'

export function AssetsPage (){
     const [isComputer, setIsComputer] = useState(true)
    function selectDevice(bool){
        setIsComputer(bool)
        console.log(bool)
    }

    return(
        <> 
            <div id='mainContainer' className='w-full min-h-screen flex flex-col' >
                <NavBar/>
                <div id="ctnContainer" className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(0,25fr)_minmax(0,50fr)_minmax(0,25fr)] content-start items-stretch gap-3">
                    <div id="leftContainer" className="bg-blue-100 w-full min-h-full">
                        Left side
                    </div>

                    <div id="middleContainer" className="bg-green-100 grid grid-rows-[auto_auto_auto] content-start gap-3">
                        <AssetSelector 
                        isComputer={isComputer}
                        setIsComputer={setIsComputer}
                        />
                        <SharedInfo isComputer={isComputer}/>
                        <DeviceDetails isComputer={isComputer}/>

                    </div>

                    <div id="rightContainer" className="bg-orange-100 px-3">
                        <DeviceCatalogue/>
                    </div>
                </div>
            </div>
                
            
        </>
    )
 }

