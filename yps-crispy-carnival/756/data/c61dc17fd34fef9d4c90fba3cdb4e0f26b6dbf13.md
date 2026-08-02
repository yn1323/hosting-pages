# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenarios/open-recruitment-added-staff-notification.test.ts >> 募集中の追加スタッフ通知 >> LINE follow時に募集中シフトの希望提出リンクが発行される
- Location: e2e/scenarios/open-recruitment-added-staff-notification.test.ts:124:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /提出|更新/ }).or(getByText('締切を過ぎたため変更できません', { exact: true })).or(getByRole('heading', { name: /このリンクでは提出できません|このシフト募集は削除されました|このシフト募集の提出受付は終了しました/ })).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('button', { name: /提出|更新/ }).or(getByText('締切を過ぎたため変更できません', { exact: true })).or(getByRole('heading', { name: /このリンクでは提出できません|このシフト募集は削除されました|このシフト募集の提出受付は終了しました/ })).first()

```

```yaml
- region "Notifications, top (alt+T)"
- status:
  - img "シフトリ"
  - paragraph: Loading...
```

# Test source

```ts
  1   | import { expect, type Page } from "@playwright/test";
  2   | 
  3   | const STAFF_SUBMIT_DATA_TIMEOUT = 20_000;
  4   | const LEGAL_CONSENT_GUIDANCE = /初めて提出するときや、規約に大きな変更があったとき/;
  5   | 
  6   | export class StaffSubmitPage {
  7   |   constructor(private page: Page) {}
  8   | 
  9   |   async goto(token: string) {
  10  |     await this.page.goto(`/shifts/submit?token=${token}`, { waitUntil: "domcontentloaded" });
  11  |     await expect(this.page).toHaveURL(
  12  |       (url) => url.pathname === "/shifts/submit" && url.searchParams.get("token") === token,
  13  |       {
  14  |         timeout: STAFF_SUBMIT_DATA_TIMEOUT,
  15  |       },
  16  |     );
  17  |     const loadedState = this.submitButton()
  18  |       .or(this.page.getByText("締切を過ぎたため変更できません", { exact: true }))
  19  |       .or(
  20  |         this.page.getByRole("heading", {
  21  |           name: /このリンクでは提出できません|このシフト募集は削除されました|このシフト募集の提出受付は終了しました/,
  22  |         }),
  23  |       )
  24  |       .first();
> 25  |     await expect(loadedState).toBeVisible({ timeout: STAFF_SUBMIT_DATA_TIMEOUT });
      |                               ^ Error: expect(locator).toBeVisible() failed
  26  |   }
  27  | 
  28  |   async expectFormVisible() {
  29  |     await expect(this.submitButton()).toBeVisible({
  30  |       timeout: STAFF_SUBMIT_DATA_TIMEOUT,
  31  |     });
  32  |   }
  33  | 
  34  |   async expectUnsubmittedBadge() {
  35  |     await expect(this.page.getByRole("button", { name: /提出する|希望シフトを提出/ })).toBeVisible({
  36  |       timeout: STAFF_SUBMIT_DATA_TIMEOUT,
  37  |     });
  38  |   }
  39  | 
  40  |   async expectSubmittedBadge() {
  41  |     await expect(this.page.getByRole("button", { name: /修正して提出する|希望シフトを更新/ })).toBeVisible({
  42  |       timeout: STAFF_SUBMIT_DATA_TIMEOUT,
  43  |     });
  44  |   }
  45  | 
  46  |   async expectCompletionVisible() {
  47  |     await expect(this.page).toHaveURL(/\/shifts\/submit\/completed(?:\?.*)?$/);
  48  |     await expect(this.page.getByText("提出が完了しました")).toBeVisible();
  49  |   }
  50  | 
  51  |   async expectReadOnlyVisible() {
  52  |     await expect(this.page.getByText("締切を過ぎたため変更できません")).toBeVisible();
  53  |   }
  54  | 
  55  |   async expectExpiredVisible() {
  56  |     await expect(this.page.getByText(/提出締切を過ぎています|提出締切を過ぎました/)).toBeVisible();
  57  |   }
  58  | 
  59  |   async expectUnavailableVisible() {
  60  |     await expect(this.page.getByRole("heading", { name: "このリンクでは提出できません" })).toBeVisible({
  61  |       timeout: STAFF_SUBMIT_DATA_TIMEOUT,
  62  |     });
  63  |   }
  64  | 
  65  |   async expectSubmitButtonNotVisible() {
  66  |     await expect(this.submitButton()).not.toBeVisible();
  67  |   }
  68  | 
  69  |   async expectLegalConsentVisible() {
  70  |     await expect(this.page.getByText(LEGAL_CONSENT_GUIDANCE)).toBeVisible();
  71  |     await expect(this.legalConsentCheckbox()).toBeVisible();
  72  |   }
  73  | 
  74  |   async expectLegalConsentNotVisible() {
  75  |     await expect(this.page.getByText(LEGAL_CONSENT_GUIDANCE)).not.toBeVisible();
  76  |     await expect(this.legalConsentCheckbox()).not.toBeVisible();
  77  |   }
  78  | 
  79  |   async acceptLegalConsent() {
  80  |     await this.page.locator("[data-scope='checkbox'][data-part='control']").click();
  81  |   }
  82  | 
  83  |   async toggleDay(dateText: string) {
  84  |     // 日付カード全体がトグル操作の対象。テキストから親へ上がり、表示文言変更にPOMを追随させる。
  85  |     const dateEl = this.page.getByText(dateText, { exact: true });
  86  |     await dateEl.locator("..").click();
  87  |   }
  88  | 
  89  |   async clearDay(dateText: string) {
  90  |     // 休み戻しボタンは同じ日付行に閉じて探す。別日の同名ボタンを押さないためのスコープ。
  91  |     await this.page
  92  |       .getByText(dateText, { exact: true })
  93  |       .locator("..")
  94  |       .getByRole("button", { name: "休みに戻す" })
  95  |       .click();
  96  |   }
  97  | 
  98  |   async submit() {
  99  |     await this.submitButton().click();
  100 |   }
  101 | 
  102 |   async expectLateInitialConfirmVisible() {
  103 |     const dialog = this.page.getByRole("dialog");
  104 |     await expect(dialog.getByRole("heading", { name: "提出締切を過ぎています" })).toBeVisible();
  105 |     await expect(
  106 |       dialog.getByText(
  107 |         /提出締切を過ぎています。\s*提出後は、このリンクから変更できません。\s*変更が必要な場合は、シフト作成担当者に連絡してください。/,
  108 |       ),
  109 |     ).toBeVisible();
  110 |   }
  111 | 
  112 |   async confirmLateInitialSubmit() {
  113 |     await this.page.getByRole("dialog").getByRole("button", { name: "この内容で提出する" }).click();
  114 |   }
  115 | 
  116 |   async expectDayWorking(dateText: string) {
  117 |     const row = this.page.getByText(dateText, { exact: true }).locator("..");
  118 |     await expect(row.getByText("〜")).toBeVisible();
  119 |   }
  120 | 
  121 |   async expectDateWorking(dateText: string) {
  122 |     const row = this.dateRow(dateText);
  123 |     await expect(row.getByText("出勤希望")).toBeVisible();
  124 |   }
  125 | 
```