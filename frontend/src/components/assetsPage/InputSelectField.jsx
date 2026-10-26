import { TbSquareRoundedChevronDownFilled } from "react-icons/tb"
export function InputSelectField({
    id,
    label,
    desc,
    options = [],
    value,
    onChange,
    required = false,
    icon:Icon
}) {
    return (
        <div className="flex flex-col w-full min-w-0 ">

            <label
                htmlFor={id}
                className="text-[13px] font-medium leading-5"
            >
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            <div className="relative w-full" >
                {Icon && (
                    <span className="bg-amber-400 w-2 h-2">
                        <Icon
                            className="absolute left-2 top-1/2
                                    -translate-y-1/2 text-gray-400 "
                            size={18}
                        />
                    </span>
                )}

                <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full h-8 text-xs rounded-md border
                           border-gray-300 pl-8 bg-white 
                           outline-none transition appearance-none
                           focus:border-blue-500 focus:ring-2
                           focus:ring-blue-500/20 shadow shadow-gray-400"
            >
                <option value="" disabled>Select {label}</option>

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <TbSquareRoundedChevronDownFilled
                size={16}
                className="absolute right-4 top-1/2
               -translate-y-1/2 pointer-events-none
               text-gray-400"
            />
            </div>
            
            {desc && (
                <p className="text-[11px] italic text-gray-500">
                    {desc}
                </p>
            )}

        </div>
    );
}