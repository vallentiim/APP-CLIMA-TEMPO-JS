const KEY = '3ca0d24f87b64fc98ba183404222111'

const fetchData =  async (city) => {     
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;