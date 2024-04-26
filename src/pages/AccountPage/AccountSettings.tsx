import { ProCard } from "@ant-design/pro-components";
import React, { useState } from "react";

const AccountSettings: React.FC = () => {
  const [tab, setTab] = useState("tab1");
  return (
    <ProCard
      style={{ height: "100%" }}
      tabs={{
        tabPosition: "left",
        activeKey: tab,
        items: [
          {
            label: `basic settings `,
            key: "tab1",
            children: `basic settings`,
          },
          {
            label: `New message notification`,
            key: "tab2",
            children: `New message notification`,
          },
          {
            label: `New task notification`,
            key: "tab3",
            children: <>
              <ul>
                <li>i.o updated this task</li>
                <li>uo opens new records</li>
                <li>pole updates his category item</li>
                <li>newton had searched on his records</li>
                <li>45 users now added</li>
              </ul>
            </>,
          },
        ],
        onChange: (key) => {
          setTab(key);
        },
      }}
    />
  );
};

export default AccountSettings;
