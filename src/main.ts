import { name, age } from './bases/01-types'
import { bulbasaur } from './bases/02-objects';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Mi nombre es ${name} tengo ${age} años
    <h1>Hello ${ bulbasaur.name } ${ bulbasaur.id }!</h1>
  </div>
`