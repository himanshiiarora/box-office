import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [input, setInput] = useState('');
  const onInputChange = (ev) => {
    setInput(ev.target.value);
   // console.log(ev.target.value); // to print whatever we type in input bar
  }


  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
      console.log(result);
      // It will fetch some data from the given link by using the input and then the response 'r' will be 
      // converted to json and then the result will be rendered
    })
  };

  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch();
    }
    // press enter and search will take place
    // google ->  javascript key codes -> enter - 13
    // console.log(ev.keyCode);
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} /> 
      {/* input element will have it's internal state*/}
      <button type="button" onClick={onSearch}> Search </button>
    </MainPageLayout>
  )
}

export default Home