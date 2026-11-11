

export function InputField({ label, name, id, type, desc, value, placeholder,onChange, required=false, icon: Icon }) {
  return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="text-[13px] font-medium -mb-1 md:text-[11px]">
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>

            {/* Input wrapper */}
            <div className="relative w-full">
                 {Icon && (
                    <span className="w-2 h-2">
                        <Icon
                            className="absolute left-2 top-1/2
                                    -translate-y-1/2 text-blue-400 "
                            size={18}
                        />
                    </span>
                )}

                <input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    type={type}
                    className="w-full text-xs h-8 border border-gray-300
                               rounded-md py-2 pl-8 pr-3
                               bg-gray-50 outline-none
                               focus:border-blue-500
                               focus:ring-1 focus:ring-blue-500/20 shadow shadow-gray-400
                               md:text-[12px]"
                />
            </div>

            {desc && (
                <p className="text-[10px] italic text-gray-500">
                    {desc}
                </p>
            )}
        </div>
    )
}