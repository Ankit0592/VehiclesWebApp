import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Request from 'superagent';
import Button from './Button.js';
import '../style.css'; 

class Table extends React.Component {
  constructor(props){
    super(props);
    this.onRowSelect = this.onRowSelect.bind(this);
    this.imageFormatter = this.imageFormatter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.onPageChange = this.onPageChange.bind(this);
    this.state= {
      disable: true,
      selected: []
    }
  }
  
  // componentWillMount(){
  //   var url="http://localhost:5000/cars";
  //   var self = this;
  //   Request.get(url)
  //   .query({ offset: '0' })
  //   .end(function(err, res){
  //     self.setState({
  //       data: res.body
  //     });
  //   });
  // }

  // handle Favorite button click
  handleClick(){
    var selected_rows = this.state.selected;
    for(var i=0; i<selected_rows.length; i++){// toggle favorite
      selected_rows[i].favorite = !selected_rows[i].favorite;
    }
    this.setState({selected: selected_rows});
  }

  // selecting single sow to add as favorite
  onRowSelect(row, isSelected, e) {
     if (isSelected) { // On row select
       this.setState({ disable: false });
       this.state.selected.push(row);
      }  
      else{ // On row deselect
        var index = this.state.selected.indexOf(row);
        this.state.selected.splice(index, 1);
        this.setState({selected: this.state.selected });
        if(this.state.selected.length == 0){
          this.setState({ disable: true });
        }  
      }
  }

  // onPageChange(page, sizePerPage) {
    
  //   const currentIndex = (page-1) * sizePerPage;
  //   console.log(this.props.data);
  //   console.log(this.props.data.slice(currentIndex, this.props.data.length));
  //   this.setState({
  //     data: this.props.data.slice(currentIndex, this.props.data.length),
  //     currentPage: page
  //   });
  // }

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

    const options = {
      page: this.props.currentPage,  // which page you want to show as default
      sizePerPageList: [{
        text: '50', value: 50
      }],
      sizePerPage: 50,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 1,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next',
      onPageChange: this.props.onPageChange
    };

    function enumFormatter(cell, row, enumObject) {
      return enumObject[cell];
    }

    return (
      <div className = "tablebox">
        {/* Render Button Component */}
        <Button label="Favorite" disable = {this.state.disable} handleClick = {this.handleClick}/>
        <BootstrapTable selectRow={ selectRowProp } pagination data={ this.props.data } options={ options }>
          <TableHeaderColumn dataSort width='150' dataField='id' dataAlign="center" isKey filter={ { type: 'TextFilter', delay: 1000 } } >ID</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='make' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Make</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='model' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Model</TableHeaderColumn>
          <TableHeaderColumn dataSort width='150' dataField='year' dataAlign="center" filter={ { type: 'TextFilter', delay: 1000 } }>Year</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='fuel_type' filterFormatted dataFormat={ enumFormatter } formatExtraData={ fuelType } dataAlign="center" filter={ { type: 'SelectFilter', options: fuelType, selectText: '' } }>Fuel Type</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='transmission' dataAlign="center" filterFormatted dataFormat={ enumFormatter } formatExtraData={ transmissionType } filter={ { type: 'SelectFilter', options: transmissionType, selectText: '' } }>Transmission</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='favourite' dataAlign="center" dataFormat={this.imageFormatter}>Favourite</TableHeaderColumn>
        </BootstrapTable>
    </div>
    );
  }
}
export default Table;