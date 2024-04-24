import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'
import List from './components/List';

export default function ReportManage() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['report-manage']}>
      <List onItemClick={() => {}} onRefresh={()=> Promise.resolve()} />
    </View>
  )
}
