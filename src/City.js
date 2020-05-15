export function CityData() {
    return [
      { cityName: "Bangalore" },
      { cityName: "Mombai" },
      { cityName: "Delhi" },
      { cityName: "Hyderabad" },
      { cityName: "Ahmedabad" },
      { cityName: "Pune " },
      { cityName: "Indore " },
      { cityName: "Chennai" },
      { cityName: "kolkata" },
      { cityName: "Surat" },
      { cityName: "jaipur" },
      { cityName: "Lucknow" },
      { cityName: "Kanpur" },
    ];
  }
  export function renderCityName(state, val) {
    return state.cityName.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  }