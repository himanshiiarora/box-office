import React from 'react';
import { Switch , Route } from 'react-router-dom' // imported switch and route
function App() {
  return (
    /* WE SWITCH BETWEEN THE ROUTES USING THE SWITCH BELOW, AND
    WE HAVE A DEFAULT ROUTE - 404 FOR UNDEFINED ROUTES. I.E. 
    FOR THE ROUTES WHICH ARE NOT DEFINED BY US. */


    <Switch>
      <Route exact path="/"> This is home page </Route> 
      {/* route = page, the above one is home page */}

      {/* Here we need to use react because the page is rendered even if the url
      doesn't matches exactly. So to avoid that we can use either
      "exact = {true}" or just "exact" because it can take boolean values itself. */}

      <Route exact path="/starred"> 
        This is starred
      </Route>
      {/* The above page is starred page. Route tag means creating a new page. */}


      <Route> 
        This is 404 page.
      </Route>
      {/* The above page is 404 error page,displays when there are un-recognized / undefined pages rendered. */}


    </Switch>
  );
}

export default App;
