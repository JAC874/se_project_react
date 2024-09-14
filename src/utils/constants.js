export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/weather-card/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/weather-card/day/clouds.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/weather-card/day/fog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/weather-card/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/weather-card/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/weather-card/day/thunderstorm.png", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/weather-card/night/clear.png", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/weather-card/night/clouds.png", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/weather-card/night/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/weather-card/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/weather-card/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL(
      "../assets/weather-card/night/thunderstorm.png",
      import.meta.url
    ).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/weather-card/day/default.png", import.meta.url)
      .href,
  },
  night: {
    url: new URL("../assets/weather-card/night/default.png", import.meta.url)
      .href,
  },
};



export const coordinates = {
  latitude: 30.267153,
  longitude: -97.743057,
};

export const APIkey = "e011e3076c5ac802687ba23ae515827b";
