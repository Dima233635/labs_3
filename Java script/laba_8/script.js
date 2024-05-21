document.addEventListener("DOMContentLoaded", function() {
    const priceInput = document.getElementById("priceInput");

    priceInput.addEventListener("blur", function() {
        const price = parseFloat(priceInput.value);
        if (isNaN(price) || price < 0) {
            priceInput.style.borderColor = "red";
            return;
        }
        priceInput.style.borderColor = "";

        const span = document.createElement("span");
        span.textContent = `Текущая цена: ${priceInput.value}`;
        
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.addEventListener("click", function() {
            span.remove();
            priceInput.value = "";
        });

        span.appendChild(closeButton);
        document.body.appendChild(span);
    });

    priceInput.addEventListener("focus", function() {
        priceInput.style.borderColor = "green";
    });
});