import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/mandarpandya')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)

    //     })
    // },[])
    return(
        <>
            <div className="bg-gray-500 text-white text-3xl"> GitHub Followoers : {data.followers}
            <img className="w-30 h-40 " src={data.avatar_url} alt="" />
            </div>
        </>
    )
}



export default GitHub;

export async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/mandarpandya');
    return response.json();
}



