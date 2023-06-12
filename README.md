![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&text=LocalStorage를%20이용하여%20웹페이지%20구현&animation=twinkling&fontSize=23&fontAlignY=40&fontAlign=70&height=250&width=1325&align=right)
<br>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</div>
<br>
<br>
<div align="center">
<p align="center">
<img width="100" alt="home-page QR code" src="https://github.com/an6684/DevStudyProject-main/assets/132127166/c8b2bca2-4736-4005-a1c3-b8dea90c01a9"><br><br>
</p>
  
  **DevStuey 홈페이지**
  : <a href="https://an6684.github.io/DevStudyProject-main/">https://an6684.github.io/DevStudyProject-main/</a>
</div>
<br>
  <img width="1325" alt="main" src="https://github.com/an6684/DevStudyProject-main/assets/132127166/ba7c9642-1c22-44c3-af31-830acff2cf8e">
  
<br><br>
  > ### 1. LocalStorage란?

  - localStorage(로컬스토리지)는 사용자의 로컬에 존재하는 저장소이다.<br>
  - 사용자는 이 저장소에 특정 데이터를 저장하거나 수정하거나 삭제할 수 있다.<br>
  - 웹 스토리지(web storage)에는 로컬 스토리지(localStorage)와 세션 스토리지(sessionStorage)가 있는데, 세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면에, 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않는다.<br>
  -  스토리지의 데이터 영속성(persistence)은 어디까지나 계속해서 동일한 컴퓨터에서 동일한 브라우저를 사용할 때만 해당한다.<br>
<br>
<br>
<hr>
<br>

  > ### 2-1. LocalStorage 데이터 생성 및 저장
<br>

  <img width="1325" alt="ppt1" src="https://github.com/an6684/DevStudyProject-main/assets/132127166/eec8d3af-7adb-4aa6-aba6-3bd3c762b63d">
  
<br><br>

  - html로 작성한 select, input, textarea를 스크립트에서 CustomUrl클래스 내부에 각각 subject, title, content, url 속성을 설정.
<br>
  
  ```ruby class CustomUrl {
  constructor(subject, title, content, url) {
    this.subject = subject;
    this.title = title;
    this.content = content;
    this.url = url;
    this.isPlayingState = false;
    }
  }
  ```
 <br>
  
  - 각 입력란 공백시 예외 처리 후 JSON.stringify()로 데이터 저장.
 <br>
 
 ```ruby
 //title,content,url중 각각의 옵션 value가 공백일 때 예외처리 실행
  if(title.value =='')
    // alert() : 모든 브라우저의 동작을 멈춘다.
    // e.prevaentDefault();로 예외 처리 후 alert() 사용
    sumitTest(e, '제목을 입력하세요.');
  else if(content.value =='')
    sumitTest(e, '컨텐츠를 입력하세요.');
  else if(url.value =='')
    sumitTest(e, 'url을 입력하세요.');
  // 모든 예외처리 후 상태변수를 true로 변경
  else 
    submitState = true;
  
  // 상태변수가 참일 경우에 로컬스토리지 저장
  if(submitState) {
    let obj=new CustomUrl(
      subject.value,
      title.value,
      content.value,
      url.value
    );
   //localStorage에 obj 저장-->JSON형식으로 넣어줘야 함
    localStorage.setItem(localStorage.length, JSON.stringify(obj));
 ```
 <br>
 
  <img width="1325" alt="ppt2" src="https://github.com/an6684/DevStudyProject-main/assets/132127166/273166aa-c1db-4827-8547-e0d8a87ed644">
  
 <br><br>
 
   > ### 2-2. LocalStorage에 저장된 subject와 일치하는 데이터를 불러와 script로 화면 구현
 <br>
 
   - url에서 매개변수 값을 가져와 카드 생성하는 함수 코드 작성
 
 <br>
   
  ```ruby 
  //url에서 매개변수 값 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  //매개변수 값 확인
  const subject = urlParams.get("subject");

  const addKey=(key,el)=>{
  let temp=`
          <div class="card">
              <a href="watch-avi.html?subject=${key.subject}&title=${key.title}&content=${key.content}&url=${key.url}">
                  <span class="subject">${key.subject}</span>
                  <span class="title">${key.title}</span>
                  <span class="content">${key.content}</span>
                  <embed controls=0 src="https://img.youtube.com/vi/${key.url}/maxresdefault.jpg" allowfullscreen></embed>
              </a>
          </div>
      `   
      el.insertAdjacentHTML('afterend',temp)
  }
  ```
 <br>
 
 - localstorage의 key.subject가 url의 subject값과 같을 경우 해당하는 카테고리의 내부에 배열 생성
 
 <br>
 
 ```ruby
  const findSubject=(key,subject,el)=>{
    if(key.subject==subject){
        console.log(key.subject)
        addKey(key,el)
      }
  }

  //avi.subject==subject이면 해당하는 subject의 카드배열을 생성
  if(localStorage.length){
      for(let i=0;i<localStorage.length;i++){

          let avi=JSON.parse(localStorage.getItem(i))
          let el=document.querySelector('#wrap')

          findSubject(avi,subject,el)
      }   
  }
  ```
  <br>
 
  <img width="1325" alt="ppt3" src="https://github.com/an6684/DevStudyProject-main/assets/132127166/b5c29b74-dee2-42cb-bb68-3515d896a59c">
  
 <br><br>
 
  
  
  

