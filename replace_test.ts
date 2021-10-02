import { replace } from "./replace.ts";
import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";

Deno.test("replace", () => {
  // Basic
  assertEquals(replace("Hello {name}!", { name: "bree" }), "Hello bree!");

  // Basic multiple
  assertEquals(
    replace("Hello {name}! {greeting}", {
      name: "bree",
      greeting: "Welcome to TechCorp.",
    }),
    "Hello bree! Welcome to TechCorp."
  );

  // {} works in patterns
  assertEquals(replace("Hello {{name}}!", { "{name}": "bree" }), "Hello bree!");

  // Keeps the pattern if nothing is specified
  assertEquals(replace("Hello {name}!", {}), "Hello {name}!");

  // Characters are properly escaped
  assertEquals(replace("Hello {[#!)(}!", { "[#!)(": "bree" }), "Hello bree!");

  // Does not nest
  assertEquals(
    replace("Hello {user.name}!", { "user.name": "bree" }),
    "Hello bree!"
  );
});
