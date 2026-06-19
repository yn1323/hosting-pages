# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenarios/open-recruitment-added-staff-notification.test.ts >> 募集中の追加スタッフ通知 >> 募集中にスタッフを追加すると、そのスタッフの希望提出リンクが発行される
- Location: e2e/scenarios/open-recruitment-added-staff-notification.test.ts:27:3

# Error details

```
Error: Command failed: npx convex run --no-push testing:getLatestMagicLinkToken {"recruitmentId":"ks72wx63tcbnecc9sdk357zzzx88yavm","shopId":"nh72x580hs0xjhw4ezq0b0zwv588zmbh","staffEmail":"added-staff@example.com","purpose":"submit"} --preview-name pr-545-e2e
✖ Failed to run function "testing:getLatestMagicLinkToken":
Error: [Request ID: e37df4fea0bae77e] Server Error
Could not find function for 'testing:getLatestMagicLinkToken'. Did you forget to run `npx convex dev`?

No functions found.

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - heading "追加通知テスト店舗" [level=1] [ref=e29]
          - button "店舗設定を編集" [ref=e30] [cursor=pointer]: 編集
      - region "シフトリへようこそ！" [ref=e31]:
        - generic [ref=e32]:
          - img [ref=e34]
          - heading "シフトリへようこそ！" [level=2] [ref=e36]
        - generic [ref=e37]:
          - button "シフトリへようこそを閉じる" [ref=e38] [cursor=pointer]:
            - img [ref=e39]
          - generic [ref=e42]:
            - paragraph [ref=e44]: 2/4
            - generic [ref=e47]:
              - paragraph [ref=e48]: 希望シフトを提出してみましょう
              - paragraph [ref=e49]: 登録したメールに届いたリンクからシフトを提出してみましょう。
      - region "シフト一覧" [ref=e50]:
        - generic [ref=e51]:
          - generic [ref=e53]:
            - img [ref=e55]
            - heading "シフト一覧" [level=2] [ref=e57]
          - button "新しい募集をつくる" [ref=e58] [cursor=pointer]:
            - img [ref=e59]
            - text: 新しい募集をつくる
        - generic [ref=e61]:
          - button "6/22 〜 6/28のシフトを見る" [ref=e63] [cursor=pointer]:
            - generic [ref=e64]:
              - paragraph [ref=e66]: 6/22 〜 6/28
              - generic [ref=e67]:
                - generic [ref=e69]: 募集中
                - generic [ref=e70]:
                  - generic [ref=e71]:
                    - img [ref=e72]
                    - paragraph [ref=e76]: 締切まで2日
                  - paragraph [ref=e77]: 提出 0/2人
          - button "6/22 〜 6/28の募集操作メニュー" [ref=e79] [cursor=pointer]:
            - img [ref=e80]
      - region "スタッフ一覧" [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e87]:
            - img [ref=e89]
            - heading "スタッフ一覧" [level=2] [ref=e94]
          - button "スタッフを招待" [active] [ref=e96] [cursor=pointer]:
            - img [ref=e97]
            - text: スタッフを招待
        - paragraph [ref=e98]: シフト募集通知が来ない場合、ユーザー右のメニューから再送ください。
        - generic [ref=e100]:
          - article "田中太郎のスタッフ情報" [ref=e101]:
            - generic [ref=e102]: 田
            - generic [ref=e103]:
              - generic [ref=e104]:
                - paragraph [ref=e105]: 田中太郎
                - generic [ref=e106]: 管理者
              - paragraph [ref=e107]: tanaka@example.com
            - button "スタッフの操作メニュー" [ref=e108] [cursor=pointer]:
              - img [ref=e109]
          - article "追加スタッフのスタッフ情報" [ref=e113]:
            - generic [ref=e114]: 追
            - generic [ref=e115]:
              - paragraph [ref=e117]: 追加スタッフ
              - paragraph [ref=e118]: added-staff@example.com
            - button "スタッフの操作メニュー" [ref=e119] [cursor=pointer]:
              - img [ref=e120]
  - region "Notifications, top (alt+T)"
```

# Test source

```ts
  1  | import { execFileSync } from "node:child_process";
  2  | 
  3  | const npmConfigKeysToOmit = new Set([
  4  |   "npm_config_npm_globalconfig",
  5  |   "npm_config_verify_deps_before_run",
  6  |   "npm_config__jsr_registry",
  7  | ]);
  8  | 
  9  | // pnpm 経由の vitest/playwright から npx convex を呼ぶと、一部の npm_config_* が
  10 | // npm 側の未知設定 warning になる。E2Eログを読める状態に保つため、Convex CLI へ渡す環境だけ削る。
  11 | function getNpxEnv() {
  12 |   return Object.fromEntries(
  13 |     Object.entries(process.env).filter(([key]) => !npmConfigKeysToOmit.has(key.toLowerCase())),
  14 |   ) as NodeJS.ProcessEnv;
  15 | }
  16 | 
  17 | function toJson5(value: unknown): string {
  18 |   if (value === null) return "null";
  19 |   if (Array.isArray(value)) return `[${value.map(toJson5).join(",")}]`;
  20 |   if (typeof value === "string") return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  21 |   if (typeof value === "number" || typeof value === "boolean") return String(value);
  22 |   if (typeof value === "object") {
  23 |     return `{${Object.entries(value)
  24 |       .filter(([, v]) => v !== undefined)
  25 |       .map(([k, v]) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : toJson5(k)}:${toJson5(v)}`)
  26 |       .join(",")}}`;
  27 |   }
  28 |   throw new Error(`Unsupported Convex argument value: ${String(value)}`);
  29 | }
  30 | 
  31 | export function convexRun(fn: string, args: Record<string, unknown> = {}): string {
  32 |   const cliArgs = ["convex", "run", "--no-push", fn];
  33 |   if (Object.keys(args).length > 0) {
  34 |     cliArgs.push(process.platform === "win32" ? toJson5(args) : JSON.stringify(args));
  35 |   }
  36 |   if (process.env.CONVEX_PREVIEW_NAME) {
  37 |     // CI の preview deployment とローカル dev deployment を取り違えないよう、
  38 |     // Playwright 側の環境変数を Convex CLI の明示オプションへ変換する。
  39 |     cliArgs.push("--preview-name", process.env.CONVEX_PREVIEW_NAME);
  40 |   }
  41 |   if (process.platform === "win32") {
  42 |     const psCommand = `& ${["npx", ...cliArgs].map((arg) => `'${arg.replace(/'/g, "''")}'`).join(" ")}`;
  43 |     return execFileSync("powershell.exe", ["-NoProfile", "-Command", psCommand], {
  44 |       encoding: "utf-8",
  45 |       cwd: process.cwd(),
  46 |       env: getNpxEnv(),
  47 |     });
  48 |   }
> 49 |   return execFileSync("npx", cliArgs, {
     |          ^ Error: Command failed: npx convex run --no-push testing:getLatestMagicLinkToken {"recruitmentId":"ks72wx63tcbnecc9sdk357zzzx88yavm","shopId":"nh72x580hs0xjhw4ezq0b0zwv588zmbh","staffEmail":"added-staff@example.com","purpose":"submit"} --preview-name pr-545-e2e
  50 |     encoding: "utf-8",
  51 |     cwd: process.cwd(),
  52 |     env: getNpxEnv(),
  53 |   });
  54 | }
  55 | 
  56 | export function convexRunJson<T>(fn: string, args: Record<string, unknown> = {}): T {
  57 |   return JSON.parse(convexRun(fn, args).trim()) as T;
  58 | }
  59 | 
```