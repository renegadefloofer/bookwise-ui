import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const saveRecommendation = async (name, _userId, genres, _notes) => {
  const responseId = await axios
    .post(`${BASE_URL}`.concat('recommendationRequests'), {
      name: name,
      genres: genres,
    })
    .then((res) => {
      return res.data.id;
    })
    .catch((err) => {
      return err;
    });

  return responseId;
};
