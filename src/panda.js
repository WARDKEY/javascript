const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let template = [];

// getData() 함수 작성
const getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`);
  try {
    // res 값이 존재할 경우 data 변수에 res를 json으로 파싱한 값을 넣음
    if (res) {
      let data = await res.json();
      // photos 배열을 순회하면서 template 배열에 이미지 url을 담고 html의 class="content"에 이미지를 담음
      data.photos.forEach((element) => {
        template += `<img src = ${element.url}></img>`;
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

// getData() 함수 호출
getData("panda");
