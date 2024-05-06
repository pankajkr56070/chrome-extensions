const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd';


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const priceList = document.getElementById('priceList');
    for (const [coin, value] of Object.entries(data)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${coin}: $${value.usd}`;
      priceList.appendChild(listItem);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
