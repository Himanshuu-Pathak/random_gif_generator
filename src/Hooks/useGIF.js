import React , { useEffect, useState } from "react";
import axios from "axios";

const useGIF = (tag) => {
        const [gif, setGif] = useState('');
        const [loading, setLoading] = useState('false');

    async function fetchData(tag){
        setLoading(true)
        const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=kEHtFlXVMy8FQIqAXhexxPrXHyoy1HZc`
        const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=kEHtFlXVMy8FQIqAXhexxPrXHyoy1HZc&tag=&{tag}`;
        const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        const imageSource = data.data.images.original.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() =>{
        fetchData('car');
    },[])

   return {gif, loading, fetchData};
     
};

export default useGIF