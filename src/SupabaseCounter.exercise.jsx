import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  'https://sjlevkexmwpvhgzbpplc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbGV2a2V4bXdwdmhnemJwcGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTAzODQsImV4cCI6MjA4MDgyNjM4NH0.8M6U2cmGSq2bOW_XCJyeilP_jEghOgpKQuoZypa745Q'
)

function SupabaseCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    // Fetch initial value
    supabase.from('counter').select('value').eq('id', 1).single()
      .then(({ data }) => setCount(data.value))

    // Subscribe to realtime changes
    const channel = supabase
      .channel('counter')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'counter',
        filter: 'id=eq.1'
      },
        (payload) => {
          console.log('Realtime update:', payload.new.value)
          setCount(payload.new.value)
        }
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [])

  const increment = () => {
    if (count === null) return
    supabase.from('counter').update({ value: count + 1 }).eq('id', 1)
      .then(({ error }) => error && console.error(error))
    // Note: we don't setCount here - realtime does it
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '20px'
    }}>
      <h1 style={{ fontSize: '48px', margin: 0 }}>
        Count: {count ?? '...'}
      </h1>
      <button
        onClick={increment}
        disabled={count === null}
        style={{
          fontSize: '24px',
          padding: '16px',
          backgroundColor: count === null ? '#ccc' : '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        +1
      </button>
    </div>
  )
}

export default SupabaseCounter
