const jsonData = {
  questiontypes: [
    {
      id: 1,
      title: "חד ברירה",
      description:
        "שאלה עם מספר אפשרויות מענה כאשר רק תשובה אחת היא נכונה. ככל שיש יותר אפשרויות מענה, כך הסיכוי להצליח על ידי ניחוש פוחת.",
      qBg: "images/חד ברירה.png",
      examplePic: ["images/חד ברירה דוגמה1.png", "images/חד ברירה דוגמה2.png", "images/חד ברירה דוגמה3.png"],
      tags: "closedQ",
    },
    {
      id: 2,
      title: "רב ברירה",
      description:
        "שאלה עם מספר אפשרויות מענה כאשר יש יותר מתשובה אחת נכונה. לעיתים מציינים כמה תשובות נכונות קיימות, אך דבר זה מעלה את הסיכוי להצליח על ידי ניחוש.",
      qBg: "images/רב ברירה.png",
      examplePic: ["images/רב ברירה דוגמה1.png", "images/רב ברירה דוגמה2.png", "images/רב ברירה דוגמה3.png"],
      tags: "closedQ",
    },
    {
      id: 3,
      title: "התאמה",
      description:
        "מספר אובייקטים שיש ליצור ביניהם התאמה של אחד לאחד. לעיתים מוסיפים אובייקטים שאין להם התאמה, כדי להקטין את הסיכוי להצליח על ידי ניחוש או אלימינציה.",
      qBg: "images/התאמה.png",
      examplePic: ["images/התאמה דוגמה1.png", "images/התאמה דוגמה2.png","images/התאמה דוגמה3 - חדש.png" ],
      tags: "closedQ",
    },
    {
      id: 4,
      title: "סדר",
      description:
        "מספר אובייקטים שיש לארגן על פי סדר מסוים, כמו שלבים בתהליך, ציר זמן ועוד.",
      qBg: "images/סדר.png",
      //paste each Q's pictures like this format:
      examplePic: ["images/סדר דוגמה1.png", "images/סדר דוגמה2.png", "images/סדר דוגמה3 - חדש.png"],
      tags: "closedQ",
    },
    {
      id: 5,
      title: "נכון / לא נכון",
      description:
        "שאלה עם 2 אפשרויות מענה בלבד, נכון או לא נכון, ורק אחת מהן נכונה. מיועד בעיקר לזהות תפיסות עקרוניות שגויות. יש להימנע משאלה הכוללת שלילה, ואם בכל זאת משתמשים בשלילה יש להבליט אותה.",
      qBg: "images/נכון לא נכון.png",
      examplePic: ["images/נכון לא נכון דוגמה1.png", "images/נכון לא נכון דוגמה2.png", "images/נכון לא נכון דוגמה3.png"],
      tags: "closedQ",
    },

    {
      id: 6,
      title: "פתוחה קצרה",
      description:
        "שאלה שיש לענות עליה באמצעות חיבור עצמאי של טקסט קצר המכיל מספר משפטים בלבד.",
      qBg: "images/פתוחה קצרה.png",
      examplePic: ["images/פתוחה קצרה דוגמה1.png", "images/פתוחה קצרה דוגמה2.png", "images/פתוחה קצרה דוגמה3.png"],
      tags: "openQ",
    },
    {
      id: 7,
      title: "פתוחה ארוכה",
      description:
        "שאלה שיש לענות עליה באמצעות חיבור עצמאי של טקסט ארוך המפרט ככל האפשר את המבוקש בשאלה.",
      qBg: "images/פתוחה ארוכה.png",
      examplePic: ["images/פתוחה ארוכה דוגמה1.png", "images/פתוחה ארוכה דוגמה2.png", "images/פתוחה ארוכה דוגמה3.png"],
      tags: "openQ",
    },
    {
      id: 8,
      title: "השלמה עם מאגר",
      description:
        "קטע  טקסט שהושמטו ממנו מספר מילים או מספרים, ויש להשלים אותם באמצעות מילים/מספרים שנמצאים במאגר. לעיתים מוסיפים למאגר יותר פריטים ממה שדרוש להשלים כדי להקטין את הסיכוי להצליח על ידי ניחוש.",
      qBg: "images/עם מאגר.png",
      examplePic: ["images/השלמה עם מאגר דוגמה1.png", "images/השלמה עם מאגר דוגמה2.png","images/השלמה עם מאגר דוגמה3 - חדש.png" ],
      tags: "closedQ",
    },
    {
      id: 9,
      title: "השלמה בלי מאגר",
      description:
        "קטע  טקסט שהושמטו ממנו מספר מילים או מספרים, ויש להשלים אותם עצמאית, ללא מאגר. דורש רמה גבוהה יותר של חשיבה מאשר השלמה עם מאגר.",
      qBg: "images/ללא מאגר.png",
      examplePic: ["images/השלמה בלי מאגר דוגמה1.png", "images/השלמה בלי מאגר דוגמה2.png", "images/השלמה בלי מאגר דוגמה3.png"],
      tags: "openQ",
    },
    {
      id: 10,
      title: "מיון",
      description:
        "מיון של מילים/ביטויים מתוך מאגר קיים, לפי קריטריונים נתונים. ",
      qBg: "images/מיון.png",
      examplePic: ["images/מיון דוגמה1.png", "images/מיון דוגמה2.png", "images/מיון דוגמה3 - חדש.png"],
      tags: "closedQ",
    },

  ],
};

const allQbtn = document.getElementById("allQtypes");
const openQbtn = document.getElementById("openQ");
const closedQbtn = document.getElementById("closedQ");
let searchContent = "";
//---------------ON LOAD--------------------//
document.addEventListener("DOMContentLoaded", function (event) {
  createQbtns();

});

function createQbtns() {
  const questionsContainer = document.getElementById("qTypesContent");
  const qList = document.createElement("div");
  qList.setAttribute("id", "qList");

  jsonData.questiontypes.forEach((q) => {
    const listItem = document.createElement("button");
    listItem.setAttribute("id", `qID_${q.id}`);
    listItem.setAttribute("class", "qCategory");
    //affecting the buttons appearance:
    listItem.style.backgroundImage = `url("../${q.qBg}")`;
    listItem.style.backgroundRepeat = "no-repeat";
    listItem.style.backgroundPosition = "center";
    listItem.style.backgroundSize = "cover";

    listItem.addEventListener("click", OpenModal);
    const markText = document.createElement("mark");
    markText.style.backgroundColor = "white";
    let btnText = document.createTextNode(q.title);
    markText.setAttribute("id", `ID_${q.id}`);
    markText.appendChild(btnText);
    listItem.appendChild(markText);
    qList.appendChild(listItem);
  });
  questionsContainer.appendChild(qList);
}
function OpenModal(e) {
  const currentId = e.target.id.split("_")[1];

  const title = jsonData.questiontypes.find((p) => p.id == currentId).title;
  const description = jsonData.questiontypes.find(
    (p) => p.id == currentId
  ).description;
  const tags = jsonData.questiontypes.find((p) => p.id == currentId).tags;
  document.querySelector("#mTitle").innerHTML = title;
  document.querySelector("#mBodyContent").innerHTML = description;

  const titleElement = document.querySelector("#mTitle");
  titleElement.innerHTML = title;

  const modalElement = document.querySelector(".modal-dialog");
  modalElement.classList.add("modal-lg");

  const exPics = jsonData.questiontypes.find(
    (p) => p.id == currentId
  ).examplePic;

  //relevant to inserting pics:
  if (exPics != null) {

    for (i = 0; i < exPics.length; i++) {
      //resetting the former pics in the element:
      document.querySelector(`#pic${i + 1}`).setAttribute("src", "");
      //inserting the relevant ones:
      document.querySelector(`#pic${i + 1}`).setAttribute("src", exPics[i]);
    }

  }
  // document.querySelector("#pic1").setAttribute("src", exPics[0]);
  // document.querySelector("#pic2").setAttribute("src", exPics[1]);
  // document.querySelector("#pic3").setAttribute("src", exPics[2]);
  //
  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}

function searchFunc() {
  const allQbtn = document.getElementById("allQlabel");
  const openQbtn = document.getElementById("openQlabel");
  const closebtn = document.getElementById("closedQlabel");

  allQbtn.setAttribute("class", "qCategoryBtn");
  openQbtn.classList.remove("qCategoryChecked");
  closebtn.classList.remove("qCategoryChecked");
  jsonData.questiontypes.forEach((q) => {
    let qToHide = document.getElementById(`qID_${q.id}`);
    qToHide.classList.remove("hide");
  });
  const noSearchResults = document.getElementById("noSearchResults");

  searchContent = document.getElementById("searchBar").value;
  if(searchContent=="")
  {
    allQbtn.setAttribute("class", "qCategoryCheckedStart");
  }
  document.getElementById("searchBar").value = "";
  let searchStatus = false;
  for (i = 0; i < jsonData.questiontypes.length; i++) {
    if (searchContent != jsonData.questiontypes[i].title && searchContent !="") {
      const qToHide = document.getElementById(
        `qID_${jsonData.questiontypes[i].id}`
      );
      qToHide.classList.add("hide");
      

    } else {
      searchStatus = true; //means the searched content exists
    }
  }

  if (!searchStatus && searchContent != "") {
    noSearchResults.innerHTML = `לא נמצאה תוצאה עבור "${searchContent}", נסו לחפש שוב :)`;


  } else {
    noSearchResults.innerHTML = "";

  }
}
//filtering by category:
//this function makes the radio buttons look pressed:
const qTypeList = ["allQlabel", "openQlabel", "closedQlabel"];

function checkedQtype(qType) {
  for (i = 0; i < qTypeList.length; i++) {
    let qCategory = document.getElementById(qTypeList[i]);
    if (qType == qCategory.id) {
      if (qCategory.classList.contains("qCategoryChecked") == false) {
        qCategory.classList.add("qCategoryChecked");
      }
    } else {
      if (qCategory.classList.contains("qCategoryChecked")) {
        qCategory.classList.remove("qCategoryChecked");
      }
    }
  }
}
//filter the category buttons
function showAllQ() {
  noSearchResults.innerHTML = "";
  // nedds to se how to remove

  let btnID = "allQlabel";
  checkedQtype(btnID);
  jsonData.questiontypes.forEach((q) => {
    let qToHide = document.getElementById(`qID_${q.id}`);
    qToHide.classList.remove("hide");
  });
}
function FilterCloseQ() {
  const allQbtn = document.getElementById("allQlabel");
  allQbtn.setAttribute("class","qCategoryBtn")
  noSearchResults.innerHTML = "";
  let btnID = "closedQlabel";
  checkedQtype(btnID);
  jsonData.questiontypes.forEach((q) => {
    let qToHide = document.getElementById(`qID_${q.id}`);
    qToHide.classList.remove("hide");
  });
  jsonData.questiontypes.forEach((q) => {
    if (q.tags != "closedQ") {
      let qToHide = document.getElementById(`qID_${q.id}`);
      qToHide.classList.add("hide");
    }
  });
}
function FilterOpenQ() {
  const allQbtn = document.getElementById("allQlabel");
  allQbtn.setAttribute("class","qCategoryBtn")
  noSearchResults.innerHTML = "";
  let btnID = "openQlabel";
  checkedQtype(btnID);
  jsonData.questiontypes.forEach((q) => {
    let qToHide = document.getElementById(`qID_${q.id}`);
    qToHide.classList.remove("hide");
  });
  jsonData.questiontypes.forEach((q) => {
    if (q.tags != "openQ") {
      let qToHide = document.getElementById(`qID_${q.id}`);

      qToHide.classList.add("hide");
    }
  });
}


function toggleNav() {
  document.getElementById("main-nav").classList.toggle("hide-mobile");
}

