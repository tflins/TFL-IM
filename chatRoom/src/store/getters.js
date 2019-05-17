/**
 * Created by tflin on 2019/4/4.
 */
export default {
    unReadCount(state) {
        let count = 0;
        state.unRead.forEach(v => {
            count += v.count;
        });
        return count;
    }
}