import React, { Component } from 'react';
import PropTypes from 'prop-types';



class PendingItems extends Component {

  roundOff(n, p) {
      const n1 = n * Math.pow(10, p + 1);
      const n2 = Math.floor(n1 / 10);
      if (n1 >= (n2 * 10 + 5)) {
          return (n2 + 1) / Math.pow(10, p);
      }
      return n2 / Math.pow(10, p);
  }

  render() {
    if (this.props.canEdit == false) {
    return this.props.listitems.filter(listitems => listitems.isPending === true).map((item, index) => (
        <tr>
          <td>
            <input type="checkbox" checked={!item.isPending} onChange={()=>this.props.updateIsPending(this.props.listitems.findIndex(obj => obj.name === item.name))} />
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.category}
          </td>
          <td>
            ${this.roundOff(item.price,2).toFixed(2)}
          </td>
          <td>
            {item.quantity}
          </td>
        </tr>

    ));
  }
  else{
    return this.props.listitems.filter(listitems => listitems.isPending === true).map((item, index) => (
        <tr>
          <td>
            <input type="checkbox"
            checked={!item.isPending}
            onChange={()=>this.props.updateIsPending(this.props.listitems.findIndex(obj => obj.name === item.name))} />
          </td>
          <td>
            <input type= "text"
            id= {"nameTextFieldPending"+this.props.listitems.findIndex(obj => obj.name === item.name)}
            onChange={event => this.props.editNameField(event.target.value, this.props.listitems.findIndex(obj => obj.name === item.name))}
            value= {item.name}
            style ={{width: '100%'}}/>
          </td>
          <td>
            <input type= "text"
            id= {"categoryTextFieldPending"+this.props.listitems.findIndex(obj => obj.name === item.name)}
            onChange={event => this.props.editCategoryField(event.target.value, this.props.listitems.findIndex(obj => obj.name === item.name))}
            value= {item.category} style ={{width: '100%'}}/>
          </td>
          <td>
            <input type= "text"
            id= {"priceTextFieldPending"+this.props.listitems.findIndex(obj => obj.name === item.name)}
            onChange={event => this.props.editPriceField(event.target.value, this.props.listitems.findIndex(obj => obj.name === item.name))}
            value= {item.price} style ={{width: '100%'}}/>
          </td>
          <td>
            <input type= "text"
            id= {"quantityTextFieldPending"+this.props.listitems.findIndex(obj => obj.name === item.name)}
            onChange={event => this.props.editQuantityField(event.target.value, this.props.listitems.findIndex(obj => obj.name === item.name))}
            value= {item.quantity} style ={{width: '100%'}}/>
          </td>
        </tr>

    ));
  }
  }
}

PendingItems.propTypes = {
  listitems: PropTypes.array.isRequired
}

export default PendingItems;


/*
//return this.props.listitems.map((item, index) => { return(
<input type="checkbox" onChange={()=>this.props.markNotPending(index)} />

<button>button</button>


<tr>
<h5> <ListItemForPending item={item} /></h5>
</tr>


render() {
  return this.props.listitems.map((item) => (
    <tbody>
    <td>
    <button style={{ backgroundColor: '#f4f4f4' }}>
    <h5> <ListItem item={item} /></h5>
    </button>
    </td>
    <td>
    <h5>{ item.category }</h5>
    </td>
    <td>
    <h5>{ item.price }</h5>
    </td>
    <td>
    <h5>{ item.quantity }</h5>
    </td>
    </tbody>
  ));
}
}



*/
