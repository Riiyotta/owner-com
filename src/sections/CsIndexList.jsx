import A from "../lib/A.jsx";

// cs-index_list — the section's real markup, read from the rendered page (route /case-studies, section 2).
export default function CsIndexList() {
  return (
    <div role="list" className="cs-index_list w-dyn-items" data-clone-section="CsIndexList">
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ec72c98da1d65ceb82_69f4f3a049b16655ed874c2f_69b9330c8b70142e4e5f89d8_metro-pizza.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Metro Pizza increased direct online sales by $10,000/m by switching to Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$112,000</strong>
                        Sales
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+54%</strong>
                        {" Growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$29,000</strong>
                        {" Savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>John</span>
                    <span></span>
                    <span>{"& Sam"}</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owners at Metro Pizza</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/metro-pizza" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-src={"/_ext/player.vimeo.com/progressive_redirect/playback/1176311571/rendition/2160p/file.mp4%20%282160p%29.mp4?loc=external&signature=5d553ea2575ef8655cd55c6f3b2286b73955945cf0c780356809af645fe0697c"} data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3db4f409beeb292f302_69f4f2e86e8431ad6304d89e_69d02cac741342fb4596713a_(FullRes)%252520Owners_Salud_NewHampshire_%252540natebcreates-32.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Salud drove $10,000 in online sales in the first 30 days with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$10,000</strong>
                        {" in online sales (first month)"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>50%</strong>
                        {" new sales from SEO"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>#1</strong>
                        {" for local  keywords"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Aaron</span>
                    <span></span>
                    <span>Smith</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Salud</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/salud" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/6a0d1d2142b09f15b1333bb3_Ashley2.jpg" sizes="(max-width: 991px) 100vw, 960px" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/6a0d1d2142b09f15b1333bb3_Ashley2-p-500.jpg 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/6a0d1d2142b09f15b1333bb3_Ashley2-p-800.jpg 800w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/6a0d1d2142b09f15b1333bb3_Ashley2.jpg 1000w" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">{"How Ashley's Cafe grew monthly sales by $30K with Owner POS"}</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$30K</strong>
                        {" monthly sales growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>65%</strong>
                        {" walk-in capture rate"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+44%</strong>
                        {" branded app sales growth"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Ashley</span>
                    <span></span>
                    <span>Lee</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">{"Owner of Ashley's Cafe"}</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/ashleys-cafe" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3dc99fb2bd60b1651b3_69f4f2f3ae64e1a0ceef33b5_69b9330c8b70142e4e5f89ca_karv-card.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Karv Greek Kouzina grew online sales to $40,000/month with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$40,000/m</strong>
                        {" Sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+300%</strong>
                        {" Growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"30% "}</strong>
                        App sales
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Alex</span>
                    <span></span>
                    <span>Lambroulis</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Karv Greek Kouzina</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/karv-greek-kouzina" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ddc133b021f490b97c_69f4f3003f4821360422b8a6_69b9330c8b70142e4e5f89c1_matt-enga.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Mattenga’s Pizzeria drove $192,000 in 30 days with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$192,000</strong>
                        {" sales growth in 30 days"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+15,000</strong>
                        {" more online orders "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>1,000</strong>
                        {" branded app downloads"}
                      </p>
                      <p>‍</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Hengameh</span>
                    <span></span>
                    <span>Stanfield</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">{"Co-owner of Mattenga's Pizzeria"}</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/mattengas-pizzeria" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e8c133b021f490c116_69f4f376370c3a16646c90cf_69b9330c8b70142e4e5f89e0_talkin-taco-2.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Talkin Tacos increased direct online sales to $120,000/m by using Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$7,000,000</strong>
                        {" Sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+970%</strong>
                        {" Growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$435,000</strong>
                        {" Savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Mo</span>
                    <span></span>
                    <span>and Omar</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owners of Talkin Tacos</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/talkin-tacos" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ef49b16655ed8765be_69f4f3d024c21d28cecf21cf_69c9bce5cc9b169c552c19d0_saffron.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Saffron grew direct online sales by $125,000/month after switching to Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$4.5M</strong>
                        {" Total growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>4</strong>
                        {" Locations"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"+$600K "}</strong>
                        Savings on fees
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Rahul</span>
                    <span></span>
                    <span>Bhatia</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Saffron Indian Kitchen</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/saffron" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-src={"/_ext/player.vimeo.com/progressive_redirect/playback/1177074455/rendition/2160p/file.mp4%20%282160p%29.mp4?loc=external&signature=1f9c4de5840ab2fe5b99d9896c0753bca052e3306548d2873a39e4749671f00e"} data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3da699927dde515abba_69f4f2d98f9c1c3d1f01c605_69d03147c95981b0f862efe2_vertical-card.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Rig A’ Tony’s grew higher-ticket catering and cut third-party fees with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+20%</strong>
                        {" Online sales & catering growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>$7k</strong>
                        {" In monthly savings"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>30%</strong>
                        {" Sales through 5-star app"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Lisa</span>
                    <span></span>
                    <span>DeSisto</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">{"Owner of Rig A' Tony's"}</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/rig-a-tonys" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e399fb2bd60b165603_69f4f3412cecb8251e92309b_69b9330c8b70142e4e5f8814_gyro-main-1.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Gyro Concept grew to $194,000 in online sales per year with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$194,000</strong>
                        {" Yearly online sales"}
                      </p>
                      <p>‍</p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+100%</strong>
                        {" Increase in direct orders"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>25%</strong>
                        {" Saved on third-party fees"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Nikitas Bouras</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Gyro Concept</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/gyro-concept" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e749fa60af87715291_69f4f368a0c53f3770f972a8_69b9330c8b70142e4e5f89e2_sushi-me-rollin.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Sushi Me Roll’n increased direct online sales by $50,000 using Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"+$50,000 "}</strong>
                        Sales
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"+47% "}</strong>
                        Growth
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+54%</strong>
                        {" Savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Phillip</span>
                    <span></span>
                    <span>Hang</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">{"Owner of Sushi Me Roll'n"}</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/sushi-me-rollin" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e119aaf3505e1bf5ba_69f4f32b8f9c1c3d1f01f48e_69b9330c8b70142e4e5f8873_Screenshot%2525202025-02-28%252520at%2525206.27.53%2525E2%252580%2525AFPM.png.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How HillCrust Pizza saved thousands and ranked higher on Google with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>20%–25% increase</strong>
                        {" in monthly online sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>Saved thousands</strong>
                        {" in fees after switching"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>$9.5k in online orders</strong>
                        {" in the first month"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Jay</span>
                    <span></span>
                    <span>Saadat</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Co-owner of HillCrust Pizza</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/hillcrust-pizza" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ed76c417dc274b5a84_69f4f3b049b16655ed8753d6_69b9330c8b70142e4e5f89d6_card-headshot.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Doo-Dah Diner increased direct online sales by $72,000 using Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+ $72,000</strong>
                        {" Sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"+54% "}</strong>
                        Growth
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"+$19,000 "}</strong>
                        Savings
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Timirie</span>
                    <span></span>
                    <span>Shibley</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Doo-Dah Diner</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/doo-dah-diner" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e010945e66967e5754_69f4f31d77f9fbc5109f04ba_69c9bcf213ffd797920cb6d8_sdkabobshack.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How San Diego Kabob Shack grew online sales by 60% after switching to Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$9,000</strong>
                        {" first month sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>2X</strong>
                        {" online ordering"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"60% "}</strong>
                        Growth Y/Y
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Said</span>
                    <span></span>
                    <span>Hofiani</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of San Diego Kabob Shack</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/san-diego-kabob-shack" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e210945e66967e58c9_69f4f3384f409beeb292bccb_69b9330c8b70142e4e5f881e_Screenshot%2525202024-12-02%252520at%25252012.28.53%2525E2%252580%2525AFPM.png.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Sushi Addicts grew online orders to $210,000 per year with Owner</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$17,000</strong>
                        {" Monthly online sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+75%</strong>
                        {" Growth in online orders"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$2,000</strong>
                        {" In monthly savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Fernando</span>
                    <span></span>
                    <span>Izaguirre</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Sushi Addicts</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/sushi-addicts" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e95fd7291c18483f69_69f4f38677f9fbc5109f2edc_69b9330c8b70142e4e5f89dd_oaxaca-2.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Samos Oaxaca increased direct online sales to $10,000/m by using Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$150,000</strong>
                        {" Sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+377%</strong>
                        {" Growth"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$70,000</strong>
                        {" Savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Yuliana</span>
                    <span></span>
                    <span>Vasquez</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Samos Oaxaca</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/samos-oaxaca" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ee72c98da1d65cebbf_69f4f3bfc133b021f490ac74_69b9330c8b70142e4e5f89d0_4993.avif.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Cyclo Noodles grew direct online sales by 7X by switching to Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$104,500</strong>
                        {" Sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>{"7X "}</strong>
                        Growth
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$31,000</strong>
                        {" Savings"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Sandy</span>
                    <span></span>
                    <span>Sei</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Cyclo Noodles</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/cyclo-noodles" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e44f409beeb292f5dd_69f4f34b3151fd2b1daecfbb_69b9330c8b70142e4e5f89c0_sarkis-hero2.jpg.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Township Line Pizza grew online sales to $300,000 per year with Owner.com</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$300,000</strong>
                        {" Per year in online sales"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>Hundreds</strong>
                        {" Monthly orders from SEO"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>+$60,000</strong>
                        {" Savings on fees"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Sarkis</span>
                    <span></span>
                    <span>Panossian</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Township Line Pizza</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/township-line-pizza" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="listitem" className="max-width-full w-dyn-item">
        <div data-wf--cs-card--variant="big" className="cs-index_item">
          <div className="cs-index_visual">
            <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
              <div data-player-before="" className="bunny-player__before"></div>
              <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
              <img width="960" loading="lazy" alt="" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3de370c3a16646cd67b_69f4f30f3f4821360422c42f_69b9330c8b70142e4e5f887a_Screenshot%2525202025-03-16%252520at%2525209.01.25%2525E2%252580%2525AFPM.png.avif" className="bunny-player__placeholder" />
              <div className="bunny-player__dark"></div>
              <div data-player-control="playpause" className="bunny-player__playpause">
                <div className="bunny-player__meta">
                  <div className="bunny-player__content">
                    <div className="text-color-muted">
                      <div className="body-s">Play the video</div>
                    </div>
                  </div>
                  <div data-transition="" className="bunny-player__big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bunny-player__interface">
                <div className="bunny-player__interface-fade"></div>
                <div className="bunny-player__interface-bottom">
                  <div data-player-control="playpause" className="bunny-player__toggle-playpause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__pause-svg">
                      <path d="M16 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                      <path d="M8 5V19" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__play-svg">
                      <path d="M6 12V5.01109C6 4.05131 7.03685 3.4496 7.87017 3.92579L14 7.42855L20.1007 10.9147C20.9405 11.3945 20.9405 12.6054 20.1007 13.0853L14 16.5714L7.87017 20.0742C7.03685 20.5503 6 19.9486 6 18.9889V12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="bunny-player__time">
                    <p data-player-time-progress="" className="bunny-player__text">00:00</p>
                    <p className="bunny-player__text is--transparent">/</p>
                    <p data-player-time-duration="" className="bunny-player__text is--transparent">00:00</p>
                  </div>
                  <div data-player-timeline="" className="bunny-player__timeline">
                    <div className="bunny-player__timeline-bar">
                      <div className="bunny-player__timeline-bg"></div>
                      <div data-player-buffered="" className="bunny-player__timeline-buffered"></div>
                      <div data-player-progress="" className="bunny-player__timeline-progress"></div>
                    </div>
                    <div data-player-timeline-handle="" className="bunny-player__timeline-handle"></div>
                  </div>
                  <div className="bunny-player__interface-btns">
                    <div data-player-control="mute" className="bunny-player__toggle-mute">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-up-svg">
                        <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__volume-mute-svg">
                        <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div data-player-control="fullscreen" className="bunny-player__toggle-fullscreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-scale-svg">
                        <rect x="3" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="3" width="2" height="7" fill="currentColor" />
                        <rect x="19" y="14" width="2" height="7" fill="currentColor" />
                        <rect x="3" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="19" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="3" width="7" height="2" fill="currentColor" />
                        <rect x="14" y="3" width="7" height="2" fill="currentColor" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="bunny-player__fullscreen-shrink-svg">
                        <rect x="7" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="2" width="2" height="7" fill="currentColor" />
                        <rect x="15" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="8" y="15" width="2" height="7" fill="currentColor" />
                        <rect x="2" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="3" y="15" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="7" width="7" height="2" fill="currentColor" />
                        <rect x="15" y="15" width="7" height="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bunny-player__loading">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width="100%" fill="none" className="bunny-player__loading-svg vimeo-player__loading-svg">
                  <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="cs-index_item-content">
            <div className="h4">How Goi Cuon grew online sales from $1.5K to $20K/month with Owner</div>
            <div>
              <div className="u-mb-24">
                <ul role="list" className="cs-index_stats-list">
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>$20,000/m</strong>
                        {" In direct online orders"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>1,233% Growth</strong>
                        {" In sales after Owner"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="testimonials-stats_text w-richtext">
                      <p>
                        <strong>Thousands saved</strong>
                        {" In third-party fees"}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="cs-index_meta">
                <div>
                  <div className="body-s">
                    <span>Vu</span>
                    <span></span>
                    <span>Linh</span>
                  </div>
                  <div className="opacity-50">
                    <div className="text-color-grey">
                      <div className="body-s">Owner of Goi Cuon</div>
                    </div>
                  </div>
                </div>
                <A data-button-instance="" href="/case-studies/goi-cuon" className="btn w-inline-block is-link">
                  <div data-button-text="" className="btn-text">Read full story</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                    <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
