async function loadItems(category) {
  const response =  await fetch("db_content.php");
  const data = await response.json();
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  console.log(data);
  data.forEach(item => {
    if (item.Product_Category == category || category == '*'){
      const buttonElement = document.createElement('button');
      buttonElement.setAttribute("onclick", `editForm("${item.Product_ID}", "${item.Product_Name}","${item.Image_File}","${item.Product_Price}","${item.Quantity}")`);
      buttonElement.classList.add('content-item');
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      const itemElement = document.createElement('div');
      itemElement.classList.add("content-item");
      const imgLoc = "./images/".concat(item.Image_File);
      itemElement.innerHTML = `
        <div class='image-container'>
          <img src=${imgLoc}>
        </div>
        <p style='font-size:30px; line-height: 0.8'>${item.Product_Name}</p>
        <p style='font-size:20px'>$${item.Product_Price}</p>
        <p>Qty: ${item.Quantity}</p>
      `;
      buttonElement.appendChild(itemElement);
      cardElement.appendChild(buttonElement);
      contentContainer.appendChild(cardElement);
    }
  });
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute("onclick", "addForm()");
  buttonElement.classList.add('content-item');
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  const itemElement = document.createElement('div');
  itemElement.classList.add("content-item");
  itemElement.innerHTML = `
    <p style='font-size: 100px'> + </p>
    <p style='font-size: 20px'> Add an item </p>
  `
  buttonElement.appendChild(itemElement);
  cardElement.appendChild(buttonElement);
  contentContainer.appendChild(cardElement);
}

async function addItem() {
  const file = document.getElementById('add_file').value;
  const name = document.getElementById('add_name').value;
  const category = document.getElementById('add_category').value;
  const price = document.getElementById('add_price').value;
  const quantity = document.getElementById('add_qty').value;

  console.log(file);
  console.log(name);
  console.log(category);
  console.log(price);
  console.log(quantity);
  const response = await fetch("db_addItem.php", { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: Math.random() * 1000,
      file: file,
      name: name, 
      category: category,
      price: price,
      quantity: quantity,
    })
  });

  const data = await response.json();
  console.log(data);
  window.location.replace("index.php");
}

async function editItem() {
  const file = document.getElementById('edit_file').value;
  const name = document.getElementById('edit_name').value;
  const price = document.getElementById('edit_price').value;
  const quantity = document.getElementById('edit_qty').value;
  const id = document.getElementById('edit_id').value;

  console.log(file);
  console.log(name);
  console.log(price);
  console.log(quantity);
  const response = await fetch("db_editItem.php", { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      file: file,
      name: name, 
      price: price,
      quantity: quantity,
    })
  });

  const data = await response.json();
  console.log(data);
  window.location.replace("index.php");
}

async function deleteItem() {
  const id = document.getElementById('edit_id').value;

  const response = await fetch("db_deleteItem.php", { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
    })
  });

  const data = await response.json();
  console.log(data);
  window.location.replace("index.php");
}

function addForm () {
  const popup = document.getElementById("addForm");
  popup.style.display = 'block';
}

function closeAddForm() {
  const popup = document.getElementById("addForm");
  popup.style.display = 'none';
}

function editForm(id, name, img, price, qty) {
  const popup = document.getElementById("editForm");
  popup.style.display = 'block';
  popup.innerHTML = `
      <div class="form-container"> 
        <div class="close-container"> 
          <button class="close-button" onclick="closeEditForm()">X</button>
        </div>
        <form class="form"> 
          <div class="form-group">
            <label>Image File Name</label><br>
            <input id="edit_file" type='text' placeholder="Enter image file name" value="${img}"><br>
            <label>Product Name</label><br>
            <input id="edit_name" type='text' placeholder="Enter product name" value="${name}"><br>
            <label>Price</label><br>
            <input id="edit_price" type='number' step=".01" value="${price}">
            <label>Quantity</label><br>
            <input id="edit_qty" type='number' value="${qty}">
            <input id="edit_id" type='text' value="${id}" hidden>
          </div>
        </form>
        <button class="form-submit-btn" onclick="editItem()">Submit</button>
        <button class="form-delete-btn" onclick="deleteItem()">Delete Entry</button>
      </div>
  `;
}

function closeEditForm() {
  const popup = document.getElementById("editForm");
  popup.innerHTML = ``;
  popup.style.display = 'none';
}
window.onload = loadItems('*');
