// IA section(s): content.section-blog-topics (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Explore topics — the section's real markup, read from the rendered page (route /blog, section 3).
export default function ExploreTopics() {
  return (
    <section data-section-overlap="" className="section-blog_topics" data-clone-section="ExploreTopics">
      <div className="container-large">
        <div className="blog-topics_wrap">
          <div className="text-align-center">
            <h2 className="h1">Explore topics</h2>
          </div>
          <div className="max-width-767 w-dyn-list">
            <div role="list" className="topics_list w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <A href="/blog-category/increase-sales" className="blog-topics_link w-inline-block">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69cd2c27954e966735ce4b3a_increase_sales%201.svg" loading="lazy" alt="" className="icon_24" />
                  <div className="h6">Increase Online Sales</div>
                </A>
              </div>
              <div role="listitem" className="w-dyn-item">
                <A href="/blog-category/restaurant-software" className="blog-topics_link w-inline-block">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69cd2c2f6c651937eec75789_apps%201.svg" loading="lazy" alt="" className="icon_24" />
                  <div className="h6">Restaurant Software</div>
                </A>
              </div>
              <div role="listitem" className="w-dyn-item">
                <A href="/blog-category/marketing-strategy" className="blog-topics_link w-inline-block">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69cd2c037b3a372a060b0fd6_marketing%201.svg" loading="lazy" alt="" className="icon_24" />
                  <div className="h6">Marketing Strategy</div>
                </A>
              </div>
              <div role="listitem" className="w-dyn-item">
                <A href="/blog-category/restaurant-websites" className="blog-topics_link w-inline-block">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69cd2c1b6619f9251e3ec14f_website%201.svg" loading="lazy" alt="" className="icon_24" />
                  <div className="h6">Restaurant Websites</div>
                </A>
              </div>
              <div role="listitem" className="w-dyn-item">
                <A href="/blog-category/industry-trends-data" className="blog-topics_link w-inline-block">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69cd2c0fa8570fcf936cd3b6_industry%201.svg" loading="lazy" alt="" className="icon_24" />
                  <div className="h6">{"Industry Trends & Data"}</div>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
