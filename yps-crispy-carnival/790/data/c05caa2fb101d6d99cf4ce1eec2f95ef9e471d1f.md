# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenarios/manager-settings.test.ts >> 管理者設定 >> [E2E-MANAGER-01] 既存スタッフを招待し再読込後に取り消して組織設定へ戻る
- Location: e2e/scenarios/manager-settings.test.ts:15:3

# Error details

```
TimeoutError: locator.check: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('radio', { name: '管理者候補スタッフを選択', exact: true })
    - locator resolved to <input type="radio" name="_r_8_" data-ownedby="radio-group:_r_8_" value="pd770w9x1b7zg467qr1neaqsc98ccym7" id="radio-group:_r_8_:radio:input:pd770w9x1b7zg467qr1neaqsc98ccym7" aria-labelledby="radio-group:_r_8_:radio:label:pd770w9x1b7zg467qr1neaqsc98ccym7"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1gdu0uk" data-state="unchecked">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1gdu0uk" data-state="unchecked">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="css-1gdu0uk" data-state="unchecked">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from "@playwright/test";
  2   | import { expectAppHydrated } from "../helpers/appReadiness";
  3   | import type { ManagerSettingsScenarioSeed } from "../helpers/managerSettingsScenario";
  4   | 
  5   | const MANAGER_SETTINGS_TIMEOUT = 20_000;
  6   | 
  7   | export class ManagerSettingsPage {
  8   |   constructor(private page: Page) {}
  9   | 
  10  |   async openFromOrganizationSettings(seed: ManagerSettingsScenarioSeed) {
  11  |     await this.page.goto(`/settings?shop=${encodeURIComponent(seed.shopId)}`, {
  12  |       waitUntil: "domcontentloaded",
  13  |     });
  14  |     await expectAppHydrated(this.page);
  15  |     await expect(this.page.getByRole("tab", { name: "スタッフ", exact: true })).toHaveAttribute(
  16  |       "aria-selected",
  17  |       "true",
  18  |       { timeout: MANAGER_SETTINGS_TIMEOUT },
  19  |     );
  20  | 
  21  |     await this.page.getByRole("button", { name: "管理者を変更", exact: true }).click();
  22  |     await this.expectMainPage(seed.shopId);
  23  |   }
  24  | 
  25  |   async inviteExistingStaff(seed: ManagerSettingsScenarioSeed) {
  26  |     await this.page
  27  |       .getByRole("link", {
  28  |         name: "既存スタッフを管理者として招待",
  29  |         exact: true,
  30  |       })
  31  |       .click();
  32  |     await expect(this.page).toHaveURL(
  33  |       (url) => url.pathname === "/settings/managers/invite-staff" && url.searchParams.get("shop") === seed.shopId,
  34  |       { timeout: MANAGER_SETTINGS_TIMEOUT },
  35  |     );
  36  | 
  37  |     const candidate = this.page.getByRole("radio", {
  38  |       name: `${seed.candidateName}を選択`,
  39  |       exact: true,
  40  |     });
  41  |     await expect(candidate).not.toBeChecked({ timeout: MANAGER_SETTINGS_TIMEOUT });
> 42  |     await candidate.check();
      |                     ^ TimeoutError: locator.check: Timeout 10000ms exceeded.
  43  |     await expect(candidate).toBeChecked();
  44  | 
  45  |     await this.page.getByRole("button", { name: "管理者として招待する", exact: true }).click();
  46  |     const confirmation = this.page.getByRole("alertdialog", {
  47  |       name: `${seed.candidateName}さんを招待しますか？`,
  48  |       exact: true,
  49  |     });
  50  |     await expect(confirmation).toBeVisible({ timeout: MANAGER_SETTINGS_TIMEOUT });
  51  |     await expect(confirmation.getByText(seed.candidateEmail, { exact: false })).toBeVisible();
  52  |     await confirmation.getByRole("button", { name: "招待する", exact: true }).click();
  53  | 
  54  |     await expect(this.page.getByText("送信を受け付けました", { exact: true })).toBeVisible({
  55  |       timeout: MANAGER_SETTINGS_TIMEOUT,
  56  |     });
  57  |     await this.expectMainPage(seed.shopId);
  58  |     await this.expectInvitationPending(seed);
  59  |   }
  60  | 
  61  |   async reloadAndExpectInvitationPending(seed: ManagerSettingsScenarioSeed) {
  62  |     await this.page.reload({ waitUntil: "domcontentloaded" });
  63  |     await expectAppHydrated(this.page);
  64  |     await this.expectMainPage(seed.shopId);
  65  |     await this.expectInvitationPending(seed);
  66  |   }
  67  | 
  68  |   async revokeInvitation(seed: ManagerSettingsScenarioSeed) {
  69  |     await this.invitationRow(seed).getByRole("button", { name: "取り消す", exact: true }).click();
  70  | 
  71  |     const confirmation = this.page.getByRole("alertdialog", {
  72  |       name: "管理者招待を取り消しますか？",
  73  |       exact: true,
  74  |     });
  75  |     await expect(confirmation).toBeVisible({ timeout: MANAGER_SETTINGS_TIMEOUT });
  76  |     await expect(
  77  |       confirmation.getByText(`${seed.candidateName}さんへの招待を取り消します。`, { exact: true }),
  78  |     ).toBeVisible();
  79  |     await confirmation.getByRole("button", { name: "招待を取り消す", exact: true }).click();
  80  | 
  81  |     await expect(this.page.getByText("招待を取り消しました", { exact: true })).toBeVisible({
  82  |       timeout: MANAGER_SETTINGS_TIMEOUT,
  83  |     });
  84  |     await expect(this.invitationRow(seed)).toHaveCount(0, { timeout: MANAGER_SETTINGS_TIMEOUT });
  85  |   }
  86  | 
  87  |   async returnToOrganizationStaff(seed: ManagerSettingsScenarioSeed) {
  88  |     await this.page.getByRole("button", { name: "組織設定へ戻る", exact: true }).click();
  89  |     await expect(this.page).toHaveURL(
  90  |       (url) =>
  91  |         url.pathname === "/settings" &&
  92  |         url.searchParams.get("shop") === seed.shopId &&
  93  |         url.searchParams.get("tab") === null,
  94  |       { timeout: MANAGER_SETTINGS_TIMEOUT },
  95  |     );
  96  |     await expect(this.page.getByRole("tab", { name: "スタッフ", exact: true })).toHaveAttribute(
  97  |       "aria-selected",
  98  |       "true",
  99  |       { timeout: MANAGER_SETTINGS_TIMEOUT },
  100 |     );
  101 |   }
  102 | 
  103 |   private async expectMainPage(shopId: string) {
  104 |     await expect(this.page).toHaveURL(
  105 |       (url) => url.pathname === "/settings/managers" && url.searchParams.get("shop") === shopId,
  106 |       { timeout: MANAGER_SETTINGS_TIMEOUT },
  107 |     );
  108 |     await expect(
  109 |       this.page.getByRole("button", { name: "組織設定へ戻る", exact: true }).getByText("管理者設定", {
  110 |         exact: true,
  111 |       }),
  112 |     ).toBeVisible({ timeout: MANAGER_SETTINGS_TIMEOUT });
  113 |   }
  114 | 
  115 |   private async expectInvitationPending(seed: ManagerSettingsScenarioSeed) {
  116 |     const invitation = this.invitationRow(seed);
  117 |     await expect(invitation).toBeVisible({ timeout: MANAGER_SETTINGS_TIMEOUT });
  118 |     await expect(invitation.getByText(seed.candidateName, { exact: true })).toBeVisible();
  119 |     await expect(invitation.getByText("招待中", { exact: true })).toBeVisible();
  120 |   }
  121 | 
  122 |   private invitationRow(seed: ManagerSettingsScenarioSeed): Locator {
  123 |     return this.page
  124 |       .getByRole("region", { name: "送信済みの管理者招待", exact: true })
  125 |       .getByRole("article")
  126 |       .filter({ hasText: seed.candidateEmail });
  127 |   }
  128 | }
  129 | 
```