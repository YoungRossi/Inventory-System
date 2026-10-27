import { GrCatalog } from "react-icons/gr"

import computerType from '../../assets/computerType.avif'

export function CatalogueSelect(){
    return(
        <>
        <div className="w-full">
            <div className="flex mt-2 gap-1">
                <GrCatalog className="text-[35px]"/>
                <div className="flex flex-col -mt-1" >
                    <p className="text-10 font-medium">Device Catalogue</p>
                    <p className="text-xs">Add new device models to the catalogue </p>
                </div>
            </div>

            <div className="flex mt-3 gap-2">
                <img src={computerType} className="w-40 h-40"/>
                <div className="flex flex-col gap-2">
                    <p className="text-xs">Manufacturer: </p>
                    <p className="text-xs">Model: </p>
                    <p className="text-xs">CPU: </p>
                    <p className="text-xs">RAM: </p>
                    <p className="text-xs">SSD: </p>
                </div>
            </div>

        </div>
        </>
    )
}