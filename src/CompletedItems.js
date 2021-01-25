import React, { Component } from 'react';

class CompletedItems extends Component {
  render() {
    return this.props.listitems.filter(listitems => listitems.isPending === false).map((item, index) => (
      
      <tr>
        <td>
          <input type="checkbox" checked={item.isPending} onChange={()=>this.props.updateIsPending(this.props.listitems.findIndex(obj => obj.name === item.name))} />
        </td>
        <td style={{ textDecoration: 'line-through' }}>
          { item.name }
        </td>
        <td style={{ textDecoration: 'line-through' }}>
          { item.category }
        </td>
        <td style={{ textDecoration: 'line-through' }}>
          { item.price }
        </td>
        <td style={{ textDecoration: 'line-through' }}>
          { item.quantity }
        </td>
      </tr>
    ));
  }
}



export default CompletedItems;


/*
<button onClick ={this.props.moveToPending()} style={buttonStyle}>add</button>

*/
