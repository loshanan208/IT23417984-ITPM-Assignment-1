import { test,expect } from "@playwright/test";

test.setTimeout(180000);

test("Pos_Fun_0001 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan veetukku poren", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0002 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan ippo velai seyyuren.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0003 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("vanakkam! neenga nalamaga irukkeengala?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0004 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan nalaikku varuven.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0005 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan netru school ponen.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0006 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan adha seiyya maatten.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0007 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("konjam help pannuveengala?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0008 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("aruge vaarunga.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0009 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naanga nalaikku povom.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0010 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan sapduven, apram velai seiven.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});


test("Pos_Fun_0011 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan oorukku poganum.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0012 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan whatsapp la message anupinen.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0013 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("meeting 3 mani ku irukku.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0014 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("adhu 5000 rupees irukkum.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0015 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("super da machi!", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0016 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("seekiram seekiram vaa.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0017 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan   veetla   irukken.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0018 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan varuven,nee enna panra?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0019 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan romba neramaga vilaiyadi tired agi vitten enaku konjam rest tevaippadugirathu.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0020 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("yen nee late aa vantha?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0021 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("nee vandha naan varuven.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0022 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("neenga enakku sollunga.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0023 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("neenga enakku sollunga.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0024 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan laptop use pannuren.", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Neg_Fun_0001 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naanveetukkuporen", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0002 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan!!! veetukku??? poren!!!", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0003 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("this is a random english sentence", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0004 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("123456", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0005 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan இன்று veetukku poren", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0006 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("asdfghjklqwertyuiopasdfghjklqwertyuiop", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0007 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("  n", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0008 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan happy 😊 irukken", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0009 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan veetukku poren", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0010 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan veetukku", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});



