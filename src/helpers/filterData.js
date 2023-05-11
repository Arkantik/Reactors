function filterData(data = [], list = [], key = "") {
  let filteredData = [];
  if (data) {
    // extract coutry names from destinations list
    const countriesList = list.map((el) => el[key].toLowerCase());
    // filter all countries to only keep countries with a matching destination
    filteredData = data.filter((el) =>
      countriesList.includes(el.name.common.toLowerCase())
    );
  }
  return filteredData;
}

export default filterData;
