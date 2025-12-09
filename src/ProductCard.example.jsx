/**
 * EXAMPLE USAGE
 *
 * After refactoring, students should be able to use the component like this:
 */

import ProductCard from './ProductCard.exercise'

function ExampleUsage() {
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product)
    // Add to cart logic here
  }

  const handleWishlist = (product) => {
    console.log('Adding to wishlist:', product)
    // Add to wishlist logic here
  }

  const handleBuyNow = (product) => {
    console.log('Buy now:', product)
    // Direct purchase logic here
  }

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Same card component, different button texts and behaviors */}

      <ProductCard
        name="Laptop"
        price="$999"
        description="High-performance laptop"
        buttonText="Add to Cart"
        onButtonClick={() => handleAddToCart({ name: 'Laptop' })}
      />

      <ProductCard
        name="Mouse"
        price="$29"
        description="Wireless ergonomic mouse"
        buttonText="Add to Wishlist"
        onButtonClick={() => handleWishlist({ name: 'Mouse' })}
      />

      <ProductCard
        name="Keyboard"
        price="$79"
        description="Mechanical gaming keyboard"
        buttonText="Buy Now"
        onButtonClick={() => handleBuyNow({ name: 'Keyboard' })}
      />
    </div>
  )
}

export default ExampleUsage
