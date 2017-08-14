import React, {Component} from 'react';

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
              <li><a href="/books/">Books</a></li>
              <li><a href="/reviews/">Reviews</a></li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;