import { Fragment, useState } from "react";

function NewAppFunction({ product, userName, price }) {
  const [name, setIadsas] = useState("ahmed");

  return (
    <Fragment>
      <h1>{product}</h1>
      <h1>{userName}</h1>
      <h1>{price}</h1>
    </Fragment>
  );
}

export default NewAppFunction;
