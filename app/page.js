export default function Home() {
  return (
    <main style={{ 
      padding: '10px', 
      maxWidth: '700px', 
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif' 
    }}>
      <h1 style={{ color: '#e5f1f1ff', marginBottom: '2px', textAlign: 'center' }}>
        GP - Timestamp Microservice
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2px', 
        borderRadius: '5px',
        border: '1px solid #dee2e6',
        marginBottom: '2px'
      }}>
        <h2 style={{ color: '#0a0a23', marginBottom: '5px' }}>
          Example Usage:
        </h2>
        
        <div style={{ marginBottom: '2px' }}>
          <code style={{ 
            display: 'block', 
            backgroundColor: '#2d3748', 
            color: 'white', 
            padding: '2px',
            borderRadius: '2px',
            marginBottom: '2px',
            overflowX: 'auto'
          }}>
            <a href="/api/2015-12-25" style={{ color: '#63b3ed', textDecoration: 'none' }}>
              /api/2015-12-25
            </a>
          </code>
          
          <code style={{ 
            display: 'block', 
            backgroundColor: '#2d3748', 
            color: 'white', 
            padding: '5px',
            borderRadius: '5px',
            marginBottom: '5px',
            overflowX: 'auto'
          }}>
            <a href="/api/1451001600000" style={{ color: '#63b3ed', textDecoration: 'none' }}>
              /api/1451001600000
            </a>
          </code>
          
          <code style={{ 
            display: 'block', 
            backgroundColor: '#2d3748', 
            color: 'white', 
            padding: '2px',
            borderRadius: '2px',
            overflowX: 'auto'
          }}>
            <a href="/api" style={{ color: '#63b3ed', textDecoration: 'none' }}>
              /api
            </a>
          </code>
        </div>
        
        <h2 style={{ color: '#0a0a23', marginTop: '2px', marginBottom: '2px' }}>
          Example Output:
        </h2>
        
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: 'white', 
          padding: '2px',
          borderRadius: '2px',
          overflowX: 'auto',
          fontSize: '14px',
          marginBottom: '2px'
        }}>
{`{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}`}
        </pre>
        
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: 'white', 
          padding: '2px',
          borderRadius: '2px',
          overflowX: 'auto',
          fontSize: '14px'
        }}>
{`{
  "error": "Invalid Date"
}`}
        </pre>
      </div>
      
      </main>
  )
}
