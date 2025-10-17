// Select Elements

const container = document.querySelector('.product-container')
const dropDownMenu = document.querySelector('select')



// Event Listener

dropDownMenu.addEventListener('change', function () {
  const cards = Array.from(container.querySelectorAll(".card"));

  // Build array of objects: { card, name, price }
  const cardData = cards.map(card => {
    const name = card.querySelector(".product-name").textContent.toLowerCase();
    const price = parseFloat(
      card.querySelector(".product-price").textContent.replace(/[^0-9.]/g, "")
    );
    return { card, name, price };
  });

// Sort depending on selection
  switch (dropDownMenu.value) {
    case "price-asc":
      cardData.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      cardData.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      cardData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      cardData.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  // Re-render cards
  container.innerHTML = "";
  cardData.forEach(item => container.appendChild(item.card));
});