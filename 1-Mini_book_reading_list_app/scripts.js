document.addEventListener("DOMContentLoaded", () => {
  // Delete action
  const list = document.querySelector("#book-list ul");
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });

  // Add books
  const addForm = document.forms["add-book"];
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookName = addForm.querySelector("input[type='text']").value;
    // create element
    const li = document.createElement("li");
    const bookNameTag = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // add textContent
    deleteBtn.textContent = "delete";
    bookNameTag.textContent = bookName;
    // add classes
    bookNameTag.classList.add("name");
    deleteBtn.classList.add("delete");
    // append span tags to li
    li.appendChild(bookNameTag);
    li.appendChild(deleteBtn);
    // append to DOM
    list.appendChild(li);
  });

  // Hide books
  const hideBox = document.querySelector("#hide");
  hideBox.addEventListener("change", (e) => {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial"; // block still works
    }
  });

  // Search books
  const searchBar = document.forms["search-book"].querySelector("input");
  searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  // Tabbed content
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
