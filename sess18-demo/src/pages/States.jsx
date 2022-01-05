import { useState } from 'react';

function States () {
  // == stateless component sebelum React 16.8
  //const [ state, setState ] = useState(initialValue)
  const [  name,  setName ] = useState(      'Budi')
  const [ anotherName, setAnotherName ] = useState('Fikri')

  function changeName (e) {
    // cara 1: useState tambahan
    const oldName = name
    setName(anotherName)
    setAnotherName(oldName)

    // cara 2: conditional
    // setName(name === 'Budi' ? 'Fikri' : 'Budi')
  }

  return (
  <>
    <p>
      Edit <code>{ name }</code> and save to reload.
    </p>
    <button onClick={changeName}>Change name</button>
  </>
  )
}

export default States
