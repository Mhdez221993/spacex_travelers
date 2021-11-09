const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const getMissions = async () => {
  const response = await fetch(`${BASE_URL}`);
  try {
    const missions = await response.json();
    return missions;
  } catch (error) {
    return [];
  }
};

export default getMissions;
