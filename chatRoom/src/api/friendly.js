/**
 * Created by tflin on 2019/04/1.
 */
import fetch from './fetch';

export default {
    findMyfriends(params) { //查找我的好友
        return fetch.post('v/friend/findMyfriends', params);
    },
    checkMyfriends(params) { //查找我的好友
        return fetch.post('v/friend/checkMyfriends', params);
    }
}

