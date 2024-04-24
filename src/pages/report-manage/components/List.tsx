import React, { CSSProperties, useEffect, useState } from "react";
import { Cell, InfiniteLoading, Toast, PullToRefresh } from "@nutui/nutui-react-taro";
import { ArrowRight } from "@nutui/icons-react-taro";
import { View } from "@tarojs/components";
import Taro from '@tarojs/taro';

interface IProps {
  onItemClick: (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  onRefresh: () => Promise<any>;
}
const InfiniteUlStyle: CSSProperties = {
  height: '100%',
  width: "100%",
  padding: "0",
  overflowY: "auto",
  overflowX: "hidden",
};
const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const ListItem: React.FC<IProps> = (props) => {
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [refreshHasMore, setRefreshHasMore] = useState(true)
  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      refreshList.push(`${i}`)
    }
    setRefreshList([...refreshList])
  }

  const refreshLoadMore = async () => {
    await sleep(2000)
    const curLen = refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      refreshList.push(`${i}`)
    }
    if (refreshList.length >= 100) {
      setRefreshHasMore(false)
    } else {
      setRefreshList([...refreshList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    // Toast.show('刷新成功', {content: '123'})
    Taro.showToast({
      title: '刷新成功',
      icon: 'none',
      duration: 2000,
    })
  }

  return (
    <ul id='refreshScroll' style={InfiniteUlStyle}>
      <InfiniteLoading
        loadingText={
          <>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              className='nut-infinite-bottom-tips-icons'
            >
              <circle cx='2' cy='12' r='2' fill='#818181' />
              <circle cx='12' cy='12' r='2' fill='#818181' />
              <circle cx='22' cy='12' r='2' fill='#818181' />
            </svg>
            加载中
          </>
        }
        target='refreshScroll'
        pullRefresh={false}
        hasMore={refreshHasMore}
        onLoadMore={refreshLoadMore}
        onRefresh={refresh}

      > <PullToRefresh
        onRefresh={() =>
        new Promise((resolve) => {
          Taro.showToast({
            title: '刷新成功',
            icon: 'none',
            duration: 2000,
          })
          resolve('done')
        })
      }
        renderIcon={(status) => {
        return (
          <>
            {(status === 'pulling' || status === 'complete') && (
              <svg width='36' height='26' viewBox='0 0 36 26' fill='none'>
                <path
                  d='M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z'
                  fill='#818181'
                />
              </svg>
            )}
            {(status === 'canRelease' || status === 'refreshing') && (
              <svg width='36' height='26' viewBox='0 0 36 26' fill='none'>
                <circle cx='18' cy='13' r='3' fill='#818181' />
                <circle cx='33' cy='13' r='3' fill='#818181' />
                <circle cx='3' cy='13' r='3' fill='#818181' />
              </svg>
            )}
          </>
        )
      }}
      >{
        refreshList.map((item, index) => {
          return  <Cell key={index}
            title={
            <View style={{ lineHeight: "30px" }}>
              <View>编号：123456789</View>
              <View>姓名：张三</View>
              <View
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View style={{ color: "#999" }}>
                  评测时间：2024-02-22 12:00:00
                </View>
                <View style={{ fontWeight: 550 }}>评测结果：F+</View>
              </View>
            </View>
          }
            extra={
            <>
              <ArrowRight style={{ marginTop: 7 }} />
            </>
          }
            onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => props.onItemClick(event)}
          />
        })
      }


</PullToRefresh>
      </InfiniteLoading>
    </ul>
  );
};

export default ListItem;
