import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let sum = 0;

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>브랜드명</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>가격</th>
            <th>수량</th>
            <th>변경</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map(function (a, i) {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{a.title}</td>
                <td>{a.content}</td>
                <td>{a.size}</td>
                <td>{a.price}원</td>
                <td>
                  {a.quan} &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch({ type: "수량증가", 데이터: a.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch({ type: "수량감소", 데이터: a.id });
                    }}
                  >
                    --
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch({ type: "상품삭제", 데이터: a.id });
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {state.reducer.map(function (a, i) {
        sum += parseInt(a.price) * 1000;
      })}
      <span>{sum.toLocaleString()} 원 </span>
      <button className="btn btn-outline-dark">주문하기</button>
    </div>
  );
}

export default Cart;
