import service from "..";
//获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method: 'GET',
        url:`/playlist/detail?id=${data.id}`//模版字符串
    })
}