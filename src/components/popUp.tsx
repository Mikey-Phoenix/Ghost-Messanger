import { useEffect, useState } from "react";
import { IoCloseOutline, IoEyeOutline, IoEyeOffOutline, IoRadioButtonOffOutline, IoRadioButtonOnOutline } from "react-icons/io5";

type Props = {
    popUp: boolean;
    setPopUp: (popUp: boolean) => void;
    title: string;
    description: string;
    placeholder: string;
    isPassword: boolean | false;
    setIsPassword: (isPassword: boolean) => void;

    radioPop?: boolean;
    setRadioPop?: (radioPop: boolean) => void;
    items?: any;
    active?: number;
};
export default function popUp({ popUp, setPopUp, title, description, placeholder, isPassword, setIsPassword }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(()=>{
        setShowPassword(showPassword);
    }, [showPassword]);

    isPassword = title === "Password";
    function closePopUp() {
        setPopUp(false);
    }
    function getInputType() {
        if (isPassword) return showPassword ? "text" : "password";
        if (title === "Phone Number") return "tel";
        if (title === "Email Address") return "email";
        return "text";
    }
    function returnEyeState() {
        if (showPassword) return (
            <IoEyeOffOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
        )
        return (
            <IoEyeOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
        )
    }
    return(
        <div className="fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-md p-6">
            <div className="md:w-[80%] lg:w-[60%] h-[50%] md:h-[50%] lg:h-[80%] relative top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[url('/public/pattern_1.webp')] rounded-md">
                <div className="relative w-full p-5 rounded-md bg-(--surface-dark) text-(--primary-text-dark)">
                    <h1 className="text-xl font-bold text-(--primary-text-dark)">{title}</h1>
                    <IoCloseOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={closePopUp} />
                </div>
                <div className="w-full lg:w-[70%] p-5 mt-5 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-(--primary-text-dark) text-xs md:text-sm md:text-lg">{description}</p>
                    <div className="w-full md:w-[70%] mt-3 md:mt-5 mx-auto relative bg-(--surface-dark) rounded-md ">
                        <input type={getInputType()} className="w-full p-3 md:p-5 rounded-md text-lg md:text-2xl text-center font-bold text-(--primary-text-dark) focus:outline-0 focus:ring-2 focus:ring-(--color-main)" placeholder={placeholder} pattern={title === "Phone Number" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""} />
                        {isPassword && (
                            returnEyeState()
                        )}
                    </div>
                    <button className="mt-5 md:mt-7 py-2 px-4 bg-(--color-main) text-(--primary-text-dark) text-xs md:text-sm md:text-lg font-bold rounded-md cursor-pointer">Change {title}</button>
                </div>
            </div>
        </div>
    )
}

export function RadioPop({radioPop, setRadioPop, title, items, active}: Props){
    const [selected, setSelected] = useState(active ?? 0);

    useEffect(() => {
        setSelected(active ?? 0);
    }, [active]);

    function closePopUp() {
        setRadioPop?.(false);
    }
    return(
        <div className="fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-md p-6">
            <div className="md:w-[80%] lg:w-[60%] h-[50%] md:h-[50%] lg:h-[80%] relative top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[url('/public/pattern_1.webp')] rounded-md">
                <div className="relative w-full p-5 rounded-md bg-(--surface-dark) text-(--primary-text-dark)">
                    <h1 className="text-xl font-bold text-(--primary-text-dark)">{title}</h1>
                    <IoCloseOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={closePopUp} />
                </div>
                <div className="w-full lg:w-[70%] p-5 mt-5 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-full md:w-[70%] mt-3 md:mt-5 mx-auto relative bg-(--surface-dark) rounded-md text-(--primary-text-dark) overflow-y-scroll no-scrollbar">
                        {items.map((item:string, index:number) => (
                            <div className="p-3 md:p-5 border-b border-(--surface-dark-hover) flex items-center justify-between cursor-pointer hover:bg-(--surface-dark-hover)" onClick={() => setSelected(index)}>
                                <p>{item}</p>
                                {selected === index ? (
                                    <IoRadioButtonOnOutline className="text-(--color-main) text-2xl" />
                                ):(
                                    <IoRadioButtonOffOutline className="text-(--color-main) text-2xl" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}