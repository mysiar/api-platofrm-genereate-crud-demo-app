import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">API Platform - generate crud - demo app</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/books/">Books</Link></li>
              <li><Link to="/reviews/">Reviews</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;
