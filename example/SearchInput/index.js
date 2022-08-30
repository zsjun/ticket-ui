import React from "react";
import { SearchInput } from "@";

export default function Wrap() {
  return (
    <div>
      <SearchInput
        inputStyle={{ width: 204 }}
        onChange={console.log}
        placeholder=""
        onSearch={e => {console.log('onSearch')}}
        addon={<span>hello</span>}
      />
    </div>
  );
}
