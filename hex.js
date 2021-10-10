const colorCodeEl = document.getElementById(`color-code`)
const colorFlipperBtn = document.getElementById(`color-flipper-btn`)
const colorCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]


colorFlipperBtn.addEventListener(`click`, () => {
   let hexColor = `#`

   for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * colorCodes.length)
      hexColor += colorCodes[num]
   }

   document.body.style.backgroundColor = hexColor
   colorCodeEl.textContent = hexColor
})