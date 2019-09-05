import React, { Component } from "react";
import ShowImage from "./ShowImage";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    {
      console.log(this.props.data);
    }
    return (
      <div className="container">
        <div className="row">
          {this.props.data &&
            this.props.data.map(i => {
              return (
                <div className="col-4 mb-3">
                  <div className="card">
                    <div className="card-header">
                      {i.Title.substring(0, 30)}
                    </div>
                    <ShowImage url={i.Poster} />
                    <div className="card-body">
                      <p>Year: {i.Year}</p>
                      <p>imdbID: {i.imdbID}</p>
                      <p>Type: {i.Type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Card;
