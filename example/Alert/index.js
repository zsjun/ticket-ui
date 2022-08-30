import React from "react";

import { LabelSelect } from "@/index";

function AlertTest() {
  const listItems = [
    {
      label: "修改密码",
      value: "edit"
    },
    {
      label: "删除",
      value: "delete"
    },
    {
      label: "不删除",
      value: "d"
    }
  ];
  return <LabelSelect onChange={console.log} options={listItems} />;
}

export default AlertTest;
