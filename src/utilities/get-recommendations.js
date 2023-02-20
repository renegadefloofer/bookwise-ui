export const BASE_URL = 'https://app.arsolutions.it/api/v1/book';

export const getRecommendation = async (promptid) => {
  const fetchData = async () => {
    try {
      const params = {
        promptID: promptid,
      };
      const queryString = new URLSearchParams(params).toString();

      const response = await fetch(`${BASE_URL}?${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      });
      const json = await response.json();

      const recommendations = json['data'];
      const recommendationsParsed = recommendations.forEach((item) => {
        return {
          id: item['_id']['$oid'],
          title: item['title'],
          author: item['author'],
          isbn: item['isbn'],
        };
      });

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
