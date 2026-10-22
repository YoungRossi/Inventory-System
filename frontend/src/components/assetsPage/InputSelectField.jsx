export function InputSelectField({
    id,
    label,
    desc,
    options = [],
    value,
    onChange,
    required = false
}) {
    return (
        <div className="flex flex-col gap-1.5 w-full min-w-0">

            <label
                htmlFor={id}
                className="text-sm font-medium text-gray-700"
            >
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>

            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full rounded-lg border border-gray-300
                           bg-white px-3 py-2.5 text-sm
                           outline-none transition
                           focus:border-blue-500 focus:ring-2
                           focus:ring-blue-500/20"
            >
                <option value="">Select {label}</option>

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {desc && (
                <p className="text-xs text-gray-500">{desc}</p>
            )}

        </div>
    );
}