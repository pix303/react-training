import React, { useState } from "react";

function EventHandler() {
  const [typed, setTyped] = useState("");
  function onTypeHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    const v = e.currentTarget.value;
    setTyped(v);
  }
  return (
    <div>
      <input type="text" onKeyUp={onTypeHandler} />

      <p className="font-mono font-bold">Typing {typed}</p>
    </div>
  );
}

export default EventHandler;
