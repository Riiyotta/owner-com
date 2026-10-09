// IA section(s): content.s-d-video-box (ia/ia.json, design-repo/sections/)
// s-d_video-box — the section's real markup, read from the rendered page (route /d, section 3).
export default function SDVideoBox() {
  return (
    <div className="s-d_video-box" data-clone-section="SDVideoBox">
      <div data-player-src="/_videos/6c758236-744d-4bf3-adcc-49807284ee45.mp4" data-player-muted="false" className="bunny-player" data-player-fullscreen="false" data-autoplay-skip="" data-player-activated="false" data-player-autoplay="false" data-bunny-player-init="" data-player-hover="idle" data-player-status="idle" data-player-update-size="cover" data-player-lazy="true">
        <div data-player-before="" className="bunny-player__before"></div>
        <video preload="auto" width="1920" height="1080" playsInline className="bunny-player__video"></video>
        <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/6a9096e86bbd02141ae92c64_2d43912cbe14e2b9ea847939f08e4972_Series%20D%20Video%20Thumbnail%20(1).avif" loading="lazy" sizes="(max-width: 3840px) 100vw, 3840px" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/6a9096e86bbd02141ae92c64_2d43912cbe14e2b9ea847939f08e4972_Series%20D%20Video%20Thumbnail%20(1)-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/6a9096e86bbd02141ae92c64_2d43912cbe14e2b9ea847939f08e4972_Series%20D%20Video%20Thumbnail%20(1).avif 3840w" alt="" className="bunny-player__placeholder" />
        <div className="bunny-player__dark"></div>
        <div data-player-control="playpause" className="bunny-player__playpause cc-center">
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
  );
}
