import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Button from './Button.js';
import './style.css';

class Table extends React.Component {
  constructor(){
    super();
    this.onSelectAll = this.onSelectAll.bind(this);
    this.onRowSelect = this.onRowSelect.bind(this);
    this.imageFormatter = this.imageFormatter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state= {
      disable: true,
      selected: []
    }
  }
  
  handleClick(){
    var selected_rows = this.state.selected;
    for(var i=0; i<selected_rows.length; i++){
      selected_rows[i].favorite = true;
    }
    this.setState({selected: selected_rows});
  }
  // selecting single sow to add as favorite
  onRowSelect(row, isSelected, e) {
     if (isSelected) {
       this.setState({ disable: false });
       this.state.selected.push(row);
      }  
      else{
        var index = this.state.selected.indexOf(row);
        this.state.selected.splice(index, 1);
        this.setState({selected: this.state.selected });
        if(this.state.selected.length == 0){
          this.setState({ disable: true });
        }  
      }
  }

  // selecting all rows to add as favorite
  onSelectAll(isSelected, rows) {
    alert(`is select all: ${isSelected}`);
    if (isSelected) {
      alert('Current display and selected data: ');
    } else {
      alert('unselect rows: ');
    }
    for (let i = 0; i < rows.length; i++) {
      alert(rows[i].id);
    }
  }

  // heart icon view
  imageFormatter(cell, row){
    if(!row.favorite){
      return (<img style={{width:20}} src='./heart.png'/>)
    }
    else{
      return (<img style={{width:20}} src='./favorite.png'/>)
    }
  }

  render() {
    // row properties for table
    const selectRowProp = {
      mode: 'checkbox',
      bgColor: 'yellow',
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };

    return (
      <div className = "tablebox">
        <Button label="Favorite" disable = {this.state.disable} handleClick = {this.handleClick} />
        <BootstrapTable selectRow={ selectRowProp } pagination data={ this.props.data } options={ { noDataText: 'This is custom text for empty data' } }>
          <TableHeaderColumn dataSort width='150' dataField='id' dataAlign="center" isKey filter={ { type: 'TextFilter', delay: 1000 } } >ID</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='make' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Make</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='model' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Product</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='year' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Year</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='fuel_type' dataAlign="center">Fuel Type</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='transmission' dataAlign="center">Transmission</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='favourite' dataAlign="center" dataFormat={this.imageFormatter}>Favourite</TableHeaderColumn>
        </BootstrapTable>
    </div>
    );
  }
}
export default Table;