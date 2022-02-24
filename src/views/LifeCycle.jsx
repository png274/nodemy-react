import React from "react";
import {getCharacter} from '../services/user';

class LifeCycle extends React.PureComponent {

  state = {
    currentTime: '',
    listCharacter: [],
    counter: 0
  }

  // Dung de khoi tao data can thiet cho component nay
  async componentDidMount() {
    console.log('Did mount');
    this.timer = setInterval(() => {
      const now = new Date().toISOString();
      console.log(now);
      this.setState({
        currentTime: now
      })
    }, 1000);
    // getCharacter().then();
    // const data = await getCharacter();
    // console.log(data);
    // this.setState({listCharacter: data.results})

  }

  // Han che su dung
  async componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  // Dung de clearInterval, timeOut va cac EventListener
  async componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        Life cycle component{" "}
        <p>{this.state.currentTime}</p>
        <button
          onClick={() => {
            const {counter} = this.state;
            this.setState({
              counter: counter+1
            })
          }}
        >
          Ok
        </button>
        <input type="text"/>
        <div>
          {this.state.listCharacter.map((character) => <p key={character.name}>Character: {character.name}</p>)}
        </div>
      </div>
    );
  }
}

export default LifeCycle;



// Chuẩn REST API
// GET: lấy data từ server
// POST: thêm mới data vào server
// PUT: sửa data đã có trên server
// PATCH: sửa data đã có trên server
// DELETE: xoá data trên server


/**
 * BTVN: 
 * Tạo 1 ô search, sau đấy cho phép nhập vào để tìm kiếm tên các nhân vật trong api: https://swapi.dev/api/people
 * B1: trong didMount phải gọi api load data vào trong state.
 * // gọi api dùng async/await
 * B2: tạo 1 ô search, khi search cập nhật lại trong state 1 biến searchKey và dùng searchKey để lọc ra các kết quả đúng trong API trả về
 * search thì dùng hàm .filter của Array.
 */