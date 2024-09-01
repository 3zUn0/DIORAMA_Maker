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
    /* クリック時、選択していないものから'selected'属性を外し、選択したものに'selected'属性を付与する*/
  var selected = document.querySelector('.palette-item.selected')
  if (selected) { selected.classList.remove('selected');
  }
  choice.classList.add('selected');
  
  // 選んだ画像をスポイト
  put = choice.src
}
