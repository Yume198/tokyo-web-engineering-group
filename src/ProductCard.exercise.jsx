import { useState } from 'react'

/**
 * REFACTORING EXERCISE
 *
 * This component has several problems:
 * 1. The button text is hardcoded to "Add to Cart"
 * 2. The button's onClick behavior is hardcoded to show an alert
 * 3. The Card and Button are tightly coupled - you can't reuse them separately
 *
 * YOUR TASK:
 * Refactor this component to make it more flexible and reusable by:
 * - Accepting the button text as a prop
 * - Accepting the onClick handler as a prop
 * - Making the button behavior customizable
 * - BONUS: Separate the Card and Button into reusable components
 *
 * REQUIREMENTS:
 * - After refactoring, you should be able to use this card with different button texts
 * - After refactoring, you should be able to use this card with different click handlers
 * - The card should still display product information (name, price, description)
 */

function ProductCard() {
  const [isAdded, setIsAdded] = useState(false)

  // Everything is hardcoded!
  const productName = "Awesome Product"
  const productPrice = "$99.99"
  const productDescription = "This is an amazing product that you'll love!"

  // The button click behavior is hardcoded
  const handleClick = () => {
    setIsAdded(true)
    alert('Added to cart!')
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{productName}</h2>
      <p style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#2563eb',
        margin: '10px 0'
      }}>
        {productPrice}
      </p>
      <p style={{ color: '#666', margin: '10px 0' }}>
        {productDescription}
      </p>

      {/* Button is hardcoded with fixed text and behavior */}
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isAdded ? '#10b981' : '#2563eb',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        {/* Button text is hardcoded! */}
        {isAdded ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
