import axios from "axios";

new Date();

const covidUrl = "https://covid19.mathdro.id/api";
const newsUrl =
  "http://newsapi.org/v2/everything?" +
  "q=covid-19&" +
  "from=2020-04-18&" +
  "sortBy=popularity&" +
  "apiKey=4925958870c24a57b472db2d1e3b3d27";

export const fetchNews = async () => {
  try {
    const res = await axios.get(newsUrl);
    // console.log(res);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (country) => {
  let changeableUrl = covidUrl;
  if (country) {
    changeableUrl = `${covidUrl}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${covidUrl}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportData,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${covidUrl}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
