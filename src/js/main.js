const getWeather = async () => {
  const w = fetch(
    "http://api.openweathermap.org/data/2.5/find?q=Beirut&units=metric&appid=9da32aaafbf99f43f7d52b9381cd91c5"
  ).then(r => r.json());
  const { list } = await w;
  const currentWeather = Math.ceil(list[0].main.temp);
  const icon = list[0].weather[0].icon;

  currentWeather && icon && setWeather(currentWeather, icon);
};

const setWeather = (temp, icon) => {
  const tempHolder = document.querySelector(".temp-holder");
  const iconHolder = document.querySelector(".icon-holder");
  tempHolder.innerHTML = `${temp} ° C`;
  iconHolder.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" />`;
  setTimeout(() => {
    const dash = document.querySelector(".time").childNodes[2];

    dash && dash.remove();
  }, 100);
};

getWeather();
