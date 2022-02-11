import { faBookmark, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

class ToDoCard extends Component {
  render() {
    return (
        <React.Fragment>
        {this.props.data.map((data, index) => (
            <div key={data.id} className="card p-1 m-1" tabIndex="0">
                <div className="p-1 d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="symbol mb-0 mt-0">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faBookmark}
                                onClick={() => this.props.RemoveCard(data.id)}
                            />{" "}
                            {data.title.toUpperCase()}
                        </h5>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <span className="normal">
                            {new Date(data.datetime).toLocaleString()}
                        </span>
                        <span className="username">FAV</span>
                    </div>
                </div>
                <span className='normal'>{data.desc}</span>
            </div>
        ))}
    </React.Fragment>
    )
  }
}

export default ToDoCard