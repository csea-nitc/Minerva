import { ListStart } from "lucide-react";
import DropdownButtons from "../dropdownbuttons/Dropdownbuttons";
import ListComp from "../newscomp/ListComp";
import { useState , useEffect} from "react";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";

const backend_url = process.env.NEXT_PUBLIC_API_URL ; 
const token  = process.env.NEXT_PUBLIC_TOKEN ; 

export default function InfoSection({
    title,
    para1,
    para2,
    img1,
    img2
}) {
    const [data , setData]  = useState( [] ); 
    
    let name ; 
  
    useEffect( ( ) => {

        if( title === "B.Tech") name = "b-teches"; 
        if ( title === "M.Tech-CSE") name = "m-teches"; 
        if ( title === "M.Tech-CSE (IS)") name = "m-tech-is";
        if ( title === "M.Tech-CSE (AIDA)") name = "m-tech-aidas";

        const fetchData = async () => {
            try {
                const data = await fetch(
                    `${backend_url}/api/programme-${name}?populate[pdf][populate]=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const Data = await data.json();
                setData( Data.data ? Data.data : [] );
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        if( title !== "PhD" )fetchData();
    }, [title] ); 
    return (
        <div className="flex flex-col max-1240:pr-[2vw] mb-[10vh] ">
            
            {/* Phd tab does not need this navigation */}
            {  title !== "PhD" &&  ( <DropdownButtons data = { data }  />) }
        
            {/* about section */}
            <div className=" font-jakarta text-[1.2em] leading-[35px] max-800:leading-7">
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-justify ">
                    <div className="w-[90%] flex  order-1 sm:order-2 mx-auto sm:justify-self-end sm:mx-0">
                        <img
                            src={img1}
                            className="object-cover h-[300px] shadow-[-20px_20px_0px_#CF92CE]  "
                        />
                    </div>
                    <p className="w-full  pr-5 pl-2 sm:px-0 sm:pr-4 sm:pl-0  font-jakarta order-2 mt-6 sm:order-none sm:my-auto">
                        {para1}
                    </p>
                </div>

                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-justify">
                    <div className="w-[90%] mx-auto">
                        <img
                            src={img2}
                            className="object-cover h-[300px]  shadow-[-20px_20px_0px_#CF92CE]"
                        />
                    </div>
                    <p className="w-full mt-6 sm:my-auto  font-jakarta pl-2 pr-5 ">
                        {para2}
                    </p>
                </div>
            </div>

        </div>
    );
}
