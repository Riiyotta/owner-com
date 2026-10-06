// IA section(s): hero.section-blog-content (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// The Real Restaurant Failure Ra — the section's real markup, read from the rendered page (route /blog/restaurant-failure-rate, section 1).
export default function TheRealRestaurantFailure() {
  return (
    <section className="section-blog_content" data-clone-section="TheRealRestaurantFailure">
      <div className="container-large">
        <div className="blog-content_wrap">
          <div className="blog-content_wrap-inner">
            <div>
              <div className="u-mb-32">
                <div>
                  <span>
                    <A href="/blog" className="text-style-link text-weight-semibold text-color-green">Blog</A>
                  </span>
                  <span>{" / "}</span>
                  <span>
                    <A href="/blog-category/industry-trends-data" className="text-style-link text-weight-semibold text-color-green">{"Industry Trends & Data"}</A>
                  </span>
                </div>
              </div>
              <div className="u-mb-16">
                <h1 className="h3">The Real Restaurant Failure Rate Is Lower Than You Think (2026 Data)</h1>
              </div>
              <div className="u-mb-32">
                <p className="body-l">{"You might have heard that 90% of restaurants fail in their first year. That's false! Here's the real failure rate for restaurants—and what causes them to fail."}</p>
              </div>
              <div id="w-node-ca86fba9-ae20-d766-4d2b-df285695087c-4e5f7d31" className="blog-card_content-box">
                <div className="opacity-70">
                  <div className="text-weight-semibold">
                    <div className="body-m">
                      <span className="blog-card_content-item">8 min read</span>
                      <span className="blog-card_content-item">June 28, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-content_visual">
              <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f8646_668c491d72ee4a732b1cecb9_jason-leung-poI7DelFiVA-unsplash.jpeg" loading="lazy" alt="" className="img-cover" />
            </div>
            <div className="blog-content_key-wrap">
              <div className="h5">Key takeaways</div>
              <div className="blog-key_rich-text w-richtext">
                <li>Only 17% of restaurants fail in their first year of business, not 90%. See the real restaurant failure rate as reported by the US government.</li>
                <li>{"One of the leading causes of failure is poor \"menu-market fit.\" We'll share how you can find menu-market fit with your local customers."}</li>
                <li>{"Regulars make up to 80% of a restaurant's profits. Learn to turn first-time diners into profitable regulars with simple automated campaigns."}</li>
              </div>
            </div>
            <div fs-richtext-element="rich-text" fs-toc-element="contents" fs-toc-offsettop="5.625em" className="text-rich-text max-width-full w-richtext">
              <p>
                {"You've probably heard the crazy "}
                <A href="/blog/restaurant-trends">restaurant trend</A>
                {" that 90% of restaurants fail within the first five years of operations. "}
                <strong>Well, it’s not true.</strong>
              </p>
              <p>Apparently, this number was originally shared on a TV advertisement with no source listed—and the myth grew from there. And to be honest, that bothers me!</p>
              <p>
                {"As CEO of Owner.com, I get to personally meet hundreds of successful restaurant owners. They’ll be the first to tell you that this is a "}
                <em>tough</em>
                {" business. But it’s a very rewarding one, too. And if we go around telling people 90% of restaurants fail, we’ll see far fewer new restaurants started."}
              </p>
              <p>So let’s set the record straight! Time for us to play “Math vs. Myth” and get the actual data:</p>
              <div id="whats-the-real-restaurant-failure-rate" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>
                  {"What’s the "}
                  <em>real</em>
                  {" restaurant failure rate?"}
                </h2>
                <p>
                  <strong>Only 17% of restaurants fail in their first year.</strong>
                  {" And around 51% of restaurants survive past their 5th year in business."}
                </p>
                <p>Here’s a chart of the data:</p>
                <figure style={{ "maxWidth": "1200pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                  <div>
                    <img loading="lazy" alt="Chart of the real restaurant failure rate in the US." src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f866f_66abc413674608b537dd084e_66abc3e704ff60a645e5f5ca_restaurant-failure-rate-data.png" />
                  </div>
                </figure>
                <p>
                  {"So, how did I find the "}
                  <em>real</em>
                  {" data to answer this question?"}
                </p>
                <p>
                  {"I called the "}
                  <a>U.S. Bureau of Labor Statistics</a>
                  {" (BLS). That’s the federal agency that keeps close tabs on labor and business performance in the United States—including business failure rates for "}
                  <em>every</em>
                  {" industry."}
                </p>
                <p>
                  {"Here’s what they told me: A member of their team worked with a professor from the University of California, Berkeley on a research paper called, "}
                  <em>Restaurant Mortality in the Western US</em>
                  {". You can read that paper "}
                  <a>here</a>
                  . With this data, we can finally know what the restaurant failure rate is in America:
                </p>
                <blockquote>
                  {"In stark contrast to the commonly cited statistic that 90 percent of restaurants fail in their first year, "}
                  <strong>only about 17 percent of restaurants failed in the first year</strong>
                  —lower than the average first-year failure rate of 19 percent for all other service-providing businesses.
                </blockquote>
                <p>
                  {"Restaurants actually have a "}
                  <em>better</em>
                  {" survival rate than other service-based businesses. And even when you compare restaurants to all private businesses in the US, the numbers still look pretty good."}
                </p>
                <div className="w-embed">
                  <div style={{ "overflowX": "auto" }}>
                    <table className="owner-table">
                      <thead>
                        <tr>
                          <td></td>
                          <td style={{ "color": "white" }}>
                            <b>1-Year Survival Rate</b>
                          </td>
                          <td style={{ "color": "white" }}>
                            <b>5-Year Survival Rate</b>
                          </td>
                          <td style={{ "color": "white" }}>
                            <b>10-Year Survival Rate</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <b>Restaurants</b>
                          </td>
                          <td>83.1%</td>
                          <td>51.4%</td>
                          <td>34.6%</td>
                        </tr>
                        <tr>
                          <td>
                            <b>All Small Businesses</b>
                          </td>
                          <td>79.6%</td>
                          <td>49.6%</td>
                          <td>33.6%</td>
                        </tr>
                        <tr>
                          <td colSpan="6">{" Data provided by the U.S. Bureau of Labor Statistics. "}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p>
                  {"Of course, this doesn’t mean restaurants are an "}
                  <em>easy</em>
                  {" business. But they’re important parts of our communities and a path toward business ownership for so many people."}
                </p>
                <p>And so we shouldn’t discourage people from starting them. Especially with bad data!</p>
              </div>
              <div id="so-why-do-restaurants-end-up-failing" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>So, why do restaurants end up failing?</h2>
                <p>The other week, I was at a major restaurant trade show.</p>
                <p>A restaurant owner came up to me at our booth, pulled me aside, and said he was about to invest over $300,000 in opening his new pizza concept. He wanted to know if I had any advice.</p>
                <p>
                  {"Specifically, he asked: “What "}
                  <em>mistakes</em>
                  {" should I look out for? What are the most common reasons why restaurants fail?”"}
                </p>
                <p>
                  {"Before I could get into the reasons I'd seen in my time running Owner, he said, “"}
                  <strong>Skip the obvious stuff, Adam!</strong>
                  {" I know about location and good food. What reasons might "}
                  <em>not be obvious</em>
                  {" to anyone not in the restaurant industry?”"}
                </p>
                <p>I loved that!</p>
                <div id="i-knew-i-had-to-share-this">
                  <h3>I knew I had to share this...</h3>
                  <p>Over the past five years, Owner.com has been used by restaurants across the country selling every type of cuisine. I’ve seen the numbers behind thousands of restaurants.</p>
                  <p>
                    <strong>{"And I've seen firsthand why restaurants fail."}</strong>
                  </p>
                  <p>
                    {"I started telling this owner what I’d seen. He pulled out his notepad and started taking very careful notes. I knew whatever I shared here I had to make available to restaurant owners later on. Because I want "}
                    <em>more</em>
                    {" restaurants to succeed."}
                  </p>
                  <p>
                    {"So let’s do this. Here are the five "}
                    <strong>non-obvious</strong>
                    {" mistakes that cause restaurants to fail."}
                  </p>
                  <div fs-richtext-component="cta-1" className="blog-content_cta-wrap">
                    <div className="blog-content_cta-wrap-inner">
                      <div>
                        <div className="u-mb-16">
                          <div className="h5">Take back control of your margins, customer data, and online reputation.</div>
                        </div>
                        <div className="body-m">Discover why our new partners increase online sales by an average of 270% in their first three months.</div>
                      </div>
                      <a data-button-instance="" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Get a free demo</div>
                      </a>
                    </div>
                    <div className="blog-content_cta-visual">
                      <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing.avif" loading="lazy" sizes="(max-width: 524px) 100vw, 524px" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing-p-500.avif 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing.avif 524w" alt="Smiling man wearing a hat and gray shirt holding a smartphone displaying a restaurant menu app." className="img-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="5-non-obvious-reasons-why-restaurants-fail" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>5 non-obvious reasons why restaurants fail</h2>
                <p>Luckily, if you know these ahead of time, I’ve seen that you can plan around them. And, in many cases, avoid these issues altogether.</p>
              </div>
              <div id="reason-1-they-fail-to-find-menu-market-fit" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>Reason #1 – They fail to find menu-market fit</h2>
                <p>Menu-market fit means how well your menu fits the demands of your local market. Both parts of this equation matter.</p>
                <p>
                  <strong>A good restaurant can fail in the wrong market.</strong>
                  {" You must meet the needs of the market you’re in. Preferably, an "}
                  <em>unmet</em>
                  {" need. Otherwise, it’s like trying to sell water to a well!"}
                </p>
                <p>Market research can save you a lot of heartache here. And while it may seem complicated, we can do simple market research ourselves.</p>
                <div id="what-to-do-5">
                  <h3>🎯 What to do:</h3>
                </div>
                <div id="1-check-google-for-unmet-demand">
                  <h3>1. Check Google for unmet demand</h3>
                  <p>
                    {"When I go to Google and search for food, it’s usually because I don’t have a place I already "}
                    <em>love</em>
                    {". If I did, I’d just go to them directly. That makes Google a great tool to check for general demand and also "}
                    <strong>unmet demand</strong>
                    {" in your area."}
                  </p>
                  <p>Here are the steps I take:</p>
                  <ol role="list">
                    <li>
                      {"Head over to the "}
                      <a>Google Keyword Planner</a>
                      {" tool (which is free)"}
                    </li>
                    <li>Type in terms that are related to your concept. I recommend checking both the concept and popular cuisine types. For example, “Mexican restaurant” or “best enchiladas” and then select the city I’m in.</li>
                    <li>Then, see how many competitors sell something similar. And be sure to check their reviews.</li>
                  </ol>
                  <p>
                    {"It’s a good sign when the "}
                    <strong>Search Volume to Restaurant ratio</strong>
                    {" is off balance. That’s when lots of people are searching for a specific cuisine type, but there are few competitors with great menus."}
                  </p>
                  <p>{"This means there is clear unmet demand. You’ll have to gauge the competition yourself, so let’s cover that next. "}</p>
                </div>
                <div id="2-check-competitors-for-market-pain">
                  <h3>2. Check competitors for market pain</h3>
                  <figure style={{ "maxWidth": "1474pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f865b_668e7608a6d1bbc__4895ee89" />
                    </div>
                  </figure>
                  <p>
                    {"Guests have "}
                    <em>no</em>
                    {" problem leaving critical feedback. So their reviews may show where local competition has left potential "}
                    <strong>market gaps</strong>
                    {" open."}
                  </p>
                  <p>Here’s where I find the 4Ps of marketing really useful. And there’s no need to break out the old college textbook! Just look at reviews for competitors and place orders with all of them. Then make notes in each of the four categories:</p>
                  <ul role="list">
                    <li>
                      <strong>Product:</strong>
                      {" How’s the quality of available options? Do customers only like specific dishes? Is there a lack of a "}
                      <em>great</em>
                      {" option for a popular dish?"}
                    </li>
                    <li>
                      <strong>Place:</strong>
                      {" What does their location look like? How convenient is it to get there? Do they offer online ordering, or is takeout available?"}
                    </li>
                    <li>
                      <strong>Price:</strong>
                      {" Does the price match food quality? Do customers bring up the price a lot? Do the prices fit the local market?"}
                    </li>
                    <li>
                      <strong>Promotion:</strong>
                      {" Do customers mention how they found the restaurant? Is this place involved in any community events?"}
                    </li>
                  </ul>
                </div>
              </div>
              <div id="reason-2-they-fail-to-build-a-clear-and-distinct-brand" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>Reason #2 – They fail to build a clear and distinct brand</h2>
                <p>Brand is the set of expectations people have when they think about your restaurant. When someone walks in your door, places an order, or tells a friend, “brand” is whatever they think of first.</p>
                <p>
                  {"The best restaurant brands are "}
                  <strong>focused</strong>
                  {". I’ve seen the same problem happen time and time again; unfocused brands make "}
                  <em>everything</em>
                  {" about running a restaurant harder. Specifically, these issues:"}
                </p>
                <ul role="list">
                  <li>
                    <strong>You aren’t known for anything.</strong>
                    {" Great restaurants stick out in customer’s minds for "}
                    <em>specific</em>
                    {" reasons. “Oh, you "}
                    <em>have</em>
                    {" to go there. The food and atmosphere is perfect to start a night out!” The worst thing that can happen is your restaurant falls in the messy middle with everyone else. "}
                  </li>
                  <li>
                    <strong>Your menu gets out of control.</strong>
                    {" Some of the most successful restaurants I’ve seen have slim menus. Bloated menus make it hard to be great at any single cuisine. But they also make food storage, training cooks and staff, and pricing your menu much more complicated."}
                  </li>
                </ul>
                <p>The solution to this isn’t to redo your logo—at least not yet. It’s much better to start with an ideal customer and then reach them with a brand that fits them.</p>
                <div id="what-to-do-4">
                  <h3>🎯 What to do:</h3>
                </div>
                <div id="1-choose-your-ideal-customer">
                  <h3>1. Choose your ideal customer</h3>
                  <figure style={{ "maxWidth": "1435pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f86e4_668e7608a6d1bbc__c1c764bd" />
                    </div>
                  </figure>
                  <p>
                    {"Your ideal customer is who your restaurant and menu feel "}
                    <em>perfect</em>
                    {" for. To increase your chances of success, shape your ideal customer on the evidence you’ve already seen:"}
                  </p>
                  <ul role="list">
                    <li>Based on what you know about your market (see above)</li>
                    <li>
                      {"Based on a "}
                      <em>real</em>
                      {" customer who has spent an outsized amount at your restaurant"}
                    </li>
                  </ul>
                  <p>
                    <A href="/case-studies/talkin-tacos">Talkin’ Tacos</A>
                    {" understood this from the beginning. Centered in Miami, they’re surrounded by a young, vibrant crowd. So their brand meets the expectations of that type of customer with vivid colors, bold Mexican art, and trendy dishes—including birria tacos and even birria ramen! They’re able to build a great brand because they "}
                    <em>know</em>
                    {" who they appeal to."}
                  </p>
                </div>
                <div id="2-shape-your-brand-to-match-your-customer">
                  <h3>2. Shape your brand to match your customer</h3>
                  <figure style={{ "maxWidth": "840pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f8659_668e7608a6d1bbc__d5049de7" />
                    </div>
                  </figure>
                  <p>Once you know what sort of customer you want, shaping your brand starts to feel like a puzzle. And that’s much better than a completely blank page.</p>
                  <p>
                    {"Shaping your brand mostly comes down to what you "}
                    <strong>sell</strong>
                    {", what you "}
                    <strong>say</strong>
                    {", and how you "}
                    <strong>serve</strong>
                    {" customers. When these are all working together, your brand becomes clear to customers."}
                  </p>
                  <p>
                    <A href="/case-studies/metro-pizza">Metro Pizza</A>
                    {" is an excellent example. They're one of the top 20 highest-volume pizzerias in the entire country. They pride themselves on being the neighborhood pizzeria for the suburbs of Las Vegas, for families and older residents. As a result, their brand is comforting, authentic, homey, and convenient. And everything about their brand tells that story and sets those expectations."}
                  </p>
                </div>
              </div>
              <div id="reason-3-they-dont-control-their-margins" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>Reason #3 – They don’t control their margins</h2>
                <p>
                  {"The business that can spend the most to acquire each customer usually wins in the long run. That’s why margins matter—you have to make money on dishes even "}
                  <em>after</em>
                  {" service and marketing expenses."}
                </p>
                <p>
                  {"The thing is, "}
                  <strong>{"lowering quality to lower "}</strong>
                  <A href="/blog/restaurant-costs">
                    <strong>restaurant costs</strong>
                  </A>
                  <strong>{" rarely works."}</strong>
                  {" If anything, guests will put up with a lot as long as the food is "}
                  <em>amazing</em>
                  . So we have to improve our margins in other ways:
                </p>
                <div id="what-to-do-3">
                  <h3>🎯 What to do:</h3>
                </div>
                <div id="1-first-know-your-profit-margins">
                  <h3>1. First, know your profit margins</h3>
                  <figure style={{ "maxWidth": "1600pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f861c_668e7608a6d1bbc__b672ff83" />
                    </div>
                  </figure>
                  <p>
                    {"We know "}
                    <A href="/blog/average-restaurant-profit-margin">restaurant profit margins</A>
                    {" are slim. But we can’t improve our profit margins until we know "}
                    <em>exactly</em>
                    {" what our profit margins are. That way, we can closely track if our efforts are having an impact over time."}
                  </p>
                  <p>There are actually two types of profit margins you should track. Here’s a quick explanation of each:</p>
                  <p>
                    <strong>{"Gross Profit Margin: "}</strong>
                  </p>
                  <ul role="list">
                    <li>Focuses on revenue vs. the cost of the food you sell.</li>
                    <li>Subtract the cost of goods sold (COGS) from your total revenue, and then divide that number by your total revenue.</li>
                    <li>
                      <em>Useful for:</em>
                      {" Setting menu pricing and monitoring inventory management."}
                    </li>
                  </ul>
                  <p>
                    <strong>Net Profit Margin:</strong>
                    {" "}
                  </p>
                  <ul role="list">
                    <li>Takes all expenses into account; not just food costs</li>
                    <li>Subtract all your operating expenses from your total revenue, then divide that number by your total revenue.</li>
                    <li>Operating expenses should include labor costs, marketing expenses, rent, and any other expenses that go into your business’s operating costs.‍</li>
                    <li>
                      <em>Useful for:</em>
                      {" Identifying cost leaks and tracking your restaurant’s financial health."}
                    </li>
                  </ul>
                </div>
                <div id="2-earn-more-direct-orders">
                  <h3>2. Earn more direct orders</h3>
                  <p>
                    {"Truthfully, it’s "}
                    <em>hard</em>
                    {" to influence profit margins. But one of the most universal ways to do it is to earn more direct online orders vs. orders coming in from third-party apps."}
                  </p>
                  <p>Third-party apps charge commissions for many orders. So the more orders we can move over to our website or branded mobile app, the fewer fees we’ll pay. That’s an instant boost to our margins.</p>
                </div>
                <div id="3-upsell-to-increase-check-size">
                  <h3>3. Upsell to increase check size</h3>
                  <p>
                    {"As a general rule, restaurants should charge 3x times the food cost of the dish to help "}
                    <A href="/blog/how-to-increase-average-check-size">increase check size</A>
                    . But if we triple the price of say, chicken parm, it could get wildly expensive. Instead, we’ll set a price on the higher end. Then we’ll add complementary dishes to our menu—dishes designed to be upsold with the chicken parm, like garlic breadsticks.
                  </p>
                  <p>
                    {"These items are almost "}
                    <em>pure profit</em>
                    . So we’ll pair them with chicken parm on our online menu and train staff to suggest them when it’s ordered. This improves the profitability of the entire meal.
                  </p>
                </div>
                <div id="4-keep-menus-focused">
                  <h3>4. Keep menus focused</h3>
                  <p>Super large menus only work for the Cheesecake Factory. For small independent restaurants, they become deadly. Spoilage becomes an issue, which drives food costs up.</p>
                  <p>{"Quality control ends up slipping because it’s too confusing for the kitchen to master 40 different dishes. If you have a simple menu like Chick-fil-A, it makes your operations 10x easier. You don't need to have dozens of menu items—which reduces spoilage and keeps food costs down overall."}</p>
                  <figure style={{ "paddingBottom": "56.206088992974244%" }} className="w-richtext-align-fullwidth w-richtext-figure-type-video">
                    <div>
                      <div data-removed="iframe" style={{ "width": "706px", "height": "397px" }}></div>
                    </div>
                  </figure>
                </div>
              </div>
              <div id="reason-4-they-fail-to-get-repeat-customers" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>Reason #4 – They fail to get repeat customers</h2>
                <p>
                  {"Data shows regulars can make up to "}
                  <strong>65-80% of a typical restaurant’s profits</strong>
                  {". Unless you’re in a tourist area, regulars "}
                  <em>really</em>
                  {" matter."}
                </p>
                <p>{"It’s also true that it’s a noisy world out there. Sometimes customers don’t return just because they got busy. That’s why the most successful restaurants I know work hard to stay top of mind with their guests. "}</p>
                <p>Fortunately, that’s not so hard to do with the right tools and tactics:</p>
                <div id="what-to-do-2">
                  <h3>🎯 What to do:</h3>
                </div>
                <div id="1-make-sure-to-capture-customer-data">
                  <h3>1. Make sure to capture customer data</h3>
                  <p>The first step makes all the others possible! It’s simple: If you collect customer data at checkout, you’ll be able to reach customers later.</p>
                  <p>
                    {"Email and phone numbers are what matter most. These are a direct line to your customers that aren’t affected by an algorithm. They’re marketing channels "}
                    <em>you</em>
                    {" control."}
                  </p>
                  <p>With Owner.com, this is turned on by default. You may have to work with your web developer to capture this information if you’re on another platform.</p>
                </div>
                <div id="2-set-up-automatic-campaigns">
                  <h3>2. Set up automatic campaigns</h3>
                  <p>
                    {"Every point where a customer makes a decision about your restaurant is part of the “customer lifecycle.” Personally, I prefer to focus on the "}
                    <strong>key moments.</strong>
                  </p>
                  <p>
                    {"These are the few moments that "}
                    <em>really</em>
                    {" matter. At each moment, you can send an automated message to influence a customer’s next move in your favor."}
                  </p>
                  <p>
                    {"Not sure where to start? These are two of the "}
                    <em>most profitable</em>
                    {" campaigns I know to send during a key customer moment:"}
                  </p>
                  <p>
                    <strong>{"Days after a guest’s first order: "}</strong>
                    {"Owner’s “You might also like…” template is one of my favorites. Rahul from "}
                    <A href="/case-studies/saffron">Saffron Indian Kitchen</A>
                    {" sends a great one. After a customer’s first online order, Rahul uses Owner to automatically send customers recommendations by email, all based on what they ordered. Rahul earned $4,000 in repeat orders just 30 days after setting these emails live."}
                  </p>
                  <figure style={{ "maxWidth": "1080pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f8657_668e7608a6d1bbc__e54c45a6" />
                    </div>
                  </figure>
                  <p>
                    <strong>{"When guests start slipping away. "}</strong>
                    {"Phillip, the founder of "}
                    <A href="/case-studies/sushi-me-rollin">Sushi Me Rollin’</A>
                    {", sends an awesome “win-back” campaign. He uses Owner to message customers who’ve ordered over 3 times, but who haven't ordered in 45 days. These emails/texts share a customer’s past orders and offer a special discount to reorder. This campaign worked right away—Phillip quickly saw $1,500 in new orders per month."}
                  </p>
                </div>
                <div id="3-make-it-easy-to-reorder-with-a-mobile-app">
                  <h3>3. Make it easy to reorder with a mobile app</h3>
                  <p>
                    {"Regulars "}
                    <em>really</em>
                    {" like the convenience of mobile apps—they can order “the usual” in just a few taps. Or grab a quick impulse snack from their phone."}
                  </p>
                  <p>
                    {"At Owner, we’ve built thousands of custom "}
                    <A href="/blog/mobile-app-for-restaurants">restaurant mobile apps</A>
                    . And our data proves they work:
                  </p>
                  <ul role="list">
                    <li>
                      {"Restaurants with apps get "}
                      <strong>85% more return customers</strong>
                      {" than restaurants without an app."}
                    </li>
                    <li>
                      {"Regulars who use a restaurant’s app order "}
                      <strong>2x more on average</strong>
                      {" than non-app customers."}
                    </li>
                  </ul>
                  <p>
                    {"There’s another benefit: Apps save your business "}
                    <em>thousands</em>
                    {" in third-party fees. That’s because frequent regulars are now ordering from you "}
                    <a>instead of DoorDash</a>
                    {" or Uber Eats."}
                  </p>
                </div>
                <div id="4-offer-a-rewards-program-to-return">
                  <h3>4. Offer a rewards program to return</h3>
                  <figure style={{ "maxWidth": "1580pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f861a_668e7608a6d1bbc__d4901c27" />
                    </div>
                  </figure>
                  <p>
                    ‍
                    <A href="/blog/restaurant-loyalty-programs">Restaurant loyalty programs</A>
                    {" are effective because they “gamify” the act of reordering. This is really just a phrase psychologists use to say, “People like completing things when they (a) have a clear goal and (b) can see their progress.”"}
                  </p>
                  <p>
                    {"Loyalty programs give guests "}
                    <em>both</em>
                    {" of these things. We’ve seen that when you apply the next two techniques, your loyalty program is almost sure to increase order frequency and average order size:"}
                  </p>
                  <ul role="list">
                    <li>
                      <strong>Use points-based rewards.</strong>
                      {" If you hand customers a blanket $10 reward, they’ll probably use it right away and likely on a high-ticket item. With points, customers are more inclined to order more in order to reach the next milestone. And, you can select the rewards that work best with your current margins. Which brings us to..."}
                    </li>
                    <li>
                      <strong>Reward guests with low-ticket items.</strong>
                      {" It’s smart to limit your rewards to menu items that complement main dishes and already have high margins. This way, the customer still feels "}
                      <em>great</em>
                      . But you don’t eat into the margins for your higher-ticket items—like meat-based dishes.
                    </li>
                  </ul>
                  <div className="w-embed">
                    <div className="blue-box">
                      <p>
                        <strong>💡 Tip from Adam:</strong>
                        {" Loyalty programs work "}
                        <em>great</em>
                        {" with custom mobile apps. Your mobile app is already home to your most frequent customers. And, loyalty programs offer a great incentive for regulars to download the app. "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="reason-5-they-ruin-first-impressions-with-a-bad-online-experience" style={{ "scrollMarginTop": "5.625em" }}>
                <h2>Reason #5 – They ruin first impressions with a bad online experience</h2>
                <p>Can a bad website and online ordering really sink your restaurant?</p>
                <p>
                  <strong>If you offer delivery or takeout? Absolutely</strong>
                  {". A "}
                  <a>study</a>
                  {" on "}
                  <em>Restaurant Dive</em>
                  {" found that 77% of diners visit a restaurant’s website before they decide to order takeout from a restaurant. "}
                </p>
                <p>
                  {"Your website "}
                  <em>is</em>
                  {" your restaurant’s first impression. Especially for delivery and takeout orders."}
                </p>
                <p>Fortunately, there’s good news. Through my product, Owner.com, I’ve seen the data for thousands of restaurant websites. And I’ve seen one winning formula work extremely well regardless of restaurant type:</p>
                <div id="what-to-do">
                  <h3>🎯 What to do:</h3>
                </div>
                <div id="1-nail-the-first-impression-with-your-homepage">
                  <h3>1. Nail the first impression with your homepage</h3>
                  <figure style={{ "maxWidth": "1200pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f861b_668e7608a6d1bbc__0ea10cfa" />
                    </div>
                  </figure>
                  <p>Our first priority is to leave a great initial impression. We have a few seconds to make this impression. That’s why I always encourage restaurant owners to nail these two things on their homepage:</p>
                  <ul role="list">
                    <li>
                      <strong>Clear headline up front.</strong>
                      {" Guests make split decisions on the homepage. So let’s place a headline at the top that helps guests quickly understand what we specialize in. An example would be, “Our family's handmade recipes brought from Sicily, Italy to Lakeside, California.” "}
                    </li>
                    <li>
                      <strong>Highlight popular dishes.</strong>
                      {" People eat with their eyes. We must catch their attention by pairing our words with a strong, mouth-watering visual. I like an overhead shot of popular dishes or even a single shot of our “signature” item."}
                    </li>
                  </ul>
                  <p>I see restaurant website conversion rates consistently go from 2%–3% to over 15% by pairing this change with the one below. So keep reading!</p>
                </div>
                <div id="2-follow-a-proven-formula-for-online-ordering">
                  <h3>2. Follow a proven formula for online ordering</h3>
                  <figure style={{ "maxWidth": "1136pxpx" }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                    <div>
                      <img loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f865a_668e7608a6d1bbc__529500e1" />
                    </div>
                  </figure>
                  <p>A great first impression gets guests to stick around. Now we need to make placing an order simple and appealing enough to do.</p>
                  <p>
                    {"We’ve tested this "}
                    <em>extensively</em>
                    {" at Owner. Here are 3 things your online ordering must have:"}
                  </p>
                  <ul role="list">
                    <li>
                      <strong>Accelerated checkout.</strong>
                      {" The time to finish an order matters a lot. But when I say “accelerated checkout,” I specifically mean checkout options like Apple Pay. Some guests love these options and will default to using them everywhere."}
                    </li>
                    <li>
                      <strong>Detailed photos.</strong>
                      {" We already have our hero image at the top of the homepage. Now we need to make sure "}
                      <em>all</em>
                      {" of our menu items are paired with similarly "}
                      <em>great</em>
                      {" food photography. This helps catch and keep a guest’s interest when they’re browsing specific menu items."}
                    </li>
                    <li>
                      <strong>Social proof.</strong>
                      {" A guest’s next question is, what do people in my community think of this place? That’s why, under the most popular dishes, I always recommend showcasing reviews and a star rating so guests can see your food has ‘wowed’ other diners."}
                    </li>
                  </ul>
                  <p>
                    {"We bake all of the above into "}
                    <A href="/online-ordering">Owner’s online ordering experience</A>
                    {". It’s a huge reason why websites on Owner.com "}
                    <strong>convert 2-4x better</strong>
                    {" than average restaurant websites."}
                  </p>
                  <div fs-richtext-component="cta-1" className="blog-content_cta-wrap">
                    <div className="blog-content_cta-wrap-inner">
                      <div>
                        <div className="u-mb-16">
                          <div className="h5">Take back control of your margins, customer data, and online reputation.</div>
                        </div>
                        <div className="body-m">Discover why our new partners increase online sales by an average of 270% in their first three months.</div>
                      </div>
                      <a data-button-instance="" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Get a free demo</div>
                      </a>
                    </div>
                    <div className="blog-content_cta-visual">
                      <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing.avif" loading="lazy" sizes="(max-width: 524px) 100vw, 524px" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing-p-500.avif 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing.avif 524w" alt="Smiling man wearing a hat and gray shirt holding a smartphone displaying a restaurant menu app." className="img-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-author_wrap">
              <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png" loading="lazy" alt="" sizes="100vw" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-800.png 800w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png 1484w" className="blog-author_img" />
              <div className="blog-author_wrap-inner">
                <div>
                  <div className="u-mb-8">
                    <div className="body-m text-weight-semibold">
                      <span>Hengameh Stanfield</span>
                      <span></span>
                      <span className="opacity-70">Head of Community, Owner</span>
                    </div>
                  </div>
                  <div className="opacity-70">
                    <p className="body-m">{"Hengam Stanfield is the co-founder of Mattenga's Pizzeria, a seven-location restaurant group in San Antonio, TX. A former electrical engineer turned restaurateur, she applies a data-driven mindset to operations and marketing. Her work has been featured in PMQ Pizza Magazine, INC., Food & Wine, and Martha Stewart Living. Mattenga's has been voted Best Pizza in San Antonio and named Pizzeria of the Year by Pizza Today."}</p>
                  </div>
                </div>
                <div className="blog-author_social-wrap">
                  <div className="body-s">Follow us</div>
                  <ul role="list" className="blog-author_social-list">
                    <li>
                      <a target="_blank" className="blog-social_link w-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 25" fill="none" className="icon_24">
                          <g clipPath="url(#clip0_7845_2874)">
                            <path d="M24 12.2266C24 5.59915 18.6274 0.226562 12 0.226562C5.37258 0.226562 0 5.59915 0 12.2266C0 18.854 5.37258 24.2266 12 24.2266C18.6274 24.2266 24 18.854 24 12.2266Z" fill="#090A0B" />
                            <path d="M5.72324 8.11174C5.40718 7.81829 5.25 7.45505 5.25 7.02286C5.25 6.59067 5.40802 6.21145 5.72324 5.91716C6.0393 5.62371 6.44615 5.47656 6.94462 5.47656C7.44309 5.47656 7.83397 5.62371 8.14919 5.91716C8.46525 6.21061 8.62243 6.57974 8.62243 7.02286C8.62243 7.46598 8.46441 7.81829 8.14919 8.11174C7.83313 8.40519 7.43216 8.55234 6.94462 8.55234C6.45708 8.55234 6.0393 8.40519 5.72324 8.11174ZM8.35681 9.7951V18.792H5.51478V9.7951H8.35681Z" fill="#FEFFFC" />
                            <path d="M17.8127 10.6848C18.4322 11.3575 18.7416 12.2807 18.7416 13.4562V18.6341H16.0424V13.8211C16.0424 13.2283 15.8886 12.7675 15.5818 12.4396C15.275 12.1117 14.8614 11.9469 14.3436 11.9469C13.8258 11.9469 13.4122 12.1108 13.1054 12.4396C12.7986 12.7675 12.6448 13.2283 12.6448 13.8211V18.6341H9.92969V9.7708H12.6448V10.9463C12.9196 10.5545 13.2904 10.245 13.7561 10.0172C14.2217 9.7893 14.7454 9.67578 15.3279 9.67578C16.3652 9.67578 17.194 10.013 17.8127 10.6848Z" fill="#FEFFFC" />
                          </g>
                          <defs>
                            <clipPath id="clip0_7845_2874">
                              <rect width="24" height="25" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" className="blog-social_link w-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 25" fill="none" className="icon_24">
                          <rect y="0.226562" width="24" height="24" rx="12" fill="#090A0B" />
                          <path d="M19.7442 9.85032C19.6498 8.93879 19.4465 7.93113 18.6986 7.40158C18.1193 6.99093 17.3579 6.97575 16.647 6.97659C15.1444 6.97659 13.6409 6.97912 12.1383 6.97997C10.693 6.98165 9.24767 6.9825 7.80238 6.98418C7.19863 6.98418 6.61174 6.9378 6.05099 7.1992C5.5695 7.4235 5.19258 7.85018 4.96575 8.32492C4.65123 8.98517 4.58546 9.73311 4.54751 10.4633C4.47752 11.7931 4.48511 13.1263 4.56859 14.4552C4.63015 15.4249 4.78614 16.4967 5.53578 17.1147C6.20024 17.662 7.13791 17.689 7.99969 17.6898C10.7351 17.6924 13.4714 17.6949 16.2077 17.6966C16.5585 17.6974 16.9244 17.6907 17.282 17.6519C17.9852 17.576 18.6556 17.3745 19.1076 16.8533C19.5637 16.328 19.681 15.5969 19.7501 14.9046C19.9188 13.2249 19.9171 11.5292 19.7442 9.85032ZM10.5564 14.6913V9.98186L14.6342 12.3362L10.5564 14.6913Z" fill="white" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" className="blog-social_link w-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 25" fill="none" className="icon_24">
                          <rect y="0.226562" width="24" height="24" rx="12" fill="#090A0B" />
                          <path d="M4.53448 5.47656L10.0687 12.8759L4.5 18.8921H5.75365L10.6295 13.6251L14.5687 18.8921H18.8341L12.9888 11.0765L18.1724 5.47656H16.9187L12.4288 10.3273L8.80073 5.47656H4.53531H4.53448ZM6.37752 6.3998H8.3366L16.9894 17.9689H15.0303L6.37752 6.3998Z" fill="white" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-content_custom-el">
              <div fs-richtext-component="cta-banner" className="blog-content_custom-cta">
                <div className="blog-content_custom-cta_inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48" fill="none" className="icon-32">
                    <path d="M36.5 41.8L43.8 34.5L41.7 32.4L38 36.1V27.05H35V36.1L31.3 32.4L29.2 34.5L36.5 41.8ZM29 48V45H44V48H29ZM11 40C10.2 40 9.5 39.7 8.9 39.1C8.3 38.5 8 37.8 8 37V7C8 6.2 8.3 5.5 8.9 4.9C9.5 4.3 10.2 4 11 4H26.3L38 15.7V24.05H35V17H25V7H11V37H26V40H11Z" fill="#088924" />
                  </svg>
                  <p className="body-m w-dyn-bind-empty"></p>
                </div>
                <a data-button-instance="" href="#" className="btn w-inline-block">
                  <div data-button-text="" className="btn-text"></div>
                </a>
              </div>
            </div>
            <div className="blog-content_custom-el">
              <div fs-richtext-component="cta-modal" className="blog-content_custom-cta">
                <div className="blog-content_custom-cta_inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-32">
                    <path d="M3 17L9 11L13 15L21 7" stroke="#088924" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 7L21 7L21 11" stroke="#088924" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="body-m w-dyn-bind-empty"></p>
                </div>
                <a data-button-instance="" href="#" className="btn w-inline-block">
                  <div data-button-text="" className="btn-text"></div>
                </a>
              </div>
            </div>
            <div className="blog-content_custom-el">
              <div fs-richtext-component="custom-quote" className="blog-content_custom-quote-wrap">
                <div className="blog-content_custom-quote_shape">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 21" fill="none" className="blog-content_custom-quote-icon">
                    <path d="M10.0901 10.3736V20.3917H0V13.761C0 11.2625 0.432433 8.98016 1.2973 6.91408C2.16216 4.84799 3.62763 2.7819 5.69369 0.71582L9.44144 3.59873C8.28829 4.89604 7.37538 6.07323 6.7027 7.13029C6.07808 8.18736 5.66967 9.26845 5.47748 10.3736H10.0901ZM24 10.3736V20.3917H13.9099V13.761C13.9099 11.2625 14.3423 8.98016 15.2072 6.91408C16.0721 4.84799 17.5375 2.7819 19.6036 0.71582L23.3514 3.59873C22.1982 4.89604 21.2853 6.07323 20.6126 7.13029C19.988 8.18736 19.5796 9.26845 19.3874 10.3736H24Z" fill="#0A0909" />
                  </svg>
                  <div className="blog-content_custom-quote_line"></div>
                </div>
                <div className="blog-content_custom-quote_box">
                  <div className="text-style-italic">
                    <div className="body-m w-dyn-bind-empty"></div>
                  </div>
                  <div className="blog-content_custom-quote_person">
                    <div className="body-m w-dyn-bind-empty"></div>
                    <div className="opacity-70">
                      <div className="text-color-grey">
                        <div className="body-m w-dyn-bind-empty"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-content_custom-el"></div>
            <div className="blog-content_custom-el">
              <div fs-richtext-component="cta-custom" className="blog-content_cta-wrap">
                <div className="blog-content_cta-wrap-inner">
                  <div>
                    <div className="u-mb-16">
                      <div className="h5 w-dyn-bind-empty"></div>
                    </div>
                    <div className="body-m">Discover why our new partners increase online sales by an average of 270% in their first three months.</div>
                  </div>
                  <a data-button-instance="" className="btn w-inline-block">
                    <div data-button-text="" className="btn-text">Get a free demo</div>
                  </a>
                </div>
                <div className="blog-content_cta-visual">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6d82d24bcb2f1a7579a3a_next-marketing.avif" loading="lazy" alt="" className="img-cover w-dyn-bind-empty" />
                </div>
              </div>
            </div>
            <div className="blog-content_custom-el">
              <div className="blog-content_custom-table">
                <div className="table-css w-embed"></div>
                <div className="blog_table w-embed">
                  <table className="owner-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Column1</th>
                        <th>Column2</th>
                        <th>Column3</th>
                        <th>Column4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>cell1_1</td>
                        <td>cell2_1</td>
                        <td>cell3_1</td>
                        <td>cell4_1</td>
                        <td>cell5_1</td>
                      </tr>
                      <tr>
                        <td>cell1_2</td>
                        <td>cell2_2</td>
                        <td>cell3_2</td>
                        <td>cell4_2</td>
                        <td>cell5_2</td>
                      </tr>
                      <tr>
                        <td>cell1_3</td>
                        <td>cell2_3</td>
                        <td>cell3_3</td>
                        <td>cell4_3</td>
                        <td>cell5_3</td>
                      </tr>
                      <tr>
                        <td>cell1-1</td>
                        <td>
                          <div className="owner-table_icon is-true">Yes</div>
                        </td>
                        <td>
                          <div className="owner-table_icon is-false">No</div>
                        </td>
                        <td>
                          <div className="owner-table_icon is-true">Yes</div>
                        </td>
                        <td>
                          <div className="owner-table_icon is-false">No</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-content_column">
            <div className="blog-content_column-head">
              <div className="blog-content_column-visual">
                <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png" loading="lazy" alt="" sizes="100vw" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-800.png 800w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png 1484w" className="img-cover" />
              </div>
              <div>
                <div className="body-s">
                  <span>{"By "}</span>
                  <span>Hengameh Stanfield</span>
                </div>
                <div className="opacity-70">
                  <div className="text-color-grey">
                    <div className="body-s">Head of Community, Owner</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-content_column-toc">
              <div className="text-style-allcaps">
                <div className="body-s">In this article</div>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#whats-the-real-restaurant-failure-rate" className="blog-content_column-link">What’s the real restaurant failure rate?</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#so-why-do-restaurants-end-up-failing" className="blog-content_column-link">So, why do restaurants end up failing?</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#5-non-obvious-reasons-why-restaurants-fail" className="blog-content_column-link">5 non-obvious reasons why restaurants fail</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#reason-1-they-fail-to-find-menu-market-fit" className="blog-content_column-link">Reason #1 – They fail to find menu-market fit</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#reason-2-they-fail-to-build-a-clear-and-distinct-brand" className="blog-content_column-link">Reason #2 – They fail to build a clear and distinct brand</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#reason-3-they-dont-control-their-margins" className="blog-content_column-link">Reason #3 – They don’t control their margins</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#reason-4-they-fail-to-get-repeat-customers" className="blog-content_column-link">Reason #4 – They fail to get repeat customers</a>
              </div>
              <div className="blog-content_column-toc_inner">
                <a fs-toc-element="link" href="#reason-5-they-ruin-first-impressions-with-a-bad-online-experience" className="blog-content_column-link">Reason #5 – They ruin first impressions with a bad online experience</a>
              </div>
            </div>
            <div className="blog-content_column-sticky">
              <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69c6c8cd32c85db890e08b28_website-cta-scores.avif" loading="lazy" alt="Ranked pizza restaurants list showing Pizza Club first with score 99, The Cheesy Crust second with 74, Your restaurant third with 52, The Saucy Slice fourth with 48, and Pizzalicious fifth with 28." className="blog-content_column-img" />
              <div className="blog-content_column-text-box">
                <div className="u-mb-12">
                  <div className="h5">{"See how your restaurant's website stacks up against local competitors"}</div>
                </div>
                <div className="u-mb-16">
                  <div className="blog-content_column-sticky_inner">
                    <div className="blog-content_column-visual is-small">
                      <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png" loading="lazy" alt="" sizes="100vw" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-800.png 800w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%25202025-11-19%2520at%25205.38.21%25E2%2580%25AFPM-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89c5_Screenshot%202025-11-19%20at%205.38.21%E2%80%AFPM.png 1484w" className="img-cover" />
                    </div>
                    <div className="body-s">
                      <span>Hengameh Stanfield</span>
                      <span>{" - "}</span>
                      <span>Head of Community, Owner</span>
                    </div>
                  </div>
                </div>
                <a data-button-instance="" target="_blank" className="btn w-inline-block is-link is-green">
                  <div data-button-text="" className="btn-text">{"See your website's grade"}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
