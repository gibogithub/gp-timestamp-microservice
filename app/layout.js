import './globals.css';

export const metadata = {
  title: 'GP Timestamp Microservice',
  description: 'A timestamp microservice by Guilbert Paz',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ textAlign: 'center', marginTop: '5px', color: '#aaa' }}>
          <p>FreeCodeCamp API Project</p>
          <p>By Guilbert Paz</p>
        </footer>
      </body>
    </html>
  );
}