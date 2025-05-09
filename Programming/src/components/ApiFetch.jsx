function ApiFetch(link, dict) {

    return fetch(link, dict)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }

  
  export default ApiFetch;
  