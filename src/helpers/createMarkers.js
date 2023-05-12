function createMarkers(data = []) {
  let markers = [];
  if (data.length >= 0) {
    markers = data.map((el) => {
      return {
        id: el.id,
        city: el.cities[0].name,
        color: "red",
        coordinates: el.capitalInfo.latlng,
        value: 50,
      };
    });
  }
  return markers;
}

export default createMarkers;
