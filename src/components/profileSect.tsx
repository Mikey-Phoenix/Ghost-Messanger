import { IoLockClosedOutline, IoExitOutline, IoTrashOutline, IoCallOutline, IoMailOutline, IoAtOutline } from "react-icons/io5";
import { MdPassword } from "react-icons/md";

export default function profileSect() {
    return (
        <>
        <div className="w-full h-full relative overflow-y-scroll no-scrollbar">
            <img className="w-50 h-50 mx-auto mt-5 rounded-full" src="/public/profile.webp" alt="Profile" />
            <div className="w-full min-h-100  -mt-10 pt-10 px-2 bg-(--surface-dark) text-(--primary-text-dark) text-center">
                <div className="mt-3">
                    <h4 className="font-semibold text-xl">Name</h4>
                    <p className="text-sm opacity-60">Username</p>
                </div>
                <div className="relative mt-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                    <span className="absolute top-0 left-0 text-sm opacity-60">Login Settings</span>

                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <MdPassword />
                        <p>Password</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoMailOutline />
                        <p>Email Address</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoCallOutline />
                        <p>Phone Number</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoLockClosedOutline />
                        <p>Two-Factor Authentication</p>
                    </div>
                    <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
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