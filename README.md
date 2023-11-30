# vanillarjs frame work
## 주요 기능 설명
- react, vue, angular를 사용하지 않고, import를 이용하여, 앱처럼 하나의 페이지에서만 동작되게 개발
- (백엔드 서버에서 수신된) 심전도 생체신호를 병원의 중환자실 모니터의 챠트처럼 자연스럽게 흐르게 구현
- 최소한의 javscript 사용(화면 크기 변경만 감지)하여, 모두 css3에서 처리되는 반응형 사이트 구
### SPA
- 사용 기술
   - [import 사용](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
   - [dynamic import 사용](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
### 생체신호 실시간 라인 챠트
- 사용 기술
   - [D3 사용](https://d3js.org/)
   - [web worker 사용](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)
### 반응형 사이트(css3 + html5 이용)
- 사용 기술
   - [CSS3 - media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
   - [html5 - semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp)