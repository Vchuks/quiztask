const quizArray = [];

function createQuiz(event) {
  event.preventDefault();
  const getBtn = document.querySelector(".create-btn");
  const getQst = document.querySelector(".question").value;
  const getAnsa = document.querySelector(".answera").value;
  const getAnsb = document.querySelector(".answerb").value;
  const getAnsc = document.querySelector(".answerc").value;
  const getAnsd = document.querySelector(".answerd").value;
  const getCorrectAns = document.querySelector(".correct").value;
  const getErr = document.querySelector(".err");

  if (
    getQst === "" ||
    getAnsa === "" ||
    getAnsb === "" ||
    getAnsc === "" ||
    getAnsd === "" ||
    getCorrectAns === ""
  ) {
    getErr.innerHTML = "All Fields are required";
  } else {
    quizArray.push({
      id: quizArray.length + 1,
      question: getQst,
      optiona: getAnsa,
      optionb: getAnsb,
      optionc: getAnsc,
      optiond: getAnsd,
      correct_answer: getCorrectAns,
    });
  }
  localStorage.setItem("quiz", JSON.stringify(quizArray));
  //   console.log(quizArray);
}

// function takeQuiz() {
//   const getView = document.querySelector(".view");
//   console.log(getView);
//   const getQuiz = JSON.parse(localStorage.getItem("quiz"));
//   console.log(getQuiz);

//   getQuiz.map((quiz) => {
//     getView.innerHTML += `<div class="eachqst">
//         <p>Question ${quiz.id}</p>
//         <h3>${quiz.question}</h3>
//         <div class="answerBtn">
//             <div class="eachans">
//             <input type="radio" name="answers" value=${quiz.optiona} id="opta"/>
//             <p>${quiz.optiona}</p>
//             </div>
//             <div class="eachans">
//             <input type="radio" name="answers" value=${quiz.optionb} id="optb"/>
//             <p>${quiz.optionb}</p>
//             </div>
//             <div class="eachans">
//             <input type="radio" name="answers" value=${quiz.optionc} id="optc"/>
//             <p>${quiz.optionc}</p>
//             </div>
//             <div class="eachans">
//             <input type="radio" name="answers" value=${quiz.optiond} id="optd" />
//             <p>${quiz.optiond}</p>
//             </div>
//         </div>

//         <button onclick="submitAns(${quiz.id})" class="sub">submit</button>
//         <p class="remark"></p>
//         </div>`;
//   });
// }
// takeQuiz();
const score = [];
function submitAns(id) {
  const an = document.getElementsByName("answers");
  const remark = document.querySelector(".remark");
  const checkAns = JSON.parse(localStorage.getItem("quiz"));
  const m = checkAns.filter((qz) => qz.id === id);
  //   console.log("m", m);
  for (let each of an) {
    if (each.checked) {
      const corr = each.value;
      if (m[0].correct_answer === corr) {
        score.push(id);
        // remark.innerHTML = "Correct";
      } else {
        // remark.innerHTML = "Wrong";
      }
    }
  }
  //   console.log(score);
}

function tryQ() {
  const getView = document.querySelector(".view");
  //   console.log(getView);
  const getQuiz = JSON.parse(localStorage.getItem("quiz"));
//   console.log(getQuiz.length);
if(getQuiz.length === 1){
    getView.innerHTML += `<div class="eachqst">
    <p>Question ${getQuiz[0].id}</p>
    <h3>${getQuiz[0].question}</h3>
    <div class="answerBtn">
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optiona} id="opta" required="required"/>
        <p>${getQuiz[0].optiona}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optionb} id="optb"/>
        <p>${getQuiz[0].optionb}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optionc} id="optc"/>
        <p>${getQuiz[0].optionc}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optiond} id="optd" />
        <p>${getQuiz[0].optiond}</p>
        </div>
    </div>
            <button onclick="submit()" class="submit">submit</button>
            <p class="remark"></p>
            </div>`
}else{
  
  getView.innerHTML = `<div class="eachqst">
    <p>Question ${getQuiz[0].id}</p>
    <h3>${getQuiz[0].question}</h3>
    <div class="answerBtn">
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optiona} id="opta" required="required"/>
        <p>${getQuiz[0].optiona}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optionb} id="optb"/>
        <p>${getQuiz[0].optionb}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optionc} id="optc"/>
        <p>${getQuiz[0].optionc}</p>
        </div>
        <div class="eachans">
        <input type="radio" name="answers" value=${getQuiz[0].optiond} id="optd" />
        <p>${getQuiz[0].optiond}</p>
        </div>
    </div>

    <button onclick="next(${getQuiz[0].id})" class="sub">next</button>
    <p class="remark"></p>
    </div>`;

}
}
tryQ();

function submit() {
  const getsubBtn = document.querySelector(".submit");
  const getView = document.querySelector(".view");
  const getQuiz = JSON.parse(localStorage.getItem("quiz"));
  const an = document.getElementsByName("answers");
  const remark = document.querySelector(".remark");
  const checkAns = JSON.parse(localStorage.getItem("quiz"));
  const m = checkAns.filter((qz) => qz.id === getQuiz.length);
  //   console.log("m", m);
  //   console.log(an)
  for (let each of an) {
    if (each.checked) {
    //   console.log(each.value);
      const corr = each.value;
      if (m[0].correct_answer === corr) {
        score.push("qust correct");
        // remark.innerHTML = "Correct";
      } else {
        // remark.innerHTML = "Wrong";
      }
    }
  }
  getView.innerHTML = `<div class="eachqst">
        <p>Total Score: ${score.length}/${getQuiz.length}</p>
        </div>`;
}
function next(id) {
  const an = document.getElementsByName("answers");
//   const remark = document.querySelector(".remark");
  const checkAns = JSON.parse(localStorage.getItem("quiz"));
  const m = checkAns.filter((qz) => qz.id === id);
  //   console.log("m", m);
  //   console.log(an)
  for (let each of an) {
    if (each.checked) {
      // console.log(each.value)
      const corr = each.value;
      if (m[0].correct_answer === corr) {
        score.push("qust correct");
        // remark.innerHTML = "Correct";
      } else {
        // remark.innerHTML = "Wrong";
      }
    }
    
  }
  console.log(score);
  const getView = document.querySelector(".view");
  getView.removeChild(getView.firstElementChild);
  const getQuiz = JSON.parse(localStorage.getItem("quiz"));
  const num = getQuiz.length;
  for (let each of getQuiz) {
    if (id + 1 === each.id && id + 1 === num) {
      getView.innerHTML += `<div class="eachqst">
            <p>Question ${each.id}</p>
            <h3>${each.question}</h3>
            <div class="answerBtn">
                <div class="eachans">
                <input type="radio" name="answers" value=${each.optiona} id="opta"/>
                <p>${each.optiona}</p>
                </div>
                <div class="eachans">
                <input type="radio" name="answers" value=${each.optionb} id="optb"/>
                <p>${each.optionb}</p>
                </div>
                <div class="eachans">
                <input type="radio" name="answers" value=${each.optionc} id="optc"/>
                <p>${each.optionc}</p>
                </div>
                <div class="eachans">
                <input type="radio" name="answers" value=${each.optiond} id="optd" />
                <p>${each.optiond}</p>
                </div>
            </div>
            <button onclick="submit()" class="submit">submit</button>
            <p class="remark"></p>
            </div>`;
    } else if (id + 1 === each.id) {
      getView.innerHTML += `<div class="eachqst">
              <p>Question ${each.id}</p>
              <h3>${each.question}</h3>
              <div class="answerBtn">
                  <div class="eachans">
                  <input type="radio" name="answers" value=${each.optiona} id="opta"/>
                  <p>${each.optiona}</p>
                  </div>
                  <div class="eachans">
                  <input type="radio" name="answers" value=${each.optionb} id="optb"/>
                  <p>${each.optionb}</p>
                  </div>
                  <div class="eachans">
                  <input type="radio" name="answers" value=${each.optionc} id="optc"/>
                  <p>${each.optionc}</p>
                  </div>
                  <div class="eachans">
                  <input type="radio" name="answers" value=${each.optiond} id="optd" />
                  <p>${each.optiond}</p>
                  </div>
              </div>
              <button onclick="next(${each.id})" class="sub">next</button>
              <p class="remark"></p>
              </div>`;
    }
  }
}
