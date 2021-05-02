import axios from 'axios';

const KEY = 'AIzaSyCqUp51E8gaPJXeYe_B8gy0P4taw4ktnr4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
