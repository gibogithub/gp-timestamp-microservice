export async function GET(request, { params }) {
  const dateString = params.date;
  
  // Parse the date
  let dateObj;
  if (/^\d+$/.test(dateString)) {
    // It's a Unix timestamp
    dateObj = new Date(parseInt(dateString));
  } else {
    // Try to parse as date string
    dateObj = new Date(dateString);
  }
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return Response.json(
      { error: "Invalid Date" },
      { status: 200 }
    );
  }
  
  // Return valid date
  return Response.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString()
  });
}
