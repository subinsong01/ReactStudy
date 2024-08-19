import React, { createContext, useContext } from 'react';

const MyContext = createContext("Welcome")

function ContextExample(props) {
  return (
    <>
      <MyContext.Provider value='Hello'>
        <ShowContext />
      </MyContext.Provider>
        <MyContext.Provider value='Hi'>
        <ShowContext />
      </MyContext.Provider>
     </>
  );
}

function ShowContext(){
  const value = useContext(MyContext)
  return (
      <>
          <div>{value}</div>
          <MyContext.Consumer>
          {(value) => <div>{value}</div>}
          </MyContext.Consumer>
      </>
  )
}
export default ContextExample;