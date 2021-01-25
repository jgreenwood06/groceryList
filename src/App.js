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
    },
    totalPrice: 0.0
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
    this.addItem = this.addItem.bind(this);
    this.updateUserNameField = this.updateUserNameField.bind(this);
    this.updateUserCategoryField = this.updateUserCategoryField.bind(this);
    this.updateUserPriceField = this.updateUserPriceField.bind(this);
    this.updateUserQuantityField = this.updateUserQuantityField.bind(this);
    this.updateTotalPrice = this.updateTotalPrice.bind(this);

  }

  updateTotalPrice(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const filteredPendingArray = this.state.pendingArray.filter(listitems => listitems.isPending === true)
    const priceArray = filteredPendingArray.map((item) => item.price * item.quantity)
    //const priceArray = this.state.pendingArray.map((item) => item.price)
    var sumPrice = 0.0
    if (priceArray.length > 0){
      sumPrice = priceArray.reduce(reducer)
    }

    if (this.state.totalPrice !== sumPrice){
      this.setState({
        totalPrice: sumPrice
      })
    }

    console.log(this.state.totalPrice)
  }

  updateIsPending(index) {
    const isIndexPending = this.state.pendingArray[index].isPending
    var newPendingArray = this.state.pendingArray
    if (isIndexPending){
      newPendingArray[index].isPending = false
      this.setState({
        pendingArray: newPendingArray
      })
    }
    else{
      newPendingArray[index].isPending = true
      this.setState({
        pendingArray: newPendingArray
      })
    }
    this.setState({ state: this.state });
    console.log(this.state.pendingArray[index].isPending);

  }

  addItem(){
    console.log(this.state.userFields)
    this.setState({
      pendingArray: this.state.pendingArray.concat(this.state.userFields),
      //totalPrice: this.state.pendingArray.filter(listitems => listitems.isPending === true)
    })
    document.getElementById('nameTextField').value = ''
    document.getElementById('categoryTextField').value = ''
    document.getElementById('priceTextField').value = ''
    document.getElementById('quantityTextField').value = ''
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
    const floatValue = parseFloat(value)
    this.setState({
      userFields: {
        name: this.state.userFields.name,
        category: this.state.userFields.category,
        price: floatValue,
        quantity: this.state.userFields.quantity,
        isPending: true
      }
    })
  }

  updateUserQuantityField(value){
    const intValue = parseInt(value)
    this.setState({
      userFields: {
        name: this.state.userFields.name,
        category: this.state.userFields.category,
        price: this.state.userFields.price,
        quantity: intValue,
        isPending: true
      }
    })
  }

  sortByCategory(array){
    var sortedArray = array.sort(function(a,b) {
      var categoryA = a.category.toUpperCase();
      var categoryB = b.category.toUpperCase();
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (a.isPending === true && b.isPending === true){
        if (categoryA < categoryB){
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        if (categoryA == categoryB){
          if (nameA < nameB){
            return -1
          }
          if (nameA > nameB){
            return 1
          }
          return 0
        }
      }
    })
    var filteredArray = sortedArray
    var element = document.getElementById('nameTextField')
    var fieldValue = null
    if (element != null){
      fieldValue = document.getElementById('nameTextField').value
    }
    if (fieldValue != null){
      filteredArray = sortedArray.filter(items => items.name.includes(fieldValue))
    }
    return filteredArray
  }

  sortByName(array){
    var sortedArray = array.sort(function(a,b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (a.isPending === false && b.isPending === false){
        if (nameA < nameB){
          return -1
        }
        if (nameA > nameB){
          return 1
        }
        return 0
      }
    })

    var filteredArray = sortedArray
    var element = document.getElementById('nameTextField')
    var fieldValue = null
    if (element != null){
      fieldValue = document.getElementById('nameTextField').value
    }
    if (fieldValue != null){
      filteredArray = sortedArray.filter(items => items.name.includes(fieldValue))
    }
    return filteredArray
  }

  render() {
    console.log(this.state.listitems)
    this.updateTotalPrice()
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
                  <input type= "text" id= "nameTextField" onChange={event => this.updateUserNameField(event.target.value)} placeholder= "Item Name" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" id= "categoryTextField" onChange={event => this.updateUserCategoryField(event.target.value)} placeholder= "Category" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" id= "priceTextField" onChange={event => this.updateUserPriceField(event.target.value)} placeholder= "Price" style ={{width: '100%'}}/>
                </td>
                <td>
                  <input type= "text" id= "quantityTextField" onChange={event => this.updateUserQuantityField(event.target.value)} placeholder= "Quantity" style ={{width: '100%'}}/>
                </td>
              </tr>

            </thead>
            <tbody>
              <PendingItems listitems={this.sortByCategory(this.state.pendingArray)} updateIsPending={this.updateIsPending}/>
              </tbody>
              <tr>
                <td></td>
                <td></td>
                <td style={{textAlign: 'right'}}>Total:</td>
                <td>
                  {this.state.totalPrice}
                </td>
              </tr>
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
              <CompletedItems listitems={this.sortByName(this.state.pendingArray)} updateIsPending={this.updateIsPending}/>
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


/*
//this.state.pendingArray[index].isPending = true;


style={{textAlign: 'right'}}
*/
