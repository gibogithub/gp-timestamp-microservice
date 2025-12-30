export default function Home() {
  return (
    <main style={{ 
      padding: '50px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif' 
    }}>
      <h1 style={{ color: '#1a1a2e', marginBottom: '20px' }}>
        GP - Timestamp Microservice
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '25px', 
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#0a0a23', marginBottom: '15px' }}>
          Example Usage:
        </h2>
        
        <div style={{ marginBottom: '20px' }}>
          <code style={{ 
            display: 'block', 
            backgroundColor: '#2d3748', 
            color: 'white', 
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '10px',
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
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '10px',
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
            padding: '15px',
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
            <a href="/api" style={{ color: '#63b3ed', textDecoration: 'none' }}>
              /api
            </a>
          </code>
        </div>
        
        <h2 style={{ color: '#0a0a23', marginTop: '25px', marginBottom: '15px' }}>
          Example Output:
        </h2>
        
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: 'white', 
          padding: '15px',
          borderRadius: '5px',
          overflowX: 'auto',
          fontSize: '14px',
          marginBottom: '15px'
        }}>
{`{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}`}
        </pre>
        
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: 'white', 
          padding: '15px',
          borderRadius: '5px',
          overflowX: 'auto',
          fontSize: '14px'
        }}>
{`{
  "error": "Invalid Date"
}`}
        </pre>
      </div>
      
      <footer style={{ 
        marginTop: '50px', 
        textAlign: 'center', 
        color: '#6c757d',
        fontSize: '14px'
      }}>
        <p>By: Guilbert Paz</p>
        <p>FreeCodeCamp API Project</p>
      </footer>
    </main>
  )
}
