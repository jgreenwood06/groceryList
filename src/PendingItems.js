import React, { Component } from 'react';
import ListItem from './ListItem.js'
import ListItemForPending from './ListItemForPending.js'
import PropTypes from 'prop-types';



class PendingItems extends Component {

/*
markAndToggle = index => {
  this.props.markNotPending(index);
  this.toggleCheckbox;
}
*/

  render() {

    return this.props.listitems.filter(listitems => listitems.isPending === true).map((item, index) => { return(
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
            {item.price}
          </td>
          <td>
            {item.quantity}
          </td>
        </tr>
      )
  }

    );
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