import { FaCopy } from "react-icons/fa"
import { RiColorFilterFill } from "react-icons/ri"
import { GiLargePaintBrush } from "react-icons/gi"

export function PrinterDevice({ device }) {
    return (
        <div className="flex gap-3 ml-2">

            <span className="flex items-center gap-1 text-black text-[12px]">
                <GiLargePaintBrush className="text-blue-500"/>
                {device.toner}
            </span>

            <span className="flex items-center gap-1 text-black text-[12px]">
                <RiColorFilterFill className="text-blue-500"/>
                {device.colour}
            </span>

            <span className="flex items-center gap-1 text-black text-[12px]">
                <FaCopy className="text-blue-500"/>
                {device.functionality}
            </span>

        </div>
    );
}