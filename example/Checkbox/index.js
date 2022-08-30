import React from "react";
import { Checkbox } from "@";

export default function Wrap() {
  return (
    <div style={{ width: 200 }}>
      <Checkbox disabled defaultChecked label="测试测试" />
    </div>
  );
}
