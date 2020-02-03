export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve: PositionCallback, reject: PositionErrorCallback | undefined) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const fetchLocation = () => fetchCoordinates().then(coords => coords);
export const fetchCoordinates = async () => {
  try {
    const {
      coords: { latitude, longitude },
    } = await getCurrentPosition();
    return { latitude, longitude };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
export const getDistance = (
  loc1: { latitude: number; longitude: number },
  loc2: { latitude: number; longitude: number }
) => {
  const lat1 = loc1.latitude;
  const lon1 = loc1.longitude;
  const lat2 = loc2.latitude;
  const lon2 = loc2.longitude;
  if (lat1 === lat2 && lon1 === lon2) {
    return { unit: 'm', value: 0 };
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let unit = 'km';
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    // default in miles
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    // miles to kilometers
    dist = dist * 1.609344;
    if (dist < 1) {
      // miles to meters
      dist = dist / 1609.34;
      unit = 'm';
    }
    return { unit, value: dist };
  }
};
