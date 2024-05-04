import { browser, $ } from "@wdio/globals";

describe("Test Register", () => {
  it("should appear error validation", async () => {
    await browser.url("https://dashboard.prakerja.go.id/daftar");
    const email = await $("#text");
    const password = await $("#password");
    const confirmPassword = await $("#confirmPassword");
    const checkBox = await $('input[type="checkbox"]');
    const submit = await $('button[type="submit"]');
    const errMsg = await $('small[class="form-message"]');
    await email.setValue("test@test.com");
    await password.setValue("INIpassword123");
    await confirmPassword.setValue("paswordtidaksama");
    await checkBox.click();
    await submit.click();
    await expect(errMsg).toHaveText(expect.stringContaining("Ulangi Password"));
    await browser.pause(3000);
  });
  it.only("should appear error validation 2", async () => {
    await browser.url(
      "https://contributor-accounts.shutterstock.com/users/new"
    );
    await browser.pause(5000);
    const fullName = await $("#full_name");
    const userName = await $("#username");
    const email = await $("#email");
    const password = await $("#password");
    // const captcha = await $("#recaptcha-anchor");
    const submit = await $("#login");
    const errMsg = await $('li[class="parsley-required"]');
    await fullName.setValue("this is full name");
    await userName.setValue("thisisawesome");
    await email.setValue("test@test.com");
    await password.setValue("INIpassword123");
    // await captcha.click();
    await submit.click();
    await expect(errMsg).toHaveText(expect.stringContaining("Please agree"));
    await browser.pause(3000);
  });
});
