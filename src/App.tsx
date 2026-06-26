import './App.css'
import ListItemRow from './AnimalRow';
import type AnimalResponse from './api/salesforce';
import { useState } from "react";
import AnimalInformation from './AnimalInformation';

function App() {

  const [screenState, setScreenState] = useState<AnimalResponse | null>(null);


  const renderPage = () => {
    if(screenState == null) {
      return <ListItemRow onAnimalClick={onAnimalClick} />
    }
    else {
      return <div> 
        <AnimalInformation animal={screenState}/> 
      </div>
    }
  }

  const onAnimalClick = (item: AnimalResponse) => {
    console.log("Item set");
    setScreenState(item);
  }

  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width:'100vw'
        }}
      >
        {renderPage()}
      </div>
  )
}

export default App
