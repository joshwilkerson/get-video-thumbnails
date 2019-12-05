const videoForm = document.querySelector("#getVideoForm")
const formInput = videoForm.querySelector("input[type='text']")
const formSubmit = videoForm.querySelector("input[type='submit']")

const screenlog = document.querySelector(".screenlog .inner")

videoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  screenlog.innerHTML += formInput.value
})

formInput.addEventListener("input", () => {
  if(formInput.value !== "") {
    formSubmit.disabled = false
  } else {
    formSubmit.disabled = true
  }
})
