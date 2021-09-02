import React from "react";
import { MiniSearchInput } from "@";

export default function Wrap() {
  return (
    <div>
      <MiniSearchInput
        inputStyle={{ width: 220 }}
        onChange={console.log}
        placeholder="placeholder"
        onSearch={val => {console.log(val)}}
      />
    </div>
  );
}
