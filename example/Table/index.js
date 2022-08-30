import React, { useState, Fragment } from "react";
import { Table, Select } from "@";

const { HeaderItem } = Table;

const options = [
  {
    label: "全部",
    value: "all"
  },
  {
    label: "是",
    value: 1
  },
  {
    label: "否",
    value: 2
  }
];

const tableData = [
  {
    ip: "87.101.12.1",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "3234234232342342次32342342次32342342次次"
  },
  {
    ip: "87.101.12.2",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.3",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.4",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.5",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断1",
    times: "32342342次"
  },
  {
    ip: "87.101.12.6",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次"
  },
  {
    ip: "87.101.12.7",
    labels: [
      {
        type: "error",
        desc: "IDC机房"
      },
      {
        type: "info",
        desc: "辣鸡邮件"
      }
    ],
    type: "阻断",
    times: "32342342次",
    children: [
      {
        ip: "子12",
        labels: [
          {
            type: "error",
            desc: "IDC机房"
          },
          {
            type: "info",
            desc: "辣鸡邮件"
          }
        ],
        type: "阻断",
        times: "32342342次"
      },
      {
        ip: "子13",
        labels: [
          {
            type: "error",
            desc: "IDC机房"
          },
          {
            type: "info",
            desc: "辣鸡邮件"
          }
        ],
        type: "阻断",
        times: "32342342次"
      }
    ]
  }
];

function autoGetRowSpan(list, key) {
  const rowSpans = [];
  let prev = list[0][key];
  let sameCount = 0;
  let startIndex = 0;

  for (let i = 1; i < list.length; i++) {
    const item = list[i][key];

    // 如果相同，则当前行的rowSpan为0
    if (item === prev) {
      sameCount += 1;
      rowSpans[i] = 0;
    } else {
      // 如果不同，则重置startIndex, 设置第一次相同的行的rowSpan为相同的个数 + 1
      rowSpans[startIndex] = sameCount + 1;
      startIndex = i;
      prev = item;
      sameCount = 0;
    }
  }

  // 最后相同的区间
  rowSpans[startIndex] = sameCount + 1;

  return rowSpans;
}

export default function Wrap() {
  const [sort, setSort] = useState({
    sortKey: "times",
    sortFlag: "asc"
  });
  const [connect, setConnect] = useState("all");
  const [list, setList] = useState(tableData);

  const listRowSpans = autoGetRowSpan(list, "type");
  const columns = [
    {
      key: "labels",
      title: (
        <HeaderItem>
          {({ setFocus }) => (
            <Fragment>
              是否连通:
              <Select
                defaultValue={connect}
                clearable={false}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={val => setConnect(val)}
                options={options}
              />
            </Fragment>
          )}
        </HeaderItem>
      ),
      width: 200,
      render(items) {
        return items.map(item => {
          return (
            <label key={item.desc} className="label label-info mgr10">
              {item.desc}
            </label>
          );
        });
      },
      rowSpanFn(item, row, { rowIndex }) {
        if (rowIndex === 0) {
          return 2;
        }
        if (rowIndex === 1) {
          return 0;
        }
        return 1;
      }
    },
    {
      key: "ip",
      title: "2",
      width: 180,
      sortable: true,
      render(item) {
        return <span className="color-error">{item}</span>;
      }
    },
    {
      key: "type",
      title: "类型",
      width: 120,
      rowSpanFn(item, row, { rowIndex }) {
        return listRowSpans[rowIndex];
      }
    },
    {
      title: "操作",
      width: 200,
      render(item, row) {
        return <span>现在还没有操作</span>;
      }
    }
  ];
  return (
    <div>
      <Table
        dark
        scrollHeight={200}
        data={list}
        // hasChild
        // pageLimit={4}
        columns={columns}
        // select
        // expandRowRender={(data, index, a, show) => {
        //   // console.log(show);
        //   // if (true) {
        //   // setList([...tableData]);
        //   // }
        //   return `第${index}的展开内容`;
        // }}
        // defaultRenderExpand
        // defaultRenderExpandIndex={2}
        expandOnly
        clickable
        defaultClick={false}
        // draggable
        style={{ marginTop: 500 }}
        handleRowClick={console.log}
        {...sort}
        handleSortChange={(sortKey, sortFlag) => {
          setList([...tableData]);
          setSort({
            sortKey,
            sortFlag
          });
        }}
      />
    </div>
  );
}
