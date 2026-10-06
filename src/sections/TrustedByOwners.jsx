// IA section(s): proof.section-testimonials (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Trusted by owners — the section's real markup, read from the rendered page (route /, section 6; shared by 23 routes).
export default function TrustedByOwners() {
  return (
    <section data-section-overlap="" className="section-testimonials" data-clone-section="TrustedByOwners">
      <div className="hide w-embed w-script"></div>
      <div className="container-large">
        <div className="testimonials-wrap">
          <div className="testimonials-head">
            <h2 className="h3">
              {"Trusted by "}
              <span className="text-color-muted">owners</span>
            </h2>
            <div className="arrows-group">
              <button data-transition="" data-arrow="prev" id="" className="slider-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow-rev" className="icon-16">
                  <path d="M6.66667 12.166L2.5 7.99935L6.66667 3.83268M3 7.99935L13.5 7.99935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button data-transition="" data-arrow="next" id="" className="slider-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                  <path d="M9.33333 3.83398L13.5 8.00065L9.33333 12.1673M13 8.00065H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="max-width-full w-dyn-list">
            <div data-smooothy="testimonials" role="list" className="testimonials-slider w-dyn-items">
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Owner is a must-have for succeeding online as an independent restaurant today.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">John</span>
                        <span className="body-l"></span>
                        <span className="body-l">{"& Sam"}</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owners at Metro Pizza</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/metro-pizza" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+54%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Sales growth</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">11,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Mobile app installs</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ec72c98da1d65ceb82_69f4f3a049b16655ed874c2f_69b9330c8b70142e4e5f89d8_metro-pizza.avif.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"I would recommend Owner.com. Don't take my word for it, read the reviews, see their videos, and just give them a call.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Sandy</span>
                        <span className="body-l"></span>
                        <span className="body-l">Sei</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of Cyclo Noodles</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/cyclo-noodles" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$104,500</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Online sales</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">$31,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Savings in third-party fees</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ee72c98da1d65cebbf_69f4f3bfc133b021f490ac74_69b9330c8b70142e4e5f89d0_4993.avif.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"We've more than doubled our direct online sales since starting.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Timirie</span>
                        <span className="body-l"></span>
                        <span className="body-l">Shibley</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of Doo-Dah Diner</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/doo-dah-diner" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$72,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Online sales</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">$19,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Savings in third-party fees</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ed76c417dc274b5a84_69f4f3b049b16655ed8753d6_69b9330c8b70142e4e5f89d6_card-headshot.avif.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Owner is like an army of experts. The online website and all that, it just runs on autopilot.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Alex</span>
                        <span className="body-l"></span>
                        <span className="body-l">Lambroulis</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of Karv Greek Kouzina</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/karv-greek-kouzina" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$40,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Monthly online sales</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+300%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Growth in online orders</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3dc99fb2bd60b1651b3_69f4f2f3ae64e1a0ceef33b5_69b9330c8b70142e4e5f89ca_karv-card.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Rahul</span>
                        <span className="body-l"></span>
                        <span className="body-l">Bhatia</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of Saffron Indian Kitchen</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/saffron" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$4.5M</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Total online sales</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+4</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Locations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ef49b16655ed8765be_69f4f3d024c21d28cecf21cf_69c9bce5cc9b169c552c19d0_saffron.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Overall? Owner is a no-brainer to grow our sales. I'm very happy with our sales growth and we get great feedback from guests about Owner.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Hengameh</span>
                        <span className="body-l"></span>
                        <span className="body-l">Stanfield</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">{"Co-owner of Mattenga's Pizzeria"}</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/mattengas-pizzeria" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">$192,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Sales growth in 30 days</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+87%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Sales growth at main location</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3ddc133b021f490b97c_69f4f3003f4821360422b8a6_69b9330c8b70142e4e5f89c1_matt-enga.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Owner is how I'm able to afford an extra employee, fix things, and buy new equipment.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Sarkis</span>
                        <span className="body-l"></span>
                        <span className="body-l">Panossian</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of Township Line Pizza</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/township-line-pizza" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$300,000</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">{"Online sales "}</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">{"100's"}</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Monthly orders from SEO</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e44f409beeb292f5dd_69f4f34b3151fd2b1daecfbb_69b9330c8b70142e4e5f89c0_sarkis-hero2.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Owner gives restaurants superpowers to succeed online. We've done millions in direct online sales with their platform.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Mo</span>
                        <span className="body-l"></span>
                        <span className="body-l">and Omar</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owners of Talkin Tacos</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/talkin-tacos" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+$7M</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">In direct online sales</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+970%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Growth</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e8c133b021f490c116_69f4f376370c3a16646c90cf_69b9330c8b70142e4e5f89e0_talkin-taco-2.avif.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Ever since signing up, we saw bigger returns. This product is so damn good, man. It just pays for itself.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Said</span>
                        <span className="body-l"></span>
                        <span className="body-l">Hofiani</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">Owner of San Diego Kabob Shack</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/san-diego-kabob-shack" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">$9k</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Sales in first month</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">60%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Growth year-over-year</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e010945e66967e5754_69f4f31d77f9fbc5109f04ba_69c9bcf213ffd797920cb6d8_sdkabobshack.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
              <div data-slide="" role="listitem" className="slide-w w-dyn-item">
                <div className="testimonials-card">
                  <div className="testimonials-card_content">
                    <div className="testimonials-card_content-inner">
                      <div className="h4 is-line-height">{"\"Without Owner, I don't think I would still be in business today. That's the truth.\""}</div>
                      <div className="text-color-muted">
                        <span className="body-l">Lisa</span>
                        <span className="body-l"></span>
                        <span className="body-l">DeSisto</span>
                        <span className="body-l">{" — "}</span>
                        <span className="body-l">{"Owner of Rig A' Tony's"}</span>
                      </div>
                      <A data-button-instance="" href="/case-studies/rig-a-tonys" className="btn w-inline-block">
                        <div data-button-text="" className="btn-text">Learn more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" data-transition="arrow" className="icon-16">
                          <path d="M6.66406 10.6673L8.85933 8.47205C9.11966 8.21172 9.11966 7.78958 8.85933 7.52925L6.66406 5.33398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </A>
                    </div>
                    <ul role="list" className="testimonials-card_list">
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">+20%</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Online catering growth</p>
                        </div>
                      </li>
                      <li>
                        <div className="u-mb-8">
                          <p className="h4">$250</p>
                        </div>
                        <div className="text-color-muted">
                          <p className="h6">Average catering order</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonials-card_visual">
                    <div data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-card="" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
                      <div data-player-before="" className="bunny-player__before"></div>
                      <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
                      <img width="960" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3da699927dde515abba_69f4f2d98f9c1c3d1f01c605_69d03147c95981b0f862efe2_vertical-card.jpg.avif" alt="" loading="lazy" className="bunny-player__placeholder" />
                      <div className="bunny-player__dark"></div>
                      <div data-player-control="playpause" className="bunny-player__playpause">
                        <div className="bunny-player__meta">
                          <div className="bunny-player__content hide">
                            <p className="h5">Play the Video</p>
                          </div>
                          <div data-transition="" className="bunny-player__big-btn is-white">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
