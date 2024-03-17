# 타입스크립트 모듈 시스템

모듈이란 자주 사용하는 코드들을 독립 가능한 기능의 단위로 분리해 놓은 것을 말한다. <br>
모듈로 관리하게 되면 아래와 같은 이점들이 있다.

:one: 유지보수 용이
:two: 전역 스코프 오염 방지

- 모듈은 전역 변수와 구분되는 파일 자체의 유효범위 (Local Scope) 을 갖는다
- 쉽게 말해 모듈이란 자기만의 독립적인 스코프를 가지고 있는 것
- 즉, 모듈 내 선언된 변수, 함수, 클래스등을 export 하여 외부에 내보내지 않는 이상 외부에서 접근할 수 없다.

```typescript
// script1.ts
const a = "a"; // -> Error

// script2.ts
const a = "a"; // -> Error

/* 

Cannot redeclare block-scoped variable 'a'.ts(2451)
script1.ts(11, 7): 'a' was also declared here.

*/
```

:point_right: 파일의 top-level에 아무런 import나 export가 존재하지 않는다면 TS는 파일을 모듈이 아닌 스크립트 파일로 생각하고 이는 일반적인 JS파일과 같이 파일 내에 생성된 변수는 window, global과 같은 전역 스코프에 영향을 미치게 된다.
즉, 위처럼 ts. 파일단에서 변수명 충돌 현상은 바로 전역 스코프의 이름 공간을 공유해서 생긴 현상인 것이다

위의 문제를 해결하기 위해서는 export {} 해주거나 export 대상을 지정해주면 된다.

:three: 재사용성 향상

<br/>
<br/>

:writing_hand: 결론

모듈(module)은 소스 파일에 import / export 키워드가 있으면 취급이 되며, 외부에서 직접적으로 모듈을 import 해주어야 그 모듈의 데이터를 사용할 수 있게 된다.

<br/>
<br/>

## 내부모듈

- namespace
  - 타입스크립트만의 특유한 모듈 방법
  - namespace 를 사용하면 전역 이름 공간과 분리된 네임스페이스단위의 이름공간이 생긴다. ( 하나의 파일 내부에서 자기만의 독립적인 스코프를 갖게됨)

```typescript
export type Person = { name: string; age: number };

namespace Person {
  const age = 20; // 외부 접근 불가

  export const getDefaultAge = () => age; // 외부 접근 가능
}

Person.getDefaultAge(); // 20
```

사실 Namespace 와 import / export 모듈 시스템과 큰 차이가 있지는 않다.
이에 타입스크립트 공식문서에서는 namespace 사용을 지양하기를 권장한다.
<br />

위의 예제를 아래와 같이 사용해도 무방하다.

```typescript
export type Person = { name: string; age: number };

const Person {
  const age = 20; // 외부 접근 불가

  export const getDefaultAge = () => age; // 외부 접근 가능
}

Person.getDefaultAge(); // 20
```

<br/>
<br/>
## 외부모듈

- export 로 선언되어 외부로 공개된 모듈

  <br/>
  <br/>
  <br/>
  <br/>

### Reference

[Inpa Dev 👨‍💻:티스토리](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
