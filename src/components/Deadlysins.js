import React, { Component } from 'react';

class Deadlysins extends Component {
  constructor () {
    super();
    this.state = {
      series: [],
    };
  }

  componentWillMount() {

    fetch('https://kitsu.io/api/edge/anime?filter[id]=12633')
    .then(data => {
      return data.json();
    }).then(data => {
      let series = data.data.map((tv) => {
        return (
          <div key={tv.data}>
            <img src={tv.attributes.coverImage.tiny} />
            <h3>{tv.attributes.canonicalTitle}</h3>
            <p>{tv.attributes.nextRelease}</p>
          </div>
        )
      })
      this.setState({series: series});
      console.log("state", this.state.series);
    })
  }

  render() {
    return (
      <div>
        {this.state.series}
      </div>
    )
  }
}

export default Deadlysins;
