// hover

const pink = document.querySelectorAll("[data-hover]");
pink.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.src = img.dataset.hover;
  });

  img.addEventListener("mouseout", () => {
    img.src = img.dataset.original;
  });
});

// cursor

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.documentElement.getAttribute("data-page");

  if (cursor === "wand") {
    document.documentElement.style.cursor =
      "url(../img/cursor_wand2.png), auto";
  } else if (cursor === "needle") {
    document.documentElement.style.cursor =
      "url(../img/cursor_needle2.png), auto";
  } else if (cursor === "needle_sweater") {
    document.documentElement.style.cursor =
      "url(../img/cursor_needle_sweater2.png) 50 0, auto";
  } else if (cursor === "scissors") {
    document.documentElement.style.cursor =
      "url(../img/cursor_scissors_closed2.png), auto";

    document.documentElement.addEventListener("mousedown", () => {
      document.documentElement.style.cursor =
        "url(../img/cursor_scissors_open2.png), auto";
    });
    document.documentElement.addEventListener("mouseup", () => {
      document.documentElement.style.cursor =
        "url(../img/cursor_scissors_closed2.png), auto";
    });
  } else if (cursor === "spoon") {
    document.documentElement.style.cursor =
      "url(../img/cursor_spoon2.png) 70 70, auto";
  }
});

// forum reply

function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === "mend") {
    result.innerHTML =
      "<p>great fix pixie! pink thread would be the perfect accent!</p>";
  } else if (answer === "patch") {
    result.innerHTML =
      "<p>great fix pixie! a strawberry patch would be so cute!</p>";
  } else if (answer === "throw") {
    result.innerHTML =
      "<p>there is still some life in them! let's think of another way!</p>";
  } else if (answer === "throw2") {
    result.innerHTML =
      "<p>there is still a lot of wear in it! let's think of another way!</p>";
  } else if (answer === "fix") {
    result.innerHTML =
      "<p>great fix pixie! a cobbler can fix the soles and vines :)</p>";
  } else if (answer === "donate") {
    result.innerHTML =
      "<p>hmmm not quite! blooms really wants to keep them!</p>";
  } else if (answer === "donate2") {
    result.innerHTML =
      "<p>great fix pixie! the dress can now find a new home!</p>";
  } else if (answer === "keep") {
    result.innerHTML =
      "<p>hmm not quite! might be time to give it a second life!</p>";
  }
}

// javascript code edited from chatgpt
