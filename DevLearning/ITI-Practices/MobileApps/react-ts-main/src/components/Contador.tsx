import { useState } from 'react';


export const Contador = () => {

  const [valor, setValor] = useState(5);

  const acumulador = (num: number) =>{
      setValor(num + valor);
  }

  return (
    <>
        <h3>Contador</h3>
        <p>Total: { valor }</p>
        <button className='btn btn-primary' onClick={ () => acumulador(1) }>+1</button>&nbsp;
        <button className="btn btn-primary" onClick={ () => acumulador(-1) }>-1</button>
    </>
    
  )
}
