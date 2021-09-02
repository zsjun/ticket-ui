import React from "react";

import { LabelSelect } from "@/index";

function AlertTest() {
  const listItems = [
    {
      label: "修改密码",
      value: true
    },
    {
      label: "删除",
      value: false
    }
  ];
  return (
    <div>
      <LabelSelect onChange={console.log} options={listItems} />
    </div>
  );
}

export default AlertTest;
