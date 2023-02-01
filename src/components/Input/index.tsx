import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
    value: string;
    error?: string;
    label: string;
    type: HTMLInputTypeAttribute;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}


export default function Input({
    value,
    error,
    label,
    type,
    onChange,
}: InputProps) {

    return (
        <Input.Div>        
            <Input.Input 
                value={value} 
                error={error} 
                label={label} 
                type={type} 
                onChange={onChange} 
            />
            <Input.Label label={label} />

            {error && <Input.Error error={error} />}
        </Input.Div>
    )
}

Input.Div = function Div({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`my-2 relative z-[0] ${className}`}>
            {children}
        </div>
    )
}

Input.Label = function Label({ label }: { label: string }) {
    return (
        <label 
            className="absolute left-0 text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor={label.toLowerCase()}
        >{label}</label>
    )
}

Input.Error = function Error({ error }: { error: string }) {
    return (
        <p className="inset-0 my-0 text-xs text-red-600 dark:text-red-500">{error}</p>
    )
}

Input.Input = function Input({ value, error, label, type, onChange, className }: InputProps) {
    return (
        <input 
            placeholder=" " 
            value={value}
            onChange={(e) => onChange(e)}
            type={type} 
            id={label.toLowerCase()} 
            className={`w-full py-2 mb-1 outline-none bg-transparent border-b focus:border-blue-500 ${error ? "border-red-600" : "border-gray-300"} appearance-none peer ${className}}`}
        />
    )
}
