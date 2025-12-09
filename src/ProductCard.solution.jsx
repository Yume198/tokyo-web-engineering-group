/**
 * SOLUTION - Refactored Components
 *
 * This file contains the refactored solution with properly decoupled components.
 * The key improvements:
 * 1. Card component is separate and reusable
 * 2. Button component is separate and reusable
 * 3. All behavior and text is passed via props
 * 4. Components follow Single Responsibility Principle
 */

// Reusable Card component - knows nothing about buttons
function Card({ title, price, description, children }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
      <p style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#2563eb',
        margin: '10px 0'
      }}>
        {price}
      </p>
      <p style={{ color: '#666', margin: '10px 0' }}>
        {description}
      </p>
      {children}
    </div>
  )
}

// Reusable Button component - knows nothing about products
function Button({ onClick, variant = 'primary', children, disabled = false }) {
  const colors = {
    primary: '#2563eb',
    success: '#10b981',
    danger: '#ef4444'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colors[variant],
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        fontSize: '16px',
        fontWeight: 'bold',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {children}
    </button>
  )
}

// Flexible ProductCard that composes Card and Button
function ProductCard({ name, price, description, buttonText, onButtonClick }) {
  return (
    <Card title={name} price={price} description={description}>
      <Button onClick={onButtonClick}>
        {buttonText}
      </Button>
    </Card>
  )
}

export default ProductCard
export { Card, Button }
