// import { useState } from 'react'


export default function preLoader() {
    // const [dots, setDots] = useState(".");
    // setInterval(() => {
    //     if (dots == "..."){
    //         setDots(".");
    //     } else {
    //         setDots(dots + ".")
    //     }
    // }, 1000);

    return(
        <div className="absolute top-0 left-0 h-screen w-screen bg-(--primary) flex items-center justify-center z-100">
            <div className="text-center space-y-10">
                <div className="relative flex size-12.5 md:size-18 items-center justify-center">
                {/* black ball in the center */}
                    <div className="z-10 size-5 md:size-7 rounded-full bg-black" />

                    {/* this layer spins forever */}
                    <div className="absolute inset-0 animate-[spin_4s_linear_infinite] motion-reduce:animate-none">
                        {/* this layer sets the starting angle to match your picture */}
                        <div className="absolute inset-0 -rotate-[55deg]">
                            <div className="absolute left-1/2 top-0 size-5 md:size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
                            <div className="absolute bottom-0 left-1/2 size-5 md:size-7 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400" />
                        </div>
                    </div>
                </div>
                {/* <img src="/preloaderImg.png" alt="" className="animate-spin" width={'100px'} /> */}
                {/* <p className="text-lg">Loading {dots}</p> */}
            </div>
        </div>
    )
}