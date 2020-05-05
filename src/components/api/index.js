import axios from 'axios';

export const fetchDaily = async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.cases,
      deaths: dailyData.deaths,
      recovered: dailyData.recovered,
      date: dailyData.date,
    }));
    const lastMonth = modifiedData.slice(-30);
    return lastMonth;
  } catch (err) {
    console.log(err);
  }
};
