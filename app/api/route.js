export async function GET() {
  const now = new Date();
  return Response.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
}
