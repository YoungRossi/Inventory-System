import {ComputerDevice} from './ComputerDevice'
import { PrinterDevice } from './PrinterDevice'

import { PiDesktopTower, PiPrinter } from "react-icons/pi"

export function DeviceCard({ device, needFilter, filter }) {

    if (needFilter && device.formFactor !== filter) {
        return null;
    }


    const isComputer = device.type === "Computer";

    return (
        <div className="
            cursor-pointer flex gap-2 items-center
            border border-gray-300 rounded-lg
            shadow-md hover:scale-102
            transition-all duration-200
        ">

            <div className="flex flex-col gap-1 w-full bg-gray-100 border-gray-300 rounded-md">

                <div className="flex items-center -mb-1 bg-white p-0.5 w-full ml border-gray-300 rounded-t-sm">

                    {isComputer
                        ? <PiDesktopTower className="text-[22px] text-blue-500 ml-1"/>
                        : <PiPrinter className="text-[22px] text-blue-500 ml-1"/>
                    }

                    <p className="text-[13px] underline decoration-1 under pl-1 font-medium text-black">
                        {device.manufacturer} {device.model}
                    </p>

                </div>

                {isComputer
                    ? <ComputerDevice device={device}/>
                    : <PrinterDevice device={device}/>
                }

            </div>
        </div>
    );
}