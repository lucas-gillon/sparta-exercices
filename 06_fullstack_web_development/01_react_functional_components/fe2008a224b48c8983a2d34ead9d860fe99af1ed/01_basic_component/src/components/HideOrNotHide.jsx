import React, { useState } from "react";

export const HideOrNotHide = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? "Texte visible" : "Texte caché"}</button>
      {visible && <p>This is a test text</p>}
    </div>
  );
};
