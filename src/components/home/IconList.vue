<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rementuijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenFM"></use>
            </svg>
            <span>私人FM</span>
        </div><div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinlechangpian"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .iconList{
        width:100%;
        height:2rem;
        padding:5px;
        display:flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            width:25%;
            height:100%;
            display:flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: .8rem;
                height:.8rem;
            }
        }
    }
</style>