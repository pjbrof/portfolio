import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.scss';
import d3Logo from '../../img/d3.svg';

export default class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          title: 'Heard the Sheep',
          gif: 'https://placekitten.com/400/400',
          tech: ['JavaScript', 'D3'],
          keywords: ['viz']
        },
        {
          title: 'RunBold Banner App',
          gif: 'https://placekitten.com/400/400',
          tech: ['JavaScript', 'PHP', 'OAuth'],
          keywords: ['app']
        },
        {
          title: 'JJill Site Redesign',
          gif: 'https://placekitten.com/400/400',
          tech: ['JavaScript', 'DotNet'],
          keywords: ['redesign']
        },
        {
          title: 'John Hancock Site Redesign',
          gif: 'https://placekitten.com/400/400',
          tech: ['React', 'JavaScript', 'AEM', 'Sass', 'Java'],
          keywords: ['redesign']
        },
        {
          title: 'Musicroamer',
          gif: 'https://placekitten.com/400/400',
          tech: ['React', 'JavaScript', 'Sass', 'Node', 'MySQL'],
          keywords: ['app']
        },
        {
          title: 'Automobile Manufactorers',
          gif: 'https://placekitten.com/400/400',
          tech: ['JavaScript', 'D3'],
          keywords: ['viz']
        },
        {
          title: 'Dendrofile',
          gif: 'https://placekitten.com/400/400',
          tech: ['JavaScript', 'Node'],
          keywords: ['viz']
        },
        {
          title: 'Boston Data',
          gif: 'https://placekitten.com/400/400',
          tech: ['R', 'Python', 'JavaScript'],
          keywords: ['viz']
        },
        {
          title: 'Scotch Malt Map',
          gif: 'https://placekitten.com/400/330',
          tech: ['JavaScript'],
          keywords: ['viz']
        },
        {
          title: '2016 Boston Marathon Ad Campaigns',
          gif: 'https://placekitten.com/400/330',
          tech: ['JavaScript'],
          keywords: ['html5ads']
        },
        {
          title: '2017 Boston Marathon Ad Campaigns',
          gif: 'https://placekitten.com/400/330',
          tech: ['JavaScript'],
          keywords: ['html5ads']
        },
        {
          title: 'Twine Ads',
          gif: 'https://placekitten.com/400/330',
          tech: ['JavaScript'],
          keywords: ['html5ads']
        }
      ]
    };
  }

  render() {
    const cards = this.state.cards.map((value, index) => {
      return (
        <Link to={`/g/${index}`} key={index}>
          <div className="card" style={{ backgroundImage: `url(${value.gif})` }}>
            <h2>{value.title}</h2>
            <ul>
              <li>
                <img src={d3Logo} alt="d3js" />
              </li>
            </ul>
          </div>
        </Link>
      );
    });
    return <div className="cards">{cards}</div>;
  }
}
