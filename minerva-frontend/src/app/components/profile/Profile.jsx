export default function Profile() {
    return (
        <>
            <div className="font-verdana relative md:h-[45rem] sm-md:h-[40rem] md:flex m-0 p-0 overflow-hidden flex overflow-y-hidden overflow-x-hidden">
                <div className="bg-[#800080] h-[100%] sm:w-[2.5rem] w-[1.2rem] absolute"></div>
                <div className="flex flex-col md:flex-row h-[100%] w-[100%] ">
                    <div className="flex justify-center items-center">
                        <div className="text-center md:transform md:rotate-90 text-[#800080] md:text-[8rem] sm:text-[5rem] text-[4.5rem] md:absolute  md:w-[52rem] sm:h-[10.75rem] flex justify-center items-center md:top-[38%] lg:right-[-15rem] md:right-[-20.5rem] right-[-28rem] font-bold md:mb-[5rem]">
                            PROFILE
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="sm:h-[100%] h-[50%] text-black xl:text-[1.7rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] xl:w-[60%] lg:w-[65%] md:w-[68%] sm:w-[80%] w-[85%]  flex flex-col md:justify-center justify-start text-justify sm:gap-[5rem] gap-[1rem] md:mr-[5rem] lg:mr-[9rem] lg-xl:mr-[10rem] xl:mr-[15rem]">
                            <p className="mb-8 font-[100]">
                                Department of Computer Science and Engineering
                                offers undergraduate and postgraduate programs
                                in computer science and engineering and doctoral
                                degree program.
                            </p>
                            <p>
                                The fast changing scenario in Information
                                Technology necessitates the department to
                                actively extend its research and development
                                activities. The{" "}
                                <span className="text-[#800080]">
                                    current research interests of the department
                                </span>{" "}
                                include major areas of research in computer
                                science.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
