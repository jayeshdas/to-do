import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class ToDoCard extends Component {
  render() {
    return (
        <React.Fragment>
        {this.props.data.map((data, index) => (
            <div key={data.id} className="card p-1 m-1 binsymcard" tabIndex="0">
                <div className="p-1 d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="symbol mb-0 mt-0">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faTimes}
                                onClick={() => this.props.RemoveCard(data.id)}
                            />{" "}
                            {data.symbol.toUpperCase()}
                        </h5>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <span className="normal">
                            {new Date(data.timestamp).toLocaleString()}
                        </span>
                        <span className="username">PERP</span>
                    </div>
                </div>
            </div>
        ))}
    </React.Fragment>
    )
  }
}

export default ToDoCard