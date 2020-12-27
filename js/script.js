  
  window.onscroll = function() {
    progressBar();
  };
  
  function progressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  
  console.log(
    "%cThank you for taking the time to look at my portfolio, I hope you enjoyed browsing through. Feel free to contact me, I would love to hear from your feedback. Have a good day :)",
    "font-size: 20px; color: #F037A5;"
  );