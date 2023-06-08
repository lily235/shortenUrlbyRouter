import { useLocation } from 'react-router-dom';

export default function ShortUrl(){
    const location = useLocation();
    return(
        <div>hello from{window.location.host}{location.pathname}</div>
        //<div>Hello {location.pathname}</div>
    )
}