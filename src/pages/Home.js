import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';
import (apiGet)

const Home = () => {

  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
   // console.log(ev.target.value); // to print whatever we type in input bar
  };


  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch();
    }
    // press enter and search will take place
    // google ->  javascript key codes -> enter - 13
    // console.log(ev.keyCode);
  };


  const renderResults = () => {
    if(results && results.length === 0){
      return <div>No results</div>;
    }
    if(results && results.length > 0){
      return (
        <div> 
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div> 
          ))} 
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} /> 
      {/* input element will have it's internal state*/}
      <button type="button" onClick={onSearch}> Search </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home;