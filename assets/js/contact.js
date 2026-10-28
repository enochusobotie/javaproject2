let result = "";

{
    let product = "Shoes";
    let price = 25000;
    let quantity = 5;
    let discount = 2000;
    let available = true;

    console.log(product);
    console.log(price);
    console.log(quantity);
    console.log(discount);
    console.log(available);

    result = product + "<br>" +
             price + "<br>" +
             quantity + "<br>" +
             discount + "<br>" +
             available;
}

document.getElementById("result").innerHTML = result;