import { observable } from "mobx";

//observable은 상태가 변하는지 관찰(observe)하는 것

const NumberStore = observable({
    //state 입니다.
    num: 0,

    //action 입니다 (observable state에 저장되어 있는 데이터들을 변화시키는 액션 함수)
    increaseAction(num) {
        this.num = this.num + num;
    },

    decreaseAction(num) {
        this.num = this.num - num;
    }
});

export default NumberStore;