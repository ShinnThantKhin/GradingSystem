function checkPassFail(subject, mark) {
  if (subject === "Myanmar" || subject === "English" || subject === "Biology") {
    if (mark < 40) {
      return "Fail";
    } else if (mark >= 75) {
      return "Distinction";
    } else {
      return "Pass";
    }
  } else {
    if (mark < 40) {
      return "Fail";
    } else if (mark >= 80) {
      return "Distinction";
    } else {
      return "Pass";
    }
  }
}

function openResult() {
  let myanmar = parseInt(document.getElementById("Myanmar").value);
  let english = parseInt(document.getElementById("English").value);
  let mathematics = parseInt(document.getElementById("Mathematics").value);
  let physics = parseInt(document.getElementById("Physics").value);
  let chemistry = parseInt(document.getElementById("Chemistry").value);
  let biology = parseInt(document.getElementById("Biology").value);

  if (myanmar < 0 || myanmar > 100) {
    document.getElementById("myanError").style.display = "inline";
    document.getElementById("result").style.display = "none";
    document.getElementById("myanEmpty").style.display = "none";
  } else if (!myanmar) {
    document.getElementById("myanEmpty").style.display = "inline";
    document.getElementById("result").style.display = "none";
    document.getElementById("myanError").style.display = "none";
  } else {
    document.getElementById("myanError").style.display = "none";
    document.getElementById("myanEmpty").style.display = "none";
  }
  if (english < 0 || english > 100) {
    document.getElementById("engError").style.display = "inline";
    document.getElementById("result").style.display = "none";
    document.getElementById("engEmpty").style.display = "none";
  } else if (!english) {
    document.getElementById("engEmpty").style.display = "inline";
    document.getElementById("engError").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("engError").style.display = "none";
    document.getElementById("engEmpty").style.display = "none";
  }
  if (mathematics < 0 || mathematics > 100) {
    document.getElementById("mathError").style.display = "inline";
    document.getElementById("mathEmpty").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else if (!mathematics) {
    document.getElementById("mathEmpty").style.display = "inline";
    document.getElementById("mathError").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("mathError").style.display = "none";
    document.getElementById("mathEmpty").style.display = "none";
  }
  if (chemistry < 0 || chemistry > 100) {
    document.getElementById("chemError").style.display = "inline";
    document.getElementById("chemEmpty").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else if (!chemistry) {
    document.getElementById("chemEmpty").style.display = "inline";
    document.getElementById("chemError").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("chemError").style.display = "none";
    document.getElementById("chemEmpty").style.display = "none";
  }
  if (physics < 0 || physics > 100) {
    document.getElementById("phyError").style.display = "inline";
    document.getElementById("phyEmpty").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else if (!physics) {
    document.getElementById("phyEmpty").style.display = "inline";
    document.getElementById("phyError").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("phyError").style.display = "none";
    document.getElementById("phyEmpty").style.display = "none";
  }
  if (biology < 0 || biology > 100) {
    document.getElementById("bioError").style.display = "inline";
    document.getElementById("bioEmpty").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else if (!biology) {
    document.getElementById("bioEmpty").style.display = "inline";
    document.getElementById("bioError").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("bioError").style.display = "none";
    document.getElementById("bioEmpty").style.display = "none";
  }

  if (
    myanmar < 0 ||
    myanmar > 100 ||
    english < 0 ||
    english > 100 ||
    mathematics < 0 ||
    mathematics > 100 ||
    chemistry < 0 ||
    chemistry > 100 ||
    physics < 0 ||
    physics > 100 ||
    biology < 0 ||
    biology > 100 ||
    !myanmar ||
    !english ||
    !mathematics ||
    !chemistry ||
    !biology ||
    !physics
  ) {
    return;
  } else {
    document.getElementById("myanError").style.display = "none";
    document.getElementById("engError").style.display = "none";
    document.getElementById("mathError").style.display = "none";
    document.getElementById("chemError").style.display = "none";
    document.getElementById("phyError").style.display = "none";
    document.getElementById("bioError").style.display = "none";

    let subjects = [
      "Myanmar",
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
    ];
    let marks = [myanmar, english, mathematics, physics, chemistry, biology];
    let failed = false;
    let totalMark = document.getElementById("total");
    let total = 0;
    document.getElementById("result").style.display = "block";

    let tableBody = document
      .getElementById("resultTable")
      .getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {
      let subject = subjects[i];
      let mark = marks[i];

      let newRow = tableBody.insertRow();
      let subRow = newRow.insertCell(0);
      let markRow = newRow.insertCell(1);
      let pfRow = newRow.insertCell(2);

      subRow.innerHTML = subject;
      markRow.innerHTML = mark;
      pfRow.innerHTML = checkPassFail(subject, mark);

      if (checkPassFail(subject, mark) === "Fail") {
        failed = true;
      }

      total += mark;
      totalMark.innerText = "Total Marks : " + total;
    }

    document.getElementById("okBtn").addEventListener("click", function () {
      location.reload();
    });

    function overallPassFail(failed) {
      if (failed) {
        return "Fail!";
      } else {
        if (
          marks[0] >= 75 ||
          marks[1] >= 75 ||
          marks[2] >= 80 ||
          marks[3] >= 80 ||
          marks[4] >= 80 ||
          marks[5] >= 75
        ) {
          return "Pass with Distinction!";
        } else {
          return "Pass!";
        }
      }
    }

    let Message = document.getElementById("message");
    Message.innerText = overallPassFail(failed);
  }
}
