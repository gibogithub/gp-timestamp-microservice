export async function GET(request, { params }) {
  const { date } = params;
  
  let dateString = Array.isArray(date) ? date[0] : date;
  
  // Handle empty date parameter
  if (!dateString || dateString.trim() === '') {
    const now = new Date();
    const response = {
      unix: now.getTime(),
      utc: now.toUTCString()
    };
    
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Check if it's a Unix timestamp (numbers only)
  let dateObj;
  if (/^\d+$/.test(dateString)) {
    dateObj = new Date(parseInt(dateString));
  } else {
    dateObj = new Date(dateString);
  }
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return new Response(JSON.stringify({ error: "Invalid Date" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Return valid date response
  const response = {
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString()
  };
  
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
