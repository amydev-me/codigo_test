import React from 'react';
import ImageList from './ImageList';
import Logout from './Logout';
import './MainPage.css';
import axios from 'axios';

class MainPage extends React.Component {
    state = {images:[]};
    componentDidMount(){
      this.getImages();
    }
    getImages = async () => {
      const response = await axios.get('https://api.myjson.com/bins/10aaj2');
      this.setState({ 
          images: response.data.data.space_list
      });
    };

    onLogoutClick = () =>{
      localStorage.removeItem('token');
      this.props.history.push('/login');
    }

    render(){
      return(
        <div>
           <nav className="navbar navbar-expand-md navbar-dark">
            
            <a className="navbar-brand" href="#">Hello World Website</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            
           
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Logout onLogoutClick={this.onLogoutClick} />
                </li>
                </ul>
            </div> 
        </nav>
        <div className="container" style={{maxWidth: "1300px"}}>
              <p className="m-b-5"><span style={{color: "red"}}>{this.state.images.length}</span> Listing Found</p>
              <div className="row">
                    <ImageList images={this.state.images}/>
              </div>
          </div>
        </div>
         

      );
    }
  }

  export default MainPage;