import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MOVIE from './components/Movie.js';
import MovieShow from './components/movies';
import picture1 from './image/img1.jpg';
import picture2 from './image/img2.jpg';
import picture3 from './image/img3.jpg';
import picture4 from './image/img4.jpg';
import picture5 from './image/img5.jpg';
import picture6 from './image/img6.jpg';
import picture7 from './image/img7.jpg';
import picture8 from './image/img8.jpg';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      movies : [
         {
           picture: picture1 ,
           title: 'THE GODFATHER',
           date: '1979',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture2 ,
           title: 'IP MAN',
           date: '1989',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture3 ,
           title: 'اللمبي 8 جيجا',
           date: '2012',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture4 ,
           title: 'COMDY KIDS',
           date: '1998',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture5 ,
           title: 'HOMA ALONE',
           date: '1996',
           rating: 3,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture6 ,
           title: 'WARRIOR',
           date: '2014',
           rating: 1,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture7 ,
           title: 'BOYKA UNDISPUTD',
           date: '2010',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture8 ,
           title: 'FAST & FURIOUS',
           date: '2006',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
        ]
     };
  }

  render() {
    return (
 
      <Switch>
          <Route  render={(props)=><MOVIE {...props} movies={this.state.movies}/>} />
          <Route  render={(props)=><MovieShow {...props} movies={this.state.movies}/>} />
      </Switch>

    );
  }
}

export default App;


