import React from "react";
import axios from "axios";
import Header from "./components/Header";
import MenuPicker from "./components/MenuPicker";
import MenuPreview from "./components/MenuPreview";
import "./App.css";

class App extends React.Component {
  state = {
    items: [],
    selectedItems: [],
  };

  componentDidMount = () => {
    axios.get("/api/items").then((res) => {
      const { items } = res.data;
      this.setState({ items });
    });
  };

  selectItem = (id) => {
    const { items, selectedItems } = this.state;
    const selectedItem = items.find(item => item.id === id);
    !selectedItems.includes(selectedItem) && selectedItems.push(selectedItem);
    this.setState({ selectedItems });
  }

  removeItem = (id) => {
    const { selectedItems } = this.state;
    const selectedItem = selectedItems.find(item => item.id === id);
    selectedItem && selectedItems.splice(selectedItems.indexOf(selectedItem), 1);
    this.setState({ selectedItems });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <MenuPicker items={this.state.items} selectItem={this.selectItem} />
            </div>
            <div className="col-8">
              <MenuPreview items={this.state.selectedItems} removeItem={this.removeItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
