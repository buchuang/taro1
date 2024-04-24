export default defineAppConfig({
  pages: [
    "pages/ai-eval/index",
    "pages/mine/index",
    "pages/report-manage/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#666",
    selectedColor: "#fa2c19",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/ai-eval/index",
        text: "AI测评",
        iconPath: "assets/icons/ai.png",
        selectedIconPath: "assets/icons/ai_active.png",
      },
      {
        pagePath:"pages/report-manage/index",
        text: "报告管理",
        iconPath: "assets/icons/report.png",
        selectedIconPath: "assets/icons/report_active.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/icons/mine.png",
        selectedIconPath: "assets/icons/mine_active.png",
      },
    ],
  },
});
