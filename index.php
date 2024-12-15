<!DOCTYPE html>
<html>
  <head> 
    <title>Catastrophe</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body> 
    <div class="header"> 
      <div class="logo"> 
        <p>CATASTROPHE</p>
      </div>

      <div class="input"> 
        <button class="value" onclick="loadItems('*')" checked> 
          <p>All</p>
        </button>
        <button class="value" onclick="loadItems('Cat')"> 
          <p>Cats</p>
        </button>
        <button class="value" onclick="loadItems('Food')"> 
          <p>Food</p>
        </button>
        <button class="value" onclick="loadItems('Toy')"> 
          <p>Toys</p>
        </button>
        <button class="value" onclick="loadItems('Others')"> 
          <p>Others</p>
        </button>
      </div>
    </div>

    <div id="content"></div>

    <div id="addForm" class="popup-container">
      <div class="form-container"> 
        <div class="close-container"> 
          <button class="close-button" onclick="closeAddForm()">X</button>
        </div>
        <form class="form"> 
          <div class="form-group">
            <label>Image File Name</label><br>
            <input id="add_file" type='text' placeholder="Enter image file name"><br>
            <label>Product Name</label><br>
            <input id="add_name" type='text' placeholder="Enter product name"><br>
            <label for="color">Product Category</label>
            <select id="add_category" name="color">
              <option value="Cat">Cat</option>
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Others">Others</option>
            </select>
            <label>Price</label><br>
            <input id="add_price" type='number' step=".01">
            <label>Quantity</label><br>
            <input id="add_qty" type='number'>
          </div>
        </form>
        <button class="form-submit-btn" onclick="addItem()">Submit</button>
      </div>
    </div>

    <div id="editForm" class="popup-container"></div>

    <script src="script.js"></script>
  </body>
</html>
