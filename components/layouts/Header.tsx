import React from "react";

type Props = {};

export default function header({}: Props) {
  return (
    <div className="header">
      <h2 className="logo">Documentation v2</h2>
      <input type="text" placeholder="Serach" />
    </div>
  );
}
