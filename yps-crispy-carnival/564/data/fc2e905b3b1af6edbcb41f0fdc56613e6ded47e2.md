# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenarios/dashboard-pagination.test.ts >> ダッシュボードの一覧表示 >> シフト一覧とスタッフ一覧が期待件数で表示される
- Location: e2e/scenarios/dashboard-pagination.test.ts:14:3

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('region', { name: 'シフト一覧' }).getByRole('button', { name: /回収状況を見る|シフトを組む|シフトを見る/ })
Expected: 8
Received: 0
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for getByRole('region', { name: 'シフト一覧' }).getByRole('button', { name: /回収状況を見る|シフトを組む|シフトを見る/ })
    6 × locator resolved to 0 elements
      - unexpected value "0"
    23 × locator resolved to 1 element
       - unexpected value "1"
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - link "シフトリのトップページへ" [ref=e7] [cursor=pointer]:
          - /url: /
          - generic [ref=e8]:
            - img "シフトリ" [ref=e9]
            - paragraph [ref=e10]: シフトリ
        - button "ユーザーメニュー" [ref=e11] [cursor=pointer]:
          - img [ref=e13]
          - paragraph [ref=e16]: 田中太郎
          - img [ref=e17]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - paragraph [ref=e26]: 店舗
        - generic [ref=e27]:
          - heading "法務同意テスト店舗" [level=1] [ref=e29]
          - button "店舗設定を編集" [ref=e30] [cursor=pointer]: 編集
      - region "シフトリへようこそ！" [ref=e31]:
        - generic [ref=e32]:
          - img [ref=e34]
          - heading "シフトリへようこそ！" [level=2] [ref=e36]
        - generic [ref=e37]:
          - button "シフトリへようこそを閉じる" [ref=e38] [cursor=pointer]:
            - img [ref=e39]
          - generic [ref=e42]:
            - paragraph [ref=e44]: 1/4
            - generic [ref=e45]:
              - generic [ref=e47]:
                - paragraph [ref=e48]: シフト作成から提出までの流れを体験しましょう
                - paragraph [ref=e49]: 期間を決めてシフトを募集してみましょう。（作成したシフトはあとで削除可能です）
              - button "ガイド" [ref=e51] [cursor=pointer]:
                - img [ref=e52]
                - text: ガイド
      - region "シフト一覧" [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e59]:
            - img [ref=e61]
            - heading "シフト一覧" [level=2] [ref=e63]
          - button "新しい募集をつくる" [ref=e64] [cursor=pointer]:
            - img [ref=e65]
            - text: 新しい募集をつくる
        - generic [ref=e67]:
          - img [ref=e69]
          - generic [ref=e72]:
            - heading "シフト一覧はまだありません" [level=2] [ref=e73]
            - paragraph [ref=e74]: 期間と締切を決めて、スタッフに希望を聞きましょう。
          - button "はじめてのシフトを作成する" [ref=e75] [cursor=pointer]:
            - img [ref=e76]
            - text: はじめてのシフトを作成する
      - region "スタッフ一覧" [ref=e77]:
        - generic [ref=e78]:
          - generic [ref=e80]:
            - img [ref=e82]
            - heading "スタッフ一覧" [level=2] [ref=e87]
          - button "スタッフを招待" [ref=e89] [cursor=pointer]:
            - img [ref=e90]
            - text: スタッフを招待
        - paragraph [ref=e91]: 募集作成・シフト確定時にスタッフへ通知します。届かない場合はスタッフ右のメニューから再送できます。
        - article "田中太郎のスタッフ情報" [ref=e94]:
          - generic [ref=e95]: 田
          - generic [ref=e96]:
            - generic [ref=e97]:
              - paragraph [ref=e98]: 田中太郎
              - generic [ref=e99]: 管理者
            - paragraph [ref=e100]: tanaka@example.com
          - button "スタッフの操作メニュー" [ref=e101] [cursor=pointer]:
            - img [ref=e102]
  - region "Notifications, top (alt+T)"
```

# Test source

```ts
  303 |     const alertDialog = this.page.getByRole("alertdialog", { name: "スタッフ申請を却下" });
  304 |     await expect(alertDialog).toBeVisible();
  305 |     await alertDialog.getByRole("button", { name: "この申請を却下" }).click();
  306 | 
  307 |     await expect(this.page.getByText("スタッフ申請を却下しました")).toBeVisible();
  308 |     await expect(dialog).not.toBeVisible();
  309 |   }
  310 | 
  311 |   private recruitmentOpenButton() {
  312 |     return this.recruitmentSection().getByRole("button", { name: SHIFT_BOARD_OPEN_BUTTON_NAME });
  313 |   }
  314 | 
  315 |   private shiftBoardOpenButton() {
  316 |     return this.recruitmentOpenButton()
  317 |       .or(this.currentShiftSection().getByRole("button", { name: SHIFT_BOARD_OPEN_BUTTON_NAME }))
  318 |       .or(this.page.getByRole("button", { name: /回収状況を見る|シフトを組む/ }));
  319 |   }
  320 | 
  321 |   async editShopSettings(data: {
  322 |     shopName?: string;
  323 |     shiftStartTime?: string;
  324 |     shiftEndTime?: string;
  325 |     submissionPattern?: SubmissionPatternEdit;
  326 |     regularClosedDays?: RegularClosedDay[];
  327 |   }) {
  328 |     await this.page.getByRole("button", { name: "店舗設定を編集" }).click({ noWaitAfter: true });
  329 |     const dialog = this.page.getByRole("dialog", { name: "店舗設定" });
  330 |     await expect(dialog).toBeVisible();
  331 | 
  332 |     if (data.shopName !== undefined) {
  333 |       const nameInput = dialog.getByLabel(/店舗名|お店の名前/);
  334 |       await nameInput.clear();
  335 |       await nameInput.fill(data.shopName);
  336 |     }
  337 | 
  338 |     await dialog.getByRole("button", { name: "次へ" }).click();
  339 | 
  340 |     const legacyTimePattern =
  341 |       data.shiftStartTime !== undefined || data.shiftEndTime !== undefined
  342 |         ? {
  343 |             kind: "time" as const,
  344 |             startTime: data.shiftStartTime ?? "09:00",
  345 |             endTime: data.shiftEndTime ?? "22:00",
  346 |           }
  347 |         : undefined;
  348 |     const submissionPattern = data.submissionPattern ?? legacyTimePattern;
  349 |     if (submissionPattern) {
  350 |       const patternLabel =
  351 |         submissionPattern.kind === "dateOnly"
  352 |           ? "日付のみ"
  353 |           : submissionPattern.kind === "shiftType"
  354 |             ? "勤務区分から選ぶ"
  355 |             : "時間を自由に設定";
  356 |       await dialog.getByRole("button", { name: new RegExp(patternLabel) }).click();
  357 |     }
  358 |     await dialog.getByRole("button", { name: "次へ" }).click();
  359 | 
  360 |     if (submissionPattern?.kind === "time") {
  361 |       await this.selectTime("シフト開始時間", submissionPattern.startTime);
  362 |       await this.selectTime("シフト終了時間", submissionPattern.endTime);
  363 |     } else if (submissionPattern?.kind === "shiftType") {
  364 |       await this.configureShiftTypeOptions(dialog, submissionPattern.options);
  365 |     }
  366 | 
  367 |     await dialog.getByRole("button", { name: "次へ" }).click();
  368 | 
  369 |     if (data.regularClosedDays) {
  370 |       await this.setRegularClosedDays(dialog, data.regularClosedDays);
  371 |     }
  372 | 
  373 |     await dialog.getByRole("button", { name: /保存する|変更を保存/ }).click();
  374 |     await expect(this.page.getByText("店舗設定を更新しました")).toBeVisible();
  375 |   }
  376 | 
  377 |   async expectShopName(name: string) {
  378 |     await expect(this.page.getByText(name)).toBeVisible();
  379 |   }
  380 | 
  381 |   async expectShopTimeRange(timeRange: string) {
  382 |     const [startTime, endTime] = timeRange.split("〜");
  383 |     if (!startTime || !endTime) throw new Error(`Invalid time range: ${timeRange}`);
  384 | 
  385 |     await this.page.getByRole("button", { name: "店舗設定を編集" }).click({ noWaitAfter: true });
  386 |     const dialog = this.page.getByRole("dialog", { name: "店舗設定" });
  387 |     await expect(dialog).toBeVisible();
  388 |     await dialog.getByRole("button", { name: "次へ" }).click();
  389 |     await dialog.getByRole("button", { name: "次へ" }).click();
  390 | 
  391 |     await expect(dialog.getByRole("combobox", { name: "シフト開始時間" })).toContainText(startTime);
  392 |     await expect(dialog.getByRole("combobox", { name: "シフト終了時間" })).toContainText(endTime);
  393 | 
  394 |     await dialog.getByRole("button", { name: "閉じる" }).click();
  395 |     await expect(dialog).not.toBeVisible();
  396 |   }
  397 | 
  398 |   async clickShowAllStaffs() {
  399 |     await this.staffSection().getByRole("button", { name: "もっと見る" }).click();
  400 |   }
  401 | 
  402 |   async expectRecruitmentCardCount(count: number) {
> 403 |     await expect(this.recruitmentOpenButton()).toHaveCount(count, { timeout: DASHBOARD_DATA_TIMEOUT });
      |                                                ^ Error: expect(locator).toHaveCount(expected) failed
  404 |   }
  405 | 
  406 |   async expectStaffRowCount(count: number) {
  407 |     await expect(this.staffSection().getByRole("button", { name: "スタッフの操作メニュー" })).toHaveCount(count);
  408 |   }
  409 | 
  410 |   async expectShowAllStaffsVisible() {
  411 |     await expect(this.staffSection().getByRole("button", { name: "もっと見る" })).toBeVisible();
  412 |   }
  413 | 
  414 |   async expectShowAllStaffsNotVisible() {
  415 |     await expect(this.staffSection().getByRole("button", { name: "もっと見る" })).not.toBeVisible();
  416 |   }
  417 | 
  418 |   private recruitmentSection() {
  419 |     return this.page.getByRole("region", { name: "シフト一覧" });
  420 |   }
  421 | 
  422 |   private currentShiftSection() {
  423 |     return this.page.getByRole("region", { name: "現在のシフト" });
  424 |   }
  425 | 
  426 |   private staffSection() {
  427 |     return this.page.getByRole("region", { name: "スタッフ一覧" });
  428 |   }
  429 | 
  430 |   private staffRegistrationRequestDialog() {
  431 |     return this.page.getByRole("dialog", { name: "スタッフ参加申請" });
  432 |   }
  433 | 
  434 |   private legalReconsentMessage() {
  435 |     return this.page.getByText("利用規約・プライバシーポリシーを更新しました");
  436 |   }
  437 | 
  438 |   private async expectToastVisibleThenHidden(title: string | RegExp) {
  439 |     const toast = this.page.getByText(title).first();
  440 |     await expect(toast).toBeVisible();
  441 |     await expect(toast).not.toBeVisible();
  442 |   }
  443 | 
  444 |   private async openStaffMenu(staffName: string) {
  445 |     const row = this.staffSection().getByRole("article", { name: `${staffName}のスタッフ情報` });
  446 |     await row.getByRole("button", { name: "スタッフの操作メニュー" }).click({ noWaitAfter: true });
  447 |   }
  448 | 
  449 |   // 同名オプションが複数Select間で重複するため、listbox にスコープして選択
  450 |   private async selectTime(label: string, value: string) {
  451 |     await this.selectTimeByIndex(label, value, 0);
  452 |   }
  453 | 
  454 |   private async selectTimeByIndex(label: string, value: string, index: number) {
  455 |     // Chakra Select は同じ時刻 option が複数のlistboxに出るため、開いたcomboboxのラベルでスコープする。
  456 |     await this.page.getByRole("combobox", { name: label }).nth(index).click();
  457 |     await this.page
  458 |       .getByRole("listbox", { name: label })
  459 |       .getByRole("option", { name: value, exact: true })
  460 |       .click({ noWaitAfter: true });
  461 |   }
  462 | 
  463 |   private async configureShiftTypeOptions(
  464 |     dialog: Locator,
  465 |     options: Array<{ name: string; startTime: string; endTime: string }>,
  466 |   ) {
  467 |     while ((await dialog.getByLabel("区分名").count()) < options.length) {
  468 |       await dialog.getByRole("button", { name: "勤務区分を追加" }).click();
  469 |     }
  470 | 
  471 |     for (let index = 0; index < options.length; index++) {
  472 |       const option = options[index];
  473 |       const nameInput = dialog.getByLabel("区分名").nth(index);
  474 |       await nameInput.clear();
  475 |       await nameInput.fill(option.name);
  476 |       await this.selectTimeByIndex("開始", option.startTime, index);
  477 |       await this.selectTimeByIndex("終了", option.endTime, index);
  478 |     }
  479 |   }
  480 | 
  481 |   private async setRegularClosedDays(dialog: Locator, days: RegularClosedDay[]) {
  482 |     const daySet = new Set(days);
  483 |     for (const [day, label] of Object.entries(CLOSED_DAY_LABELS) as Array<[RegularClosedDay, string]>) {
  484 |       const button = dialog.getByRole("button", { name: new RegExp(`^${label}を`) });
  485 |       const isPressed = (await button.getAttribute("aria-pressed")) === "true";
  486 |       if (daySet.has(day) !== isPressed) {
  487 |         await button.click();
  488 |       }
  489 |     }
  490 |   }
  491 | 
  492 |   private async selectCalendarDate(scope: Locator, date: string) {
  493 |     const button = scope.getByRole("button", {
  494 |       name: new RegExp(`^Choose ${escapeRegExp(formatCalendarAriaDate(date))}$`),
  495 |     });
  496 |     await expect(button).toBeVisible();
  497 |     await button.click();
  498 |   }
  499 | }
  500 | 
  501 | function formatCalendarAriaDate(date: string) {
  502 |   const [year, month, day] = date.split("-").map(Number);
  503 |   const weekday = JAPANESE_WEEKDAYS[new Date(year, month - 1, day).getDay()];
```