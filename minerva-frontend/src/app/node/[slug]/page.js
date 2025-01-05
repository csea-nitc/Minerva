"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import ListComp from "../../components/newscomp/ListComp";
import ImageHero from "../../components/imagehero/Imagehero";
import Loading from "../../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home( { params : promiseParams } ) {
    const params = React.use(promiseParams); 
    const { slug } = params; 
    const Slug = decodeURIComponent( slug );

    console.log( slug ) 

    const [link, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const linksD = await fetch(
                    `${backend_url}/api/quick-links?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const linksData = await linksD.json();
                console.log( linksData ) ; 
                setLinks(linksData.data ? [...linksData.data].reverse() : []);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ImageHero
                title= {`${Slug}`}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="sm:w-[65%] w-[85%] mx-auto">
                    {link && link.length > 0 ? (
                        <>
                            {link
                                .filter((item) => item.Title === Slug ) 
                                .map((item) => (
                                    <ListComp key={item.id} item={item} />
                            ))}
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
}