import{_ as a,o as n,c as i,ag as l}from"./chunks/framework.BpFM782D.js";const g=JSON.parse('{"title":"team-exec","description":"","frontmatter":{},"headers":[],"relativePath":"commands/ccg-team-exec.md","filePath":"commands/ccg-team-exec.md","lastUpdated":null}'),e={name:"commands/ccg-team-exec.md"};function p(t,s,d,c,o,r){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="team-exec" tabindex="-1">team-exec <a class="header-anchor" href="#team-exec" aria-label="Permalink to &quot;team-exec&quot;">​</a></h1><table tabindex="0"><thead><tr><th>欄位</th><th>值</th></tr></thead><tbody><tr><td>名稱</td><td>team-exec</td></tr><tr><td>說明</td><td>Agent Teams 并行实施 - 读取计划文件，spawn Builder teammates 并行写代码</td></tr><tr><td>系列</td><td>CCG</td></tr><tr><td>來源檔案</td><td><code>commands/ccg/team-exec.md</code></td></tr></tbody></table><hr><p>&lt;!-- CCG:TEAM:EXEC:START --&gt; <strong>Core Philosophy</strong></p><ul><li>实施是纯机械执行——所有决策已在 team-plan 阶段完成。</li><li>Lead 不写代码，只做协调和汇总。</li><li>Builder teammates 并行实施，文件范围严格隔离。</li></ul><p><strong>Guardrails</strong></p><ul><li><strong>前置条件</strong>：<code>.claude/team-plan/</code> 下必须有计划文件。没有则终止，提示先运行 <code>/ccg:team-plan</code>。</li><li><strong>Agent Teams 必须启用</strong>：需要 <code>CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code>。</li><li>Lead 绝不直接修改产品代码。</li><li>每个 Builder 只能修改分配给它的文件。</li></ul><p><strong>Steps</strong></p><ol><li><p><strong>前置检查</strong></p><ul><li>检测 Agent Teams 是否可用。</li><li>若不可用，输出启用指引后终止：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>⚠️ Agent Teams 未启用。请先配置：</span></span>
<span class="line"><span>在 settings.json 中添加：</span></span>
<span class="line"><span>{ &quot;env&quot;: { &quot;CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS&quot;: &quot;1&quot; } }</span></span></code></pre></div></li><li>读取 <code>.claude/team-plan/</code> 下最新的计划文件。</li><li>若无计划文件，提示：<code>请先运行 /ccg:team-plan &lt;任务描述&gt; 生成计划</code>，终止。</li></ul></li><li><p><strong>解析计划</strong></p><ul><li>解析子任务列表、文件范围、依赖关系、并行分组。</li><li>向用户展示摘要并确认：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📋 即将并行实施：</span></span>
<span class="line"><span>- 子任务：N 个</span></span>
<span class="line"><span>- 并行分组：Layer 1 (X 个并行) → Layer 2 (Y 个)</span></span>
<span class="line"><span>- Builder 数量：N 个（Sonnet）</span></span>
<span class="line"><span>确认开始？</span></span></code></pre></div></li></ul></li><li><p><strong>创建 Team + spawn Builders</strong></p><ul><li>创建 Agent Team。</li><li>按 Layer 分组 spawn Builder teammates（Sonnet）。</li><li>每个 Builder 的 spawn prompt 必须包含：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是 Builder，负责实施一个子任务。严格按照以下指令执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 你的任务</span></span>
<span class="line"><span>&lt;从计划文件中提取该 Builder 负责的子任务全部内容，包括实施步骤&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 工作目录</span></span>
<span class="line"><span>&amp;#123;&amp;#123;WORKDIR&amp;#125;&amp;#125;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 文件范围约束（⛔ 硬性规则）</span></span>
<span class="line"><span>你只能创建或修改以下文件：</span></span>
<span class="line"><span>&lt;文件列表&gt;</span></span>
<span class="line"><span>严禁修改任何其他文件。违反此规则等于任务失败。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 实施要求</span></span>
<span class="line"><span>1. 严格按照实施步骤执行</span></span>
<span class="line"><span>2. 代码必须符合项目现有规范和模式</span></span>
<span class="line"><span>3. 完成后运行相关的 lint/typecheck 验证（如果项目有配置）</span></span>
<span class="line"><span>4. 代码应自解释，非必要不加注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 验收标准</span></span>
<span class="line"><span>&lt;从计划中提取&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成所有步骤后，标记任务为 completed。</span></span></code></pre></div><ul><li><strong>依赖关系</strong>：Layer 2 的 Builder 任务设为依赖 Layer 1 的对应任务，等 Layer 1 完成后自动解锁。</li><li>spawn 完成后，进入 <strong>delegate 模式</strong>，只协调不写码。</li></ul></li><li><p><strong>监控进度</strong></p><ul><li>等待所有 Builder 完成。</li><li>如果某个 Builder 遇到问题并发消息求助： <ul><li>分析问题，给出指导建议</li><li>不要自己写代码替它完成</li></ul></li><li>如果某个 Builder 失败： <ul><li>记录失败原因</li><li>不影响其他 Builder 继续执行</li></ul></li></ul></li><li><p><strong>汇总 + 清理</strong></p><ul><li>所有 Builder 完成后，汇总报告：</li></ul><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ✅ Team 并行实施完成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 变更摘要</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Builder | 子任务 | 状态 | 修改文件 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---------|--------|------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Builder 1 | &lt;名称&gt; | ✅/❌ | file1, file2 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Builder 2 | &lt;名称&gt; | ✅/❌ | file3, file4 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ...     | ...    | ...  | ...      |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 后续建议</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 运行完整测试验证集成：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`npm test\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`pnpm test\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 检查各模块间的集成是否正常</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 提交代码：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git add -A &amp;&amp; git commit\`</span></span></code></pre></div><ul><li>关闭所有 teammates，清理 team。</li></ul></li></ol><p><strong>Exit Criteria</strong></p><ul><li>[ ] 所有 Builder 任务完成（或明确失败并记录原因）</li><li>[ ] 变更摘要已输出</li><li>[ ] Team 已清理 &lt;!-- CCG:TEAM:EXEC:END --&gt;</li></ul>`,11)])])}const k=a(e,[["render",p]]);export{g as __pageData,k as default};
