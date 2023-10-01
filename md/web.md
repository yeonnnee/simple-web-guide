# 인터넷과 웹

<div style="display:flex; justify-content:space-between;">
    <!-- <figure> -->
        <img src="https://github.com/yeonnnee/simple-web-guide/assets/61894688/28c26d6c-66c0-41fa-950e-16cbf7662c0c" width="350" alt="internet-image">
        <!-- <figcaption>인터넷</figcaption> -->
    <!-- </figure> -->
    <!-- <figure style="text-align:center; font-size:13px;"> -->
        <img src="images/web.png" width="350" alt="web-image" >
        <!-- <figcaption style="opacity:0.7" >웹</figcaption> -->
    <!-- </figure> -->

</div>

<br />

## 웹이란?

- World Wide Web의 약자
- 인터넷에 연결된 사용자들이 서로의 정보를 공유할 수 있는 공간

- 하이퍼텍스트를 이용한 시스템 / 문서

  - HyperText의 Hyper는 컴퓨터 용어로 텍스트 등의 정보가 동일 선상에 있는 것이 아니라 다중으로 연결되어 있는 상태를 의미한다.

    → 하이퍼 텍스트 안에는 링크나 참조 (하이퍼링크)가 포함되어 있으며 이를 통해 다른 페이지로 이동이 가능하며, 여러 페이지를 연결할 수 있다.

    → HTML의 link 개념

  - 태그를 가지고 문서를 표기하게 되는데 이러한 마크업을 해주는 언어가 HTML이며, 이를 통해 하이퍼텍스트 기술 할 수 있다.

    → HTML의 a(anchor) 태그가 하이퍼링크 역할 담당

<br/>
<br/>

웹은 인터넷과 같은 의미로 많이 사용되고 혼용되고 있으나, 인터넷과 웹은 다른 목적으로 개발되었다.

- 인터넷: 다른 컴퓨터와 네트워크 연결을 하고 싶음
- 웹: 다른 사람들과 문서를 공유하고 싶음

<br/>
<br/>

## 인터넷이란?

- 전 세계 컴퓨터들을 하나로 연결하는 거대한 컴퓨터 통신망을 의미
- 여러 컴퓨터가 각각 클라이언트와 서버로써 서로 연결되어 구성된 망을 컴퓨터 네트워크(computer network)

  → 인터넷이란 수많은 클라이언트 컴퓨터와 서버 컴퓨터, 그리고 이들로 구성된 네트워크들의 집합체

  <br />
  <br />
  <br />

# 웹은 어떻게 동작하는가?

<img src="https://github.com/yeonnnee/simple-web-guide/assets/61894688/ad4c4cb3-ddd5-4927-9db5-d52724963923" alt="웹 동작 방식">

<br/>

### 웹브라우저

- 하이퍼텍스트를 사람이 읽기에는 가독성이 떨어지고 적적하지 않다. 하이퍼 텍스트를 해석해서 사람이 읽기 쉽게 바꿔주는 역할을 함
- 웹 브라우저란 웹 서버에서 웹 페이지를 가져오거나 웹 서버로 정보를 보낼 때 사용하는 프로그램

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

- ex. Nginx, Apache 등

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
