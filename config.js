var config = {
  // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
  // 每句话尽量不要超过15个字,不然展示效果可能不太好
  texts: [
    "To:",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
    "李老师",  // 同上...
    "认识这么久第一次给您过生日",
    "不瞒您说",
    "我提前一个多月就开始构思准备了",
    "毕竟您这么潇洒爱自由的快乐小神仙",
    "也不缺啥",
    "在我心中一般的“钞能力”也配不上您",
    "本想自学剪段视频",
    "想了想您的专业和工作",
    "我还是敲段代码送给你吧~",
    "咳咳——注意啦！",
    "以下是我要在你生日这天对你说的话：",
    "我印象里的兔斯基哥哥",
    "一直有着有趣的灵魂和少年的心",
    "他喜欢关注新奇的玩意儿，",
    "也喜欢分享有趣的生活~",
    "自带一种让我想要了解和靠近的魔力",
    "最近大家打打闹闹相处下来我发现",
    "那个我心中一直高冷的帅哥哥",
    "其实是一个可可爱爱需要关爱的小男孩儿~",
    "有时候明明对我很好但总在嘴上不饶人",
    "所以",
    "我希望26岁的李恒毅",
    "不论是维持安稳的现状还是追逐自己的梦想",
    "都能无所顾忌地每天简简单单快乐10分钟,",
    "在我面前可以放安心卸下包袱一起愉快玩耍",
    "不然一直背着包袱得多累啊~",
    "早睡晚起，平安康健",
    "做自己想做的事情",
    "快乐小神仙，快乐小少年~",
    "生日快乐鸭！",
    "最后......",
    "快想好要带我吃什么好吃的！",
    "今天生日你最大，我听你的不挑食~",
    "敲代码+调试真的很累的，我还想吃蛋糕嘿嘿",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
      "李老师": "./imgs/lhy.png",
      //"生日快乐鸭！": "./imgs/yaya.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
      turn_on: "开始",
      play: "音乐",
      bannar_coming: "颜色",
      balloons_flying: "好像少点东西",
      cake_fadein: "蛋糕？",
      light_candle: "蜡烛？",
      wish_message: "生日快乐",
      story: "A MESSAGE FOR YOU",
    }
};
