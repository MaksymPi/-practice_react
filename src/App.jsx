import { useState } from "react";
import Button from "./Button/Button";
import Header from "./Header/Header"

function App() {


  return (
    <div className="App">
      <Header/>
      <section className="section">
        <Button className='button'> people </Button>
        <Button className='button'> planets </Button>
        <Button className='button'> starships </Button>
      </section>
    </div>
  );
}

export default App;
