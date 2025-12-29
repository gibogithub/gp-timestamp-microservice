export async function GET(request, { params }) {
  const { date = [] } = params;
  const dateParam = date[0];

  let dateObj;

  if (!dateParam) {
    // If no date provided, return current time
    dateObj = new Date();
  } else {
    // Check if it's a Unix timestamp (numeric string)
    const timestamp = parseInt(dateParam);
    if (!isNaN(timestamp)) {
      dateObj = new Date(timestamp);
    } else {
      // Try parsing as a date string
      dateObj = new Date(dateParam);
    }
  }

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return Response.json(
      { error: "Invalid Date" },
      { status: 400 }
    );
  }

  // Format the response
  const response = {
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  };

  return Response.json(response);
}