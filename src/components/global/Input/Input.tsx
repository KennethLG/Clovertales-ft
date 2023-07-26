type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: any;
  errors: any;
};

export const Input = ({
  label,
  name,
  placeholder,
  type,
  register,
  errors,
}: InputProps) => {
  return (
    <label className="block w-full my-1">
      <span className="block text-sm font-medium text-white">{label}</span>
      {type === "textarea" ? (
        <textarea
          {...register(name, { required: true })}
          name={name}
          className="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name, { required: true })}
          type={type}
          name={name}
          className="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
        />
      )}
      {errors[name] && <p>This field is required</p>}
    </label>
  );
};
