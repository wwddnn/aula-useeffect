import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  console.log("passou no app");

  const [productId, setProductId] = useState(1);

  const [prod, setProd] = useState<any>();

  useEffect(()=>{
    console.log("passou no useeffect"); 
    setProd(findProduct(productId))
  }, [productId]);

  function handleClick() {
    console.log("passou no handleClick");
    setProductId(2);
  }

  return (
    <>
      <h2>NOME DO PRODUTO : {prod?.name}</h2>
      <p>PREÇO DO PRODUTO : {prod?.price.toFixed(2)}</p>
      <br />
      <button onClick={handleClick} >Mudar para o produto 2</button>
    </>
  );
}

export default App;
