import { ProCard } from "@ant-design/pro-components";
import React from "react";

const DetailPage: React.FC = () => {
  return (
    <ProCard wrap gutter={[0, 50]}>
      <ProCard colSpan={24} wrap hoverable title="Refund Application">
        <ProCard colSpan={6}>Pickup order number：1000000000</ProCard>
        <ProCard colSpan={6}>Status: Picked up</ProCard>
        <ProCard colSpan={6}>Sales order number：1234123421</ProCard>
        <ProCard colSpan={6}>Sub-order：3214321432</ProCard>
      </ProCard>
      <ProCard colSpan={24} wrap hoverable title="User Info">
        <ProCard colSpan={6}>User name: Xyx988</ProCard>
        <ProCard colSpan={6}>Contact number: 18100000000</ProCard>
        <ProCard colSpan={6}>Commonly used express delivery: Cainiao Warehousing</ProCard>
        <ProCard colSpan={6}>Pick-up address: No. 18, Wantang Road, karchi</ProCard>
        <ProCard colSpan={6}>Remarks: None</ProCard>
      </ProCard>
    </ProCard>
  );
};

export default DetailPage;
