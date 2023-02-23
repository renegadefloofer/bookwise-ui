export const BASE_URL = 'https://app.arsolutions.it/api/v1/book';

export const getRecommendations = async (promptid) => {
  const fetchData = async () => {
    console.log('in fd');
    try {
      const params = {
        prompt_id: promptid,
      };
      const queryString = new URLSearchParams(params).toString();

      console.log(`${BASE_URL}?${queryString}`);
      const response = await fetch(`${BASE_URL}?${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      });
      const json = await response.json();
      const recommendations = json['data'];
      console.log(recommendations);
      const recommendationsParsed = recommendations.map((item) => {
        return {
          id: item['_id']['$oid'],
          title: item['title'],
          author: item['author'],
          isbn: item['isbn'],
        };
      });
      console.log(recommendationsParsed);
      return { data: recommendationsParsed, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: error };
    }
  };
  const response = await fetchData();
  console.log(response);
  return response;
};
