function appendData(data = [], list = [], key = "cities") {
  let appendedData = [];
  if (data) {
    // append additional data from data.json to API data and a unique ID
    appendedData = data.map((country, index) => {
      const id = index + 1;
      // find country match among the list of destinations
      const [match] = list.filter(
        (el) => el.country.toLowerCase() === country.name.common.toLowerCase()
      );
      // append destination additional info to API country data, and a unique ID
      return { ...country, id, [key]: match[key] };
    });
  }
  return appendedData;
}
export default appendData;
