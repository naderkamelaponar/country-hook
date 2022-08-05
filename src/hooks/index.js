// بسم الله الرحمن الرحيم
import {  useState} from 'react'
const useField = (type,name) => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
      setValue(event.target.value)
    }
    return {
      name,
      type,
      value,
      onChange
    }
  }

const hooks = {useField}
export default  hooks 