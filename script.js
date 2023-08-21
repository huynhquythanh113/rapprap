 window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 5 ||
          document.documentElement.scrollTop > 5
        ) {
          document.getElementById("myHeader").style.background = "#282828";
          document.getElementById("myHeader").style.position = "fixed";
        } else {
          document.getElementById("myHeader").style.fontSize = null;
          document.getElementById("myHeader").style.background = null;
        }
      }