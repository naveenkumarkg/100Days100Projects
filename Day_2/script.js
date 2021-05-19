const openMenu = () => {
  const menuBtn = document.querySelector(".menu-btn");

  const firstLine = menuBtn.firstElementChild;
  const secondLine = menuBtn.children[1];
  const lastLine = menuBtn.lastElementChild;

  menuBtn.addEventListener("click", () => {
    if (!menuBtn.classList.contains("is-open")) {
      firstLine.style.transform = "translateY(23px)";
      lastLine.style.transform = "translateY(-23px)";
      secondLine.style.transform = "scale(0)";

      setTimeout(() => {
        firstLine.style.transform = "translateY(23px) rotate(45deg)";
        lastLine.style.transform = "translateY(-23px) rotate(135deg)";
      }, 800);
    } else {
        firstLine.style.transform = "translateY(23px) rotate(0)";
        lastLine.style.transform = "translateY(-23px) rotate(0)";
       
        
        setTimeout(() => {
            firstLine.style.transform = "translateY(0) rotate(0)";
            lastLine.style.transform = "translateY(0) rotate(0)";
            secondLine.style.transform = "scale(1)";
          }, 800);
    }

    menuBtn.classList.toggle('is-open');
  });
};

openMenu();
