async function loadItems(category) {
  const response =  await fetch("db_content.php");
  const data = await response.json();
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  console.log(data);
  data.forEach(item => {
    if (item.Product_Category == category || category == '*'){
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
      cardElement.appendChild(itemElement);
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

function addForm () {
  const popup = document.getElementById("addForm");
  popup.style.display = 'block';
}

function closeAddForm() {
  const popup = document.getElementById("addForm");
  popup.style.display = 'none';
}
window.onload = loadItems('*');
