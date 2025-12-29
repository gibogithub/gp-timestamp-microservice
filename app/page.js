export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>GP Timestamp Microservice</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Example Usage:</h2>
        <div style={{ lineHeight: '1.8' }}>
          <div>
            <a href="/api/2025-12-30" style={{ color: '#00ccc5ff' }}>
              [Timestamp url]/api/2025-12-30
            </a>
          </div>
          <div>
            <a href="/api/767043200000" style={{ color: '#00cc41ff' }}>
              [Timestamp url]/api/767043200000
            </a>
          </div>
        </div>
      </div>
      
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Example Output:</h2>
        <pre style={{ 
          background: '#f4f4f4', 
          padding: '15px', 
          borderRadius: '5px',
          overflowX: 'auto',
          color: '#333'  /* ← Changed font color to dark gray for better readability */
        }}>
{`{
  "unix": 1767043200000,
  "utc": "Tue, 30 Dec 2025 00:00:00 GMT"
}`}</pre>
      </div>
    </main>
  );
}