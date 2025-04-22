function ApiFetch(link) {
    return fetch(link, 
      {
    headers: {
      'Authorization': 'Bearer 22f63d877828444b9ba61543b8e2b3fe', 
    }
  }
    )
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
  