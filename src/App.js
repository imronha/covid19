import React from "react";
import coronaImage from "./images/image.png";
import newsImage from "./images/news.png";

// Import components
import { Cards, Chart, CountryPicker, News, Navbar } from "./components";

import styles from "./App.module.css";
import { fetchData, fetchNews } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    news: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedNews = await fetchNews();
    // console.log(fetchNews);
    this.setState({ data: fetchedData, news: fetchedNews });
    // console.log(this.state.news);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    // Set State
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country, news } = this.state;

    return (
      <div className={styles.container}>
        <Navbar />

        <img className={styles.image} src={coronaImage} alt="COVIC-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <img
          className={styles.smallImage}
          src={newsImage}
          alt="Breaking News"
        />

        <News data={news} />
      </div>
    );
  }
}

export default App;
