const range = document.getElementById("range");
const progress = document.querySelector(".progress");
const value = document.querySelector(".billing");
const view = document.querySelector(".pageview");
const slider = document.querySelector(".slider");
const checkbox = document.querySelector("#switch");
const check = document.querySelector(".check");
const time = document.querySelector(".month")

var checked = false;

console.log(range);

check.addEventListener("click", function () {
  check.classList.toggle("active");
  if (checked == true ){
    checked = false
  } else {
    checked = true
  }

  if (checked == false) {
    if (range.value == 1) {
        progress.style.width = "25%";
        value.innerHTML = "$12.00";
        view.innerHTML = "50k PAGEVIEW";
        time.innerHTML = "/month"
      } else if (range.value == 2) {
        progress.style.width = "50%";
        value.innerHTML = "$16.00";
        view.innerHTML = "100k PAGEVIEW";
        time.innerHTML = "/month"
      } else if (range.value == 3) {
        progress.style.width = "75%";
        value.innerHTML = "$24.00";
        view.innerHTML = "500k PAGEVIEW";
        time.innerHTML = "/month"
      } else if (range.value == 4) {
        progress.style.width = "100%";
        value.innerHTML = "$32.00";
        view.innerHTML = "1M PAGEVIEW";
        time.innerHTML = "/month"
      } else if (range.value == 0) {
        progress.style.width = "0%";
        value.innerHTML = "$8.00";
        view.innerHTML = "10k PAGEVIEW";
        time.innerHTML = "/month"
      }
  } if (checked == true) {
    if (range.value == 1) {
        progress.style.width = "25%";
        value.innerHTML = "$" + (12 - (12 * 0.25)) * 12 + ".00";
        view.innerHTML = "50k PAGEVIEW";
        time.innerHTML = "/year"
      } else if (range.value == 2) {
        progress.style.width = "50%";
        value.innerHTML = "$" + (16 - (16 * 0.25)) * 12 + ".00";
        view.innerHTML = "100k PAGEVIEW";
        time.innerHTML = "/year"
      } else if (range.value == 3) {
        progress.style.width = "75%";
        value.innerHTML = "$" + (24 - (24 * 0.25)) * 12 + ".00";
        view.innerHTML = "500k PAGEVIEW";
        time.innerHTML = "/year"
      } else if (range.value == 4) {
        progress.style.width = "100%";
        value.innerHTML = "$" + (32 - (32 * 0.25)) * 12 + ".00";
        view.innerHTML = "1M PAGEVIEW";
        time.innerHTML = "/year"
      } else if (range.value == 0) {
        progress.style.width = "0%";
        value.innerHTML = "$" + (8 - (8 * 0.25)) * 12 + ".00";
        view.innerHTML = "10k PAGEVIEW";
        time.innerHTML = "/year"
      }
  }
});

range.addEventListener("input", function () {
  if (range.value == 1) {
    progress.style.width = "25%";
    value.innerHTML = "$12.00";
    view.innerHTML = "50k PAGEVIEW";
    time.innerHTML = "/month"
  } else if (range.value == 2) {
    progress.style.width = "50%";
    value.innerHTML = "$16.00";
    view.innerHTML = "100k PAGEVIEW";
    time.innerHTML = "/month"
  } else if (range.value == 3) {
    progress.style.width = "75%";
    value.innerHTML = "$24.00";
    view.innerHTML = "500k PAGEVIEW";
    time.innerHTML = "/month"
  } else if (range.value == 4) {
    progress.style.width = "100%";
    value.innerHTML = "$32.00";
    view.innerHTML = "1M PAGEVIEW";
    time.innerHTML = "/month"
  } else if (range.value == 0) {
    progress.style.width = "0%";
    value.innerHTML = "$8.00";
    view.innerHTML = "10k PAGEVIEW";
    time.innerHTML = "/month"
  }
  if (check.className == "check active") {
    if (range.value == 1) {
      progress.style.width = "25%";
      value.innerHTML = "$" + (12 - (12 * 0.25)) * 12 + ".00";
      view.innerHTML = "50k PAGEVIEW";
      time.innerHTML = "/year"
    } else if (range.value == 2) {
      progress.style.width = "50%";
      value.innerHTML = "$" + (16 - (16 * 0.25)) * 12 + ".00";
      view.innerHTML = "100k PAGEVIEW";
      time.innerHTML = "/year"
    } else if (range.value == 3) {
      progress.style.width = "75%";
      value.innerHTML = "$" + (24 - (24 * 0.25)) * 12 + ".00";
      view.innerHTML = "500k PAGEVIEW";
      time.innerHTML = "/year"
    } else if (range.value == 4) {
      progress.style.width = "100%";
      value.innerHTML = "$" + (32 - (32 * 0.25)) * 12 + ".00";
      view.innerHTML = "1M PAGEVIEW";
      time.innerHTML = "/year"
    } else if (range.value == 0) {
      progress.style.width = "0%";
      value.innerHTML = "$" + (8 - (8 * 0.25)) * 12 + ".00";
      view.innerHTML = "10k PAGEVIEW";
      time.innerHTML = "/year"
    }
  }
});
