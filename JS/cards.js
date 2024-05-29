if (!window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches) {
  document.querySelectorAll(".card").forEach((rect) => {
    rect.addEventListener("click", (event) => {
      document.querySelectorAll(".card").forEach((r) => {
        r.classList.remove("activo");
        r.style.zIndex = "1";
        r.style.transform = "scale(1)";
      });

      event.currentTarget.classList.add("activo");
      event.currentTarget.style.zIndex = "3";
      event.currentTarget.style.transform = "scale(1.2)";
    });
  });
}
