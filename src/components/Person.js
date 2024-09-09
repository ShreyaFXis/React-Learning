import React from 'react'

function Person({person, key}) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill} Language.
      </h2>
    </div>
  )
}

export default Person