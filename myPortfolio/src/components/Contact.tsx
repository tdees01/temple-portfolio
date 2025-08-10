import React from 'react'

const Contact = () => {
  return (
    <div className="h-screen">
        <div className="flex justify-center">
            <h2 className="text-6xl font-semibold drop-shadow-lg">Contact</h2>
        </div>
        <div className="flex justify-center mt-8">
            <p className="text-2xl">Feel free to reach out via email or connect with me on LinkedIn!</p>
        </div>
        <div className="flex justify-center mt-4">
            <a href="https://www.linkedin.com/in/templedees/" className="text-blue-500 hover:underline ml-4">LinkedIn</a>
        </div>
    </div>
  )
}

export default Contact