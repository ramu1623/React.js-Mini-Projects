import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


// Home Component
function Home() {
  return <h1>🏠 Welcome to Home Page</h1>;
}


// Products List Component
function Products() {
  const items = [
    { id: 1, name: "iPhone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Redmi" },
  ];

  return (
    <div>
      <h1>📦 Products List</h1>

      {items.map(item=>( // single line expression arrow function
        <div>
            <Link to={`/products/${item.id}`}><button>{item.name}</button></Link>
        </div>
      ))}
    </div>
  );
}


// Dynamic Product Details Component
function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <h1>🛒 Product Details</h1>
      <h2>Selected Product ID: {productId}</h2>
    </div>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>❌ 404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        {/* Navigation Buttons */}
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/products">
          <button>Products</button>
        </Link>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
     </div>
    </BrowserRouter>
  );
}

