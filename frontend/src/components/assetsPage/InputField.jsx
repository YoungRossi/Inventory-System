export function InputField({ label, name, id, type, desc }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-[14px] -mb-2 font-medium ">{label}</label>

      <input
        id={id}
        name={name}
        type={type}
        className="border border-gray-300 rounded-md p-2 bg-gray-50"
      />

      <p className="text-[12px] italic -mt-2">{desc}</p>
    </div>
  );
}