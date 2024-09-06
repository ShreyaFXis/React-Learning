import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Shrevi', 'Dhruv', 'Dhruvish', 'Shrevi']
  const persons = [
    {
      id: 1,
      name: 'Shrevi',
      age: 30,
      skill: 'Python'
    },
    {
      id: 2,
      name: 'Dhruv',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Dhruvish',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
}

export default NameList