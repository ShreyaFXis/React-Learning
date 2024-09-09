import React from 'react'
import Person from './Person.js'

function NameList() {
  const names = ['Shrevi', 'Dhruv', 'Dhruvish', 'Shrevi', 'Bhavi']
  const persons = [
    {
      id: 1,
      name: 'Shrevi',
      age: 20,
      skill: 'Python'
    },
    {
      id: 2,
      name: 'Dhruv',
      age: 17,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Dhruvish',
      age: 17,
      skill: 'Vue'
    },
    {
      id: 3,
      name: 'Parth',
      age: 22 ,
      skill: 'React'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{NameList}</div>
  
}

export default NameList