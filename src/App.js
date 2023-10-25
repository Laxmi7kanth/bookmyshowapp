import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import Seating from "./components/Seating";
import { MdOutlineEventSeat, MdEventSeat } from "react-icons/md";
import "./App.css";

class App extends Component {
  state = { arr: [], quantity: 1 };

  onCheckBoxClick = (ide) => {
    const { arr, quantity } = this.state;
    let index;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === ide) {
        index = i;
      }
    }
    console.log(index);

    let newArray = [];
    for (let j = index; j < index + quantity; j++) {
      newArray.push(j);
    }

    console.log(newArray);
    const modifiedArray = [];
    for (let k = 0; k < arr.length; k++) {
      let present = false;
      for (let m = 0; m < newArray.length; m++) {
        if (k === newArray[m]) {
          present = true;
        }
      }

      if (present) {
        console.log(k);
        modifiedArray.push({
          id: arr[k].id,
          listItem: <MdEventSeat />,
          isSelected: true,
        });
      } else {
        modifiedArray.push({
          id: arr[k].id,
          listItem: <MdOutlineEventSeat />,
          isSelected: false,
        });
      }
    }
    console.log(modifiedArray);
    this.setState({ arr: modifiedArray });
  };

  componentDidMount() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: uuidv4(),
        listItem: <MdOutlineEventSeat />,
        isSelected: false,
      });
    }
    this.setState({
      arr,
    });
  }

  onQtyChange = (event) => {
    this.setState({ quantity: parseInt(event.target.value) });
  };

  render() {
    const { arr } = this.state;
    return (
      <div className="bg-container">
        <select name="Qty" onChange={this.onQtyChange} className="qty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <ol className="ul">
          {arr.map((eachItem) => (
            <Seating
              key={eachItem.id}
              eachItem={eachItem}
              onCheckBoxClick={this.onCheckBoxClick}
            />
          ))}
        </ol>
        <button type="button" className="button">
          Proceed
        </button>
      </div>
    );
  }
}

export default App;
