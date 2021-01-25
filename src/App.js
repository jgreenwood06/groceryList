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
    ]
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



  render() {
    console.log(this.state.listitems)
    return (
      <div className="App">
        <h1>Grocery List</h1>

        <div class="flexbox-container">
          <div class="pendingColumn">
          <table class="pendingTable" cellpadding="4px">
            <thead>
              <tr>
                <td>    </td>
                <td>Item</td>
                <td>Category</td>
                <td>Price</td>
                <td>Quantity</td>
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
            </thead>
              <CompletedItems listitems={this.state.pendingArray} updateIsPending={this.updateIsPending}/>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
