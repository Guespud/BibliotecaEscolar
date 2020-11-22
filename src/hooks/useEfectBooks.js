import { useEffect,useState } from "react";
import {getBooks} from '../helpers/GetBooks';

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getBooks(category).then(book =>{
        
        setTimeout(() => {
            setstate({
                data:book,
                loading: false
            });
        },1000)
        
      
    });
  }, [category]);

  return state;
};

export default useFetchGifs;