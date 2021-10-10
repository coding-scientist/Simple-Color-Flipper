const colorCodeEl = document.getElementById(`color-code`)
const colorFlipperBtn = document.getElementById(`color-flipper-btn`)
const colorCodes = [`E83845`, `FFCE30`, `ACD7E6`]

let index = 0
let hexColor

colorFlipperBtn.addEventListener(`click`, () => {
   
   if (index > 2) { index = 0 } 

   hexColor = `#${colorCodes[index]}`
   document.body.style.backgroundColor = hexColor
   colorCodeEl.textContent = hexColor
   index++
})