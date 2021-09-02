import React from "react";
import { Message } from "@";

Message.error("111");

let cancel = () => {};

export default function Wrap() {
  return (
    <div>
      <button
        onClick={() =>
          Message.success(
            "是否带水电费水电费是的分水电费水电费是的分收到水电费水电费是"
          )
        }
      >
        点我
      </button>
      <button
        onClick={() => {
          cancel = Message.loading("正在操作...");
        }}
      >
        点我
      </button>
      <button
        onClick={() => {
          cancel();
        }}
      >
        点我取消
      </button>
    </div>
  );
}
