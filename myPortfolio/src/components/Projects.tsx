const Projects = () => {
  return (
    <div className="h-max ml-10">
      <div className="flex justify-center">
        <h2 className="text-6xl font-semibold drop-shadow-lg mt-4">Projects</h2>
      </div>
      <div className="mt-8 flex flex-row grid grid-cols-3 items-center gap-12 mt-32 justify-center ml-6 mr-6 ">
        <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[600px] max-w-[400px]">
          <div>
            <img
              src="/assets/plantgpt-inlab.jpg"
              className="rounded-lg w-fit"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">PlantGPT</h3>
            <p className="text-md">
              Explores conversational user interfaces applied to plant care,
              enabling users to engage in verbal dialogue while receiving
              personalized recommendations based on plant health data and voice
              interactions.
            </p>
          </div>
          <div className="flex grid-rows-4 gap-2 mt-8">
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[80px] h-[27px] text-center text-sm">
              Python
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[160px] h-[27px] text-center text-sm">
              LLama 3.1 Model
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[80px] h-[27px] text-center text-sm">
              Arduino
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[80px] h-[27px] text-center text-sm">
              Sensors
            </div>
          </div>
          <div className="flex items-center mt-8 gap-16 mb-2 justify-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://drive.google.com/file/d/1qsCxRKyD-LGE8upmpEHl69D74tfElpia/view?usp=sharing"
                className="text-black hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
        <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[600px] max-w-[400px]">
          <div className="flex justify-center">
            <img
              src="/assets/quizzeroonihome.png"
              className="rounded-lg max-h-64"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">Quizzerooni</h3>
            <p className="text-md">
              Developed a Jeopardy-style quiz game using React.js and Cluebase
              API and leveraged GoCaas, GoDaddy's own internal generative AI
              tool for GoDaddy employees and products, to generate diverse
              answer choices.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              React.js
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              JavaScript
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              Cluebase API
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              GoCaas
            </div>
          </div>
          <div className="flex items-center mt-8 gap-16 mb-2 justify-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://github.com/tdees01/quizzerooni"
                className="text-black hover:underline"
              >
                Source Code
              </a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://drive.google.com/file/d/1knNpWeSUtL2ln8rrz5eTafo81tk0n5PF/view?usp=sharing"
                className="text-black hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
        <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[578px] max-w-[400px]">
          <div>
            <img
              src="/assets/raspberry_p_i_1.jpg"
              className="rounded-lg grid content-center max-h-64 w-full"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">Raspberry P.I.</h3>
            <p className="text-md">
              A cost-effective home security system that integrates features
              like motion detection, LED alerts, and photo/video monitoring,
              resulting in a 51% decrease in price compared to commercial
              alternatives.
            </p>
          </div>
          <div className="flex grid-rows-4 gap-2 mt-4">
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[75px] h-[27px] text-center text-sm">
              React.js
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[100px] h-[27px] text-center text-sm">
              JavaScript
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[110px] h-[27px] text-center text-sm">
              Cluebase API
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[80px] h-[27px] text-center col-span-3 text-sm">
              GoCaas
            </div>
          </div>
          <div className="flex items-center mt-8 gap-16 mb-2 justify-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://github.com/tdees01/quizzerooni"
                className="text-black hover:underline"
              >
                Source Code
              </a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://drive.google.com/file/d/1knNpWeSUtL2ln8rrz5eTafo81tk0n5PF/view?usp=sharing"
                className="text-black hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
        <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[578px] max-w-[400px]">
          <div>
            <img
              src="/assets/godaddylogo2.jpg"
              className="rounded-lg grid content-center ml-10 max-h-64 w-64"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">Lead Scoring Model V2</h3>
            <p className="text-md">
              Enhanced machine learning model performance to 88% by integrating
              new customer data and applying feature engineering, improving lead
              scoring accuracy, and increasing conversion rate to 12%.
            </p>
          </div>
          <div className="flex grid-rows-4 gap-2 mt-4">
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[70px] h-[27px] text-center text-sm">
              Python
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[65px] h-[27px] text-center text-sm">
              AWS S3
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[150px] h-[27px] text-center text-sm">
              AWS SageMaker AI
            </div>
            <div className="rounded-4xl bg-[#3bbec2] border-2 w-[70px] h-[27px] text-center text-sm">
              GraphQL
            </div>
          </div>
        </div>
        <div className="border-solid pl-[20px] pr-[20px] pb-[15px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[578px] max-w-[400px] h-[545px]">
          <div>
            <img
              src="/assets/scholarix.png"
              className="rounded-lg grid content-center ml-4 mr-4 max-h-64 w-[320px] h-[260px]"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">Scholarix</h3>
            <p className="text-md">
              Scholarship finder platform for Spelman College students,
              utilizing profile info to curate list of scholarships that match
              student qualifications and interests.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              JavaScript
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              React
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              SupaBase
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              CSS
            </div>
          </div>
          <div className="flex items-center mt-8 gap-8 mb-2 justify-center">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://github.com/tdees01/scholarix"
                className="text-black hover:underline"
              >
                Source Code
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://drive.google.com/file/d/1jJqqaW77sfalBNe8qA5LsMb_DbgcU8kS/view?usp=sharing"
                className="text-black hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
        <div className="border-solid pl-[20px] pr-[20px] pb-[20px] pt-[15px] border-2 bg-white shadow-xl/20 drop-shadow-xl rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115 max-h-[578px] max-w-[400px] h-[545px]">
          <div>
            <img
              src="/assets/GalaxyGasNGo_Screenshot.png"
              className="rounded-lg grid content-center max-h-64 w-[3400px] h-[260px]"
            ></img>
          </div>
          <div>
            <h3 className="text-4xl">Galaxy Gas-N-Go</h3>
            <p className="text-md">
              A sci-fi action platformer game set in a futuristic universe where
              a small group of astronauts are on the run from the Galaxy Mafia,
              but stop inside a gas station to load up on slushies and encounter
              the slushie monster.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              GameMaker Studio 2
            </div>
            <div className="rounded-full bg-[#3bbec2] border-2 px-3 py-1 text-center text-sm inline-flex items-center justify-center">
              GameMaker Language
            </div>
          </div>
          <div className="flex items-center mt-4 gap-8 mb-8 justify-center">
            <div className="flex items-center space-x-2 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <a
                href="https://tdees.itch.io/galaxy-gas-n-go"
                className="text-black hover:underline"
              >
                Play Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects