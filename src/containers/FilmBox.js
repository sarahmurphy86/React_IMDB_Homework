import React from 'react';
import FilmList from '../components/FilmList';

class FilmBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[{
        title: "TopGun",
        time: "17:00 18:30 20:00"
      },
      {
        title: "Point Break",
        time: "20:00 21:00 23:30"
      },
      {
        title: "Cocktail",
        time: "19:30 20:30 23:55"
      }]
    }
  }

  render() {
      return (
        <div>
          <h2>Film List</h2>
          <FilmList data={this.state.data}/>
      </div>
      )
    }

}

export default FilmBox;
