import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const Show = () => {
  // custom hooks used to access the id of shows

  const { id } = useParams();
  const[show,setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( ()=>{

    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if(isMounted){
          setShow(results);
          setIsLoading(false);
        }
    })
    .catch(err => {
      if(isMounted){
        setError(err.message);
        setIsLoading(false);
      }
    })

    return () => {
      isMounted = false;
    }
  }, [id] ) 
  //it expects two inputs 1. callback function, 2. array of dependencies
  // callback function runs only when something inside array changes

  console.log('show',show);

  if(isLoading){
    return <div>Data is being loaded</div>
  }
  if(error){
    return <div > {error} Error Occured</div>
  }
  return <div>This is a show page</div>
}

export default Show