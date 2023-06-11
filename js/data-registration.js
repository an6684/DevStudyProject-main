class CustomUrl {
  constructor(subject, title, content, url) {
    this.subject = subject;
    this.title = title;
    this.content = content;
    this.url = url;
    this.isPlayingState = false;
  }
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
  let subject = document.getElementById("subject"),
    title = document.getElementById("title"),
    content = document.getElementById("content"),
    url = document.getElementById("url");

    let obj=new CustomUrl(
        subject.value,
        title.value,
        content.value,
        url.value
    )

    //localStorage에 obj 저장-->JSON형식으로 넣어줘야 함
    localStorage.setItem(localStorage.length, JSON.stringify(obj))

    if(confirm('동영상이 등록되었습니다. 홈화면으로 이동하시겠습니까?'))
      location.href='../index.html';

    //모든 옵션값 초기화
    subject.value='HTML / CSS'
    title.value=''
    content.value=''
    url.value=''
});
