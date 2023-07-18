const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('大胆'),

    async execute(interaction){

        const replies = [
            "原神",
            "王者荣耀",
            "英雄联盟",
            "逆水寒",
            "我的世界",
            "星露谷物语",
            "剑网三",
            "穿越火线",
            "DOTA2",
            "使命召唤",
            "战地",
            "红色警戒",
            "星穹铁道",
            "幻塔",
            "植物大战僵尸",
            "赛尔号",
            "奥比岛",
            "炉石传说",
            "暗黑破坏神",
            "绝地求生",
            "最终幻想",
            "生化危机",
            "塞尔达传说",
            "超级玛丽奥",
            "森林",
            "森林之子",
            "逃生",
            "牧场物语",
            "莱莎的炼金工房",
            "赛博朋克2077",
            "刺客信条",
            "死亡搁浅",
            "逃离塔科夫",
            "地平线",
            "看门狗",
            "跑跑卡丁车",
            "Pokemon Go",
            "三国杀",
            "宝可梦集结",
            "卡通农场",
            "愤怒的小鸟",
            "最后的生还者",
            "荒野大镖客",
            "只狼",
            "全面战争",
            "杀戮尖塔",
            "无主之地",
            "八方旅人",
            "帝国时代",
            "波西亚时光",
            "怪物猎人",
            "太吾绘卷",
            "真三国无双",
            "孤岛惊魂",
            "VR女友",
            "冰汽时代",
            "侠盗猎车",
            "动物派对",
            "如龙",
            "方舟",
            "Steam",
            "Epic",
        ];

        const randomIndex = Math.floor(Math.random() * replies.length);
        interaction.reply(`${replies[randomIndex]}？启动！`);
    }
}