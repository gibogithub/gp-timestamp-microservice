export async function GET(request, { params }) {
  const { date = [] } = params;
  const dateParam = date[0];

  let dateObj;

  if (!dateParam) {
    dateObj = new Date();
  } else {
    const timestamp = parseInt(dateParam);
    if (!isNaN(timestamp)) {
      dateObj = new Date(timestamp);
    } else {
      dateObj = new Date(dateParam);
    }
  }

  if (isNaN(dateObj.getTime())) {
    return Response.json(
      { error: "Invalid Date" },
      { status: 400 }
    );
  }

  const response = {
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  };

  return Response.json(response);
}