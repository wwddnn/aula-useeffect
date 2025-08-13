import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    setProd(findProduct(productId));
  }, [productId]);

  function handleClick() {
    setProductId(2);
  }

  return (
    <>
      <h2>NOME DO PRODUTO : {prod?.name}</h2>
      <p>PREÇO DO PRODUTO : {prod?.price}</p>
      <br />
      <button onClick={handleClick}> Mudar para o produto 2 </button>
    </>
  );
}

export default App;
