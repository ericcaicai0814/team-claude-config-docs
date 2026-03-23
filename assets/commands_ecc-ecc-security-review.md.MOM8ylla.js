import{_ as s,o as e,c as n,ag as t}from"./chunks/framework.BpFM782D.js";const h=JSON.parse('{"title":"ecc-security-review","description":"","frontmatter":{},"headers":[],"relativePath":"commands/ecc-ecc-security-review.md","filePath":"commands/ecc-ecc-security-review.md"}'),i={name:"commands/ecc-ecc-security-review.md"};function c(l,a,r,p,o,d){return e(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="ecc-security-review" tabindex="-1">ecc-security-review <a class="header-anchor" href="#ecc-security-review" aria-label="Permalink to &quot;ecc-security-review&quot;">​</a></h1><table tabindex="0"><thead><tr><th>欄位</th><th>值</th></tr></thead><tbody><tr><td>名稱</td><td>ecc-security-review</td></tr><tr><td>說明</td><td>安全漏洞偵測、OWASP 檢查與密鑰掃描。呼叫 ecc-security-reviewer agent。</td></tr><tr><td>系列</td><td>ECC</td></tr><tr><td>來源檔案</td><td><code>commands/ecc-security-review.md</code></td></tr></tbody></table><hr><h1 id="安全性審查" tabindex="-1">安全性審查 <a class="header-anchor" href="#安全性審查" aria-label="Permalink to &quot;安全性審查&quot;">​</a></h1><p>此指令會呼叫 <strong>ecc-security-reviewer</strong> agent，執行全面的安全性漏洞偵測與修復分析。</p><h2 id="此指令的功能" tabindex="-1">此指令的功能 <a class="header-anchor" href="#此指令的功能" aria-label="Permalink to &quot;此指令的功能&quot;">​</a></h2><ol><li><strong>機密偵測</strong> - 掃描硬編碼的 API 金鑰、密碼、令牌</li><li><strong>OWASP Top 10 分析</strong> - 檢查 injection、XSS、CSRF、認證缺陷等</li><li><strong>輸入驗證</strong> - 確認所有使用者輸入都已適當清洗</li><li><strong>相依套件審核</strong> - 檢查有漏洞的 npm 套件（<code>npm audit</code>）</li><li><strong>存取控制審查</strong> - 驗證認證與授權</li><li><strong>安全性報告</strong> - 產生含嚴重程度與修復建議的詳細發現事項</li></ol><h2 id="使用時機" tabindex="-1">使用時機 <a class="header-anchor" href="#使用時機" aria-label="Permalink to &quot;使用時機&quot;">​</a></h2><p>以下情況請使用 <code>/ecc-security-review</code>：</p><ul><li>新增 API 端點</li><li>實作認證或授權邏輯</li><li>處理使用者輸入（表單、搜尋、檔案上傳）</li><li>與外部 API 或服務整合</li><li>提交涉及敏感資料的程式碼前</li><li>相依套件更新後</li><li>重大發布前</li></ul><h2 id="運作方式" tabindex="-1">運作方式 <a class="header-anchor" href="#運作方式" aria-label="Permalink to &quot;運作方式&quot;">​</a></h2><p>ecc-security-reviewer agent 將會：</p><ol><li><strong>執行自動化掃描</strong>（<code>npm audit</code>、grep 掃描機密、eslint-plugin-security）</li><li><strong>審查高風險程式碼</strong>（認證、API 端點、DB 查詢、檔案處理器）</li><li><strong>系統性檢查 OWASP Top 10</strong> 各類別</li><li><strong>產生安全性報告</strong>，包含嚴重程度（CRITICAL/HIGH/MEDIUM/LOW）</li><li><strong>提供修復方案</strong>，為每個發現事項附上程式碼範例</li></ol><h2 id="使用範例" tabindex="-1">使用範例 <a class="header-anchor" href="#使用範例" aria-label="Permalink to &quot;使用範例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用者：/ecc-security-review 檢查聯絡表單提交處理器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent（ecc-security-reviewer）：</span></span>
<span class="line"><span># 安全性審查報告</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**檔案：** src/app/api/contact/route.ts</span></span>
<span class="line"><span>**風險等級：** MEDIUM</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 發現事項</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### [HIGH] 缺少速率限制</span></span>
<span class="line"><span>**位置：** route.ts:15</span></span>
<span class="line"><span>**問題：** POST 處理器沒有速率限制</span></span>
<span class="line"><span>**修復：** 加入速率限制中介軟體</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### [MEDIUM] 輸入長度驗證</span></span>
<span class="line"><span>**位置：** route.ts:22</span></span>
<span class="line"><span>**問題：** message 欄位沒有最大長度限制</span></span>
<span class="line"><span>**修復：** 加入帶有 .max(5000) 的 zod schema</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 安全性檢查清單</span></span>
<span class="line"><span>- [x] 無硬編碼機密</span></span>
<span class="line"><span>- [x] 輸入驗證存在</span></span>
<span class="line"><span>- [ ] 已加入速率限制</span></span>
<span class="line"><span>- [x] CSRF 保護（Next.js 內建）</span></span></code></pre></div><h2 id="與其他指令的整合" tabindex="-1">與其他指令的整合 <a class="header-anchor" href="#與其他指令的整合" aria-label="Permalink to &quot;與其他指令的整合&quot;">​</a></h2><ul><li>使用 <code>/ecc-code-review</code> 進行一般程式碼品質審查</li><li>使用 <code>/ecc-build-fix</code> 修復安全性補丁引入的問題</li><li>使用 <code>/ecc-plan</code> 規劃安全性相關功能實作</li></ul><h2 id="相關-agent" tabindex="-1">相關 Agent <a class="header-anchor" href="#相關-agent" aria-label="Permalink to &quot;相關 Agent&quot;">​</a></h2><p>此指令會呼叫位於下列路徑的 <code>ecc-security-reviewer</code> agent： <code>~/.claude/agents/ecc-security-reviewer.md</code></p>`,19)])])}const g=s(i,[["render",c]]);export{h as __pageData,g as default};
