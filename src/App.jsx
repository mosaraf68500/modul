
import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import PriceingData from './components/PriceingData/PriceingData';
import PriceingOption from './components/PriceingOption/PriceingOption';
import ResultChart from './components/ResultChart/ResultChart';
const datas=fetch('data.json').then(res=>res.json());

function App() {
  

  return (
    <>

    <header>
    <Navbar></Navbar>
    </header>
    <main>
      <Suspense fallback={<h1>data load..</h1>}>
        <PriceingOption datas={datas}></PriceingOption>
      </Suspense>

      <ResultChart></ResultChart>
    </main>
      
    
      
    </>
  )
}

export default App
