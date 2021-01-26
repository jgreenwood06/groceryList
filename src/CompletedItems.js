import React, { Component } from 'react';

class CompletedItems extends Component {

  roundOff(n, p) {
      const n1 = n * Math.pow(10, p + 1);
      const n2 = Math.floor(n1 / 10);
      if (n1 >= (n2 * 10 + 5)) {
          return (n2 + 1) / Math.pow(10, p);
      }
      return n2 / Math.pow(10, p);
  }

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
          ${this.roundOff(item.price,2).toFixed(2)}
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
