window.addEventListener("load", () => {
  document.querySelector(".time") && getWeather();
  const form = document.getElementsByTagName("form")[0];

  form &&
    form.addEventListener("submit", e => {
      e.preventDefault();
      const SendData = new FormData(form);
      const http = new XMLHttpRequest();
      http.open("POST", "form.php", true);
      http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
          location.href = "/";
        }
      };
      http.send(SendData);
    });

  const topBtn = document.querySelector(".top-btn span");
  topBtn &&
    topBtn.addEventListener("click", () => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    });

  $(".advantages").slick({
    mobileFirst: true,
    centerMode: true,
    arrows: false,
    centerPadding: "10%",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
});

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
