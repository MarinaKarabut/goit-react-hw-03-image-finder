import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const fetchImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=20930495-600a23973a3be0872b747cdc1&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
