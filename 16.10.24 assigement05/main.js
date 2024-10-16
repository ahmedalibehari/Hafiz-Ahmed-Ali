const addForm = document.querySelector(".addForm");
const search = document.querySelector(".search");
const list = document.querySelector(".list");
const item = document.querySelector(".item");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = e.target.add.value;

  list.innerHTML +=`<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${text}</span>
          <li class="far fa-trash-alt delete"></li>
        </li>`;

  addForm.reset();
});

list.addEventListener("click", function (e) {
  // console.log("Parent");
  e.target.parentElement.remove();
});

function filterTodos(searchText) {
  for (let i = 0; i < list.children.length; i++) {
    const li = list.children[i];
    if (!li.textContent.includes(searchText)) {
      li.classList.add("filtered");
    } else {
      list.classList.remove("filtered");
    }
  }
}

search.addEventListener("keyup", function (e) {
  //   console.log(e);
  const searchText = e.target.value;
  filterTodos(searchText);
});