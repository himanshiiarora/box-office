import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import { apiGet } from "../misc/config";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";

const reducer = (prevState, action) => {
  // because every action has type key , hence we can use switch function
  switch (action.type) {
    case "FETCH_SUCCESS": {
      // ...prevState -> it will merge the prev state and whatever we specify after that will be overriden
      // we update isLoading state and show the action
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: true,
};

const Show = () => {
  // custom hooks used to access the id of shows

  const { id } = useParams();
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: results });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  //it expects two inputs 1. callback function, 2. array of dependencies
  // callback function runs only when something inside array changes

  console.log("show", show);
  console.log("isLoading", isLoading);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div> {error} Error Occured</div>;
  }
  return (
    <ShowPageWrapper >
      <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />

      <InfoBlock>
        <h2>Details</h2>
        <Details status={show.status} network={show.network} premiered={show.premiered} />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
