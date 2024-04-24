import React, { useEffect } from "react";
import { Cell, Avatar } from "@nutui/nutui-react-taro";
import { User, ArrowRight } from "@nutui/icons-react-taro";
import { View } from '@tarojs/components';

interface IProps {}

const CellList: React.FC<IProps> = (props) => {
  useEffect(() => {}, []);

  return (
    <Cell.Group>
      <Cell
        align='center'
        title={
          <View
            style={{ display: "flex", alignItems: "center", fontSize: "16px" }}
          >
            <Avatar icon={<User />} />
            <View style={{marginLeft: 15}}>张三</View>
            <View style={{marginLeft: 15}}>男</View>
            <View style={{marginLeft: 15}}>6周2天</View>
          </View>
        }
        extra={<ArrowRight />}
      />
      <Cell>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#777",
          }}
        >
          <View>最近测评时间：暂无</View>
          <View>评测结果：暂无</View>
        </View>
      </Cell>
    </Cell.Group>
  );
};

export default CellList;
