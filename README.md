
---

# Express Products API

This is a simple Express.js API for managing products stored in a database. It provides endpoints to retrieve all products, get a specific product by its ID, and filter products by category and value.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/express-products-api.git
```

2. Install dependencies:

```bash
cd express-products-api
npm install
```

3. Start the server:

```bash
npm start
```

## Usage

### Endpoints

- `GET /ping`: A simple endpoint to check if the server is running. Returns "pong" if the server is up.

- `GET /products`: Retrieves all products from the database.

- `GET /products/:id`: Retrieves a specific product by its ID.

- `GET /products/category/:category/:value`: Filters products by a specific category and value.

### Example Requests

- Retrieve all products:

```http
GET /products
```

- Retrieve a product by ID (replace `{id}` with the actual ID):

```http
GET /products/{id}
```

- Filter products by category and value (replace `{category}` and `{value}` with the actual category and value):

```http
GET /products/category/{category}/{value}
```

```markdown
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




