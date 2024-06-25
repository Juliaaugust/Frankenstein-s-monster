function setColor() {
  document.getElementById("color-block").style.backgroundColor = getRandomColor()
}

// Функция для генерации случайного HEX-кода цвета
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function setColorAndName() {
  const ramdomNumber = Math.floor(Math.random() * colorsArray.length)
  
  document.getElementById("color-name").innerText = colorsArray[ramdomNumber].name
  document.getElementById("color-block").style.backgroundColor = colorsArray[ramdomNumber].color
}

const colorsArray = [
  { color: "#ff0000", name: "Красный" },
  { color: "#00ff00", name: "Зеленый" },
  { color: "#0000ff", name: "Синий" },
  { color: "#ffff00", name: "Желтый" },
  { color: "#ff00ff", name: "Фиолетовый" },
  { color: "#00ffff", name: "Бирюзовый" },
  { color: "#ff8000", name: "Оранжевый" },
  { color: "#800080", name: "Пурпурный" },
  { color: "#008080", name: "Темно-бирюзовый" },
  { color: "#800000", name: "Темно-красный" },
  { color: "#008000", name: "Темно-зеленый" },
  { color: "#000080", name: "Темно-синий" },
  { color: "#804000", name: "Темно-оранжевый" },
  { color: "#400080", name: "Темно-пурпурный" },
  { color: "#004080", name: "Темный бирюзовый" },
  { color: "#ff6666", name: "Светло-красный" },
  { color: "#66ff66", name: "Светло-зеленый" },
  { color: "#6666ff", name: "Светло-синий" },
  { color: "#ffff66", name: "Светло-желтый" },
  { color: "#ff66ff", name: "Светло-фиолетовый" },
]