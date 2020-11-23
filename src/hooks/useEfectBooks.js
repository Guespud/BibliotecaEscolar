import { useEffect,useState } from "react";
import { GetBooks } from "../helpers/GetBooks";


const useFetchBooks = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  // useEffect(() => {
  //   GetBooks(category).then(book =>{
        
  //           setstate({
  //               data:book,
  //               loading: false
  //           });
  //   });
  // }, [category]);

  return state;
};

export default useFetchBooks;