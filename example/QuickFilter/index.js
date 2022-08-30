import React from "react";
import { QuickFilter } from "@";

const valueObj = { direction: [] };

export default function Wrap() {
  return (
    <div style={{ width: 200 }}>
      <QuickFilter
        options={["direction"]}
        valueObj={valueObj}
        onChangeItem={console.log}
        onReset={console.log}
        onSubmit={console.log}
        optionFilters={[
          {
            type: "direction",
            fn: d => {
              console.log(d);
              if (d.value === "in") return false;

              return true;
            }
          }
        ]}
      />
    </div>
  );
}
