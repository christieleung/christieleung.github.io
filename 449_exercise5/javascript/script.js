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

// dyeing

const dropDyeArticle = document.querySelector(".drop_dye");
dropDyeArticle.addEventListener("click", () => {
  const beet = dropDyeArticle.querySelector(".dye_beet img");
  beet.classList.add("slide-out-bottom");

});

const dropDyeArticle2 = document.querySelector(".drop_dye");
dropDyeArticle.addEventListener("click", () => {
  const cabbage = dropDyeArticle2.querySelector(".dye_cabbage img");
  cabbage.classList.add("roll-out-bottom");
});

const dropDyeArticle3 = document.querySelector(".drop_dye");
dropDyeArticle3.addEventListener("click", () => {
  const miniJeans = dropDyeArticle3.querySelector(".dye_item_jeans img");
  miniJeans.classList.add("bounce-out-bottom");
});


// javascript code edited from chatgpt
