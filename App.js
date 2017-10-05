import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Table from './components/Table.js';
import './style.css';

class App extends React.Component {
    constructor() {
    super();
    this.state = {
      products: [{
        id:1,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:2,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:3,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:4,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:5,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:6,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:7,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:8,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:9,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:10,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:11,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:12,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:13,
        make: "Maruti",
        model: "V3",
        year: 2010,
        fuel_type: "Gas",
        transmission: "Automatic",
        favorite: false
      },
      {
        id:14,
        make: "Toyota",
        model: "Etios",
        year: 2000,
        fuel_type: "Diesel",
        transmission: "Automatic",
        favorite: false
      } 
      ]};
      // this.onSelectAll = this.onSelectAll.bind(this);
      // this.onRowSelect = this.onRowSelect.bind(this);
      // this.imageFormatter = this.imageFormatter.bind(this);
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