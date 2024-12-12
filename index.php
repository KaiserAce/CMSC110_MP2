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

    <script src="script.js"></script>
  </body>
</html>
