document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("postscript-toggle");
  const postscript = document.getElementById("postscript-text");

  if (!toggleBtn || !postscript) return;

  // ensure collapsed on load
  postscript.style.maxHeight = "0";

  toggleBtn.addEventListener("click", () => {
    const isOpen = postscript.classList.contains("open");

    if (isOpen) {
      // collapse
      postscript.style.maxHeight = "0";
      postscript.classList.remove("open");
      toggleBtn.textContent = "+ Postscript";
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      // expand to content height
      postscript.style.maxHeight = postscript.scrollHeight + "px";
      postscript.classList.add("open");
      toggleBtn.textContent = "– Postscript";
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  });
});
