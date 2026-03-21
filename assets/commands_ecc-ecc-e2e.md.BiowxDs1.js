import{_ as a,o as n,c as e,ag as i}from"./chunks/framework.BpFM782D.js";const k=JSON.parse('{"title":"ecc-e2e","description":"","frontmatter":{},"headers":[],"relativePath":"commands/ecc-ecc-e2e.md","filePath":"commands/ecc-ecc-e2e.md","lastUpdated":null}'),t={name:"commands/ecc-ecc-e2e.md"};function p(l,s,r,c,o,h){return n(),e("div",null,[...s[0]||(s[0]=[i(`<h1 id="ecc-e2e" tabindex="-1">ecc-e2e <a class="header-anchor" href="#ecc-e2e" aria-label="Permalink to &quot;ecc-e2e&quot;">​</a></h1><table tabindex="0"><thead><tr><th>欄位</th><th>值</th></tr></thead><tbody><tr><td>名稱</td><td>ecc-e2e</td></tr><tr><td>說明</td><td>Generate and run end-to-end tests with Playwright. Creates test journeys, runs tests, captures screenshots/videos/traces, and uploads artifacts.</td></tr><tr><td>系列</td><td>ECC</td></tr><tr><td>來源檔案</td><td><code>commands/ecc-e2e.md</code></td></tr></tbody></table><hr><h1 id="e2e-command" tabindex="-1">E2E Command <a class="header-anchor" href="#e2e-command" aria-label="Permalink to &quot;E2E Command&quot;">​</a></h1><p>This command invokes the <strong>ecc-e2e-runner</strong> agent to generate, maintain, and execute end-to-end tests using Playwright.</p><h2 id="what-this-command-does" tabindex="-1">What This Command Does <a class="header-anchor" href="#what-this-command-does" aria-label="Permalink to &quot;What This Command Does&quot;">​</a></h2><ol><li><strong>Generate Test Journeys</strong> - Create Playwright tests for user flows</li><li><strong>Run E2E Tests</strong> - Execute tests across browsers</li><li><strong>Capture Artifacts</strong> - Screenshots, videos, traces on failures</li><li><strong>Upload Results</strong> - HTML reports and JUnit XML</li><li><strong>Identify Flaky Tests</strong> - Quarantine unstable tests</li></ol><h2 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-label="Permalink to &quot;When to Use&quot;">​</a></h2><p>Use <code>/e2e</code> when:</p><ul><li>Testing critical user journeys (login, trading, payments)</li><li>Verifying multi-step flows work end-to-end</li><li>Testing UI interactions and navigation</li><li>Validating integration between frontend and backend</li><li>Preparing for production deployment</li></ul><h2 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h2><p>The ecc-e2e-runner agent will:</p><ol><li><strong>Analyze user flow</strong> and identify test scenarios</li><li><strong>Generate Playwright test</strong> using Page Object Model pattern</li><li><strong>Run tests</strong> across multiple browsers (Chrome, Firefox, Safari)</li><li><strong>Capture failures</strong> with screenshots, videos, and traces</li><li><strong>Generate report</strong> with results and artifacts</li><li><strong>Identify flaky tests</strong> and recommend fixes</li></ol><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>User: /e2e Test the market search and view flow</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent (ecc-e2e-runner):</span></span>
<span class="line"><span># E2E Test Generation: Market Search and View Flow</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Test Scenario Identified</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**User Journey:** Market Search → View Results → Click Market → View Details</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Test Coverage:**</span></span>
<span class="line"><span>1. Navigate to markets page</span></span>
<span class="line"><span>2. Perform semantic search</span></span>
<span class="line"><span>3. Verify search results</span></span>
<span class="line"><span>4. Click on first result</span></span>
<span class="line"><span>5. Verify market details page loads</span></span>
<span class="line"><span>6. Verify chart renders</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Generated Test Code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>// tests/e2e/markets/search-and-view.spec.ts</span></span>
<span class="line"><span>import { test, expect } from &#39;@playwright/test&#39;</span></span>
<span class="line"><span>import { MarketsPage } from &#39;../../pages/MarketsPage&#39;</span></span>
<span class="line"><span>import { MarketDetailsPage } from &#39;../../pages/MarketDetailsPage&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test.describe(&#39;Market Search and View Flow&#39;, () =&gt; {</span></span>
<span class="line"><span>  test(&#39;user can search markets and view details&#39;, async ({ page }) =&gt; {</span></span>
<span class="line"><span>    // 1. Navigate to markets page</span></span>
<span class="line"><span>    const marketsPage = new MarketsPage(page)</span></span>
<span class="line"><span>    await marketsPage.goto()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Verify page loaded</span></span>
<span class="line"><span>    await expect(page).toHaveTitle(/Markets/)</span></span>
<span class="line"><span>    await expect(page.locator(&#39;h1&#39;)).toContainText(&#39;Markets&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. Perform semantic search</span></span>
<span class="line"><span>    await marketsPage.searchMarkets(&#39;election&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Wait for API response</span></span>
<span class="line"><span>    await page.waitForResponse(resp =&gt;</span></span>
<span class="line"><span>      resp.url().includes(&#39;/api/markets/search&#39;) &amp;&amp; resp.status() === 200</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. Verify search results</span></span>
<span class="line"><span>    const marketCards = marketsPage.marketCards</span></span>
<span class="line"><span>    await expect(marketCards.first()).toBeVisible()</span></span>
<span class="line"><span>    const resultCount = await marketCards.count()</span></span>
<span class="line"><span>    expect(resultCount).toBeGreaterThan(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Take screenshot of search results</span></span>
<span class="line"><span>    await page.screenshot({ path: &#39;artifacts/search-results.png&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. Click on first result</span></span>
<span class="line"><span>    const firstMarketTitle = await marketCards.first().textContent()</span></span>
<span class="line"><span>    await marketCards.first().click()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 5. Verify market details page loads</span></span>
<span class="line"><span>    await expect(page).toHaveURL(/\\/markets\\/[a-z0-9-]+/)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const detailsPage = new MarketDetailsPage(page)</span></span>
<span class="line"><span>    await expect(detailsPage.marketName).toBeVisible()</span></span>
<span class="line"><span>    await expect(detailsPage.marketDescription).toBeVisible()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 6. Verify chart renders</span></span>
<span class="line"><span>    await expect(detailsPage.priceChart).toBeVisible()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Verify market name matches</span></span>
<span class="line"><span>    const detailsTitle = await detailsPage.marketName.textContent()</span></span>
<span class="line"><span>    expect(detailsTitle?.toLowerCase()).toContain(</span></span>
<span class="line"><span>      firstMarketTitle?.toLowerCase().substring(0, 20) || &#39;&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Take screenshot of market details</span></span>
<span class="line"><span>    await page.screenshot({ path: &#39;artifacts/market-details.png&#39; })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  test(&#39;search with no results shows empty state&#39;, async ({ page }) =&gt; {</span></span>
<span class="line"><span>    const marketsPage = new MarketsPage(page)</span></span>
<span class="line"><span>    await marketsPage.goto()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Search for non-existent market</span></span>
<span class="line"><span>    await marketsPage.searchMarkets(&#39;xyznonexistentmarket123456&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Verify empty state</span></span>
<span class="line"><span>    await expect(page.locator(&#39;[data-testid=&quot;no-results&quot;]&#39;)).toBeVisible()</span></span>
<span class="line"><span>    await expect(page.locator(&#39;[data-testid=&quot;no-results&quot;]&#39;)).toContainText(</span></span>
<span class="line"><span>      /no.*results|no.*markets/i</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const marketCount = await marketsPage.marketCards.count()</span></span>
<span class="line"><span>    expect(marketCount).toBe(0)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  test(&#39;can clear search and see all markets again&#39;, async ({ page }) =&gt; {</span></span>
<span class="line"><span>    const marketsPage = new MarketsPage(page)</span></span>
<span class="line"><span>    await marketsPage.goto()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Initial market count</span></span>
<span class="line"><span>    const initialCount = await marketsPage.marketCards.count()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Perform search</span></span>
<span class="line"><span>    await marketsPage.searchMarkets(&#39;trump&#39;)</span></span>
<span class="line"><span>    await page.waitForLoadState(&#39;networkidle&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Verify filtered results</span></span>
<span class="line"><span>    const filteredCount = await marketsPage.marketCards.count()</span></span>
<span class="line"><span>    expect(filteredCount).toBeLessThan(initialCount)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Clear search</span></span>
<span class="line"><span>    await marketsPage.searchInput.clear()</span></span>
<span class="line"><span>    await page.waitForLoadState(&#39;networkidle&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Verify all markets shown again</span></span>
<span class="line"><span>    const finalCount = await marketsPage.marketCards.count()</span></span>
<span class="line"><span>    expect(finalCount).toBe(initialCount)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="running-tests" tabindex="-1">Running Tests <a class="header-anchor" href="#running-tests" aria-label="Permalink to &quot;Running Tests&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run the generated test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/e2e/markets/search-and-view.spec.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Running</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> using</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workers</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ✓</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [chromium] › search-and-view.spec.ts:5:3 › user can search markets and view details (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.2s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ✓</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [chromium] › search-and-view.spec.ts:52:3 › search with no results shows empty state (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.8s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ✓</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [chromium] › search-and-view.spec.ts:67:3 › can clear search and see all markets again (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.9s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (9.1s)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Artifacts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generated:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/search-results.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/market-details.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright-report/index.html</span></span></code></pre></div><h2 id="test-report" tabindex="-1">Test Report <a class="header-anchor" href="#test-report" aria-label="Permalink to &quot;Test Report&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╔══════════════════════════════════════════════════════════════╗</span></span>
<span class="line"><span>║                    E2E Test Results                          ║</span></span>
<span class="line"><span>╠══════════════════════════════════════════════════════════════╣</span></span>
<span class="line"><span>║ Status:     ✅ ALL TESTS PASSED                              ║</span></span>
<span class="line"><span>║ Total:      3 tests                                          ║</span></span>
<span class="line"><span>║ Passed:     3 (100%)                                         ║</span></span>
<span class="line"><span>║ Failed:     0                                                ║</span></span>
<span class="line"><span>║ Flaky:      0                                                ║</span></span>
<span class="line"><span>║ Duration:   9.1s                                             ║</span></span>
<span class="line"><span>╚══════════════════════════════════════════════════════════════╝</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Artifacts:</span></span>
<span class="line"><span>📸 Screenshots: 2 files</span></span>
<span class="line"><span>📹 Videos: 0 files (only on failure)</span></span>
<span class="line"><span>🔍 Traces: 0 files (only on failure)</span></span>
<span class="line"><span>📊 HTML Report: playwright-report/index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>View report: npx playwright show-report</span></span></code></pre></div><p>✅ E2E test suite ready for CI/CD integration!</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## Test Artifacts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When tests run, the following artifacts are captured:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**On All Tests:**</span></span>
<span class="line"><span>- HTML Report with timeline and results</span></span>
<span class="line"><span>- JUnit XML for CI integration</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**On Failure Only:**</span></span>
<span class="line"><span>- Screenshot of the failing state</span></span>
<span class="line"><span>- Video recording of the test</span></span>
<span class="line"><span>- Trace file for debugging (step-by-step replay)</span></span>
<span class="line"><span>- Network logs</span></span>
<span class="line"><span>- Console logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Viewing Artifacts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span># View HTML report in browser</span></span>
<span class="line"><span>npx playwright show-report</span></span>
<span class="line"><span></span></span>
<span class="line"><span># View specific trace file</span></span>
<span class="line"><span>npx playwright show-trace artifacts/trace-abc123.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Screenshots are saved in artifacts/ directory</span></span>
<span class="line"><span>open artifacts/search-results.png</span></span></code></pre></div><h2 id="flaky-test-detection" tabindex="-1">Flaky Test Detection <a class="header-anchor" href="#flaky-test-detection" aria-label="Permalink to &quot;Flaky Test Detection&quot;">​</a></h2><p>If a test fails intermittently:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>⚠️  FLAKY TEST DETECTED: tests/e2e/markets/trade.spec.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Test passed 7/10 runs (70% pass rate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Common failure:</span></span>
<span class="line"><span>&quot;Timeout waiting for element &#39;[data-testid=&quot;confirm-btn&quot;]&#39;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Recommended fixes:</span></span>
<span class="line"><span>1. Add explicit wait: await page.waitForSelector(&#39;[data-testid=&quot;confirm-btn&quot;]&#39;)</span></span>
<span class="line"><span>2. Increase timeout: { timeout: 10000 }</span></span>
<span class="line"><span>3. Check for race conditions in component</span></span>
<span class="line"><span>4. Verify element is not hidden by animation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Quarantine recommendation: Mark as test.fixme() until fixed</span></span></code></pre></div><h2 id="browser-configuration" tabindex="-1">Browser Configuration <a class="header-anchor" href="#browser-configuration" aria-label="Permalink to &quot;Browser Configuration&quot;">​</a></h2><p>Tests run on multiple browsers by default:</p><ul><li>✅ Chromium (Desktop Chrome)</li><li>✅ Firefox (Desktop)</li><li>✅ WebKit (Desktop Safari)</li><li>✅ Mobile Chrome (optional)</li></ul><p>Configure in <code>playwright.config.ts</code> to adjust browsers.</p><h2 id="ci-cd-integration" tabindex="-1">CI/CD Integration <a class="header-anchor" href="#ci-cd-integration" aria-label="Permalink to &quot;CI/CD Integration&quot;">​</a></h2><p>Add to your CI pipeline:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .github/workflows/e2e.yml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install Playwright</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npx playwright install --with-deps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Run E2E tests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npx playwright test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifacts</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always()</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-artifact@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">playwright-report</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">playwright-report/</span></span></code></pre></div><h2 id="pmx-specific-critical-flows" tabindex="-1">PMX-Specific Critical Flows <a class="header-anchor" href="#pmx-specific-critical-flows" aria-label="Permalink to &quot;PMX-Specific Critical Flows&quot;">​</a></h2><p>For PMX, prioritize these E2E tests:</p><p><strong>🔴 CRITICAL (Must Always Pass):</strong></p><ol><li>User can connect wallet</li><li>User can browse markets</li><li>User can search markets (semantic search)</li><li>User can view market details</li><li>User can place trade (with test funds)</li><li>Market resolves correctly</li><li>User can withdraw funds</li></ol><p><strong>🟡 IMPORTANT:</strong></p><ol><li>Market creation flow</li><li>User profile updates</li><li>Real-time price updates</li><li>Chart rendering</li><li>Filter and sort markets</li><li>Mobile responsive layout</li></ol><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><p><strong>DO:</strong></p><ul><li>✅ Use Page Object Model for maintainability</li><li>✅ Use data-testid attributes for selectors</li><li>✅ Wait for API responses, not arbitrary timeouts</li><li>✅ Test critical user journeys end-to-end</li><li>✅ Run tests before merging to main</li><li>✅ Review artifacts when tests fail</li></ul><p><strong>DON&#39;T:</strong></p><ul><li>❌ Use brittle selectors (CSS classes can change)</li><li>❌ Test implementation details</li><li>❌ Run tests against production</li><li>❌ Ignore flaky tests</li><li>❌ Skip artifact review on failures</li><li>❌ Test every edge case with E2E (use unit tests)</li></ul><h2 id="important-notes" tabindex="-1">Important Notes <a class="header-anchor" href="#important-notes" aria-label="Permalink to &quot;Important Notes&quot;">​</a></h2><p><strong>CRITICAL for PMX:</strong></p><ul><li>E2E tests involving real money MUST run on testnet/staging only</li><li>Never run trading tests against production</li><li>Set <code>test.skip(process.env.NODE_ENV === &#39;production&#39;)</code> for financial tests</li><li>Use test wallets with small test funds only</li></ul><h2 id="integration-with-other-commands" tabindex="-1">Integration with Other Commands <a class="header-anchor" href="#integration-with-other-commands" aria-label="Permalink to &quot;Integration with Other Commands&quot;">​</a></h2><ul><li>Use <code>/ecc-plan</code> to identify critical journeys to test</li><li>Use <code>/ecc-tdd</code> for unit tests (faster, more granular)</li><li>Use <code>/ecc-e2e</code> for integration and user journey tests</li><li>Use <code>/ecc-code-review</code> to verify test quality</li></ul><h2 id="related-agents" tabindex="-1">Related Agents <a class="header-anchor" href="#related-agents" aria-label="Permalink to &quot;Related Agents&quot;">​</a></h2><p>This command invokes the <code>ecc-e2e-runner</code> agent located at: <code>~/.claude/agents/ecc-e2e-runner.md</code></p><h2 id="quick-commands" tabindex="-1">Quick Commands <a class="header-anchor" href="#quick-commands" aria-label="Permalink to &quot;Quick Commands&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run all E2E tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run specific test file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/e2e/markets/search.spec.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run in headed mode (see browser)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --headed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Debug test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --debug</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generate test code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> codegen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># View report</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> playwright</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show-report</span></span></code></pre></div>`,51)])])}const g=a(t,[["render",p]]);export{k as __pageData,g as default};
