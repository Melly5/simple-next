import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const { pathname } = new URL(request.url);
  console.info(
    "\nMIDDLEWARE REQUEST:",
    request.method,
    request.url,
    pathname,
    new Date()
  );
};
