import React from 'react';
import './style.css';

class Button extends React.Component {
    render() {
      return (
        <div className = "tablebox">
          <button disabled={this.props.disable} className="btn btn-primary" onClick={this.props.handleClick}>{this.props.label}</button>
        </div>
      );
   }
}
export default Button;