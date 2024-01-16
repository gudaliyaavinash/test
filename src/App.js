import React from 'react'
import './App.css';
import Demo from './Demo';
import {
    BrowserRouter as Addto,
    Switch as S,
    Route,
  } from "react-router-dom";
import { Ricky_onecard } from './Ricky_onecard';
function App() {

   return(<>

       
        <Addto>
              <S>
                <Route path="/" exact>
                    <Demo />
                </Route>
                <Route path="/onecard/:name">
                  <Ricky_onecard />
                </Route>
              </S>
            </Addto> 
    </>
   )
}

export default App;
