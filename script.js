let debounceTimeout;

const handleMouseMove = (event) => {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
};

const debounceMouseMove = (event) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => handleMouseMove(event), 300);
};

window.addEventListener("mousemove", debounceMouseMove);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const parsedData = data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
    console.log(parsedData);
  })
  .catch((error) => console.error("Error fetching data:", error));

const handleSearch = (event) => {
  const query = event.target.value;
  if (query) {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error fetching search results:", error));
  }
};

const debounceSearch = (event) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => handleSearch(event), 500);
};

const searchInput = document.createElement("input");
searchInput.placeholder = "Search for a product...";
searchInput.addEventListener("input", debounceSearch);
document.body.appendChild(searchInput);
