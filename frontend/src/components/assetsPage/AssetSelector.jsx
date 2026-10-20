
import computerType from '../../assets/computerType.avif'

export function AssetSelector(){
    return(
        <>
            <div id="assetSelectorCtn" className=''>
                <div id="computerAsset">
                    <img src={computerType} alt="Computer asset" className="w-48 h-48 object-contain" />
                </div>
            </div>
        </>
    )
}

export default AssetSelector

