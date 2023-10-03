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
  const section1Pos = document.getElementById("웹-클라이언트와-서버").offsetTop;
  const section2Pos = document.getElementById("리소스").offsetTop;
  const section3Pos = document.getElementById("uri").offsetTop;
  const section4Pos = document.getElementById("트랜잭션").offsetTop;
  const section5Pos = document.getElementById("메서드").offsetTop;
  const section6Pos = document.getElementById("상태-코드").offsetTop;
  const section7Pos = document.getElementById("tcp-커넥션").offsetTop;
  const section8Pos = document.getElementById("프로토콜-버전").offsetTop;
  const section9Pos = document.getElementById("웹의-구성요소").offsetTop;

  const section1 = document.getElementsByClassName("client-server")[0];
  const section2 = document.getElementsByClassName("resource")[0];
  const section3 = document.getElementsByClassName("uri")[0];
  const section4 = document.getElementsByClassName("transaction")[0];
  const section5 = document.getElementsByClassName("request-method")[0];
  const section6 = document.getElementsByClassName("status-code")[0];
  const section7 = document.getElementsByClassName("tcp")[0];
  const section8 = document.getElementsByClassName("version")[0];
  const section9 = document.getElementsByClassName("web")[0];

  if (section1Pos - scrollPos < 50 && section2Pos - scrollPos > 50) {
    markCurrentSection(section1);
  } else if (section2Pos - scrollPos < 80 && section3Pos - scrollPos > 50) {
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
  } else if (section9Pos - scrollPos < 50) {
    markCurrentSection(section9);
  } else {
    markCurrentSection(section1);
  }
  checkScrollIsEnd(section9);
});
