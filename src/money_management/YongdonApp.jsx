import MainPage from './MainPage';
import React, { useState } from 'react';
import InputPage from './InputPage';

function YongdonApp(props) {
  const [mode, setMode] = useState("input")

  function changePage( _mode ){
    setMode( _mode )
}    
  let page = null;
  if( mode === "main" )
      page = <MainPage
              onChangePage={changePage}/>
            
  else
      page = <InputPage
              onChangePage={changePage}/>
    
  return(
      <div>
          {page}
      </div>
  );
}
export default YongdonApp;