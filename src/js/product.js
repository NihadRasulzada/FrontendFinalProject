function UpdateProductCount(productId, newCount, e) {
  //e.preventDefault();
  console.log('fdslkfsd')
  const url = `http://localhost:3001/products/${productId}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(product => {
      product.cartQuantity = newCount;

      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(`Product ${productId} count updated to ${newCount}`);
    })
    .catch(error => {
      console.error(`Error updating product count: ${error}`);
    });
}