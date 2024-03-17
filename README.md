# Simple E-commerce API

This is a simple Express.js API for managing a product catalog and a shopping cart.

## Features

- Retrieve all products
- Retrieve a single product by its ID
- Retrieve products based on a specified category and value
- Add a product to the shopping cart
- Remove a product from the shopping cart
- Retrieve the items in the shopping cart along with their total price

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/simple-e-commerce-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd simple-e-commerce-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

### Ping

- **URL**: `/ping`
- **Method**: `GET`
- **Description**: Check if the server is running.

### Get All Products

- **URL**: `/products`
- **Method**: `GET`
- **Description**: Retrieve all products.

### Get Product by ID

- **URL**: `/products/:id`
- **Method**: `GET`
- **Description**: Retrieve a single product by its ID.

### Get Products by Category

- **URL**: `/products/category/:category/:value`
- **Method**: `GET`
- **Description**: Retrieve products based on a specified category and value.

### Get Shopping Cart

- **URL**: `/product/cart`
- **Method**: `GET`
- **Description**: Retrieve the items in the shopping cart along with their total price.

### Add Product to Cart

- **URL**: `/product/cart/add/:id`
- **Method**: `GET`
- **Description**: Add a product to the shopping cart by its ID.

### Remove Product from Cart

- **URL**: `/product/cart/remove/:id`
- **Method**: `GET`
- **Description**: Remove a product from the shopping cart by its ID.

---
## Example GET Requests

You can use the provided `products` array to simulate GET requests to retrieve product information.

### Retrieve All Products

Send a GET request to `/products` to retrieve all products.

```
```http
GET /products
```

Response:

```json
{
  "status": 200,
  "products": [
    { "id": 1, "name": "shirt", "price": 400, "gender": "man", "quantity": 5 },
    { "id": 2, "name": "pant", "price": 200, "gender": "man", "quantity": 10 },
    { "id": 3, "name": "cap", "price": 50, "gender": "unisex", "quantity": 15 },
    { "id": 4, "name": "pant", "price": 600, "gender": "woman", "quantity": 20 }
  ]
}
```

### Retrieve Product by ID

Send a GET request to `/products/{id}` to retrieve a product by its ID.

Replace `{id}` with the ID of the product you want to retrieve.

```http
GET /products/2
```

Response:

```json
{
  "status": 200,
  "product": { "id": 2, "name": "pant", "price": 200, "gender": "man", "quantity": 10 }
}
```

### Filter Products by Gender

Send a GET request to `/products/category/gender/{gender}` to filter products by gender.

Replace `{gender}` with the gender you want to filter by.

```http
GET /products/category/gender/man
```

Response:

```json
{
  "status": 200,
  "products": [
    { "id": 1, "name": "shirt", "price": 400, "gender": "man", "quantity": 5 },
    { "id": 2, "name": "pant", "price": 200, "gender": "man", "quantity": 10 }
  ]
}
```
Certainly! Here's an extension of the README.md file with examples for the cart functions:

## Example Cart Operations

You can use the provided endpoints to simulate cart operations.

### Retrieve Cart

Send a GET request to `/product/cart` to retrieve the items in the shopping cart along with their total price.

```http
GET /product/cart
```

Response:

```json
{
  "status": 200,
  "Total Price": 600,
  "cart items": [
    { "id": 1, "name": "shirt", "price": 400, "gender": "man", "quantity": 5 },
    { "id": 2, "name": "pant", "price": 200, "gender": "man", "quantity": 10 }
  ]
}
```

### Add Product to Cart

Send a GET request to `/product/cart/add/{id}` to add a product to the shopping cart by its ID.

Replace `{id}` with the ID of the product you want to add to the cart.

```http
GET /product/cart/add/3
```

Response:

```json
{
  "status": 200,
  "message": "Product added"
}
```

### Remove Product from Cart

Send a GET request to `/product/cart/remove/{id}` to remove a product from the shopping cart by its ID.

Replace `{id}` with the ID of the product you want to remove from the cart.

```http
GET /product/cart/remove/1
```

Response:

```json
{
  "status": 200,
  "message": "Product Removed from cart"
}
```

---





