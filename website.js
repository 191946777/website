document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling function
  function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
          element.scrollIntoView({ behavior: "smooth" });
      }
  }

  // Attach click event listeners to navigation links
  document.getElementById("homelist").addEventListener("click", function () {
    scrollToElement("homemain");
  });

  
  document.getElementById("aboutlist").addEventListener("click", function () {
      scrollToElement("aboutmain");
  });

  document.getElementById("explist").addEventListener("click", function () {
      scrollToElement("expmain");
  });

  document.getElementById("contactlist").addEventListener("click", function () {
      scrollToElement("contactmain");
  });
});