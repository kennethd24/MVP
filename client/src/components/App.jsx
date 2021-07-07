import React, { useState } from 'react';
import axios from 'axios';

import UserFeedResult from './UserFeedResult';
import rapidapi from '../../../config';

const App = () => {
  const [newUserFeed, setNewUserFeed] = useState([]);
  const [input, setInput] = useState('');

  const getUserFeed = () => {
    // // slower api
    // const options = {
    //   method: 'GET',
    //   url: 'https://tiktok33.p.rapidapi.com/user/feed/ipsy?limit=100',
    //   headers: {
    //     'x-rapidapi-key': rapidapi,
    //     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    //   },
    // };
    const options = {
      method: 'GET',
      url: 'https://tik-tok-feed.p.rapidapi.com/',
      params: { search: 'ipsy', type: 'user-feed', max: '0' },
      headers: {
        'x-rapidapi-key': rapidapi,
        'x-rapidapi-host': 'tik-tok-feed.p.rapidapi.com',
      },
    };
    axios.request(options).then((response) => {
      setNewUserFeed(response.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserFeed();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to TikTok Analytics!</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={input} placeholder="Insert TikTok username" />
        <button type="submit">Search</button>
      </form>
      <UserFeedResult newUserFeed={newUserFeed} />
    </div>
  );
};

export default App;

// const options = {
//   method: 'GET',
//   url: 'https://tik-tok-feed.p.rapidapi.com/',
//   params: { search: 'ipsy', type: 'user-feed', max: '0' },
//   headers: {
//     'x-rapidapi-key': '1a39ca1bbemshaf24de47fc36df0p167f00jsn803c9383e10c',
//     'x-rapidapi-host': 'tik-tok-feed.p.rapidapi.com',
//   },
// };

// const options = {
//   method: 'GET',
//   url: 'https://tiktok33.p.rapidapi.com/user/feed/ipsy?limit=100',
//   headers: {
//     'x-rapidapi-key': '1a39ca1bbemshaf24de47fc36df0p167f00jsn803c9383e10c',
//     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//   },
// };

// const getUserFeed = async () => {
//   try {
//     const options = {
//       method: 'GET',
//       url: 'https://tiktok33.p.rapidapi.com/user/feed/ipsy?limit=100',
//       headers: {
//         'x-rapidapi-key': '1a39ca1bbemshaf24de47fc36df0p167f00jsn803c9383e10c',
//         'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//       },
//     };
//     const result = await axios.request(options);
//     setNewUserFeed(result.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
