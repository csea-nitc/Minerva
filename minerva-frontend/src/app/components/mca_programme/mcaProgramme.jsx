export default function McaProgramme() {
    return (
        <div className="bg-[#800080] font-verdana text-white lg:h-[25rem] overflow-hidden relative sm-md:rounded-tr-[250px] sm-md:p-[4rem] p-[2rem]">
            <div className="relative">
                <img
                    src="/images/csea.png"
                    alt="csea img"
                    className="circular-img hidden sm-md:block lg:w-[20rem] sm-md:w-[16rem] sm:w-[14rem] "
                />

                <p className="text-justify xl:text-[1.7rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] mb-[2rem]">
                    The three-year MCA programme started in 1988. The two-year
                    M.Tech. programme in Computer Science and Engineering
                    started in 1998. The two-year M.Tech. programme in Computer
                    Science and Engineering (Information Security) started in
                    2006. The two-year M.Tech. programme in Computer Science and
                    Engineering (Artificial Intelligence and Data Analytics)
                    started in 2023. PhD programme started in 2002.
                </p>
            </div>
            <div className="flex items-center justify-center mt-[4rem]">
                <img
                    src="/images/csea.png"
                    alt="csea img"
                    className=" block sm-md:hidden lg:w-[20rem] w-[14rem] "
                />
            </div>
        </div>
    );
}
