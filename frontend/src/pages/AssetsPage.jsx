 import { AssetSelector } from '../components/assetsPage/AssetSelector'

export function AssetsPage (){

    return(
        <> 
            <div id="mainContainer" className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[25%_50%_25%]">
                <div id="leftContainer" className="bg-blue-100">
                    Left side
                </div>

                <div id="middleContainer" className="bg-green-100">
                    Middle section
                </div>

                <div id="rightContainer" className="bg-orange-100">
                    Right side
                </div>
        </div>
            
        </>
    )
 }

