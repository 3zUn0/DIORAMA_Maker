let put = "https://3zun0.github.io/DIORAMA_Maker/img/null.png"

function buttonClick(grid) {
  let p = document.getElementById(grid)
  if (grid.src==put) {
    grid.src="https://3zun0.github.io/DIORAMA_Maker/img/null.png";
  }else{
     grid.src=put
  }
}

function changePalette(choice) {
  put = choice.src
}
