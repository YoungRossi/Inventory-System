
import computerType from '../../assets/computerType.avif'
import printerType from '../../assets/printerType.avif'

export function AssetSelector(){
    return(
        <>
            <div id="assetSelectorMainCtnr" className='flex flex-col items-center justify-center gap-3 px-2 pb-2 bg-gray-400'>
                <div id='assetSelectorCtnr' className='bg-amber-400 w-full rounded-xl border border-gray-500 pb-2'>
                    <div id="titleSec" className="flex bg-amber-100 gap-2 items-center px-4 w-full ">
                         <div id="imgctnr">
                            <img src="" className='w-8 h-8' />
                        </div>
                        <div id="titlesCtnr" className="flex flex-col">
                            <h2>What are you adding?</h2>
                            <p className=''>Select the type of equipment you want to add to the inventory</p>
                        </div>
                </div>
                <div id='contentDiv' className='flex w-full justify-center gap-3'>
                    <div id="computerAssetCtnr" className='border border-radius rounded-md p-3'>
                        <div id="computerAsset" className='flex flex-col items-center'>
                            <img src={computerType} alt="Computer asset" className="w-32 h-32 object-contain" />
                            <h2>Computer</h2>
                            <p>Desktops, Laptops, Tablets and AIOs</p>
                        </div>     
                    </div>

                    <div id="printerAsset" className='border border-radius rounded-md flex flex-col items-center'>
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

