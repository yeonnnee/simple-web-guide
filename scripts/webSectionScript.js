const markCurrentSection = (section) => {
  const current = document.getElementsByClassName("current-section")[0];

  current.classList.remove("current-section");
  section.classList.add("current-section");
};

const checkScrollIsEnd = (lastSection) => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    const current = document.getElementsByClassName("current-section")[0];
    current.classList.remove("current-section");
    lastSection.classList.add("current-section");
  }
};

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const section1Pos = document.getElementById("웹이란").offsetTop;
  const section2Pos = document.getElementById("인터넷이란").offsetTop;
  const section3Pos =
    document.getElementById("웹은-어떻게-동작하는가").offsetTop;
  const section4Pos = document.getElementById("웹브라우저").offsetTop;
  const section5Pos = document.getElementById("브라우저-구성-요소").offsetTop;
  const section6Pos = document.getElementById(
    "브라우저-렌더링-과정-렌더링-엔진-동작-과정"
  ).offsetTop;
  const section7Pos = document.getElementById("클라이언트").offsetTop;
  const section8Pos = document.getElementById("dns").offsetTop;
  const section9Pos = document.getElementById("웹서버").offsetTop;
  const section10Pos = document.getElementById("was").offsetTop;
  const section11Pos = document.getElementById("http").offsetTop;

  const section1 = document.getElementsByClassName("internet")[0];
  const section2 = document.getElementsByClassName("web")[0];
  const section3 = document.getElementsByClassName("web-work")[0];
  const section4 = document.getElementsByClassName("browser")[0];
  const section5 = document.getElementsByClassName("compose-browser")[0];
  const section6 = document.getElementsByClassName("browser-rendering")[0];
  const section7 = document.getElementsByClassName("client")[0];
  const section8 = document.getElementsByClassName("dns")[0];
  const section9 = document.getElementsByClassName("web-server")[0];
  const section10 = document.getElementsByClassName("was")[0];
  const section11 = document.getElementsByClassName("http")[0];

  if (section2Pos - scrollPos < 50 && section1Pos - scrollPos > 50) {
    markCurrentSection(section1);
  } else if (section1Pos - scrollPos < 80 && section3Pos - scrollPos > 50) {
    markCurrentSection(section2);
  } else if (section3Pos - scrollPos < 50 && section4Pos - scrollPos > 50) {
    markCurrentSection(section3);
  } else if (section4Pos - scrollPos < 50 && section5Pos - scrollPos > 50) {
    markCurrentSection(section4);
  } else if (section5Pos - scrollPos < 50 && section6Pos - scrollPos > 50) {
    markCurrentSection(section5);
  } else if (section6Pos - scrollPos < 50 && section7Pos - scrollPos > 50) {
    markCurrentSection(section6);
  } else if (section7Pos - scrollPos < 50 && section8Pos - scrollPos > 50) {
    markCurrentSection(section7);
  } else if (section8Pos - scrollPos < 50 && section9Pos - scrollPos > 50) {
    markCurrentSection(section8);
  } else if (section9Pos - scrollPos < 50 && section10Pos - scrollPos > 50) {
    markCurrentSection(section9);
  } else if (section10Pos - scrollPos < 50 && section11Pos - scrollPos > 50) {
    markCurrentSection(section10);
  } else {
    markCurrentSection(section1);
  }
  checkScrollIsEnd(section11);
});
