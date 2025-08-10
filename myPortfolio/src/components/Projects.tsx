import React from 'react'

const Projects = () => {
  return (
    <div className="h-screen">
        <div className="flex justify-center">
            <h2 className="text-6xl font-semibold drop-shadow-lg">Projects</h2>
        </div>
        <div className="mt-8 flex flex-col items-center gap-8">
            <div className="border-solid p-[30px] border-2">
                <h4>Project 1</h4>
            </div>
            <div className="border-solid p-[30px] border-2">
                <h4>Project 2</h4>
            </div>
            <div className="border-solid p-[30px] border-2">
                <h4>Project 3</h4>
            </div>
        </div>
    </div>
  )
}

export default Projects