import{_ as n,o as s,c as e,ag as t}from"./chunks/framework.BpFM782D.js";const g=JSON.parse('{"title":"ecc-architect","description":"","frontmatter":{},"headers":[],"relativePath":"commands/ecc-ecc-architect.md","filePath":"commands/ecc-ecc-architect.md"}'),c={name:"commands/ecc-ecc-architect.md"};function l(i,a,p,r,o,d){return s(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="ecc-architect" tabindex="-1">ecc-architect <a class="header-anchor" href="#ecc-architect" aria-label="Permalink to &quot;ecc-architect&quot;">​</a></h1><table tabindex="0"><thead><tr><th>欄位</th><th>值</th></tr></thead><tbody><tr><td>名稱</td><td>ecc-architect</td></tr><tr><td>說明</td><td>架構設計、ADR 建立與技術決策分析。呼叫 ecc-architect agent。</td></tr><tr><td>系列</td><td>ECC</td></tr><tr><td>來源檔案</td><td><code>commands/ecc-architect.md</code></td></tr></tbody></table><hr><h1 id="architect" tabindex="-1">Architect <a class="header-anchor" href="#architect" aria-label="Permalink to &quot;Architect&quot;">​</a></h1><p>此指令會呼叫 <strong>ecc-architect</strong> agent，執行系統架構設計、取捨分析與技術決策。</p><h2 id="此指令的功能" tabindex="-1">此指令的功能 <a class="header-anchor" href="#此指令的功能" aria-label="Permalink to &quot;此指令的功能&quot;">​</a></h2><ol><li><strong>分析當前架構</strong> - 審查現有模式、慣例與技術債</li><li><strong>蒐集需求</strong> - 識別功能性與非功能性需求</li><li><strong>設計提案</strong> - 建立含元件圖的高層次架構</li><li><strong>取捨分析</strong> - 記錄每個決策的優缺點/替代方案</li><li><strong>ADR 建立</strong> - 為重大選擇產生架構決策記錄</li></ol><h2 id="使用時機" tabindex="-1">使用時機 <a class="header-anchor" href="#使用時機" aria-label="Permalink to &quot;使用時機&quot;">​</a></h2><p>以下情況請使用 <code>/ecc-architect</code>：</p><ul><li>規劃影響系統架構的新功能</li><li>進行技術或模式選擇（例如狀態管理、快取策略）</li><li>評估擴展性或效能瓶頸</li><li>進行改變系統結構的重大重構</li><li>撰寫架構決策記錄（ADR）</li><li>上手時需要了解系統設計</li></ul><h2 id="運作方式" tabindex="-1">運作方式 <a class="header-anchor" href="#運作方式" aria-label="Permalink to &quot;運作方式&quot;">​</a></h2><p>ecc-architect agent 將會：</p><ol><li><strong>審查程式碼庫</strong>以了解現有架構</li><li><strong>識別模式</strong>與已使用的慣例</li><li><strong>提出設計</strong>，並清楚說明元件職責</li><li><strong>分析取捨</strong>，針對每個架構決策</li><li><strong>記錄決策</strong>，在適用時以 ADR 格式呈現</li></ol><h2 id="使用範例" tabindex="-1">使用範例 <a class="header-anchor" href="#使用範例" aria-label="Permalink to &quot;使用範例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用者：/ecc-architect 我們應該使用 SWR 還是 TanStack Query 進行資料取得？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent（ecc-architect）：</span></span>
<span class="line"><span># 架構決策：資料取得函式庫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 當前狀態</span></span>
<span class="line"><span>- Next.js 16 搭配 App Router</span></span>
<span class="line"><span>- 初始資料使用 Server Components</span></span>
<span class="line"><span>- 動態內容需要客戶端取得</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 取捨分析</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 選項 A：SWR</span></span>
<span class="line"><span>**優點**：輕量、Vercel 維護、API 簡單</span></span>
<span class="line"><span>**缺點**：功能較少、無 devtools</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 選項 B：TanStack Query</span></span>
<span class="line"><span>**優點**：功能豐富、出色的 devtools、查詢失效</span></span>
<span class="line"><span>**缺點**：套件較大、API 較複雜</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 決策</span></span>
<span class="line"><span>SWR — 與 Next.js 生態系對齊，更適合我們的使用情境。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ADR-XXX：使用 SWR 進行客戶端資料取得</span></span>
<span class="line"><span>[完整 ADR 文件...]</span></span></code></pre></div><h2 id="與其他指令的整合" tabindex="-1">與其他指令的整合 <a class="header-anchor" href="#與其他指令的整合" aria-label="Permalink to &quot;與其他指令的整合&quot;">​</a></h2><ul><li>架構決策後使用 <code>/ecc-plan</code> 建立實作計畫</li><li>使用 <code>/ecc-code-review</code> 確認實作符合架構</li><li>使用 <code>/ecc-update-codemaps</code> 記錄架構</li></ul><h2 id="相關-agent" tabindex="-1">相關 Agent <a class="header-anchor" href="#相關-agent" aria-label="Permalink to &quot;相關 Agent&quot;">​</a></h2><p>此指令會呼叫位於下列路徑的 <code>ecc-architect</code> agent： <code>~/.claude/agents/ecc-architect.md</code></p>`,19)])])}const u=n(c,[["render",l]]);export{g as __pageData,u as default};
