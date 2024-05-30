function Header() {
  return (
    <div>
    
    </div>
  )
}

function ProductsNew() {
  return (
    <div>
      <h1>Products</h1>
      <p>Product Name: <input type="text"></input></p>
      <p>Description: <input type="text"></input></p>
      <p>Price: <input type="text"></input></p>
      <p>Image URL: <input type="text"></input></p>
      <button>Submit</button>
    </div>
  )
}

function ProductsIndex() {
  return (
    <div>
      <h1>All Products</h1>
      <h2>Black Diamond</h2>
      <p>The best diamond.</p>
      <p>$15</p>
      <img src="https://t3.ftcdn.net/jpg/06/06/82/60/360_F_606826072_HUOxeO0FMVrvUp3Iyk0pEd97mfLUUUgM.jpg"></img>
      <br />
      
    </div>
  )
}

function Footer() {
  return (
    <div>
      Copyright 2023
    </div>
  )
}

function Content() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;