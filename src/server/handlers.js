import { rest } from "msw";

export function handlers() {
  return [rest.get("/api/me", getMe)];
}

const getMe = (req, res, ctx) => {
  const value = req.url.searchParams.get("value");
  return res(
    ctx.status(200),
    ctx.json({
      message: value,
    })
  );
};
