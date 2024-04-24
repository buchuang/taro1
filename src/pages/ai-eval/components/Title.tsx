import { View, Text } from '@tarojs/components'
import styles from './title.module.scss'

interface IProps {
  title: string,
  rightNode?: React.ReactNode
}


const Title:React.FC<IProps> = ({title, rightNode}) => {
  return (
    <View className={styles['ai-eval-title']}>
      <Text className={styles['title']}>{title}</Text>
      {rightNode}
    </View>
  )
}

export default Title;
