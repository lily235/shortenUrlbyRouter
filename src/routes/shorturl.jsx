// import {
//   useLoaderData,
//   useLocation,
// } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';

export async function loader({ params }){
    const shorturl = params.shorturl;
    return { shorturl };
}


export default function ShortUrl(){
    const {shorturl } = useLoaderData();
    //const location = useLocation();
    return(
       // <div>hello from {window.location.host}{location.pathname}!</div>
       <div>{shorturl}</div>
    )
}

