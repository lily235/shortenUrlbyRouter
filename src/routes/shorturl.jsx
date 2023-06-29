// import {
//   useLoaderData,
//   useLocation,
// } from 'react-router-dom';
import * as React from 'react';

import { useLoaderData } from 'react-router-dom';

export async function loader({ params }){
    const shorturl = params.shorturl;
    return { shorturl };
}


export default function ShortUrl(){
    const {shorturl } = useLoaderData();
    //const location = useLocation();
    if(shorturl === "google")
    {
        // const RedirectPage = () => {
        //     React.useEffect(() => {
        //       window.location.replace('https://www.google.com')
        //     }, [])
        //   }
        window.location.href = 'https://www.google.com';
          

    }else{
    return(
       // <div>hello from {window.location.host}{location.pathname}!</div>
       
       <div>{shorturl}</div>
    )
    }
}

