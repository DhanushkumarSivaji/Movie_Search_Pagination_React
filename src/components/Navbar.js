import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      moviesData: [],
      search: false,
      totalResults: 0,
      currentPage: 1,
      postsPerPage: 9,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}

  handleChange = e => {
    this.setState({ search: false });
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=${
          this.state.searchValue
        }`
      )
      .then(res => {
        this.setState({
          moviesData: res.data.Search,
          totalResults: res.data.totalResults,
        });
      });
    this.setState({ search: true });
    this.setState({ loading: false });
  };

  nextPage = pageNumber => {
    this.setState({ loading: true });
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=${
          this.state.searchValue
        }&page=${pageNumber}`
      )
      .then(res => {
        this.setState({
          moviesData: res.data.Search,
          currentPage: pageNumber,
          totalResults: res.data.totalResults,
        });
      });
    this.setState({ search: true });
    this.setState({ loading: false });
  };

  render() {
    
    const numberPages = Math.floor(this.state.totalResults / 30);
    return (
      <div>
        <nav
          className="navbar navbar-dark bg-dark "
          style={{ marginBottom: "30px" }}
        >
          <div className="container">
            <a className="navbar-brand">Movie Catalog</a>
            <form
              className="form-inline mx-auto searchform"
              onSubmit={this.submit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search By Movie Name"
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
                 
                    Dhanush kumar
                  
                </li>
              </React.Fragment>
            </ul>
          </div>
        </nav>
        {this.state.loading?<h2 className='loadingtext'>Loading....</h2>:<div>
        <div className="container" style={{ marginBottom: "40px" }}>
          {this.state.search && (
            <h1>
              You Searched for: <strong>{this.state.searchValue}, </strong>
              {this.state.totalResults ? this.state.totalResults : "0"} results
              found.
            </h1>
          )}
        </div>
        <Card
          data={this.state.moviesData}
          searchValue={this.state.searchValue}
        />
        <div className="container">
          {this.state.totalResults > 10 ? (
            <Pagination
              pages={numberPages}
              nextPage={this.nextPage}
              currentPage={this.state.currentPage}
            />
          ) : (
            ""
          )}
        </div>
        </div>}
      </div>
    );
  }
}

export default Navbar;
