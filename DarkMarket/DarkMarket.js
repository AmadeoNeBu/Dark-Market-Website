
// Here I remove all the pop up container, the function remove also removes everything inside, including other divs or images. Remember using getelement by Id. It didnt work to use get element by class.

let popupimage = document.getElementById("pop-up-container")

function closepopup() {
  console.log("existo")
  popupimage.remove()
}

// taking all gifs from the DOM. Taking checkbox from the DOM:

let CheckEl = document.getElementById("pococheck")



CheckEl.addEventListener("click", function() {
  if (CheckEl.checked == true) {
    
    document.getElementById("advertisement-gif1").src = "./DarkMarket/Images/spam/pocoyo1.jpg"
    document.getElementById("advertisement-gif2").src = "./DarkMarket/Images/spam/pocoyo2.jpg"
    document.getElementById("advertisement-gif3").src = "./DarkMarket/Images/spam/pocoyo3.jpg"
    document.getElementById("advertisement-gif4").src = "./DarkMarket/Images/spam/pocoyo4.jpg"
    document.getElementById("advertisement-gif5").src = "./DarkMarket/Images/spam/pocoyo5.jpg"
    document.getElementById("advertisement-gif6").src = "./DarkMarket/Images/spam/pocoyo6.jpg"
    document.getElementById("advertisement-gif7").src = "./DarkMarket/Images/spam/pocoyo7.jpg"
    document.getElementById("advertisement-gif8").src = "./DarkMarket/Images/spam/pocoyo8.jpg"
    document.getElementById("bottom-gif").src = "./DarkMarket/Images/spam/pocoyo9.jpg"
  }

  if (CheckEl.checked == false) {
    document.getElementById("advertisement-gif1").src = "./DarkMarket/Images/spam/spam-1.gif"
    document.getElementById("advertisement-gif2").src = "./DarkMarket/Images/spam/spam-9.gif"
    document.getElementById("advertisement-gif3").src = "./DarkMarket/Images/spam/spam-5.gif"
    document.getElementById("advertisement-gif4").src = "./DarkMarket/Images/spam/spam-4.gif"
    document.getElementById("advertisement-gif5").src = "./DarkMarket/Images/spam/spam-10.gif"
    document.getElementById("advertisement-gif6").src = "./DarkMarket/Images/spam/spam-7.gif"
    document.getElementById("advertisement-gif7").src = "./DarkMarket/Images/spam/spam-8.gif"
    document.getElementById("advertisement-gif8").src = "./DarkMarket/Images/spam/spam-6.gif"
    document.getElementById("bottom-gif").src = "./DarkMarket/Images/spam/spam-12.gif"
  }
})





// <img id="advertisement-gif1" src="./DarkMarket/Images/spam/pocoyo1.jpg" alt="">