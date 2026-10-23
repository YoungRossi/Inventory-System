import { NavBar } from '../components/NavBar'
import { AssetSelector } from '../components/assetsPage/AssetSelector'
import { SharedInfo } from '../components/assetsPage/SharedInfo'

export function AssetsPage (){

    return(
        <> 
            <div id='mainContainer' className='w-full min-h-screen flex flex-col' >
                <NavBar/>
                <div id="ctnContainer" className="flex-1 grid grid-cols-1 md:grid-cols-[25%_50%_25%] items-stretch gap-3">
                    <div id="leftContainer" className="bg-blue-100 w-full min-h-full">
                        Left side
                    </div>

                    <div id="middleContainer" className="bg-green-100">
                        <AssetSelector />
                        <SharedInfo/>

                    </div>

                    <div id="rightContainer" className="bg-orange-100">
                        Right side
                    </div>
                </div>
            </div>
                
            
        </>
    )
 }

