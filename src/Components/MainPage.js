import React from 'react';
import ImageList from './ImageList';
import NavBar from './NavBar';
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
           <NavBar onLogoutClick={this.onLogoutClick} />
           
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