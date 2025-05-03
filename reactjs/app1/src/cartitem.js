//reusable class component 
import React from "react";
export default class CartItem extends React.Component {
  constructor(props) {
    super(props); //required
    //property variable
    this.name = props.name;
    this.size = props.size;
    this.color = props.color;
    this.price = props.price;
    //console.log('constructor is called ',this.name);

    //state variable 
    this.state = {
      quantity: props.quantity,
      total: parseInt(props.price) * parseInt(props.quantity),
      isDeleted: false
    }
  }
  //create user defined function 
  updateQuantity = (mode) => {
    //alert('button clicked' + mode);
    if (mode === 'minus') {
      // this.state.quantity = this.state.quantity + 1; //wrong way
      this.setState({
        quantity: parseInt(this.state.quantity) - 1,
      });
    }
    else {
      this.setState({
        quantity: parseInt(this.state.quantity) + 1,
      });
    }
  }

  deleteItem = () => {
    this.setState({
      isDeleted: true
    });
  }

  componentWillMount() {
    //console.log('componentWillMount is called ',this.name);
  }
  render() {
    console.log('render method is called', this.name);
    let output = null;
    if (this.state.isDeleted == false) {
      output = (<tr>
        <td>{this.name}<br /><small className="text-muted">Color: {this.color}, Size: {this.size}</small></td>
        <td>
          <div className="input-group input-group-sm" style={{ "width": "120px" }}>
            <button className="btn btn-outline-secondary" type="button"
              onClick={() => this.updateQuantity('minus')}>-</button>
            <input type="text" className="form-control text-center" value={this.state.quantity} readOnly />
            <button className="btn btn-outline-secondary" type="button"
              onClick={() => this.updateQuantity('plus')}>+</button>
          </div>
        </td>
        <td>{this.price}</td>
        <td>{this.state.total}</td>
        <td><button className="btn btn-danger btn-sm" onClick={this.deleteItem}>Remove</button></td>
      </tr>);
    }
    return (output)
  }

  componentDidMount() {
    //console.log('componentDidMount is called ',this.name);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("next state object", nextState);
    // console.log("current state object", this.state);
    // console.log('shouldComponentUpdate is called', this.name);
    if (parseInt(nextState.quantity) < 1 || parseInt(nextState.quantity) > 5) {
      if (parseInt(nextState.quantity) == 0) {
        nextState.quantity = 1
      }
      else if (parseInt(nextState.quantity) == 6) {
        nextState.quantity = 5
      }
      return false;
    }
    else
      return true;
  }

  componentWillUpdate(nextProp, nextState) {
    //console.log('componentWillUpdate is called',this.name);
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate is called', this.name);
    //always update state object conditionally inside componentDidUpdate 
    
    if (parseInt(this.state.quantity) !== parseInt(prevState.quantity)) {
      this.setState({
        total: parseInt(this.state.quantity) * parseInt(this.price)
      });
    }
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount is called',this.name);
  }
}