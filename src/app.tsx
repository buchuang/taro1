import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Button } from '@nutui/nutui-react-taro';

import "./app.scss";
import store, { persistor } from "./stores";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Button type='primary' style={{display: 'none'}}>添加儿童</Button>
      </PersistGate>
    </Provider>
  );
}

export default App;
