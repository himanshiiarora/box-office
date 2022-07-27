import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config';

const Home = () => {

  const [input, setInput] = useState(''); // state used to take the input
  const [results, setResults] = useState(null); //  used to display the result
  const [searchOption, setSearchOption] = useState('shows'); // this state is to check if we need to show the shows or the actor


  const isShowsSearch = searchOption === 'shows';

  const onInputChange = (ev) => {
    setInput(ev.target.value);
   // console.log(ev.target.value); // to print whatever we type in input bar
  };


  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });

    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then(r => r.json())
    //   .then(result => {
    //     setResults(result);
    //     console.log(result);
    //   // It will fetch some data from the given link by using the input and then the response 'r' will be 
    //   // converted to json and then the result will be rendered
    // });
  };

  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch();
    }
    // press enter and search will take place
    // google ->  javascript key codes -> enter - 13
    // console.log(ev.keyCode);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  // console.log(searchOption);



  const renderResults = () => {
    if(results && results.length === 0){
      return <div>No results</div>;
    }
    if(results && results.length > 0){
      return results[0].show 
        ? results.map(item => (
          <div key={item.show.id}>{item.show.name}</div> 
          )) 
        : results.map(item => (
          <div key={item.person.id}>{item.person.name}</div> 
      ))
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input 
        type="text" 
        placeholder='Search for something' 
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows 
          <input 
            id="shows-search"
            type="radio" 
            value="shows" 
            checked = {isShowsSearch}
            onChange={onRadioChange} />

        </label>

        <label htmlFor="actors-search">
          Actors 
          <input 
            id="actors-search"
            type="radio" 
            value="people" 
            checked = {!isShowsSearch}
            onChange={onRadioChange} />

        </label>
      </div>

      {/* input element will have it's internal state*/}
      <button type="button" onClick={onSearch}> Search </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home;