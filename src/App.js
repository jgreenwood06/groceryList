import React, { Component } from 'react';
import PendingItems from './PendingItems.js'
import CompletedItems from './CompletedItems.js'
import './App.css';

class App extends Component {
  state = {
    pendingArray: [
      {
        name: 'bananas',
        category: 'produce',
        price: 1.50,
        quantity: 2,
        isPending: true
      },
      {
        name: 'tomatoes',
        category: 'canned',
        price: 0.75,
        quantity: 3,
        isPending: true
      },
      {
        name: 'beans',
        category: 'canned',
        price: 0.65,
        quantity: 3,
        isPending: true
      },
      {
        name: 'pizza',
        category: 'frozen',
        price: 3.50,
        quantity: 2,
        isPending: false
      },
      {
        name: 'ice cream',
        category: 'frozen',
        price: 3.50,
        quantity: 3,
        isPending: false
      },
      {
        name: 'fish',
        category: 'meat',
        price: 10.00,
        quantity: 1,
        isPending: false
      }
    ],
    userFields: {
      name: 'default',
      category: 'default',
      price: 0.0,
      quantity: 0,
      isPending: true
    }
  }
/*
  moveToPending = (index) =>{
    this.completedArray.splice(index,1);
  }


  constructor(props){
    super(props);
    this.markNotPending = this.markNotPending.bind(this);

    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

  }


  forceUpdateHandler(){
    this.forceUpdate();
    console.log('update forced!');
  }
  */

  constructor(props){
    super(props);
    this.updateIsPending = this.updateIsPending.bind(this);
    this.addItem = this.addItem.bind(this)
    this.updateUserNameField = this.updateUserNameField.bind(this)
    this.updateUserCategoryField = this.updateUserCategoryField.bind(this)
    this.updateUserPriceField = this.updateUserPriceField.bind(this)
    this.updateUserQuantityField = this.updateUserQuantityField.bind(this)
  }

  updateIsPending(index) {
    const isIndexPending = this.state.pendingArray[index].isPending
    if (isIndexPending){
      this.state.pendingArray[index].isPending = false;
    }
    else{
      this.state.pendingArray[index].isPending = true;
    }
    this.setState({ state: this.state });
    console.log(this.state.pendingArray[index].isPending);

  }

  addItem(){
    this.setState({
      pendingArray: this.state.pendingArray.concat(this.state.userFields)
    })
  }

  updateUserNameField(value){
    this.setState({
      userFields: {
        name: value,
        category: this.state.userFields.category,
        price: this.state.userFields.price,
        quantity: this.state.userFields.quantity,
        isPending: true
      }
    })
  }

  updateUserCategoryField(value){
    this.setState({
      userFields: {
        name: this.state.userFields.name,
        category: value,
        price: this.state.userFields.price,
        quantity: this.state.userFields.quantity,
        isPending: true
      }
    })
  }

  updateUserPriceField(value){
    this.setState({
      userFields: {
        name: this.state.userFields.name,
        category: this.state.userFields.category,
        price: value,
        quantity: this.state.userFields.quantity,
        isPending: true
      }
    })
  }

  updateUserQuantityField(value){
    this.setState({
      userFields: {
        name: this.state.userFields.name,
        category: this.state.userFields.category,
        price: this.state.userFields.price,
        quantity: value,
        isPending: true
      }
    })
  }

  render() {
    console.log(this.state.listitems)
    return (
      <div className="App">
        <h1 style ={{padding: '0px 120px'}}>Grocery List</h1>

        <div class="flexbox-container">
          <div class="pendingColumn">
          <table class="pendingTable" cellpadding="4px">
            <thead>
              <tr>
                <td>                     </td>
                <td>Item</td>
                <td>Category</td>
                <td>Price</td>
                <td>Quantity</td>
                </tr>
              <tr>
                <td class="checkBoxColumn">
                  <button style={buttonStyle} onClick={this.addItem} > Add Item </button>
                </td>
                <td>
                  <input type= "text" onChange={event => this.updateUserNameField(event.target.value)} placeholder= "Item Name" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" onChange={event => this.updateUserCategoryField(event.target.value)} placeholder= "Category" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" onChange={event => this.updateUserPriceField(event.target.value)} placeholder= "Price" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" onChange={event => this.updateUserQuantityField(event.target.value)} placeholder= "Quantity" style ={{width: '100%'}}/>
                </td>
              </tr>

            </thead>
            <tbody>
              <PendingItems listitems={this.state.pendingArray} updateIsPending={this.updateIsPending}/>
              </tbody>
            </table>
          </div>
          <div class="completedColumn">
          <table class='completedTable' cellpadding="4px">
            <thead>
              <tr>
                <td>    </td>
                <td>Item</td>
                <td>Category</td>
                <td>Price</td>
                <td>Quantity</td>
              </tr>

              <tr>
                <td>    </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
              <CompletedItems listitems={this.state.pendingArray} updateIsPending={this.updateIsPending}/>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  display: 'inline-block',
  background: '#A9A9A9',
  border: 'none',
  padding: '2px 2px',
  borderRadius: '20%',
  cursor: 'pointer',
  width:'5000',
  height: '100%',
}

export default App;
