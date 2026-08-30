export default function ResumeButton() {
    function handleClick() {
        window.open('https://drive.google.com/file/d/1hrP6p7-hYsArq2Ptu41xK-IchjJrU3cF/view?usp=sharing'), '_blank'
    }
    return (
        <div className={"fixed top-6 right-4 z-50"}>
            <button onClick={handleClick} className=" hover:bg-white text-black font-semibold py-2 px-4 rounded-full opacity-70 drop-shadow-xl outline-2 border-black">
                View Resume
            </button>
        </div>
    );
}
