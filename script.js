console.log("loaded")

function logClick() {
  console.log("click")
}

function logParam(param) {
  console.log(param)
}

window.addEventListener("load", () => {
  const rootElement = document.querySelector("#root")
  console.log(rootElement)

  rootElement.innerHTML = "lorem ipsum"

  window.addEventListener("click", logClick)

  window.addEventListener("click", () => logParam("logParam parameter"))

  let count = 0;
  setInterval(() => {
    count++;

    if (count % 2 === 0) {
      console.log("tock")
    } else {
      console.log("tick")
    }
  }, 1000)
})