function loadItems(category) {
  fetch('db_content.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
      const contentContainer = document.getElementById('content');
      contentContainer.innerHTML = '';
      console.log(data);
      data.forEach(item => {
        if (item.Product_Category == category || category == '*'){
          const cardElement = document.createElement('div');
          cardElement.classList.add('card');
          const itemElement = document.createElement('div');
          itemElement.classList.add("content-item");
          itemElement.innerHTML = `
            <p>${item.Product_Name}</p>
            <p>${item.Quantity}</p>
          `;
          cardElement.appendChild(itemElement);
          contentContainer.appendChild(cardElement);
        }
      });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
window.onload(loadItems('*'));
