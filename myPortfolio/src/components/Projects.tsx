import React from 'react'

const Projects = () => {
  return (
    <div className="h-screen">
        <div className="flex justify-center">
            <h2 className="text-6xl font-semibold drop-shadow-lg">Projects</h2>
        </div>
        <div className="mt-8 flex flex-row items-center gap-4 mt-32 justify-center ml-6 mr-6 ">
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl">
                <div>
                    <img src="src/assets/plantgpt-inlab.jpg" className="rounded-lg w-fit"></img>
                </div>
                <div>
                    <h3 className="text-4xl">PlantGPT</h3>
                    <p className="text-md">Explores conversational user interfaces applied to plant care, providing personalized plant
care recommendations based on health data and voices to users.</p>
                </div>
                <div className="flex grid-rows-4 gap-4 mt-8">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Python</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[150px] h-[30px] text-center">LLama 3.1 Model</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center" >Arduino</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Sensors</div>
                </div>
                <div className="flex items-center mt-2 gap-24 ml-8 mb-2">
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
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl">
                <div>
                    <img src="src/assets/plantgpt-inlab.jpg" className="rounded-lg w-fit"></img>
                </div>
                <div>
                    <h3 className="text-4xl">Project 1</h3>
                    <p className="text-md">A brief description of Project 1.</p>
                </div>
                <div className="flex grid-rows-4 gap-4 mt-8">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Python</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[150px] h-[30px] text-center">LLama 3.1 Model</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center" >Arduino</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Sensors</div>
                </div>
                <div className="flex items-center mt-8 gap-24 ml-8 mb-4">
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
            <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl">
                <div>
                    <img src="src/assets/plantgpt-inlab.jpg" className="rounded-lg w-fit"></img>
                </div>
                <div>
                    <h3 className="text-4xl">Project 1</h3>
                    <p className="text-md">A brief description of Project 1.</p>
                </div>
                <div className="flex grid-rows-4 gap-4 mt-8">
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Python</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[150px] h-[30px] text-center">LLama 3.1 Model</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center" >Arduino</div>
                    <div className="rounded-4xl bg-gray-300 border-2 w-[80px] h-[30px] text-center">Sensors</div>
                </div>
                <div className="flex items-center mt-8 gap-24 ml-8 mb-4">
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
        </div>
    </div>
  )
}

export default Projects