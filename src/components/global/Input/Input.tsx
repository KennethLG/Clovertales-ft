type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
}: InputProps) => {
  return (
    <label className="block w-full my-1">
      <span className="block text-sm font-medium text-white">{label}</span>
      {type === "textarea" ? (
        <textarea
          name={name}
          className="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
};
