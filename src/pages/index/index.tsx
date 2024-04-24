
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button, Cell } from '@nutui/nutui-react-taro';
import { useAppSelector } from '@/stores';
import './index.scss'

export default function Index() {
  const otherFree = useAppSelector(state => state.other?.otherFree)
  useLoad(() => {
    console.log('Page loaded.1')
  })
  return (
    <View className='index'>
      <Cell title='我是标题' description='我是描述' extra='描述文字' />
      <div>123asdas123asd</div>
    </View>
  )
}
