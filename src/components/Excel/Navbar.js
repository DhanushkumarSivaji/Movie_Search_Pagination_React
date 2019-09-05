import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue:''
         };

        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    submit = (e) => {
        e.preventDefault()
    }

    handleChange = () =>{

    }
    render() {
        return (
            <div>
                        <nav
          className="navbar navbar-dark bg-dark "
          style={{ marginBottom: "30px" }}
        >
          <div className="container">
            <a className="navbar-brand">Data Loader</a>
            <form
              className="form-inline mx-auto searchform"
              onSubmit={this.submit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                value={this.state.searchValue}
                onChange={this.handleChange}
                name="searchValue"
              />
            </form>
            <ul className="navbar-nav ml-auto ">
              <React.Fragment>
             
                <li className="nav-item " style={{
                        color: "white",
                        marginTop: "7px",
                        marginRight: "5px",
                        marginLeft: "3px",
                      }}>
                <i
                        className="fas fa-user-circle"
                        style={{ marginRight: "5px" }}
                      >
                        {" "}
                      </i>
                 
                    Logged in User
                  
                </li>
              </React.Fragment>
            </ul>
          </div>
        </nav>
            </div>
        );
    }
}

export default Navbar;