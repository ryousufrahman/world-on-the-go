
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
 .then(res =>res.json())

function App() {


  return (
    <>
      <div>
          
          <Suspense fallback={<h2>countries loading..</h2>}>
           <Countries countriesPromise ={countriesPromise}></Countries>

          </Suspense>
          
        </div>
     


    </>
  )
}

export default App
