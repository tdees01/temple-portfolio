const Footer = () => {
  return (
    <div>
        <div className="h-36 w-full bg-stone-800 flex grid grid-cols-2">
            <div>
                <h2 className="text-stone-50 text-2xl ml-4 pl-6 pt-8">Temple Dees</h2>
                {/* <div className="ml-10 h-0.25 w-175 bg-white mt-2"></div> */}
                <h2 className="text-stone-50 text-md ml-4 pl-6 pt-2 w-140">A junior Computer Science major, Interactive Media minor, passionate about the intersection of technology and design.</h2>
            </div>
            <div>
                <h4 className="text-2xl text-stone-50 pt-8 text-end mr-4 pr-6" >Connect with me</h4>
                <div className="pt-4 pr-10 gap-6 flex flex-row justify-end">
                    <div className="rounded-full w-10 h-10 outline outline-neutral-600 bg-neutral-600 hover:bg-[#b68eea]">
                        <div className="p-2">
                            <a href="https://www.linkedin.com/in/temple-dees/">
                                <svg width="24" height="24" viewBox="0 0 18 18" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <title>Linkedin</title>
                                    <path d="M16.2763 0.5H0.76377C0.33877 0.5 0.0200195 0.81875 0.0200195 1.24375V16.8625C0.0200195 17.1812 0.33877 17.5 0.76377 17.5H16.3825C16.8075 17.5 17.1263 17.1813 17.1263 16.7563V1.24375C17.02 0.81875 16.7013 0.5 16.2763 0.5ZM5.01377 14.95H2.57002V6.875H5.12002V14.95H5.01377ZM3.84502 5.8125C2.99502 5.8125 2.35752 5.06875 2.35752 4.325C2.35752 3.475 2.99502 2.8375 3.84502 2.8375C4.69502 2.8375 5.33252 3.475 5.33252 4.325C5.22627 5.06875 4.58877 5.8125 3.84502 5.8125ZM14.47 14.95H11.92V11.0187C11.92 10.0625 11.92 8.89375 10.645 8.89375C9.37002 8.89375 9.15752 9.95625 9.15752 11.0187V15.0562H6.60752V6.875H9.05127V7.9375C9.37002 7.3 10.22 6.6625 11.3888 6.6625C13.9388 6.6625 14.3638 8.3625 14.3638 10.4875V14.95H14.47Z" fill="white"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-full w-10 h-10 outline outline-neutral-600 bg-neutral-600 flex items-center justify-center hover:bg-[#b68eea]">
                        <div className="">
                            <a href="https://github.com/tdees01/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="white">
                                    <title>Github</title>
                                    <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-full w-10 h-10 outline outline-neutral-600 bg-neutral-600 hover:bg-[#b68eea]">
                        <div className="p-2">
                            <a href="mailto:temple.dees@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-stone-800 pb-4">
            <p className="text-white text-center">© 2025 Temple Dees. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer