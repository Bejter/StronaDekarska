import assert from "node:assert/strict";
import { test } from "node:test";
import { contactValidationMessage } from "../src/contactValidation.ts";

test("accepts Polish phone formats, international prefixes and ordinary email addresses", () => {
  for (const value of ["664983540", "664 983 540", "664-983-540", "+48 664 983 540", "0048 664 983 540", "48664983540", "+44 20 7946 0958", "+48 (12) 345-67-89", "jan@example.pl", "jan.kowalski+dom@example.com", "  jan@example.pl  "]) {
    assert.equal(contactValidationMessage(value), "", value);
  }
});

test("rejects empty values, arbitrary text, malformed emails and implausible phones", () => {
  for (const value of ["", "   ", "test", "123", "12345678", "1234567890", "+1234567890123456", "664983540abc", "jan@", "@example.pl", "jan@example", "jan@@example.pl", "jan @example.pl", "jan..x@example.pl", ".jan@example.pl", "jan.@example.pl", "jan@-example.pl", "++48664983540", "+48 (664 983 540", "000000000", "https://example.pl"]) {
    assert.notEqual(contactValidationMessage(value), "", value);
  }
});
