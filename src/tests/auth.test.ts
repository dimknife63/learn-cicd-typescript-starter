import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when the scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer abc123" })).toBeNull();
  });

  test("returns null when the header is malformed", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the key when the header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });
});
