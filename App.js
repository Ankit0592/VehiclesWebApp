import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Request from 'superagent';
import Table from './components/Table.js';
import './style.css';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        products: []
      };
      // this.onSelectAll = this.onSelectAll.bind(this);
      // this.onRowSelect = this.onRowSelect.bind(this);
      // this.imageFormatter = this.imageFormatter.bind(this);
    }

    componentWillMount(){
      var url="http://localhost:5000/cars";
      var self = this;
      Request.get(url).end(function(err, res){
        self.setState({
          products: res.body
        });
      });
    }
    // onRowSelect(row, isSelected, e) {
    //   for (const prop in row) {
    //     if(prop == "favorite"){
    //       row[prop] = !row[prop];
    //     }
    //   }
    // }

    // onSelectAll(isSelected, rows) {
    //   alert(`is select all: ${isSelected}`);
    //   if (isSelected) {
    //     alert('Current display and selected data: ');
    //   } else {
    //     alert('unselect rows: ');
    //   }
    //   for (let i = 0; i < rows.length; i++) {
    //     alert(rows[i].id);
    //   }
    // }

    // imageFormatter(cell, row){
    //   return (<img style={{width:20}} src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Heart-SG2001-transparent.png'/>)
    // }

    render() {

      return (
        <div>
          <header className="app-header">
            <h1>Vehicles</h1>
          </header>
           {/* Render Table Component */}
          <Table data={ this.state.products } imageFormatter={this.imageFormatter}/>
        </div>
      );
   }
}
export default App;