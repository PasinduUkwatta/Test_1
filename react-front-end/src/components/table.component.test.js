import React from 'react'
import axios from 'axios'

class Table extends React.Component {
constructor() {
   super();
   this.state = {
      data: []
   }
}
 
componentDidMount() {
 var th = this;
 this.serverRequest = axios.get(this.props.source)
 .then(function(event) { 
     th.setState({
         data: event.data
         
     });
 })
}


 
render() {
 const contents = this.state.data.forEach(item => {
      // change the title and location key based on your API
      return <tr>
        <td>{item.title}</td> 
        <td>{item.location}</td>
      </tr>
 })
 return (
    <div className="container">
      <div className="row">
         <div className="col-md-6 col-md-offset-5">
             <h1 className="title">All Events</h1>
             <table>
              <tr>
                <th>Event title</th>
                <th>Event location</th> 
              </tr>
                {contents}
            </table>
         </div>
      </div>
    </div>
  );
 } 
}

export default Table