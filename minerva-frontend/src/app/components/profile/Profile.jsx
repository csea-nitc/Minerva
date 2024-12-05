export default function Profile() {
    return (
        <div>
            <div className="font-verdana relative h-[50rem] md:flex m-0 p-0 overflow-hidden flex">
                <div className="bg-[#800080] h-[100%] sm:w-[2.5rem] w-[1.2rem] absolute"></div>
                <div className="flex flex-col md:flex-row h-[100%] w-[100%] ">
                    <div className="text-center md:transform md:rotate-90 text-[#800080] md:text-[10rem] sm:text-[6rem] text-[4.5rem] md:absolute  md:w-[52rem] sm:h-[10.75rem] flex justify-center items-center md:top-[38%] md:right-[-20rem] right-[-28rem] font-bold mb-[5rem]">
                        PROFILE
                    </div>
                    <div className="sm:h-[100%] h-[60%] text-black md:text-[1.8rem] sm:text-[1.6rem] text-[1.3rem] xl:w-[60%] lg:w-[65%] md:w-[68%] sm:w-[80%] w-[85%]  flex flex-col justify-center sm:gap-[5rem] gap-[1rem]  md:ml-[5.5rem] sm:ml-[3.5rem] ml-[2rem]">
                        <p className="mb-8 font-[100]">
                            Department of Computer Science and Engineering
                            offers undergraduate and postgraduate programs in
                            computer science and engineering and doctoral degree
                            program.
                        </p>
                        <p>
                            The fast changing scenario in Information Technology
                            necessitates the department to actively extend its
                            research and development activities. The{" "}
                            <span className="text-[#800080]">
                                current research interests of the department
                            </span>{" "}
                            include major areas of research in computer science.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
