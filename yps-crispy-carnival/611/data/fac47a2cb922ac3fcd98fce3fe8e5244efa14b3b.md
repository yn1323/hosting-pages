# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenarios/first-shift-delivery.test.ts >> 田中さんの初めてのシフト確定 >> 初回セットアップからシフト確定まで
- Location: e2e/scenarios/first-shift-delivery.test.ts:35:3

# Error details

```
Test timeout of 60000ms exceeded.
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
    - generic [ref=e21]:
      - generic [ref=e22]:
        - link "戻る" [ref=e23] [cursor=pointer]:
          - /url: /dashboard
          - generic [ref=e24]:
            - img [ref=e25]
            - paragraph [ref=e27]: 戻る
        - paragraph [ref=e28]: 7/6(月)〜7/12(日) のシフト
        - generic [ref=e29]:
          - img [ref=e30]
          - paragraph [ref=e33]: 確定済み（2026/7/1 11:21）
      - generic [ref=e36]:
        - generic [ref=e37]:
          - tablist "表示切替" [ref=e38]:
            - tab "日別" [ref=e39] [cursor=pointer]
            - tab "一覧" [selected] [ref=e40] [cursor=pointer]
          - generic [ref=e41]:
            - button "下書き保存" [ref=e42] [cursor=pointer]
            - button "もう一度通知" [active] [ref=e43] [cursor=pointer]
        - generic [ref=e48]:
          - generic [ref=e49] [cursor=pointer]:
            - img [ref=e51]
            - generic [ref=e53]: 7/6 – 7/12
          - table [ref=e55]:
            - rowgroup [ref=e66]:
              - row "スタッフ 確認事項2件 7/6 月 確認事項2件 7/7 火 確認事項2件 7/8 水 確認事項2件 7/9 木 確認事項2件 7/10 金 確認事項1件 7/11 土 7/12 日 計" [ref=e67]:
                - columnheader "スタッフ" [ref=e68]
                - columnheader "確認事項2件 7/6 月" [ref=e69] [cursor=pointer]:
                  - generic [ref=e70]:
                    - generic "確認事項2件" [ref=e71]: "2"
                    - generic [ref=e72]: 7/6
                  - generic [ref=e73]: 月
                - columnheader "確認事項2件 7/7 火" [ref=e74] [cursor=pointer]:
                  - generic [ref=e75]:
                    - generic "確認事項2件" [ref=e76]: "2"
                    - generic [ref=e77]: 7/7
                  - generic [ref=e78]: 火
                - columnheader "確認事項2件 7/8 水" [ref=e79] [cursor=pointer]:
                  - generic [ref=e80]:
                    - generic "確認事項2件" [ref=e81]: "2"
                    - generic [ref=e82]: 7/8
                  - generic [ref=e83]: 水
                - columnheader "確認事項2件 7/9 木" [ref=e84] [cursor=pointer]:
                  - generic [ref=e85]:
                    - generic "確認事項2件" [ref=e86]: "2"
                    - generic [ref=e87]: 7/9
                  - generic [ref=e88]: 木
                - columnheader "確認事項2件 7/10 金" [ref=e89] [cursor=pointer]:
                  - generic [ref=e90]:
                    - generic "確認事項2件" [ref=e91]: "2"
                    - generic [ref=e92]: 7/10
                  - generic [ref=e93]: 金
                - columnheader "確認事項1件 7/11 土" [ref=e94] [cursor=pointer]:
                  - generic [ref=e95]:
                    - generic "確認事項1件" [ref=e96]: "1"
                    - generic [ref=e97]: 7/11
                  - generic [ref=e98]: 土
                - columnheader "7/12 日" [ref=e99] [cursor=pointer]:
                  - generic [ref=e101]: 7/12
                  - generic [ref=e102]: 日
                - columnheader "計" [ref=e103]
            - rowgroup [ref=e104]:
              - row "田中太郎 未提出 10:00–18:00 10:00–18:00 10:00–18:00 10:00–18:00 10:00–18:00 — — 40h" [ref=e105]:
                - cell "田中太郎 未提出" [ref=e106]:
                  - generic [ref=e107]:
                    - generic [ref=e108]: 田中太郎
                    - generic [ref=e109]: 未提出
                - cell "10:00–18:00" [ref=e110]:
                  - generic [ref=e111]: 10:00–18:00
                - cell "10:00–18:00" [ref=e112]:
                  - generic [ref=e113]: 10:00–18:00
                - cell "10:00–18:00" [ref=e114]:
                  - generic [ref=e115]: 10:00–18:00
                - cell "10:00–18:00" [ref=e116]:
                  - generic [ref=e117]: 10:00–18:00
                - cell "10:00–18:00" [ref=e118]:
                  - generic [ref=e119]: 10:00–18:00
                - cell "—" [ref=e120]
                - cell "—" [ref=e121]
                - cell "40h" [ref=e122]
              - row "鈴木花子（編集済） 未提出 11:00–19:00 — 11:00–19:00 — 11:00–19:00 — — 24h" [ref=e123]:
                - cell "鈴木花子（編集済） 未提出" [ref=e124]:
                  - generic [ref=e125]:
                    - generic [ref=e126]: 鈴木花子（編集済）
                    - generic [ref=e127]: 未提出
                - cell "11:00–19:00" [ref=e128]:
                  - generic [ref=e129]: 11:00–19:00
                - cell "—" [ref=e130]
                - cell "11:00–19:00" [ref=e131]:
                  - generic [ref=e132]: 11:00–19:00
                - cell "—" [ref=e133]
                - cell "11:00–19:00" [ref=e134]:
                  - generic [ref=e135]: 11:00–19:00
                - cell "—" [ref=e136]
                - cell "—" [ref=e137]
                - cell "24h" [ref=e138]
              - row "佐藤次郎 未提出 — 14:00–23:00 — 14:00–23:00 — 14:00–23:00 — 27h" [ref=e139]:
                - cell "佐藤次郎 未提出" [ref=e140]:
                  - generic [ref=e141]:
                    - generic [ref=e142]: 佐藤次郎
                    - generic [ref=e143]: 未提出
                - cell "—" [ref=e144]
                - cell "14:00–23:00" [ref=e145]:
                  - generic [ref=e146]: 14:00–23:00
                - cell "—" [ref=e147]
                - cell "14:00–23:00" [ref=e148]:
                  - generic [ref=e149]: 14:00–23:00
                - cell "—" [ref=e150]
                - cell "14:00–23:00" [ref=e151]:
                  - generic [ref=e152]: 14:00–23:00
                - cell "—" [ref=e153]
                - cell "27h" [ref=e154]
  - region "Notifications, top (alt+T)":
    - status "確定しました" [ref=e155]:
      - img [ref=e156]
      - generic [ref=e159]: 確定しました
      - button "Dismiss notification" [ref=e160] [cursor=pointer]:
        - img [ref=e161]
```