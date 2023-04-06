document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
  
    const predefinedItems = [
      "Milk", "Bread", "Eggs", "Butter", "Cheese", "Cereal",
      "Fruits", "Vegetables", "Meat", "Chicken", "Fish", "Pasta"
    ];
  
    function createList() {
      const list = document.createElement("ul");
      list.classList.add("list-group");
      return list;
    }
  
    function createListItem(item) {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      li.textContent = item;
  
      const button = document.createElement("button");
      button.classList.add("btn", "btn-danger", "btn-sm");
      button.textContent = "Remove";
      button.onclick = function () {
        li.remove();
      };
  
      li.appendChild(button);
      return li;
    }
  
    function addItemToList(list, item) {
      const listItem = createListItem(item);
      list.appendChild(listItem);
    }
  
    const form = document.createElement("form");
    const select = document.createElement("select");
    const option = document.createElement("option");
    const list = createList();
  
    form.classList.add("mb-3");
    select.classList.add("form-select");
    option.textContent = "Select an item or enter manually...";
    option.disabled = true;
    option.selected = true;
  
    select.appendChild(option);
  
    predefinedItems.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
  
    const otherOption = document.createElement("option");
    otherOption.textContent = "Other...";
    select.appendChild(otherOption);
  
    select.onchange = function () {
      if (select.value === "Other...") {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("form-control", "mt-2");
        input.placeholder = "Enter item name";
        form.appendChild(input);
        input.focus();
  
        input.onchange = function () {
          addItemToList(list, input.value);
          input.value = "";
          select.value = "";
          form.removeChild(input);
        };
      } else {
        addItemToList(list, select.value);
        select.value = "";
      }
    };
  
    form.appendChild(select);
    app.appendChild(form);
    app.appendChild(list);
  });
  