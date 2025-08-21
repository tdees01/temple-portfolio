import React from 'react'

export default function ResumeButton() {
    function handleClick() {
        window.open('https://drive.google.com/file/d/1OsUXC9BsDsZT67ML5w86BGSadwwadyae/view?usp=sharing'), '_blank'
    }
    return (
        <div className={"fixed top-8 right-4 z-50"}>
            <button onClick={handleClick} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white rounded-full opacity-70 text-black font-semibold py-2 px-4 drop-shadow-xl border-black outline-2 text-4l">
                View Resume
            </button>
        </div>
    );
}
