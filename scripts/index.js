var search_bar = document.getElementById("searchbar")
var cart_img = document.getElementById("cart_img")
var cart = []
var cart_counter = 0;

// search when the enter key is pressed inside the search bar
search_bar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        search()
    }
})


var item_elements = document.querySelectorAll(".groc_item_form")

item_elements.forEach(element => {
    element.addEventListener("submit", function(event) {
        event.preventDefault()
        addToCart(element)
    })
});



function search() {
    text = document.getElementById("searchbar").value
    filter_tell = document.getElementById("filter_teller")
    if (text === "") {
        filter_tell.textContent = "Filter: None"
    }
    else {
        filter_tell.textContent = "Filter: "+ text;
    }
}

function addToCart(form) {
    item_img = form.querySelector("img")
    cart.push(item_img.alt)
    cart_counter++
    cart_size = document.getElementById("cart_size")
    cart_size.textContent = "In Cart: " + cart_counter
}

function load_cart() {
    let cart_list = document.getElementById("cart_list")
    cart.forEach(element => {
        let li = document.createElement('li')
        li.textContent = element
        cart_list.appendChild(li)
    })
}

function go_to_cart() {
    window.location.href="cart.html"
    load_cart()
    
}

function go_to_home() {
    window.location.href="index.html"
}