(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{6102:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/temporary",function(){return r(336)}])},336:function(n,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return d}});var t=r(5893),i=r(2673),s=r(373),c=r(8426);r(9128);var o=r(2643);let d=[];function _createMdxContent(n){let e=Object.assign({p:"p",ul:"ul",li:"li",code:"code",strong:"strong"},(0,o.a)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"아무거나 일단 생각나는 대로 메모, 계획 세운 내용들"}),"\n",(0,t.jsx)(e.p,{children:"막상 강의를 다시 듣다 보니 뼈다귀는 얼마 없을것 같다가도 다시 생각해보면 내용이 많다. 그렇다. 그래서 정리할 개념들을 요약을 해봄"}),"\n",(0,t.jsx)(e.p,{children:"우선... 내가 착각중인것 중 하나는 EDA 가 만능은 아니다. 만능이라는 생각을 버려야 한다."}),"\n",(0,t.jsx)(e.p,{children:"예전 직장에서 정해진 리소스 상에서 필요없는 것들을 쳐내고 뼈다귀만 우려낸 다음\r\n빠르게 개발했던게 나쁜건 아니다.\r\n다만 이커머스 처럼 트랜잭션이 중요한 상황에서는 어떻게 해야하는지를 꼭 정리해두자."}),"\n",(0,t.jsx)(e.p,{children:"내가 왜 이걸 정리하겠다고 마음 먹어서 이렇게 고생을 하는 거야? 왜 그런거야? 으어어어어엉"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.p,{children:"MSA 는 서비스 하나를 구분지어서 그것을 전담해서 개발하는 구조라면 DDD 는 바운디드 컨텍스트를 가진 서브도메인을 규정해서 소규모의 통신을 하는 것을 의미."}),"\n",(0,t.jsxs)(e.p,{children:["DDD 의 서브도메인은 바운디드 컨텍스트를 갖는데 그것이 MSA 에서의 서비스를 구분짓는 단위가 아닌 기술적인 역할 등 물리적인 작업 중 구분해야 하는 세부적인 개념이다. 도메인이라는 말에서 꽤 고상한 냄새를 풍기기에 초반에 착각을 자주하게된다. MSA가 조금 더 큰 범위의 개념이고 MSA 내에서 필요한 부분에 한정해서 도메인의 범위를 규정해서 도메인 드리븐으로 개발하게 된다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(e.p,{children:["내 생각에는 결국 MSA 를 전부 갈아엎고 DDD로 전환하는 것은 불가능하며 극히 일부기능을 DDD로 전환하게 되는 듯.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.p,{children:"MSA 설계시 주요 과정"}),"\n",(0,t.jsx)(e.p,{children:"각각의 개념들\r\n분해의 기본 원칙"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"유비쿼터스"}),"\n",(0,t.jsx)(e.li,{children:"도메인 언어"}),"\n",(0,t.jsx)(e.li,{children:"경계 컨텍스트"}),"\n",(0,t.jsx)(e.li,{children:"서브도메인"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"MSA 식별 및 선별 절차"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"기능요건 정의"}),"\n",(0,t.jsx)(e.li,{children:"도메인 모델 도출"}),"\n",(0,t.jsx)(e.li,{children:"시스템 작업 구별,식별작업"}),"\n",(0,t.jsxs)(e.li,{children:["고수준 시나리오, ",(0,t.jsx)(e.code,{children:"케이스"})," 정의"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"카프카 주요 개념 중 짚고 가야 하는 것"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Partition Replication Factor (구글드라이브에 정리해둔 사진 첨부 꼭!!)"}),"\n",(0,t.jsx)(e.li,{children:"ISR"}),"\n",(0,t.jsx)(e.li,{children:"Partition"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"IPC"}),"\r\nSync 통신과 Async 통신\r\nSync : http, grpc\r\nAsync : Kafka, RabbitMQ\r\n각각의 장단점, GRPC의 단점 (.proto 깨지면 모두 깨진다는 점 등등)\r\n주의 ) Async 는 Non Blocking 이 아니라 응답결과를 돌려받지 않고 자기 작업을 끝내는 것을 의미. 인터넷이나 블로그에서 Async 를 논블로킹한 통신인 것처럼 혼용되는 경우가 너무 많기에 주의점으로 정리"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"SAGA 와 Transaction"}),"\r\n2PC, 보상트랜잭션"]}),"\n",(0,t.jsx)(e.p,{children:"분산 트랜잭션과 트랜잭션 조율"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"코레오그레피, 오케스트레이션\r\n난 이거 다 쓰기 싫다구!!!"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"이벤트 소싱과 EDA"}),"\r\n트랜잭션의 어려움을 이벤트 기반으로."]}),"\n",(0,t.jsx)(e.p,{children:"머니 충전, 송금 기능에 대해 분산 트랜잭션 도입이 필요한지"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"머니충전 : 필요하다. 펌뱅킹 출금과 머니충전이 하나의 트랜잭션 단위로 원자성 기반으로 동작해야 한다. 안그럴경우 소송이 발생"}),"\n",(0,t.jsx)(e.li,{children:"송금: 불필요하다. 머니를 충전했더라도 송금이 실패하는 것은 금전의 손해가 발생하지 않는다. 오히려 페이시스템 법인에도 이득이 될 수 있다."}),"\n"]})]})}let a={MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(_createMdxContent,{...n})}):_createMdxContent(n)},pageOpts:{filePath:"pages/temporary.mdx",route:"/temporary",timestamp:171261833e4,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"memo",route:"/memo",children:[{kind:"MdxPage",name:"memo-v1",route:"/memo/memo-v1"},{kind:"MdxPage",name:"memo-v2-understanding-payment",route:"/memo/memo-v2-understanding-payment"},{kind:"MdxPage",name:"memo-v3",route:"/memo/memo-v3"},{kind:"Meta",data:{"memo-v1":"메모 v1","memo-v2-understanding-payment":"Memo V2 Understanding Payment","memo-v3":"Memo V3"}}]},{kind:"MdxPage",name:"memo",route:"/memo"},{kind:"MdxPage",name:"temporary",route:"/temporary"},{kind:"Meta",data:{index:"Introduction",memo:"메모",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0},temporary:"Temporary"}}],flexsearch:{codeblocks:!0},title:"Temporary",headings:d},pageNextRoute:"/temporary",nextraLayout:s.ZP,themeConfig:c.Z};e.default=(0,i.j)(a)},8426:function(n,e,r){"use strict";var t=r(5893);r(7294);let i={logo:(0,t.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-fastcampuspay-v1"},docsRepositoryBase:"https://github.com/chagchagchag/docs-fastcampuspay-v1",footer:{text:"Nextra Docs Template"}};e.Z=i},5789:function(){}},function(n){n.O(0,[774,796,888,179],function(){return n(n.s=6102)}),_N_E=n.O()}]);