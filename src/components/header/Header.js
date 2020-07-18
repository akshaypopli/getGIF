import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  state={
    text: ''
  }

  static defaultProps = {
    title: "GetGIF",
    icon: "fas fa-photo-video"
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  findGif = e => {
    e.preventDefault();
      this.props.searchGIF(this.state.value);
      this.setState({value: ''});
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  

  render(){
    return (
      <nav className="navbar bg-dark">
          <h1>
              <i className={this.props.icon} />
              {this.props.title}
          </h1>
          <div className="c-relative">
            <input style={{margin: '0', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px'}}
              placeholder="Search GIF" type="text" name="value" text={this.state.text} onChange={this.onChange}/>
            <button className="c-search-icon" onClick={this.findGif}><i className="fas fa-search" /></button>
          </div>
          <ul>
              <li>
                  <a href='/'>Home</a>
              </li>
              <li>
                  <a href='/about'>About</a>
              </li>
          </ul>
      </nav>
    )
  }

}

export default Header;
