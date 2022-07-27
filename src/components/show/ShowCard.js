import React from 'react'
import {Link} from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, summary }) => {
    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
      /* IF DESCRIPTION
      split helps to add spaces in our summary which peovied aray of words, then slice is used to take only first 10 words to display from the summary, after that
      the array is transformed back to string using join(' ') by empty spaces and when we have final result we simply replace all html tags with empty spaces, and 
      in the end we append 3 dots
      */
  
    return (
      <StyledShowCard>
        <div className='img-wrapper'>
          <img src={image} alt="show" />
        </div>
  
        <h1>{name}</h1>
  
        <p>{summaryAsText}</p>
  
        <div className='btns'>
          <Link to={`/show/${id}`}>Read more</Link>
          <button type="button">Star me</button>
        </div>
      </StyledShowCard>
    );
  };

export default ShowCard