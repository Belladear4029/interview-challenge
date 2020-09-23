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

  filteredItems = () => {
    const re = new RegExp(this.state.search, 'i');
    return this.state.items.filter(item => {
      return re.test(item.name);
    });
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

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
    const { items, selectedItems } = this.state;
    return (
      <div className="wrapper">
        <Header items={selectedItems} />
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <MenuPicker items={this.filteredItems()} selectItem={this.selectItem} handleSearch={this.handleSearch} />
            </div>
            <div className="col-8">
              <MenuPreview items={selectedItems} removeItem={this.removeItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
