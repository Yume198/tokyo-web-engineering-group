import { useState } from 'react'
import ProductCard from './ProductCard.exercise'
import SupabaseCounter from './SupabaseCounter.exercise'
import RefactoredProductCard from './ProductCard.solution'

function App() {
  const [currentExercise, setCurrentExercise] = useState('modularity')

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>
          Career Week Exercises
        </h1>
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setCurrentExercise('modularity')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentExercise === 'modularity' ? '#2563eb' : 'white',
              color: currentExercise === 'modularity' ? 'white' : '#333',
              border: '2px solid #2563eb',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Exercise 1: Modularity
          </button>
          <button
            onClick={() => setCurrentExercise('reactivity')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentExercise === 'reactivity' ? '#2563eb' : 'white',
              color: currentExercise === 'reactivity' ? 'white' : '#333',
              border: '2px solid #2563eb',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Exercise 2: Reactivity
          </button>
          <button
            onClick={() => setCurrentExercise('solutions')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentExercise === 'solutions' ? '#10b981' : 'white',
              color: currentExercise === 'solutions' ? 'white' : '#333',
              border: '2px solid #10b981',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Solutions
          </button>
        </div>
      </nav>

      {/* Exercise Content */}
      <div style={{ padding: '0 40px 40px 40px' }}>
        {currentExercise === 'modularity' && (
          <>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>

            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>Your Challenge:</h3>
              <p>The ProductCard component above is tightly coupled. Notice how:</p>
              <ul>
                <li>All three cards are identical (same product, same button text)</li>
                <li>The button text is hardcoded to "Add to Cart"</li>
                <li>The button behavior is hardcoded (shows an alert)</li>
                <li>You cannot reuse the Card or Button separately</li>
              </ul>

              <h3>Refactor it so you can:</h3>
              <ul>
                <li>Display different products with different data</li>
                <li>Use different button texts ("Add to Cart", "Buy Now", "Add to Wishlist")</li>
                <li>Use different button behaviors (different onClick handlers)</li>
                <li>Reuse the Card and Button components independently</li>
              </ul>

              <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
                Hint: Check <code>ProductCard.example.jsx</code> to see what the goal looks like.
                The solution is in <code>ProductCard.solution.jsx</code> (but try it yourself first!)
              </p>
            </div>
          </>
        )}

        {currentExercise === 'reactivity' && (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Exercise 2: Reactivity
            </h2>

            <SupabaseCounter />

            <div style={{
              maxWidth: '800px',
              margin: '40px auto 0',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>What's happening here?</h3>
              <p>This demonstrates the "single source of truth" principle with real-time updates:</p>
              <ul>
                <li><strong>Database is the authority:</strong> Supabase stores the counter value</li>
                <li><strong>Real-time sync:</strong> All clients subscribe to changes</li>
                <li><strong>No local state mutations:</strong> We update the DB, not local state directly</li>
                <li><strong>Automatic propagation:</strong> Changes flow to all connected clients</li>
              </ul>

              <h3>Try it:</h3>
              <ol>
                <li>Open this page in multiple browser tabs</li>
                <li>Click +1 in any tab</li>
                <li>Watch all tabs update automatically</li>
              </ol>

              <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
                Check <code>SupabaseCounter.exercise.jsx</code> to see the implementation.
              </p>
            </div>
          </>
        )}

        {currentExercise === 'solutions' && (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Solutions: Modularity in Action
            </h2>

            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <RefactoredProductCard
                name="Premium Laptop"
                price="$1,299"
                description="High-performance laptop for developers"
                buttonText="Add to Cart"
                onButtonClick={() => alert('Added Premium Laptop to cart!')}
              />
              <RefactoredProductCard
                name="Wireless Mouse"
                price="$49"
                description="Ergonomic wireless mouse with precision tracking"
                buttonText="Buy Now"
                onButtonClick={() => alert('Proceeding to checkout with Wireless Mouse!')}
              />
              <RefactoredProductCard
                name="Mechanical Keyboard"
                price="$159"
                description="Cherry MX switches, RGB backlit"
                buttonText="Add to Wishlist"
                onButtonClick={() => alert('Added Mechanical Keyboard to wishlist!')}
              />
            </div>

            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>What Changed?</h3>
              <p>Compare these cards to Exercise 1. Notice how:</p>
              <ul>
                <li><strong>Different products:</strong> Each card shows unique product data</li>
                <li><strong>Different button texts:</strong> "Add to Cart", "Buy Now", "Add to Wishlist"</li>
                <li><strong>Different behaviors:</strong> Each button triggers a different action</li>
                <li><strong>Reusable components:</strong> Same Card and Button components, different content</li>
              </ul>

              <h3>The Solution Architecture:</h3>
              <ul>
                <li><code>Card</code> component - Knows nothing about buttons, just displays content</li>
                <li><code>Button</code> component - Knows nothing about products, just handles clicks</li>
                <li><code>ProductCard</code> component - Composes Card + Button with props</li>
              </ul>

              <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
                Check <code>ProductCard.solution.jsx</code> to see the full implementation.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
