// import { useState } from 'react'

type background = {
    background: string;
}

export default function preLoader({background}: background) {
    // const [dots, setDots] = useState(".");
    // setInterval(() => {
    //     if (dots == "..."){
    //         setDots(".");
    //     } else {
    //         setDots(dots + ".")
    //     }
    // }, 1000);

    return(
        <div className={`absolute top-0 left-0 h-full w-full bg-${background} flex items-center justify-center z-100`}>
            <div className="text-center space-y-10">
                <div className="relative flex size-11 md:size-12.5 items-center justify-center">
                {/* black ball in the center */}
                    <div className="z-10 size-3 md:size-5 rounded-full bg-black" />

                    {/* this layer spins forever */}
                    <div className="absolute inset-0 animate-[spin_4s_linear_infinite] motion-reduce:animate-none">
                        {/* this layer sets the starting angle to match your picture */}
                        <div className="absolute inset-0 -rotate-[55deg]">
                            <div className="absolute left-1/2 top-0 size-3 md:size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
                            <div className="absolute bottom-0 left-1/2 size-3 md:size-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400" />
                        </div>
                    </div>
                </div>
                {/* <img src="/preloaderImg.png" alt="" className="animate-spin" width={'100px'} /> */}
                {/* <p className="text-lg">Loading {dots}</p> */}
            </div>
        </div>
    )
}