var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document.getElementById(tabname).classList.add("active-tab");
}

var wrap = document.querySelectorAll('.work');
var btn1 = document.querySelector('.btn1');
currentimg = 3;
btn1.addEventListener('click', function () {
  for (var i = currentimg; i < currentimg + 3; i++) {
    if (wrap[i]) {
      wrap[i].style.display = 'block';
    }
  }
  currentimg += 3;
  if (currentimg >= wrap.length) {
    Event.target.style.display = 'none';
  }
})

function myFunction() {
  document.getElementById("msg").innerHTML = "Submitted successfully!";
}