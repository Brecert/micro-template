import { replace } from "./replace.ts";
import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";

Deno.test("replace", () => {
  // Basic
  assertEquals(replace("Hello {name}!", { name: "bree" }), "Hello bree!");
  
  // {} works in patterns
  assertEquals(replace("Hello {{name}}!", { '{name}': "bree" }), "Hello bree!");
  
  // Keeps the pattern if nothing is specified
  assertEquals(replace("Hello {name}!", {}), "Hello {name}!");
  
  // Characters are properly escaped
  assertEquals(replace("Hello {[#!)(}!", { '[#!)(': 'bree' }), "Hello bree!");

  // Does not nest
  assertEquals(replace("Hello {user.name}!", { 'user.name': 'bree' }), "Hello bree!");
});
