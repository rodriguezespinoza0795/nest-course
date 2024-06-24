import { name, age } from './bases/01-types'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Mi nombre es ${name} tengo ${age} años 
  </div>
`