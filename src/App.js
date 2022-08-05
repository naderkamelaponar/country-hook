import { useState} from 'react'
import axios from 'axios'
import hooks from './hooks'
import Country from './components/Country'
const baseUrl=`https://restcountries.com/v2/`

const App = () => {
  const nameInput = hooks.useField('text')
  const [country, setCountry] = useState('')
  
  const urlPath = baseUrl+`name/${nameInput.value}/`
  const fetch = (e) => {
    e.preventDefault()
    let res 
    try {
      res = axios.get(urlPath)
    } finally { 
     res.then(d=>{
      setCountry(d.data[0])
     }).catch(setCountry(null)) }
  }

  return (
    <div>
      <h1>بسم الله الرحمن الرحيم</h1>
      <h3>fs 7.7</h3>
      <form onSubmit={fetch}>
        <p> input a country name <input {...nameInput} /> <button>find</button> </p>
        
      </form>
      <Country country={country} />
    </div>
  )
}

export default App