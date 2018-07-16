import React from 'react';
import Film from "./Film";

class FilmList extends React.Component {
  render() {
    const filmComponents = this.props.data.map((film, index) => {
      return <Film title={film.title} key={index} time={film.time}></Film>
    })

  return (
      <div className="film-list">
        {filmComponents}
      </div>
    );

  }
}
export default FilmList;
