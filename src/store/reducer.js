let 초기값 = [];

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let found = state.findIndex(function (a) {
      return a.id == 액션.데이터.id;
    });
    if (액션.데이터.size === "") {
      alert("사이즈를 선택해주세요");
    } else if (found >= 0) {
      let copy = [...state];
      copy[액션.데이터.id].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(액션.데이터);
      return copy;
    }
  } else if (액션.type === "수량증가") {
    let found = state.findIndex(function (a) {
      return a.id == 액션.데이터;
    });

    let copy = [...state];
    copy[found].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let found = state.findIndex(function (a) {
      return a.id == 액션.데이터;
    });

    if (state[found].quan > 0) {
      let copy = [...state];
      copy[found].quan--;
      return copy;
    }
  } else if (액션.type === "상품삭제") {
    let found = state.findIndex(function (a) {
      return a.id == 액션.데이터;
    });

    let copy = [...state];
    copy.splice(found, 1);
    return copy;
  } else {
    return state;
  }
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === "닫기") {
    return !state;
  } else {
    return state;
  }
}

export { reducer, reducer2 };
