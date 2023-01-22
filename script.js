const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice("0, -5")
  //const today = "19/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já adicionado! ❌")
    return
  }

  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso! ✅")
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

// const data = {
// run: ["01-01", "01-02", "01-06", "01-09", "01-010"],
//  water: ["01-04", "01-05"],
//  food: ["01-01", "01-03"],
//  journal: ["01-01", "01-04", "01-06"],
//  pills: ["01-04", "01-05"],
//}

//  nlwSetup.setData(data)

//nlwSetup.load()
