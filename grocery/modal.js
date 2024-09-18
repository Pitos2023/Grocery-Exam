document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("add-items-btn");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("item-form");
    var groceryList = document.getElementById("grocery-list");

    // Check if elements exist before proceeding
    if (!modal || !btn || !span || !form || !groceryList) {
        console.error("Required elements not found!");
        return;
    }

    // Open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle form submission
    form.onsubmit = function(event) {
        event.preventDefault();

        var itemName = document.getElementById("item-name").value;
        var itemPrice = document.getElementById("item-price").value;
        var itemCategory = document.getElementById("item-category").value;
        var itemImage = document.getElementById("item-image").files[0];

        if (!itemName || !itemPrice || !itemCategory || !itemImage) {
            console.error("Please fill out all required fields!");
            return;
        }

        var newItem = document.createElement("div");
        newItem.classList.add("item");

        var imageElement = document.createElement("img");
        var reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
        }
        reader.readAsDataURL(itemImage);

        var itemText = document.createElement("div");
        itemText.innerHTML = `${itemName} ₱${itemPrice} <br> (${itemCategory})`;

        newItem.appendChild(imageElement);
        newItem.appendChild(itemText);

        // Check if groceryList exists before appending
        if (groceryList) {
            groceryList.appendChild(newItem);
        } else {
            console.error("groceryList element not found!");
        }

        modal.style.display = "none";
        form.reset();
    }
});