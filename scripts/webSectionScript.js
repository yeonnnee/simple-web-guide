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
  const webPos = document.getElementById("웹이란").offsetTop;
  const internetPos = document.getElementById("인터넷이란").offsetTop;
  const webWorkPos =
    document.getElementById("웹은-어떻게-동작하는가").offsetTop;
  const browserPos = document.getElementById("웹브라우저").offsetTop;
  const browserEngineSectionPos =
    document.getElementById("브라우저-구성-요소").offsetTop;
  const renderingSectionPos = document.getElementById(
    "브라우저-렌더링-과정-렌더링-엔진-동작-과정"
  ).offsetTop;
  const clientPos = document.getElementById("클라이언트").offsetTop;
  const dnsPos = document.getElementById("dns").offsetTop;
  const webServerPos = document.getElementById("웹서버").offsetTop;
  const wasPos = document.getElementById("was").offsetTop;
  const httpPos = document.getElementById("http").offsetTop;

  const web = document.getElementsByClassName("web")[0];
  const internet = document.getElementsByClassName("internet")[0];
  const webWork = document.getElementsByClassName("web-work")[0];
  const browser = document.getElementsByClassName("browser")[0];
  const browserEngineSection =
    document.getElementsByClassName("compose-browser")[0];
  const browserRenderingSection =
    document.getElementsByClassName("browser-rendering")[0];
  const client = document.getElementsByClassName("client")[0];
  const dns = document.getElementsByClassName("dns")[0];
  const webServer = document.getElementsByClassName("web-server")[0];
  const was = document.getElementsByClassName("was")[0];
  const httpSection = document.getElementsByClassName("http")[0];

  if (internetPos - scrollPos < 50 && webPos - scrollPos > 50) {
    markCurrentSection(internet);
  } else if (webPos - scrollPos < 80 && webWorkPos - scrollPos > 50) {
    markCurrentSection(web);
  } else if (webWorkPos - scrollPos < 50 && browserPos - scrollPos > 50) {
    markCurrentSection(webWork);
  } else if (
    browserPos - scrollPos < 50 &&
    browserEngineSectionPos - scrollPos > 50
  ) {
    markCurrentSection(browser);
  } else if (
    browserEngineSectionPos - scrollPos < 50 &&
    renderingSectionPos - scrollPos > 50
  ) {
    markCurrentSection(browserEngineSection);
  } else if (
    renderingSectionPos - scrollPos < 50 &&
    clientPos - scrollPos > 50
  ) {
    markCurrentSection(browserRenderingSection);
  } else if (clientPos - scrollPos < 50 && dnsPos - scrollPos > 50) {
    markCurrentSection(client);
  } else if (dnsPos - scrollPos < 50 && webServerPos - scrollPos > 50) {
    markCurrentSection(dns);
  } else if (webServerPos - scrollPos < 50 && wasPos - scrollPos > 50) {
    markCurrentSection(webServer);
  } else if (wasPos - scrollPos < 50 && httpPos - scrollPos > 50) {
    markCurrentSection(was);
  } else {
    markCurrentSection(internet);
  }
  checkScrollIsEnd(httpSection);
});
