import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import axios from 'axios';


const GET_CURRENT_EXPENSE = `
  query expenseByName($name: String!) {
    expenseByName(name: $name) {
      id
      name
      price
    }
  }
`;
  

export default class ExpenseGraphPage extends Component {

    constructor() {
        super();
        this.state = {
            expenses: null,
            message: 'Loading...'
        }
    }

    componentDidMount() {
        // fetch('/graphql')
        //     .then(res => {
        //         console.log("managed to fetch stuff...")
        //         console.log(res)
        //     })
        //     .then(res => this.setState({message: res}));
        this.onFetchFromMongo()
    }

    onFetchFromMongo = () => {
        axios({
            // Of course the url should be where your actual GraphQL server is.
            url: 'http://localhost:4000/graphql',
            method: 'post',
            data: {
                query: GET_CURRENT_EXPENSE,
                variables: {
                    name: "Starbucks"
               }
            }
          }).then((result) => {
              console.log("getting data using axios...")
              console.log(result.data.data.expenseByName.price)
              this.setState({
                  expenses: result.data.data.expenseByName.price
              })
          });
    };

  render() {
      console.log("inside render...")
      console.log(this.state.expenses)
      
    const data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        }]
    }
    const options = {
        annotation: {
             annotations: [{
                 drawTime: 'afterDatasetsDraw',
                 borderColor: 'red',
                 borderDash: [2, 2],
                 borderWidth: 2,
                 mode: 'vertical',
                 type: 'line',
                 value: 10,
                 scaleID: 'x-axis-0',
           }]
        },
        maintainAspectRation: false
    };
    
    return(
    <Bar
        data={data}
        width={100}
        height={50}
        options={options}
    />
    )
  }
}