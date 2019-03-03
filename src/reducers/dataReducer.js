export default function reducer(
  state = {
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
        gif: 'https://placekitten.com/400/400',
        tech: ['JavaScript'],
        keywords: ['viz']
      },
      {
        title: '2016 Boston Marathon Ad Campaigns',
        gif: 'https://placekitten.com/400/400',
        tech: ['JavaScript'],
        keywords: ['html5ads']
      },
      {
        title: '2017 Boston Marathon Ad Campaigns',
        gif: 'https://placekitten.com/400/400',
        tech: ['JavaScript'],
        keywords: ['html5ads']
      },
      {
        title: 'Twine Ads',
        gif: 'https://placekitten.com/400/400',
        tech: ['JavaScript'],
        keywords: ['html5ads']
      }
    ],
    filters: ['All', 'React', 'JavaScript', 'Sass', 'Node', 'MySQL'],
    activeFilter: 'All',
    error: null
  },
  action
) {
  switch (action.type) {
    case 'FETCH_INFO_FULFILLED': {
      return { ...state, data: action.payload };
    }
    case 'FETCH_INFO_REJECTED': {
      return { ...state, error: action.payload };
    }
    case 'SET_ACTIVE_FILTER': {
      return { ...state, activeFilter: action.payload };
    }
    default: {
      return state;
    }
  }
}
