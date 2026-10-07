import { IoPersonOutline, IoLockClosedOutline, IoNotificationsOutline, IoColorPaletteOutline, IoBodyOutline, IoServerOutline, IoListOutline } from "react-icons/io5";

export default function setBar() {
    return(
        <div className='mt-5 h-full overflow-y-scroll no-scrollbar'>
            <div>
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoPersonOutline /> <span>Accounts</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Security notifications, change number</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoLockClosedOutline /> <span>Privacy</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Go ghost, disappearing messages</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoListOutline /> <span>Lists</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Groups, categories</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoNotificationsOutline /> <span>Notifications</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Message, call tones</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoColorPaletteOutline /> <span>Appearance</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Theme, wallpaper</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoServerOutline /> <span>Storage</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Manage storage</p>
                    </div>
                </div>
                               
                <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                    <div className='flex-col justify-between w-full'>
                        <h4 className='font-semibold text-base flex items-center space-x-3'><IoBodyOutline /> <span>Accessibility</span></h4>
                        <p className='text-sm opacity-60 max-w-[95%] overflow-hidden'>Animations, language</p>
                    </div>
                </div>
                               
            </div>
        </div>
    )
}