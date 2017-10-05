import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Button from './Button.js';
import '../stylesheets/style.css'; 

class Table extends React.Component {
  constructor(props){
    super(props);
    this.onRowSelect = this.onRowSelect.bind(this);
    this.imageFormatter = this.imageFormatter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state= {
      disable: true,
      selected: []
    }
  }
  
  // called on clicking favorite button 
  handleClick(){
    var selected_rows = this.state.selected;

    // toggle favorite
    for(var i=0; i<selected_rows.length; i++){
      selected_rows[i].favorite = !selected_rows[i].favorite;
    }
    this.setState({selected: selected_rows});
  }

  // select single row to add as favorite
  onRowSelect(row, isSelected, e) {
    // On row select
    if (isSelected) { 
      this.setState({ disable: false });
      this.state.selected.push(row);
    }  
    // On row deselect
    else{
      var index = this.state.selected.indexOf(row);
      this.state.selected.splice(index, 1);
      this.setState({selected: this.state.selected });
      if(this.state.selected.length == 0){
        this.setState({ disable: true });
      }  
    }
  }

  // heart icon format
  imageFormatter(cell, row){
    if(!row.favorite){
      return (<img style={{width:20}} src='../images/heart.png'/>)
    }
    else{
      return (<img style={{width:20}} src='../images/favorite.png'/>)
    }
  }

  render() {
    // row properties for table
    const selectRowProp = {
      mode: 'checkbox',
      bgColor: 'yellow',
      onSelect: this.onRowSelect
    };

    const fuelType = {
      0: 'Petrol',
      1: 'Diesel'
    };

    const transmissionType = {
      0: "Automatic",
      1: "Manual"
    };

    // pagination configuration
    const options = {
      page: this.props.currentPage, // which page show as default
      sizePerPageList: [
      {
        text: '25', value: 25
      }],
      sizePerPage: 25,  // size per page
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 2,  // the pagination bar size
      prePage: 'Prev', // previous page button text
      nextPage: 'Next', // next page button text
      onPageChange: this.props.onPageChange
    };

    // formatter for transmission and fuel type dropdown filter
    function enumFormatter(cell, row, enumObject) {
      return enumObject[cell];
    }

    return (
      <div className = "tablebox">
        {/* Render Button Component */}
        <Button label="Add/Remove Favorite" disable = {this.state.disable} handleClick = {this.handleClick}/>
        
        <BootstrapTable selectRow={ selectRowProp } pagination data={ this.props.data } options={ options }>
          <TableHeaderColumn dataSort width='150' dataField='id' dataAlign="center" isKey filter={ { type: 'TextFilter', delay: 1000 } } >ID</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='make' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Make</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='model' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Model</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='year' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Year</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='packages' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Package</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='fuel_type' filterFormatted dataFormat={ enumFormatter } formatExtraData={ fuelType } dataAlign="center" filter={ { type: 'SelectFilter', options: fuelType, selectText: '' } }>Fuel Type</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='transmission' dataAlign="center" filterFormatted dataFormat={ enumFormatter } formatExtraData={ transmissionType } filter={ { type: 'SelectFilter', options: transmissionType, selectText: '' } }>Transmission</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='favourite' dataAlign="center" dataFormat={this.imageFormatter}>Favorite</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default Table;