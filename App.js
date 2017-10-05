import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Request from 'superagent';
import Table from './components/Table.js';
import './stylesheets/style.css';

// Url for back-end server api
const url="http://localhost:5000/cars";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        cars: [],
        currentPage:1
      };
       this.onPageChange = this.onPageChange.bind(this);
    }

    // Will be called before component is rendered
    componentWillMount(){
      var self = this;
      // Fetching data from back-end api
      Request.get(url)
      .query({ offset: '0' })
      .end(function(err, res){
        if(res.ok){
          self.setState({
            cars: res.body
          });
        }
      });
    }

    // Called on changing the page number to fetch new data
    onPageChange(page, sizePerPage) {
      var currentIndex = (page-1) * sizePerPage;
      this.setState({
        currentPage: page
      });
      // Fetch data one page before last page
      if(this.state.cars.length - page*50 == 50 ){
        var self = this;
        Request.get(url)
        .query({ offset: this.state.cars.length })
        .end(function(err, res){
          var cars = res.body;
          var new_arr = self.state.cars.concat(cars);
          self.setState({
            cars: new_arr
          });
        });
      }
    }

    render() {
      return (
        <div>
          <header className="app-header">
            <h1>Vehicles</h1>
          </header>
           {/* Render Table Component */}
          <Table onPageChange= {this.onPageChange} currentPage= {this.state.currentPage} data={ this.state.cars }/>
        </div>
      );
   }
}
export default App;