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
      quantity: 1,
      isPending: true
    },
    totalPrice: 0.0,
    isEditable: false,
    editButtonText: 'Edit Items'

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
    this.toggleEditable = this.toggleEditable.bind(this);
    this.editNameField = this.editNameField.bind(this);
    this.editCategoryField = this.editCategoryField.bind(this);
    this.editPriceField = this.editPriceField.bind(this);
    this.editQuantityField = this.editQuantityField.bind(this);


  }

  roundOff(n, p) {
      const n1 = n * Math.pow(10, p + 1);
      const n2 = Math.floor(n1 / 10);
      if (n1 >= (n2 * 10 + 5)) {
          return (n2 + 1) / Math.pow(10, p);
      }
      return n2 / Math.pow(10, p);
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
    if (this.state.userFields.name != 'default'){
      this.setState({
        pendingArray: this.state.pendingArray.concat(this.state.userFields),
        userFields: {
          name: 'default',
          category: 'default',
          price: 0.0,
          quantity: 1,
          isPending: true
        }
        //totalPrice: this.state.pendingArray.filter(listitems => listitems.isPending === true)
      })
    }
    document.getElementById('nameTextField').value = ''
    document.getElementById('categoryTextField').value = ''
    document.getElementById('priceTextField').value = ''
    document.getElementById('quantityTextField').value = ''
  }

  editNameField(value, index){
    var tempPendingArray = this.state.pendingArray
    tempPendingArray[index].name = value
    tempPendingArray[index].category = document.getElementById('categoryTextFieldPending'+index).value
    tempPendingArray[index].price = document.getElementById('priceTextFieldPending'+index).value
    tempPendingArray[index].quantity = document.getElementById('quantityTextFieldPending'+index).value
    this.setState({
      pendingArray: tempPendingArray
    })
  }

  editCategoryField(value, index){
    var tempPendingArray = this.state.pendingArray
    tempPendingArray[index].name = document.getElementById('nameTextFieldPending'+index).value
    tempPendingArray[index].category = value
    tempPendingArray[index].price = document.getElementById('priceTextFieldPending'+index).value
    tempPendingArray[index].quantity = document.getElementById('quantityTextFieldPending'+index).value
    this.setState({
      pendingArray: tempPendingArray
    })
  }

  editPriceField(value, index){
    var tempPendingArray = this.state.pendingArray
    tempPendingArray[index].name = document.getElementById('nameTextFieldPending'+index).value
    tempPendingArray[index].category = document.getElementById('categoryTextFieldPending'+index).value
    tempPendingArray[index].price = value
    tempPendingArray[index].quantity = document.getElementById('quantityTextFieldPending'+index).value
    this.setState({
      pendingArray: tempPendingArray
    })
  }

  editQuantityField(value, index){
    var tempPendingArray = this.state.pendingArray
    tempPendingArray[index].name = document.getElementById('nameTextFieldPending'+index).value
    tempPendingArray[index].category = document.getElementById('categoryTextFieldPending'+index).value
    tempPendingArray[index].price = document.getElementById('priceTextFieldPending'+index).value
    tempPendingArray[index].quantity = value
    this.setState({
      pendingArray: tempPendingArray
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

  sortArray(array){
    if (this.state.isEditable == false){
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
      //if mismatched, put pending first
      if (a.isPending === true && b.isPending === false){
        return -1
      }
      //both not pending, sort by name
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
  else{
    return array
  }
  }

  toggleEditable(){
    var currentIsEditable = this.state.isEditable
    console.log(currentIsEditable)
    if (this.state.isEditable == false){
      this.setState({
        isEditable: !currentIsEditable,
        editButtonText: 'Finish Editing'
      })
    }
    else{
      this.setState({
        isEditable: !currentIsEditable,
        editButtonText: 'Edit Items'
      })
    }
  }


  render() {
    console.log(this.state.listitems)
    this.updateTotalPrice()
    return (
      <div className="App">
        <h1 style ={{padding: '0px 120px'}}>Grocery List</h1>

        <div class="flexbox-container">
          <div class="pendingColumn">
          <table class="pendingTable" cellPadding="4px">
            <thead>
              <tr>
                <td>

                </td>
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
              <PendingItems canEdit={this.state.isEditable}
              listitems={this.sortArray(this.state.pendingArray)}
              updateIsPending={this.updateIsPending}
              editNameField={this.editNameField}
              editCategoryField={this.editCategoryField}
              editPriceField={this.editPriceField}
              editQuantityField={this.editQuantityField}
              />
              </tbody>
              <tr>
                <td></td>
                <td>
                <button style={buttonStyle} onClick={this.toggleEditable} > {this.state.editButtonText} </button>
                </td>
                <td style={{textAlign: 'right'}}>Total:</td>
                <td>
                  ${this.roundOff(this.state.totalPrice,2).toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
          <div class="completedColumn">
          <table class='completedTable' cellPadding="4px">
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
              <CompletedItems listitems={this.sortArray(this.state.pendingArray)} updateIsPending={this.updateIsPending}/>
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
  borderRadius: '10%',
  cursor: 'pointer',
  width:'5000',
  height: '100%',
}

export default App;


/*
//this.state.pendingArray[index].isPending = true;


style={{textAlign: 'right'}}
*/
