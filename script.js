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
}
window.onload = loadItems('*');
