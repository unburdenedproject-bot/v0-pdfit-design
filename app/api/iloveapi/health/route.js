export const runtime = "nodejs";

export async function GET() {
  const hasPublic = typeof process.env.ILOVEAPI_PUBLIC_KEY === "string" && process.env.ILOVEAPI_PUBLIC_KEY.length > 0;
  const hasSecret = typeof process.env.ILOVEAPI_SECRET_KEY === "string" && process.env.ILOVEAPI_SECRET_KEY.length > 0;

  return Response.json({
    ok: hasPublic && hasSecret,
    hasPublic,
    hasSecret,
  });
}
