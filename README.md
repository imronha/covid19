[COVID19 Tracker Live Demo](https://condescending-lamport-cf54b7.netlify.app/)

# COVID19 Tracker

COVID-19 tracker designed to showcase current coronavirus cases worldwide using React.js, Material UI, chartjs-2, axios, react-countup, News API, COVID-19 API by visualizing data and serving current news.

## Technologies Used:

* ReactJS
* JavaScript
* HTML/CSS
* Chartjs-2
* Axios
* React-countup
* News API
* COVID-19 API

## Features:

![COVID19 Gif](COVID19Tracker.gif)

Data can be visualized through a line graph or bar chart created with chartjs2 and can sort information by global numbers or by nation. Separate News component showcases current news related to COVID-19.

### Global view

Users can see a dashboard of current infections, recovered, and deaths worldwide on a line graph using data from the COVID19 API.

```Javascript
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#838EFF",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "#FF848B",
            fill: true,
          },
        ],
      }}
    />
```

### Country picker component

Users can select a country and view fetched data in a bar chart view.

```Javascript
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  // console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
```

### Bar Chart view for countries

Users can see a dashboard of current infections, recovered, and deaths for selected countries.

```Javascript
 const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

```


## Features to implement in next iterations
* More chart views
* Comparision data to other infetious diseases
* Different resources for news, such as video


## Known issues
* News articles no longer being fetched

