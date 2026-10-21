
import computerType from '../../assets/computerType.avif'
import printerType from '../../assets/printerType.avif'

export function AssetSelector(){
    return(
        <>
            <div id="assetSelectorCtnr" className='flex items-center justify-center gap-3 bg-gray-400'>
                <div id="computerAssetCtnr" className='border border-radius rounded-md'>
                    <div className='computerAsset'>
                        <img src={computerType} alt="Computer asset" className="w-32 h-32 object-contain" />
                    </div>
                        
                </div>
                <div id="printerAsset" className='border border-radius rounded-md'>
                    <img src={printerType} alt="Computer asset" className="w-48 h-48 object-contain" />
                </div>
            </div>
        </>
    )
}

export default AssetSelector

