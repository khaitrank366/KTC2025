import React, { useMemo, useState } from "react";

function MyShop3() {
  const [text, setText] = useState("Hello");

  const ChildComponent = ({ text }) => {
    console.log("render again!");
    return <>{text}</>;
  };

  const MemorizedComponent = useMemo(() => <ChildComponent text={text} />,[text]);

  return (
    <div>
      <button onClick={() => setText("Hello!")}>Hello!</button>
      <button onClick={() => setText("Hola!")}>Hola!</button>
      {MemorizedComponent}
    </div>
  );
}

export default MyShop3;
