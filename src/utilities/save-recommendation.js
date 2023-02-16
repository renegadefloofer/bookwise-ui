export const BASE_URL = 'https://app.arsolutions.it/api/v1/prompt';

export const saveRecommendation = async (name, genres) => {
  var raw = JSON.stringify({
    genres: genres,
    prompter: name,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: 'follow',
      });
      const json = await response.json();
      console.log(json);
      const promptID = json['data']['_id'][0]['$oid'];
      console.log(promptID);
      return { message: promptID, error: null };
    } catch (error) {
      console.error(error);
      return { message: null, error: error };
    }
  };
  const response = await fetchData();
  return response;
};
