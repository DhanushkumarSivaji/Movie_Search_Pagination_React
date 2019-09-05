import React, { Component } from 'react';
class SearchComponent extends Component {
    state = {
      filter: "",
      data: [
        {
          fname: "Jayne",
          lname: "Washington",
          email: "jaynewashington@exposa.com",
          gender: "female"
        },
        {
          fname: "Peterson",
          lname: "Dalton",
          email: "petersondalton@exposa.com",
          gender: "male"
        },
        {
          fname: "Velazquez",
          lname: "Calderon",
          email: "velazquezcalderon@exposa.com",
          gender: "male"
        },
        {
          fname: "Norman",
          lname: "Reed",
          email: "normanreed@exposa.com",
          gender: "male"
        }
      ]
    };
  
    handleChange = event => {
      this.setState({ filter: event.target.value });
    };
  
    render() {
      const { filter, data } = this.state;
      const lowercasedFilter = filter.toLowerCase();

    let filteredData = data.filter(item =>{
        return item.fname.indexOf(filter) !== -1
    })
  
      return (
        <div>
          <input value={filter} onChange={this.handleChange} />
          {filteredData.map(item => (
            <div key={item.email}>
              <div>
                {item.fname} {item.lname} - {item.gender} - {item.email}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

export default SearchComponent;