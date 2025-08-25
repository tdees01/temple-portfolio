const Projects = () => {
  return (
    <div className="h-screen">
        <div className="flex justify-center">
            <h2 className="text-6xl font-semibold drop-shadow-lg">Projects</h2>
        </div>
        <div className="mt-8 flex flex-row items-center gap-16 mt-32 justify-center ml-6 mr-6 ">
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[600px] max-w-[400px]">
                <div>
                    <img src="/assets/plantgpt-inlab.jpg" className="rounded-lg w-fit"></img>
                </div>
                <div>
                    <h3 className="text-4xl">PlantGPT</h3>
                    <p className="text-md">Explores conversational user interfaces applied to plant care, enabling users to engage in verbal dialogue while receiving personalized recommendations based on plant health data and voice interactions.</p>
                </div>
                <div className="flex grid-rows-4 gap-4 mt-8">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[27px] text-center text-sm">Python</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[150px] h-[27px] text-center text-sm">LLama 3.1 Model</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[27px] text-center text-sm">Arduino</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[27px] text-center text-sm">Sensors</div>
                </div>
                <div className="flex items-center mt-8 gap-16 mb-2 justify-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <a href="https://github.com/tdees01/plant-gpt" className="text-blue-500 hover:underline">Source Code</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <a href="https://drive.google.com/file/d/1qsCxRKyD-LGE8upmpEHl69D74tfElpia/view?usp=sharing" className="text-blue-500 hover:underline">View Demo</a>
                    </div>
                </div>
            </div>
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[600px] max-w-[400px]">
                <div className="flex justify-center">
                    <img src="/assets/quizzeroonihome.png" className="rounded-lg max-h-64"></img>
                </div>
                <div>
                    <h3 className="text-4xl">Quizzerooni</h3>
                    <p className="text-md">Developed a Jeopardy-style quiz game using React.js and Cluebase API and leveraged GoCaas, GoDaddy's own internal generative AI tool for GoDaddy employees and products, to generate
diverse answer choices.</p>
                </div>
                <div className="flex grid-rows-4 gap-2 mt-4">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[75px] h-[27px] text-center text-sm">React.js</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[100px] h-[27px] text-center text-sm">JavaScript</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[110px] h-[27px] text-center text-sm" >Cluebase API</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[27px] text-center col-span-3 text-sm">GoCaas</div>
                </div>
                <div className="flex items-center mt-8 gap-16 mb-2 justify-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <a href="https://github.com/tdees01/quizzerooni" className="text-blue-500 hover:underline">Source Code</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <a href="https://drive.google.com/file/d/1knNpWeSUtL2ln8rrz5eTafo81tk0n5PF/view?usp=sharing" className="text-blue-500 hover:underline">View Demo</a>
                    </div>
                </div>
            </div>
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[578px] max-w-[400px]">
                <div>
                    <img src="/assets/raspberry_p_i_1.jpg" className="rounded-lg grid content-center max-h-64"></img>
                </div>
                <div>
                    <h3 className="text-4xl">Raspberry P.I.</h3>
                    <p className="text-md">A cost-effective home security system that integrates
features like motion detection, LED alerts, and photo/video monitoring, resulting in a 51% decrease in price
compared to commercial alternatives.</p>
                </div>
                <div className="flex grid-rows-4 gap-2 mt-4">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[100px] h-[27px] text-center text-sm">Python</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[140px] h-[27px] text-center text-sm">Rasberry Pi</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[180px] h-[27px] text-center text-sm" >Motion Sensor</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[100px] h-[27px] text-center text-sm">Camera</div>
                </div>
                <div className="flex items-center mb-2 justify-center">
                    <div className="flex items-center justify-center mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <div className="flex justify-center items-center">
                            <a href="https://drive.google.com/file/d/1MsbuJIzxwHSwN5AKxwJcxvgfosE0Hu0t/view?usp=sharing" className="text-blue-500 hover:underline">View Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects