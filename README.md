# applestore_clone 🍎

```
$ npx create-react-app ./
```
현재 있는 폴더에 리액트가 설치된다.

REACT는 SPA 방식으로 작동한다.
[History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)을 좀 더 편리하게 사용할 수 있게 [React Router Dom](https://reactrouter.com/en/main)을 사용한다.
강의에서 Routes를 Router로 작성하는데 문법이 바뀐 것인지 Routes로 작성하면 잘 동작한다.

**ES7 React/Redux/GraphQL/React-Native snippets** 익스텐즈를 받아서 `rfce` 단축어를 사용하면 `export` 함수를 바로 작성할 수 있다.

## API와 SDK
### API (Application Programming Interface)
모듈화하여 만들어진, 기능을 제어/제공하는 인터페이스
### SDK (Software Development Kit)
소프트웨어 개발 도구 모음. API, IDE, 문서, 라이브러리, 코드 샘플 및 기타 유틸리티가 포함될 수 있다. 프로그램 및 응용 프로그램 개발의 복잡성을 줄일 수 있는 기능 집합.

| | API | SDK |
|-| --- | --- |
| 목적 | 소프트웨어 연결 및 통합 | 다양한 개발도구 포함 |
| 형질 | 가볍고 빠르며 전문화 되어 있음 | 더 견고함, 많은 유틸리티를 포함 |
| 사용 사례 | 애플리케이션에 특정 기능을 추가하는 데 사용 | 새로운 애플리케이션을 생성하거나 하나의 패키지로 많은 기능을 추가하는 데 사용 |

**API는 SDK의 일부가 될 수 있다.**
[API, SDK 개념 참고 사이트](https://doozi0316.tistory.com/entry/SDK-API%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%B0%A8%EC%9D%B4%EC%A0%90)

---

`React.Fragment` 로 감싸 줘야 한다. 그래서 `isAuth`가 참인지 아닌지를 판별하는 코드에서 `<></>` 빈 태그가 생긴 것. 빈 태그가 `React.Fragment`가 된다.