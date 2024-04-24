import React, { useEffect } from "react";
import { Text, View } from "@tarojs/components";

interface IProps {
  content: string;
  maxCount?: number;
}

const TextEllipsis: React.FC<IProps> = ({ content, maxCount = 100 }) => {
  const [isCollapse, setIsCollapse] = React.useState(true);
  useEffect(() => {
    if (content.length > maxCount) {
      setIsCollapse(true);
    } else {
      setIsCollapse(false);
    }
  }, [content, maxCount]);

  return (
    <View style={{fontSize: '14px'}}>
      <Text>
        {isCollapse ? content.substring(0, maxCount) + "..." : content}
      </Text>
      {content.length > maxCount && <Text
        onClick={() => setIsCollapse(!isCollapse)}
        style={{ color: "#fa2c19", whiteSpace: 'nowrap' }}
      >
        {isCollapse ? "展开" : "收起"}
      </Text>}
    </View>
  );
};
export default TextEllipsis;