import { browser, $ } from "@wdio/globals";

describe("Test Register", () => {
  it("should appear error validation", async () => {
    await browser.url("https://dashboard.prakerja.go.id/daftar");
    const email = await $("#text");
    const password = await $("#password");
    const confirmPassword = await $("#confirmPassword");
    const submit = await $('button[type="submit"]');
    const errMsg = await $('small[class="form-message"]');
    const checkBox = await $('input[type="checkbox"]');
    await email.addValue("test@test.com");
    await password.addValue("INIpassword123");
    await confirmPassword.addValue("paswordtidaksama");
    await checkBox.click();
    await submit.click();
    await expect(errMsg).toHaveText(expect.stringContaining("Ulangi Password"));
    await browser.pause(3000);
  });
});
