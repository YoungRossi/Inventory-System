export function InputField({ label, name, id, type, desc }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">{label}</label>

      <input
        id={id}
        name={name}
        type={type}
        className="border rounded-md p-2 bg-gray-50"
      />

      <p className="text-xs">{desc}</p>
    </div>
  );
}