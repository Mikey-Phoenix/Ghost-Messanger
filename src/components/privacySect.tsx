

export default function privacySect() {
    return (
        <div className="w-full h-full px-5 pt-2 bg-(--surface-dark) relative overflow-y-scroll no-scrollbar">
            <div className='w-full h-[7%] md:h-[10%] p-5 mb-2 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <h4 className='font-semibold text-xl'>Privacy</h4>
            </div>
            <div className="relative mt-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                {/* <span className="absolute top-0 left-0 text-sm text-(--primary-text-dark) opacity-60">Who sees your info</span> */}

                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                    <p>Last seen & Online</p>
                </div>
                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                    <p>Read receipts</p>
                </div>
                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                    <p>Disappearing Messages</p>
                </div>
            </div>
        </div>
    )
}