# 인터넷과 웹

웹은 인터넷과 같은 의미로 많이 사용되고 혼용되고 있으나, 인터넷과 웹은 다른 목적으로 개발되었다.

- 인터넷: 다른 컴퓨터와 네트워크 연결을 하고 싶음
- 웹: 다른 사람들과 문서를 공유하고 싶음

<br/>
<br/>

<img src="images/internet.png" height="300" alt="internet-image">

<img src="images/web.png" height="300" alt="web-image" >

<!-- <div style="display:flex; justify-content:space-between;"> -->

<!-- <figure>
    <figcaption>인터넷</figcaption>
</figure>
<figure style="text-align:center; font-size:13px;">
    <figcaption style="opacity:0.7" >웹</figcaption>
</figure> -->

<!-- </div> -->

<br />
<br/>
<br/>

## 인터넷이란?

- 전 세계 컴퓨터들을 하나로 연결하는 거대한 컴퓨터 통신망을 의미
- 여러 컴퓨터가 각각 클라이언트와 서버로써 서로 연결되어 구성된 망을 컴퓨터 네트워크(computer network)

  → 인터넷이란 수많은 클라이언트 컴퓨터와 서버 컴퓨터, 그리고 이들로 구성된 네트워크들의 집합체

  <br />
  <br />
  <br />

## 웹이란?

- World Wide Web의 약자
- 인터넷에 연결된 사용자들이 서로의 정보를 공유할 수 있는 공간

- 하이퍼텍스트 방식으로 연결된 멀티미디어 정보를 제공

  - HyperText의 Hyper는 컴퓨터 용어로 텍스트 등의 정보가 동일 선상에 있는 것이 아니라 다중으로 연결되어 있는 상태를 의미한다.

    → 하이퍼 텍스트 안에는 링크나 참조 (하이퍼링크)가 포함되어 있으며 이를 통해 다른 페이지로 이동이 가능하며, 여러 페이지를 연결할 수 있다.

    → HTML의 link 개념

  - 태그를 가지고 문서를 표기하게 되는데 이러한 마크업을 해주는 언어가 HTML이며, 이를 통해 하이퍼텍스트 기술 할 수 있다.

    → HTML의 a(anchor) 태그가 하이퍼링크 역할 담당

  - HTML로 작성된 문서를 HTTP 프로토콜을 사용해서 누구나 접근 가능

<br/>
<br/>

# 웹은 어떻게 동작하는가?

<img src="images/web-working.png" alt="웹 동작 방식">

<br/>

### 웹브라우저

- 하이퍼텍스트를 사람이 읽기에는 가독성이 떨어지고 적적하지 않다. 하이퍼 텍스트를 해석해서 사람이 읽기 쉽게 바꿔주는 역할을 함
- 웹 브라우저란 웹 서버에서 웹 페이지를 가져오거나 웹 서버로 정보를 보낼 때 사용하는 프로그램

<br/>
<br/>

### 브라우저 구성 요소

<img src="images/compose-browser.png" alt="브라우저 구성 요소" height="300">
<img src="images/chrome-browser.png" alt="크롬 브라우저 구성 요소" height="300">

<br/>
<br/>
<br/>
<br/>

| 브라우저 | 렌더링 엔진 | JS 런타임 엔진  |
| -------- | ----------- | --------------- |
| Chrome   | Blink       | V8              |
| edge     | EdgeHTML    | Chakra          |
| Safari   | WebKit      | JavaScript Core |
| Firefox  | Gecko       | SpiderMonkey    |

<br/>

- 프론트엔드 3요소

  - HTML
  - CSS
  - Javascript

    <br/>
  <br/>
  <br/>
  <br/>

### 브라우저 렌더링 과정 (렌더링 엔진 동작 과정)

- 렌더링 엔진은 브라우저 엔진과 같은 의미로 사용되기도 한다. js엔진은 Node.js 처럼 브라우저 없이도 실행될 수 있는 반면 렌더링 엔진은 브라우저가 있어야만 한다.

- 사용자가 요청한 HTML 문서와 CSS를 파싱하여 화면에 그리는 역할을 수행

<img src="images/rendering.png" alt="렌더링 과정" height="300">

<br/>
<br/>
<br/>

<b>1. DOM 트리 구축 </b>

- 브라우저는 HTML 코드를 해석해서 트리 형태로 구조화된 DOM을 생성한다.
- DOM의 목적은 Javascript를 사용해서 이 문서에 대한 스크립트 작성을 위한 프로그래밍 인터페이스를 제공하는 것

<br/>

<b>2. CSSOM 트리 구축 </b>

- 1번과정과 동일하게 css 파일에 포함된 스타일 요소를 파싱한다.
- 스타일시트는 DOM 트리 구조를 변경하지 않기 떄문에 중간에 스타일 코드를 만나더라도 문서 파싱을 지연하거나 멈추지 않는다.
  <br/> 단, script 태그를 만나는 경우에는 파싱을 중단하게 된다.

→ script 태그를 맨 아래에 작성하는 이유

<br/>

<b>3. 어태치먼트 (렌더트리 생성)</b>

- DOM 트리와 CSSOM을 결합하여, 색상 및 면적 등의 시각적 정보를 담은 Render tree를 구축

<br/>

<b>4. Layout</b>

- 렌더 트리에 있는 모든 노드의 너비, 높이, 위치를 결정하는 프로세스
- 기기별로 다양한 뷰 포트 크기를 가지는데, 레이아웃 단계에서 뷰 포트의 크기를 고려한다.
- 브라우저가 위치를 결정하는 방법은 3가지이다.

  1. <span style="color:red">`normal`</span> : 객체는 문서 안의 자리에 따라 위치가 결정된다. 이것은 렌더 트리에서 객체의 자리가 DOM 트리의 자리와 같고 박스 유형과 면적에 따라 배치됨을 의미한다.

  2. <span style="color:red">`float` </span> : 객체는 우선 일반적인 흐름에 따라 배치된 다음, 갈 수 있는 한 왼쪽이나 오른쪽으로 이동한다.

  3. <span style="color:red">`absolute`</span> : 객체는 DOM 트리상의 위치와 별개인 렌더 트리 위치에 놓인다.

  - position 속성

    - static과 relative로 설정하면 일반적인 흐름에 따라 위치가 결정된다.
    - absolute와 fixed로 설정하면 절대적인 위치가 된다.
    - position 속성을 정의하지 않으면 기본값인 static이 적용되며 이는 normal 방식으로 위치를 결정한다.

  - 박스의 위치는 다음 요인들에 의해 결정된다

    - 박스 유형(display 속성)
    - 박스 면적(width, height)
    - 위치 결정 방법(position, float)
    - 외부적인 정보(이미지 사이즈, 화면 크기 등)

<br/>

<b>4-1. Reflow</b>

- 노드의 크기와 위치를 다시 계산하는 것

- 리사이즈 또는 렌더러 위치 변경에 의해 트리거 되는 경우, 사이즈를 다시 계산하지 않고 캐시에서 가져온다.

<br/>

<b>5. Painting</b>

- 노드를 화면에 페인팅하는 것
- 요소의 시각적인 부분을 화면에 그리는 단계
- 첫 페인팅보다 다시 페인팅하는 것이 더 빠르게 마무리되기 위해서, 화면에 그리는 작업은 일반적으로 몇 개의 레이어로 구분 (compositing)
<!-- - 트리의 요소를 레이어로 분리하는 것은 컨텐츠를 CPU의 메인 쓰레드에서 GPU 레이어로 격상하여 페인트 및 리페인트 성능을 높인다.

  → 분리된 Layer들은 독립적인 픽셀화가 가능하며 GPU연산이 가능하기 때문에 빠른 스크롤링과 애니메이션이 가능하다. -->

아래 조건 중 하나라도 충족한다면 별도의 레이어가 생성된다.

- <span style="color:red">`<video>` </span> 태그 사용
- <span style="color:red">`<canvas>`</span> 태그 사용
- <span style="color:red">`opacity`</span> 속성 사용
- <span style="color:red">`translate3d`</span> 속성 사용
- <span style="color:red">`absolute` `relative`</span> 속성 사용

- 레이어는 성능을 향상시키지만 메모리 관리 측면에서 봤을 때는 비싼 작이므로 웹 성능 최적화 전략으로 과도하게 쓰이지는 않아야 한다.

<br/>
<br/>
<br/>
<br/>

### 클라이언트

- 서버가 제공하는 인터넷 서비스를 이용하는 사용자나 사용자가 사용하는 기기

<br/>

### DNS

- Domain Name System 의 약자

- 인터넷 세상의 전화번호부

- DNS는 브라우저가 인터넷 자원을 로드할 수 있도록 도메인 이름을 IP 주소로 변환한다.

<br/>

### 웹서버

- 인터넷 서비스를 제공하는 프로그램이나 컴퓨터로 웹브라우저에서 콘텐츠 요청이 있을때 필요한 콘텐츠를 네트워크를 통해 브라우저로 송신하여 사용자에게 제공

  → 이때 제공되는 컨텐츠는 정적인 컨텐츠로 HTML, CSS, Javscript 와 같이 즉시 응답이 가능한 컨텐츠들이다.

  → 그럼 동적인 컨텐츠는?

  → 동적인 요청은 WAS에 요청을 넘기고, WAS에서 처리한 응답을 클라이언트에 전달하게된다.

- ex. Nginx, Apache, express 등 웹을 던져주는 역할을 하는 녀석들을 칭함

<br/>

### WAS

- 데이터베이스 조회 및 로직 처리가 필요한 동적 컨텐츠를 제공하는 서버로 웹서버와는 구별된다. (ex. Tomcat)
  <br/>

<img src="images/web-service-architecture.png" alt="웹서비스 아키텍쳐">

<br />

### HTTP

- Hyper Text Transfer Protocol 의 약자

- 하이퍼텍스트를 송신하기 위한 통신 프로토콜

  → 이를 위한 프로토콜과 통신하는 메세지 형식은 세계가 공통적

- 인터넷상의 우편 배달부
