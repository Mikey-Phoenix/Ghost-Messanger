import { IoLockClosedOutline, IoExitOutline, IoTrashOutline, IoCallOutline, IoMailOutline, IoAtOutline, IoChevronBackOutline } from "react-icons/io5";
import { MdPassword } from "react-icons/md";


type Props = {
    isShowSect: boolean;
    setIsShowSect: (isShowSect: boolean) => void;
    popUp: boolean;
    setPopUp: (popUp: boolean) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setPlaceholder: (placeholder: string) => void;
    isPassword: boolean | false;
    setIsPassword: (isPassword: boolean) => void;
};
export default function profileSect({ isShowSect, setIsShowSect, popUp, setPopUp, setTitle, setDescription, setPlaceholder, isPassword, setIsPassword }: Props) {
    function openPopUp({title, description, placeholder}: {
        title: string;
        description: string;
        placeholder: string;
    }) {
        setPopUp(true);
        console.log(title, placeholder, description)
        setTitle(title);
        setDescription(description);
        setPlaceholder(placeholder);
        setIsPassword(title === "Password")
    }
    return (
        <>
        <div className="w-full h-full relative overflow-y-scroll no-scrollbar">
            <div className='w-full h-[7%] md:h-[10%] md:p-5 mb-2 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className="lg:hidden text-(--primary-text-dark) hover:text-(--surface-dark)" onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Accounts</h4></div>
            </div>
            <img className="w-50 h-50 mx-auto mt-5 rounded-full" src="/public/profile.webp" alt="Profile" />
            <div className="w-full min-h-100  -mt-10 pt-10 px-2 bg-(--surface-dark) text-(--primary-text-dark) text-center">
                <div className="mt-3">
                    <h4 className="font-semibold text-xl">Name</h4>
                    <p className="text-sm opacity-60">Username</p>
                </div>
                <div className="relative mt-5 py-5 border-t-2 border-(--surface-dark-hover)">
                    <span className="absolute top-0 left-0 text-sm opacity-60">Login Settings</span>

                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={()=> openPopUp({title:"Password", description:"Enter your current password to change it", placeholder:"Password"})}>
                        <MdPassword />
                        <p>Password</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={()=> openPopUp({title:"Email Address", description:"Enter your new email address", placeholder:"Email Address"})}>
                        <IoMailOutline />
                        <p>Email Address</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={()=> openPopUp({title:"Phone Number", description:"Enter your new phone number", placeholder:"Phone Number"})}>
                        <IoCallOutline />
                        <p>Phone Number</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoLockClosedOutline />
                        <p>Two-Factor Authentication</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={()=> openPopUp({title:"Username", description:"Enter your new username", placeholder:"Username"})}>
                        <IoAtOutline />
                        <p>Username</p>
                    </div>
                </div>

                <div className="relative mt-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                    <span className="absolute top-0 left-0 text-sm opacity-60">Log out/Delete Account</span>

                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--color-main) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoExitOutline />
                        <p>Log Out</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--color-main) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoTrashOutline />
                        <p>Delete Account</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}