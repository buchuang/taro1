import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Empty, Image, Cell, Grid } from "@nutui/nutui-react-taro";
import { AddCircle } from "@nutui/icons-react-taro";
import Upload from "@/assets/icons/upload.png";
import Record from "@/assets/icons/record.png";
import styles from "./index.module.scss";
import Title from "./components/Title";
import CellList from "./components/CellList";
import TextEllipsis from "./components/TextEllipsis";

export default function AiEval() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className={styles["ai-eval"]}>
      <Title
        title='儿童信息'
        rightNode={<AddCircle size='28px' color='#fa2c19' />}
      />
      <CellList />
      <CellList />
      <Empty description='暂无儿童信息' actions={[{ text: "新增" }]} />
      <Title title='最近评测建议' />
      <Cell style={{marginBottom: 0}}>
        <TextEllipsis
          maxCount={50}
          content='啊好高大上啊哈哈就是大家啊手动滑稽阿萨德啊计划十八大火炬大厦啊金黄色的好吧合适的久啊水电八局大金山毒霸结算单久啊打撒黄金时代啊九点半阿萨德很尬收到货阿斯达黄金时代阿莎哈德阿萨德几哈谁说的哈市大苏打'
        />
      </Cell>
      <Title title='AI评测' />
      <Grid columns={2}>
        <Grid.Item text={<Text style={{ fontSize: "16px" }}>本地上传</Text>}>
          <Image src={Upload} width={70} height={70} />
        </Grid.Item>
        <Grid.Item text={<Text style={{ fontSize: "16px" }}>立即拍摄</Text>}>
          <Image src={Record} width={70} height={70} />
        </Grid.Item>
      </Grid>
    </View>
  );
}
