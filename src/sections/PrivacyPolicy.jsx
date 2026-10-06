// IA section(s): hero.section-legal (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Privacy Policy — the section's real markup, read from the rendered page (route /privacy-policy, section 1).
export default function PrivacyPolicy() {
  return (
    <section className="section-legal" data-clone-section="PrivacyPolicy">
      <div className="container-large">
        <div className="legal_wrap">
          <div className="legal-nav_wrap">
            <div className="embed w-embed"></div>
            <ul role="list" className="legal-nav">
              <li className="legal-item">
                <A href="/privacy-policy" aria-current="page" className="legal-link w-inline-block w--current">
                  <p className="body-m">Privacy Policy</p>
                </A>
              </li>
              <li className="legal-item">
                <A href="/website-terms" className="legal-link w-inline-block">
                  <p className="body-m">Website Terms</p>
                </A>
              </li>
              <li className="legal-item">
                <A href="/disclaimer" className="legal-link w-inline-block">
                  <p className="body-m">Disclaimer</p>
                </A>
              </li>
              <li className="legal-item">
                <A href="/restaurant-participation-agreement" className="legal-link w-inline-block">
                  <p className="body-m">Restaurant Agreement</p>
                </A>
              </li>
              <li className="legal-item">
                <A href="/platform-terms" className="legal-link w-inline-block">
                  <p className="body-m">Platform Terms</p>
                </A>
              </li>
              <li className="legal-item">
                <A href="/accessibility" className="legal-link w-inline-block">
                  <p className="body-m">Accessibility</p>
                </A>
              </li>
            </ul>
          </div>
          <div className="max-width-full">
            <div className="u-mb-40">
              <h1 className="h1">Privacy Policy</h1>
            </div>
            <div data-anchors-headings="" data-anchors="scope" data-anchors-offset="7.5em" className="text-rich-text w-richtext">
              <div className="w-embed"></div>
              <p>Last Updated: September 17, 2026</p>
              <p>
                Owner.com, Inc. (“
                <strong>Owner</strong>
                ,” “
                <strong>we</strong>
                ,” “
                <strong>our</strong>
                ,” and/or “
                <strong>us</strong>
                {"”) values the privacy of individuals who use our websites (including "}
                <A href="/">https://www.Owner.com/</A>
                ) and any of our other websites, applications, or services that link to this Privacy Policy (collectively, our “
                <strong>Services</strong>
                ”). This Privacy Policy (“
                <strong>Privacy Policy</strong>
                ”) explains how we collect, use, process, and disclose Personal Data from individuals who use our Services (“
                <strong>user</strong>
                ,” “
                <strong>you</strong>
                ,” or “
                <strong>your</strong>
                {"”). Personal Data is defined in this Privacy Policy as “any information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, to you.” By using our Services, you agree to the collection, use, processing, and disclosure of your Personal Data as described in this Privacy Policy Beyond this Privacy Policy, your use of our Services is also subject to the applicable terms governing your use: our "}
                <A href="/restaurant-participation-agreement">Restaurant Participation Agreement</A>
                {" (for Merchants, as defined below) or our "}
                <A href="/platform-terms">Platform Terms</A>
                {" (for Merchant customers placing orders through our Services). The terms “Personal Data” and “Personal Information” are used interchangeably in this Privacy Policy."}
              </p>
              <p>Please review this Privacy Policy carefully to understand what we do in regard to your Personal Data and:</p>
              <ul role="list">
                <li>
                  If you are a California resident, please review the “Additional Disclosures for California Residents” section for additional disclosures, our notice at collection and a description of your rights under California privacy laws including the California Consumer Privacy Act (“
                  <strong>CCPA</strong>
                  ”).
                </li>
                <li>
                  If you are located in Canada, please review the “Additional Disclosures for Residents of Canada” section for additional disclosures regarding your rights under Applicable Canadian Law, including the Personal Information Protection and Electronic Documents Act (“
                  <strong>PIPEDA</strong>
                  ”).
                </li>
                <li>
                  If your Personal Data is subject to the European Union (“
                  <strong>EU</strong>
                  ”) or United Kingdom (“
                  <strong>UK</strong>
                  ”) General Data Protection Regulation (“
                  <strong>GDPR</strong>
                  ”), please review the “Additional Disclosures for Residents in the European Economic Area and the United Kingdom” section for additional disclosures.
                </li>
              </ul>
              <p>A PDF of this Privacy Policy is available here.</p>
              <h2 data-anchor-id="types-of-personal-data-we-collect" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="types-of-personal-data-we-collect" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Types of Personal Data We Collect
              </h2>
              <p>We may collect a variety of Personal Data from or about you or your devices from various sources, as described below. In all cases we collect only the Personal Data that is necessary and proportionate to allow us to provide you the Services you request from us.</p>
              <h3 data-anchor-id="information-you-provide-to-us" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="information-you-provide-to-us" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Information You Provide to Us
              </h3>
              <p>
                <strong>Placing an Order.</strong>
                {" We collect the Personal Data you provide to us when you use our Services. For example, when you place an order with a restaurateur or seller who uses our services ("}
                <strong>Merchant</strong>
                ”) through our Services, we will collect some types of your Personal Data, including your name, phone number, email address, address, date of birth, Payment Information (as defined below), and any other information you provide, including details of your order and delivery instructions. If you are a member of a Merchant’s loyalty program, we will collect the Personal Data you provide to us in connection with your membership. If you leave feedback for a Merchant or delivery driver, we will collect the Personal Data you include in your feedback.
              </p>
              <p>
                <strong>Phone Calls and Automated Phone Features.</strong>
                {" If you communicate with a Merchant by phone, your call may be handled by automated phone technology provided through our Services. Depending on the functionality enabled by the Merchant, you may be offered the option to receive a text message containing a link to order online or connect with the Merchant, or an AI-powered voice assistant may answer questions, take and submit orders, and otherwise handle your call. We may collect and process the audio of your call, a transcript where generated, and related call metadata (such as the calling number, call duration, and time of call). We may record and process this information using automated tools and, where an AI-powered assistant is used, AI-based tools, for purposes including providing, securing, maintaining, and improving the Services, processing orders, providing customer support, quality assurance, fraud prevention, troubleshooting, regulatory compliance, and developing and improving AI-enabled functionality. We do not collect biometric voiceprints from Merchant phone communications."}
              </p>
              <p>
                <strong>Creating an Owner Account.</strong>
                {" When you create or update an account with us, we may collect certain Personal Data necessary for us to set up and manage that account, such as certain identifying information and information you voluntarily provide to us, including name, date of birth, phone number, email address, and password."}
              </p>
              <p>
                <strong>Merchants.</strong>
                {" If you are a Merchant, or an employee of a Merchant, we will collect your Personal Data in connection with your application to and use of the Services. For example, when you use or sign up for our Services, we will collect your name, email address, mailing address, phone number, Merchant name and any other contact information you provide to us. In addition to your contact information, we will collect your tax identification number, national identification number (e.g., Social Security number), and your banking and payment card information. If you agree to participate in a video sales call where we demonstrate our Services to you, we may record that call and we collect information from you related to the video call. We use this information only for limited purposes, such as training, improving our Services, and internal review. This information is retained only as long as reasonably necessary for these purposes and is not used for any unrelated purposes."}
              </p>
              <p>
                <strong>Making a Payment.</strong>
                {" When you place an order with a Merchant through our Services, your credit card information, billing information, and any other financial information necessary to complete your purchase (“"}
                <strong>Payment Information</strong>
                {"”) is processed by our third-party payment processor, Stripe, and the processing of your Payment Information is governed by their "}
                <a>Privacy Policy</a>
                . We do not collect, store, or process your Payment Information.
              </p>
              <p>
                <strong>Communications.</strong>
                {" If you contact us directly, we may receive additional Personal Data about you. For example, if you represent a Merchant and contact us for a demo, we will receive your name, phone number, and email address. If you participate in a video sales demo, we will record that demo including your image and the conversation. If you subscribe to our marketing communications, we will receive your name, email address, phone number, and order history."}
              </p>
              <h3 data-anchor-id="personal-data-we-automatically-collect-when-you-use-our-serv" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="personal-data-we-automatically-collect-when-you-use-our-serv" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Personal Data We Automatically Collect When You Use Our Services
              </h3>
              <p>
                <strong>Device Information.</strong>
                {" We receive information about the device and software you use to access our Services, including internet protocol (IP) address, web browser type, and operating system version."}
              </p>
              <p>
                <strong>Usage Information.</strong>
                {" To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with them, such as the length of time you spend on a page, objects such as hyperlinks you click on, any point at which you terminate an order, and the dates and times of your visits."}
              </p>
              <p>
                <strong>Location Information.</strong>
                {" When you use our Services, if you allow us, we will receive your precise location information. We may also collect the precise location of your device when our Services are running in the foreground or background. We use your location information to insert a description of how you use location information. We may also infer your general location information, for example by using your internet protocol (IP) address."}
              </p>
              <p>
                <strong>Communication Logs.</strong>
                {" Such information may include phone number, calling-party number, forwarding numbers, time and date of calls, duration of calls, SMS routing information. Where a Merchant has enabled automated phone features, this may also include the audio recording and any transcript generated from your call."}
              </p>
              <p>
                <strong>Certain Specialized Information.</strong>
                {" If you use certain mobile apps or sites, we may collect and store information locally on your device such as browser web storage (including HTML 5) and application data caches. Certain services may include a unique application number in connection with the installation of our mobile apps. This number and information, including, without limitation, operating system type and app version number may be sent to our service providers when you install, update or uninstall our mobile app."}
              </p>
              <p>
                <strong>Information from Cookies and Similar Technologies.</strong>
                {" We and our third-party partners may collect information using cookies, pixel tags, or similar online tracking technologies (collectively “"}
                <strong>Cookies</strong>
                ”). Our third-party partners, such as analytics and advertising partners, may use these technologies to collect information about your online activities over time on our website and across different services. These third-party partners may use automated tools, including machine learning, to analyze this information and to develop aggregated, de-identified insights, which they may share with other third parties. Cookies are small text files containing a string of alphanumeric characters. We may use both session Cookies and persistent Cookies. A session Cookie disappears after you close your browser. A persistent Cookie remains after you close your browser and may be used by your browser on subsequent visits to our Services.
              </p>
              <p>Please review your web browser’s “Help” file to learn the proper way to modify your cookie settings. Please note that if you delete or choose not to accept Cookies from the Services, you may not be able to utilize the features of the Services to their fullest potential.</p>
              <p>For further information on use of Cookies, please see the “Our Use of Cookies and Other Online Marketing Practices” section below.</p>
              <h3 data-anchor-id="consent-to-non-essential-cookies" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="consent-to-non-essential-cookies" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Consent to Non-Essential Cookies
              </h3>
              <p>Where required by applicable law, we will obtain your consent before deploying non-essential cookies, analytics technologies, advertising technologies, or similar tracking tools on your device.</p>
              <h3 data-anchor-id="personal-data-we-receive-about-you-from-third-parties" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="personal-data-we-receive-about-you-from-third-parties" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Personal Data We Receive About You from Third Parties
              </h3>
              <p>
                <strong>Merchants.</strong>
                {" If you have placed an order with a Merchant, such as a restaurant, through our Services, we will receive information regarding your order history from the Merchant."}
              </p>
              <p>
                <strong>Partners.</strong>
                {" We may receive Personal Data about you from third parties such as data or marketing partners and combine it with other Personal Data we have about you."}
              </p>
              <h2 data-anchor-id="how-we-use-personal-data" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="how-we-use-personal-data" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                How We Use Personal Data
              </h2>
              <p>We use the Personal Data we collect from and about you:</p>
              <ul role="list">
                <li>To provide, maintain, debug, improve, and enhance our Services, including fulfilling your orders;</li>
                <li>To understand and analyze how you use our Services, and develop new products, services, features, and functionality;</li>
                <li>To understand and analyze usage patterns;</li>
                <li>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, personalize recommendations for you, respond to comments and questions, and otherwise provide customer support;</li>
                <li>To facilitate transactions and payments;</li>
                <li>For marketing purposes, such as developing and providing promotional and advertising materials that may be useful, relevant, valuable, or otherwise of interest to you;</li>
                <li>To find and prevent fraud, and respond to trust and safety issues that may arise;</li>
                <li>For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and</li>
                <li>For other purposes for which we provide specific notice at the time the Personal Data is collected.</li>
              </ul>
              <p>Certain categories of Personal Data we collect from you are legally defined as Sensitive Personal Data in various states, such as biometric data, geolocation data, and food allergy information. Where required by state law, we will obtain your consent before collecting and processing this data. The collection, processing, and use of your geolocation data is vital to our ability to provide you with our core services. If you do not wish us to collect such data, please do not share this Sensitive Personal Data with us.</p>
              <h2 data-anchor-id="how-we-disclose-personal-data" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="how-we-disclose-personal-data" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                How We Disclose Personal Data
              </h2>
              <p>We may disclose Personal Data collected with the following parties and for the following purposes. We do not disclose or otherwise share Personal Data we collect from or about you except as described below or otherwise disclosed to you at the time of the collection.</p>
              <p>
                <strong>Fulfilling your Order.</strong>
                {" When you place an order with a Merchant through our Services, we will share your Personal Data, such as your name, address, phone number, and any allergies, food sensitivities, or special instructions regarding that order with the Merchant from which you ordered. If you place an order for delivery, we will also share your Personal Data, such as name, address, phone number and location with delivery drivers. Where you place an order by phone through the Services, we will share the resulting order or transcript with the Merchant in the same manner as an order placed online."}
              </p>
              <p>
                <strong>Resolving Disputes.</strong>
                {" If you have an issue with an order placed through our Services and you contact us for support, we may share your Personal Data, such as your account number, name, address, phone number, and location, with the Merchant or delivery driver to attempt to resolve your issue."}
              </p>
              <p>
                <strong>Vendors and Service Providers.</strong>
                {" We may share only the types of your Personal Data we receive with those vendors and service providers retained in connection with the provision of our Services that is necessary for the vendor or service provider to provide you with our Services."}
              </p>
              <p>
                <strong>Partners.</strong>
                : We may choose to share certain types of Personal Data with our partners and other Owner Merchants to better customize our services for their customers.
              </p>
              <p>
                <strong>Cross-Merchant Processing.</strong>
                {" Owner may use information derived from interactions across multiple Merchants to generate aggregated analytics, performance metrics, benchmarking information, fraud-prevention tools, security systems, platform improvements, and artificial-intelligence models. Except where separately disclosed and lawful consent has been obtained where required by applicable law, Owner does not use identifiable information about a customer obtained through one Merchant to personalize marketing, offers, recommendations, or menu experiences for that customer at a different, unrelated Merchant."}
              </p>
              <p>
                <strong>Loyalty Programs.</strong>
                {" If you choose to participate in a Merchant’s loyalty program that is powered by Owner, we will share the Personal Data you provided to us when you created your account with that Merchant. The Merchant, not Owner, is the sole sponsor and administrator of its loyalty program."}
              </p>
              <p>
                <strong>Analytics Partners.</strong>
                {" We may use analytics services such as Google Analytics to collect and process certain analytics data. These services may also collect information about your use of other websites, apps, and online resources."}
              </p>
              <p>
                <strong>As Required by Law and Similar Disclosures.</strong>
                {" We may access, preserve, and disclose your Personal Data if we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others’ rights, property, or safety. The categories of Personal Data we would share in any of these situations would be those required to comply with specific, legally binding requirements, fully your data subject requests pursuant to controlling state law, or those necessary to protect you, us, or others."}
              </p>
              <p>
                <strong>Merger, Sale, or Other Asset Transfers.</strong>
                {" We may transfer your Personal Data to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets."}
              </p>
              <p>
                <strong>Consent.</strong>
                {" We may also disclose your Personal Data with your permission and for your benefit."}
              </p>
              <h2 data-anchor-id="our-use-of-cookies-and-other-online-marketing-practices" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="our-use-of-cookies-and-other-online-marketing-practices" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Our Use of Cookies and Other Online Marketing Practices
              </h2>
              <p>We and our service providers may use tools to collect information about you, your computer access points, mobile devices, and the web browser that you use to connect to our Sites or digital applications, such as Cookies. Cookies are a feature of web browser software that allows servers to recognize the computer used to access a website. Cookies are small pieces of data that are stored by a user’s web browser on the user’s hard drive. Cookies can remember what information a user accesses on a web page to simplify subsequent interactions with that website by the same user, or to use the information to streamline the user’s transactions on related web pages. This makes it easier for a user to move from a webpage to another, and to complete commercial transactions over the Internet. Cookies are designed to make your online experience easier and more personalized. We may use Cookies to provide you with certain marketing communications based on promotions or advertisements you click on within our site. We do not use Cookies to store any of your personal or financial information on your computer. We recognize that you have a choice to refuse Cookies. But be advised that if you wish to purchase, you must accept the Cookie so that we can securely process your order. We may also use certain third-party Cookies and technologies that collect aggregated information to be used by us and our service providers for operational and business purposes, including collecting measurements about interactions you have with our advertisements.</p>
              <h3 data-anchor-id="what-types-of-cookies-do-we-use" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="what-types-of-cookies-do-we-use" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                What Types of Cookies Do We Use?
              </h3>
              <ul role="list">
                <li>
                  <strong>Essential Cookies:</strong>
                  {" These Cookies are essential for the Website to function properly and enable basic features such as page navigation and access to secure areas of the site."}
                </li>
                <li>
                  <strong>Analytics:</strong>
                  {" These Cookies help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues."}
                </li>
                <li>
                  <strong>Targeted Advertising :</strong>
                  {" These Cookies are used to deliver advertising that is more relevant to you and your interests. May also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator ’s permission."}
                </li>
                <li>
                  <strong>Personalization:</strong>
                  {" These Cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your general location."}
                </li>
                <li>
                  <strong>Session Reply Cookies:</strong>
                  {" These Cookies record your interactions with our websites, including mouse movements, text, and other information, associated with your visit to our Sites. This information is used to help us improve our websites and better provide you with information you are interested in when you visit our websites. They may be set by us or by third party providers whose services we have added to our pages. This information is used to help us improve our Sites and better provide you with information you are interested in when you visit our Sites."}
                </li>
              </ul>
              <h3 data-anchor-id="how-can-you-disable-cookies" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="how-can-you-disable-cookies" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                How Can you Disable Cookies?
              </h3>
              <p>You can manage the use of Cookies through functionality built into your web browser or as provided on the Sites. Although you are not required to accept the Sites’ Cookies, if you block or reject them, you may not have access to all features available through the Website.</p>
              <p>
                {"If you want to learn more about cookies or how to control, disable, or delete them, please visit "}
                <a>http://www.allaboutcookies.org</a>
                {" for detailed guidance. We do not currently respond to “Do Not Track” signals."}
              </p>
              <h3 data-anchor-id="management-of-cookies" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="management-of-cookies" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Management of Cookies
              </h3>
              <p>You can manage the use of cookies in several ways:</p>
              <ul role="list">
                <li>
                  <strong>Our Cookie Management Tool</strong>
                  : You can change your cookie preferences here:
                </li>
                <li>
                  <strong>Internet Browser</strong>
                  : You can delete online tracking technologies, including cookies, from your device by clearing your browser history. This will delete all online tracking technologies from all websites and applications you have visited since you last cleared your browser history. You can also set your browser to prevent certain online tracking technologies from being placed on your device. To learn more, please see the links below:
                  <ul role="list">
                    <li>
                      <a>Firefox</a>
                    </li>
                    <li>
                      <a>Google Chrome</a>
                    </li>
                    <li>
                      <a>Microsoft Edge</a>
                    </li>
                    <li>
                      <a>Safari</a>
                      {" / "}
                      <a>Safari Mobile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Third Party Tools</strong>
                  : Various third-party tools exist that can help you manage cookies. For additional information you can also visit http://www.allaboutcookies.org/ where you will find information on cookie management and blocking.
                </li>
              </ul>
              <p>
                {"You may also be able to limit interest-based advertising through the settings on your mobile device by selecting “limit ad tracking” (iOS) or “opt-out of interest-based ads” (Android). You may also be able to opt-out of some – but not all – interest-based ads served by mobile ad networks by visiting "}
                <a>http://youradchoices.com/appchoices</a>
                {" and downloading the mobile AppChoices app. You may also opt out of interest-based advertising by certain participating companies through the Network Advertising Initiative at "}
                <a>https://optout.networkadvertising.org/</a>
                {" and through the Digital Advertising Alliance's WebChoices tool at "}
                <a>https://www.aboutads.info/choices</a>
                . You may be able to limit the use of location data for advertising purposes by adjusting your location services settings on your mobile device. Some of these opt-outs may not be effective unless your browser is set to accept cookies. If you delete cookies, change your browser settings, switch browsers or computers, or use another operating system, you may need to opt-out again.
              </p>
              <p>Please note, if you disable the use of online tracking technologies on our Website, this may affect your experience using it. For example, certain features of the Website may not work, or you may have to re-login. If you use different devices to visit our Website, (for example, your computer, smartphone, tablet etc.), you must ensure that each browser on each device is adapted to your preferences.</p>
              <p>
                <strong>“Do Not Track” (DNT) and Universal Opt-Out Preference Signals.</strong>
                {" Some web browsers (including Safari, Internet Explorer, Firefox, and Chrome) incorporate a “Do Not Track” (DNT) or similar feature that signals to web services that a visitor does not want to have their online activity and behavior tracked. If a web service operator elects to respond to a particular DNT signal, the web service operator may refrain from collecting certain Personal Information about the browser's user. Not all browsers offer a DNT option, and there is currently no industry consensus as to what constitutes a DNT signal. We do not currently respond to DNT signals."}
              </p>
              <h2 data-anchor-id="your-privacy-rights" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="your-privacy-rights" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Your Privacy Rights
              </h2>
              <p>Depending on where you are located, you may have the following rights as it relates to the processing of your Personal Data, including:</p>
              <ul role="list">
                <li>
                  <strong>Request access to your Personal Data.</strong>
                  {" A “Data Subject Access Request” enables you to receive a copy of the Personal Data we hold about you and to check that we are lawfully processing it."}
                </li>
                <li>
                  <strong>Request correction of the Personal Data that we hold about you.</strong>
                  {" This enables you to have any incomplete or inaccurate Personal Data we hold about you corrected, although we may need to verify the accuracy of the new data you provide to us."}
                </li>
                <li>
                  <strong>Request erasure / deletion / removal of your Personal Data.</strong>
                  {" This enables you to ask us to delete or remove your Personal Information where we do not have a valid reason to continue to process it. You also have the right to ask us to delete or remove your Personal Data where you have successfully exercised your right to object to processing, where we may have processed your information unlawfully, or where we are required to erase your Personal Data to comply with local law."}
                </li>
                <li>
                  <strong>Object to processing of your Personal Data</strong>
                  {" where we are relying on a legitimate interest (or those of a 3rd Party). You may choose to exercise this right if there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms."}
                </li>
                <li>
                  <strong>Object to sharing of your Personal Data.</strong>
                  {" You may have the right to limit the sharing of Personal Data, particularly for marketing purposes depending on where you live and the type of Personal Data in question."}
                </li>
                <li>
                  <strong>Request restriction of processing of your Personal Data.</strong>
                  {" This enables you to ask us to suspend the processing of your Personal Information in the following scenarios:"}
                  <ol role="list">
                    <li>If you want us to establish the data’s accuracy;</li>
                    <li>Where our use of the data is unlawful but you do not want us to erase it;</li>
                    <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims;</li>
                    <li>You want us to restrict the use of any Sensitive Personal Data (as defined under applicable law); or</li>
                    <li>You have objected to our use of your Personal Data, but we need to verify whether we have overriding legitimate grounds to process it.</li>
                  </ol>
                </li>
                <li>
                  <strong>Data Portability / Request the transfer of your Personal Data to you or directly to another controller.</strong>
                  {" We will (unless there is an exemption) assist you by securely transferring your Personal Data directly to another controller where technically feasible or by providing you with a copy in a structured, commonly used, machine-readable format."}
                </li>
                <li>
                  <strong>Right to Appeal.</strong>
                  {" Depending on where you are a resident, you may have the right to appeal our responses to your Data Subject Rights requests."}
                </li>
              </ul>
              <p>To exercise any of these rights, please submit a request by emailing us at privacy @ owner.com. and include “Data Subject Rights Request” in the subject line. In the request, please specify which right you are seeking to exercise and the scope of the request. We may require specific information from you to help us verify your identity and process your request. If we are unable to verify your identity, we may deny your requests to know or delete.</p>
              <p>
                <strong>Location Information.</strong>
                {" You can prevent your device from sharing precise location information at any time through your device’s operating system settings. However, location is core to our Services and without it, we may not be able to provide you with all the functionality of our Services."}
              </p>
              <h2 data-anchor-id="de-identified-information" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="de-identified-information" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                De-Identified Information
              </h2>
              <p>We and our third-party partners may aggregate, anonymize, or de-identify information so that it can no longer reasonably be used to identify an individual. We and our third-party partners may use and share such information for analytics, product improvement, research, statistical purposes, and business operations, subject to applicable law.</p>
              <p>
                <strong>Marketing Communications.</strong>
                {" You can unsubscribe from our promotional emails via the link provided in the emails. Even if you opt out of receiving promotional messages from us, you will continue to receive administrative messages from us. By maintaining an Owner account and/or not opting out of receiving information from Owner, you acknowledge and agree that you may receive e-mail or SMS text messages on your phone or mobile device from Owner, our third-party service providers, or Merchants that you choose to order from or with which you choose to establish a loyalty or similar preferred customer account. Receiving these messages may cause you to incur usage charges or other fees or costs in accordance with your wireless or data service plan. Any and all such charges, fees or costs are your sole responsibility. You should consult with your wireless carrier to determine what rates, charges, fees or costs may apply. Owner, or each Merchant, may receive a confirmation when you open an email or text from us if your computer supports this type of program. If you no longer wish to receive text or email messages from Owner, you may opt-out by following the unsubscribe link located at the bottom of each message or by contacting us at support @ owner.com. If you no longer wish to receive text or email messages from a particular Merchant, you may opt-out by following the unsubscribe link located at the bottom of each message or by contacting the Merchant as instructed in that Merchant’s privacy policy."}
              </p>
              <p>
                <strong>Do Not Track.</strong>
                {" There is no accepted standard on how to respond to Do Not Track signals, and we do not respond to such signals."}
              </p>
              <h2 data-anchor-id="third-parties" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="third-parties" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Third Parties
              </h2>
              <p>Our Services may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy and advertising practices of these third parties. Please be aware that this Privacy Policy does not apply to your activities on these third-party services or any Personal Data you disclose to these third parties. We encourage you to read their privacy policies before providing any Personal Data to them.</p>
              <h2 data-anchor-id="data-retention-and-deletion-practices" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="data-retention-and-deletion-practices" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Data Retention and Deletion Practices
              </h2>
              <p>Personal Data is retained only for as long as necessary to fulfill the purposes for which it was collected, to satisfy legal, accounting, operational, or regulatory requirements, and to resolve disputes. When Personal Data is no longer required, it is securely deleted, anonymized, or destroyed in accordance with our retention practices. We may retain aggregated, statistical, benchmarking, security-related, fraud-prevention, and de-identified information indefinitely where permitted by law and where such information no longer reasonably identifies an individual.</p>
              <h2 data-anchor-id="security" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="security" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Security
              </h2>
              <p>We make reasonable efforts to protect your Personal Data by using physical and electronic safeguards designed to improve the security of the Personal Data we maintain. However, as no electronic transmission or storage of Personal Data can be entirely secure, we can make no guarantees as to the security or privacy of your Personal Data.</p>
              <h2 data-anchor-id="data-transfers" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="data-transfers" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Data Transfers
              </h2>
              <p>Our Services are hosted in the United States and intended for visitors located within the United States and Canada. If you are located in Canada, please note that by using our Services you are transferring your Personal Data to the United States for storage and processing, as further described in the “Additional Disclosures for Residents of Canada” section below. If you choose to use our Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your Personal Data outside of those regions to the United States for storage and processing. Also, we may transfer your Personal Data from the U.S. to other countries or regions in connection with storage and processing of data, fulfilling your requests, and operating the Services and you agree to such transfers by use of our Services.</p>
              <p>
                When we transfer Personal Data to a country that is not regarded as ensuring an adequate level of protection for Personal Data under the EU General Data Protection Regulation (“
                <strong>EU GDPR</strong>
                ”), United Kingdom General Data Protection Regulation (“
                <strong>UK GDPR</strong>
                ”), or other applicable laws, we will seek to ensure a similar degree of protection is afforded to Personal Data by ensuring that, where possible, we put in place appropriate safeguards (such as standard contractual clauses approved by the European Commission or other relevant authority) or otherwise transfer Personal Information in accordance with applicable laws, such as where the transfer is necessary for the performance of a contract between you and us or between us and a third party in your interest, where the transfer is necessary to establish, exercise or defend legal claims, or where the transfer is made for important reasons of public interest. For more information on specific mechanisms, we rely on for transferring Personal Data, please contact us at the details provided in the “How to Contact Us” section below.
              </p>
              <h2 data-anchor-id="childrens-privacy" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="childrens-privacy" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Children’s Privacy
              </h2>
              <p>We do not knowingly collect, maintain, or use Personal Data from children under 13 years of age, and no parts of our Services are directed at children. If you learn that a child has provided us with Personal Data in violation of this Privacy Policy, then you may alert us at privacy @ owner.com.</p>
              <h2 data-anchor-id="changes-to-this-privacy-policy" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="changes-to-this-privacy-policy" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Changes to this Privacy Policy
              </h2>
              <p>We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or share Personal Data previously collected from you through our Services, we will attempt to notify you through our Services, by email, or other means.</p>
              <h2 data-anchor-id="how-to-contact-us" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="how-to-contact-us" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                How to Contact Us
              </h2>
              <p>If you have any questions, comments, or concerns about this Privacy Policy, or wish to exercise any of your rights as a consumer regarding your Personal Data, please email us at privacy @ owner.com or write to us at: 530 Lytton Avenue, 2nd Floor, Palo Alto, CA 94301. If you wish to appeal any of our decisions regarding your exercise of your data subject rights, please email or write to us and address your request for reconsideration to Owner.com ’s Data Privacy Officer.</p>
              <h2 data-anchor-id="additional-disclosures-for-california-residents" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="additional-disclosures-for-california-residents" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Additional Disclosures for California Residents
              </h2>
              <p>
                The CCPA imposes certain obligations on us and grants certain rights to California residents (“
                <strong>California Resident</strong>
                ,” “
                <strong>you</strong>
                ,” or “
                <strong>your</strong>
                ”) with regard to “Personal Information.” If you are a California Resident, please review the following information about our privacy practices surrounding how and why we collect, use and disclose your Personal Information and your potential rights with regard to your Personal Information under the CCPA. The rights described herein are subject to exemptions and other limitations under applicable law. Terms used in this California-specific section have the meaning ascribed to them in the CCPA.
              </p>
              <h3 data-anchor-id="notice-at-collection" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="notice-at-collection" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Notice at Collection
              </h3>
              <p>The “Types of Personal Data We Collect” and “How We Use Your Personal Data” sections above explain (1) the categories of Personal Information we collect from you and (2) the business or commercial purposes for using such information, depending on how you interact with us. We retain your Personal Information as described above in the “Data Retention and Deletion Practices.” We do not sell Personal Information, but we may share Personal Information (in the form of identifiers and internet activity information) with third-party advertisers for purposes of targeting advertisements on non-Owner.com websites, applications and services. You have the right to opt out of sharing of your Personal Information. For more information about our privacy practices, please review our Privacy Policy.</p>
              <h3 data-anchor-id="our-collection-use-and-disclosure-of-personal-information-an" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="our-collection-use-and-disclosure-of-personal-information-an" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Our Collection, Use, and Disclosure of Personal Information and Sensitive Personal Information
              </h3>
              <p>
                <strong>What Information We Have Collected, the Sources from Which We Collected It, and Our Purpose for Collecting the Information</strong>
              </p>
              <p>In the preceding 12 months, depending on how you interact with us, we may have collected and disclosed for a business purpose the following categories of Personal Information to the following categories of recipients. The purposes for which the Personal Information was collected and the sources we have collected it from are discussed above in the “How We Use Personal Data” section.</p>
              <div className="w-embed">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>Category</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Examples</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Categories of Recipients</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Identifiers</p>
                      </td>
                      <td>
                        <p>Names, Addresses, Emails, Dates of Birth, Tax Identification Numbers, Social Security Numbers</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Commercial Information</p>
                      </td>
                      <td>
                        <p>Banking information, Credit card information</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Additional information subject to Cal. Civ. Code § 1798.80</p>
                      </td>
                      <td>
                        <p>Social Security Numbers, Tax Identification Numbers</p>
                      </td>
                      <td>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Protected classification information under certain federal or state laws</p>
                      </td>
                      <td>
                        <p>Nationalities, Gender, Disability Information</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Professional or employment-related information</p>
                      </td>
                      <td>
                        <p>Job History, Resumes, Curriculum Vitae</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Biometric Information</p>
                      </td>
                      <td>
                        <p>Voice recordings, pictures</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Geolocation data</p>
                      </td>
                      <td>
                        <p>Approximate location (city/region) inferred from IP address</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Internet or other electronic network activity information</p>
                      </td>
                      <td>
                        <p>Page views, clicks, session data, interaction with services</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Drivers</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Audio, electronic, visual or similar information;</p>
                      </td>
                      <td>
                        <p>Includes audio, electronic, visual, or similar information such as photographs or images (e.g., that you provide us), call/video recordings (E.g., customer support calls),</p>
                      </td>
                      <td>
                        <p>Merchants</p>
                        <p>Analytics Partners</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>In addition, in the preceding 12 months, we may have disclosed your Personal Information if required to do so by law, court of law, or as requested by any governmental, self-regulatory organization or law enforcement authority. We may also disclose your Personal Information in connection with, or during negotiations or consideration of, any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company. We may also disclose or make available Personal Information to our service providers. We do not sell Personal Information, but we may share Personal Information (in the form of identifiers and Internet activity information) with third-party advertisers for purposes of targeting advertisements on non-Owner.com websites, applications and services. We do not knowingly sell or share the Personal Information of California residents under 16 years old.</p>
              <p>
                <strong>Use and Disclosure of Sensitive Personal Data.</strong>
                {" As noted above in “How We Use Your Personal Information,” certain Personal Information we collect and process may be considered “Sensitive Personal Information” under the CCPA. The CCPA requires that we provide you with a right to limit our use or disclosure of such Sensitive Personal Information in certain circumstances. Currently, we are not using your Sensitive Personal Information for purposes that would require that we provide you with a right to limit."}
              </p>
              <h3 data-anchor-id="our-sale-or-sharing-of-personal-information" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="our-sale-or-sharing-of-personal-information" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Our Sale or Sharing of Personal Information
              </h3>
              <p>Additionally, in the past 12 months, we may have sold or shared the following categories of personal information to the following categories of third parties and for the following business/commercial purposes:</p>
              <div className="w-embed">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>Category of Personal Information</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Categories of Third Parties to Which Personal Information is Sold or Shared</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Business or Commercial Purposes for Selling or Sharing Personal Information</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Internet or Other Similar Network Activity</p>
                      </td>
                      <td>
                        <p>Service providers (including our support services and system providers), advertising and marketing companies, and our business partners.</p>
                      </td>
                      <td>
                        <ul>
                          <li>Providing advertising and marketing services</li>
                          <li>Auditing related to counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance</li>
                          <li>Short-term, transient use, such as non-personalized advertising shown as part of your current interaction with us</li>
                          <li>Helping to ensure security and integrity</li>
                          <li>To operate, maintain, and improve the Site and our products and services</li>
                          <li>Debugging to identify and repair errors that impair existing intended functionality</li>
                          <li>Undertaking internal research for technological development and demonstration</li>
                          <li>Enabling our advertising and marketing partners to use automated tools, including machine learning, to develop aggregated, de-identified insights, which they may share with other third parties</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 data-anchor-id="your-rights-under-the-ccpa" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="your-rights-under-the-ccpa" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Your Rights Under the CCPA
              </h3>
              <p>If your Personal Information is subject to the CCPA, you may have certain rights, subject to applicable exemptions and limitations, with regard to such Personal Information, including the right to:</p>
              <ul role="list">
                <li>Be informed, at or before the point of collection, of the categories of Personal Information to be collected and the purposes for which the categories of Personal Information shall be used.</li>
                <li>Request that we delete any Personal Information about you that we collected, subject to certain exceptions (“Request to Delete”).</li>
                <li>Correct inaccurate Personal Information (“Request to Correct”).</li>
                <li>Request that we, as a business that collects Personal Information about you and that discloses your Personal Information for a business purpose, disclose to you (“Request to Know”) the: (i) categories of Personal Information we have collected about you; (ii) categories of sources from which we collected the Personal Information; (ii) business or commercial purpose for collecting or selling the Personal Information; (iii) categories of third parties with which we disclose Personal Information; and (iv) specific pieces of Personal Information we have collected about you.</li>
                <li>Not be discriminated against because you exercised any of your rights under the CCPA.</li>
                <li>Opt-out of the “sale” (as that term is defined in the CCPA) of your Personal Data if a business sells your Personal Information</li>
                <li>Opt-out of the “sharing” (as that term is defined in the CCPA) of your Personal Information if a business shares your Personal Information with third parties.</li>
                <li>Limit the use and disclosure of Sensitive Personal Information where required by the CCPA (“Right to Limit”) (please note that we are not using your Sensitive Personal Information for purposes that would require that we provide you with a right to limit).</li>
              </ul>
              <p>The CCPA does not restrict our ability to do certain things like comply with other laws or comply with regulatory investigations. We also reserve the right to retain, and not to delete, certain Personal Information after receipt of a Request to Delete from you, where permitted by the CCPA or another law or regulation.</p>
              <h3 data-anchor-id="how-to-submit-a-data-subject-rights-request" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="how-to-submit-a-data-subject-rights-request" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                How to Submit a Data Subject Rights Request
              </h3>
              <p>If your Personal Information is subject to the CCPA, you may can submit a Data Subject Rights Request, via email at privacy @ owner.com</p>
              <p>We are only required to respond to verifiable Data Subject Rights Requests made by you or your authorized agent. When you submit a Data Subject Rights Request, we may ask that you provide clarifying or identifying information to verify your request. Such information may include, at a minimum, depending on the sensitivity of the information you are requesting and the type of request you are making, your name and email address. Any information gathered as part of the verification process will be used for verification purposes only. You are permitted to designate an authorized agent to submit a Data Subject Rights Request on your behalf and have that authorized agent submit the request through the provided methods. We may deny requests from authorized agents who do not submit proof that they have been authorized by you to act on your behalf. We may also require that you directly verify your own identity with us and directly confirm with us that you provided the authorized agent permission to submit the request.</p>
              <p>If you are a California resident under the age of 18 and have registered for an account with us, you may ask us to remove content or information that you have posted to our website(s). Please note that your request does not ensure complete or comprehensive removal of the content or information, because, for example, some of your content may have been reposted by another user. We may need to verify your identity and place of residence before completing your rights request.</p>
              <h2 data-anchor-id="questions" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="questions" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Questions
              </h2>
              <p>If you have any questions regarding these additional disclosures, please contact us using the information in the “How to Contact Us” section above.</p>
              <h3 data-anchor-id="additional-disclosures-for-residents-of-canada-canada-provis" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="additional-disclosures-for-residents-of-canada-canada-provis" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Additional Disclosures for Residents of Canada (“Canada Provisions”)
              </h3>
              <p>Last Updated: September 2026</p>
              <p>
                If you are located in Canada, this section supplements the rest of this Privacy Policy and describes our practices under the federal Personal Information Protection and Electronic Documents Act (“
                <strong>PIPEDA</strong>
                ”), Canada’s Anti-Spam Law (“
                <strong>CASL</strong>
                ”) and applicable provincial privacy laws in Canada (“
                <strong>Applicable Canadian Law</strong>
                ”) not including the Province of Québec. Terms used in this section have the meaning given to them under Applicable Canadian Law If there is any conflict between what is set out above “Additional Disclosures for Residents of Canada” or what is set out in and following “Additional Disclosures for Residents of European Union and United Kingdom”, and the Canada Provisions, then the Canada Provisions will have priority. Canadian residents have only the rights provided by applicable Canadian privacy laws, including rights of access, correction, consent withdrawal (subject to legal and contractual limitations), and complaint rights. Certain provinces of Canada may provide additional rights. Rights applicable to persons outside Canada do not apply to persons within Canada. For greater certainty, the rights set out in the section entitled “Your Privacy Rights” apply only where required by applicable law. Not all rights described in that section are available to Canadian residents.
              </p>
              <h3 data-anchor-id="accountability" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="accountability" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Accountability
              </h3>
              <p>Owner is responsible for Personal Information under its control and has implemented policies, procedures, safeguards, training, and governance measures designed to protect Personal Information and ensure compliance with applicable Canadian privacy laws. Owner requires service providers who process Personal Information on its behalf to provide a level of protection that is comparable to the protection Owner provides. We may engage service providers located inside or outside Canada to process Personal Information on our behalf for the purposes described in this Privacy Policy. Such service providers are authorized to access Personal Information only as necessary to perform services for us and are required by contract to protect such information.</p>
              <h3 data-anchor-id="relationship-with-merchants" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="relationship-with-merchants" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Relationship with Merchants
              </h3>
              <p>Owner provides technology services to Merchants. Those Merchants are independent from us and are not accountable to us. In many cases, Personal Information collected through the Services is collected on behalf of the Merchant when you place an order. In those circumstances, the Merchant may remain responsible for certain privacy decisions relating to your Personal Information, including communications you receive from that Merchant and retention of Merchant records. Questions relating specifically to a Merchant’s privacy practices should be directed to that Merchant. Depending on the circumstances, Owner may act either on its own behalf or on behalf of a Merchant in connection with the processing of Personal Information.</p>
              <h3 data-anchor-id="consent" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="consent" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Consent
              </h3>
              <p>Our collection, use, and disclosure of your Personal Information is based on your consent. Depending on the sensitivity of the Personal Information and the context in which it is collected, your consent may be express (for example, when you agree to receive marketing communications) or implied (for example, when you provide your name and address to complete an order). You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice, by contacting us using the information in the “How to Contact Us” section above. If you withdraw your consent, we may not be able to provide you with certain aspects of our Services.</p>
              <h3 data-anchor-id="electronic-marketing-communications" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="electronic-marketing-communications" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Electronic Marketing Communications
              </h3>
              <p>Where required by applicable law, including CASL, we will obtain consent before sending commercial electronic messages. You may withdraw your consent and unsubscribe from commercial electronic messages at any time using the unsubscribe mechanism included in each message. Merchants are independently responsible for ensuring that their own commercial electronic messages comply with applicable law.</p>
              <h3 data-anchor-id="cross-border-transfers" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="cross-border-transfers" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Cross-Border Transfers
              </h3>
              <p>We and our service providers may process and store Personal Information in the United States and other jurisdictions outside Canada. Personal Information transferred outside Canada may be subject to lawful access by courts, governments, law enforcement agencies, and national security authorities in those jurisdictions. Before transferring Personal Information to service providers outside Canada, we take reasonable measures to ensure that an appropriate level of protection is provided through contractual and organizational safeguards.</p>
              <h3 data-anchor-id="privacy-incidents" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="privacy-incidents" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Privacy Incidents
              </h3>
              <p>We maintain procedures for responding to actual and suspected privacy and security incidents. Where required by Applicable Canadian Law, we will notify affected individuals and applicable regulators of breaches of security safeguards involving Personal Information where there is a real risk of significant harm and will maintain records of such incidents as required by law.</p>
              <h3 data-anchor-id="your-rights-under-pipeda-and-how-to-exercise-them" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="your-rights-under-pipeda-and-how-to-exercise-them" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Your Rights Under PIPEDA and How to Exercise Them
              </h3>
              <p>Subject to certain exceptions and limitations under applicable law, you may have the following rights:</p>
              <ul role="list">
                <li>
                  <strong>Right to Access:</strong>
                  {" You may have the right to access the Personal Information we hold about you."}
                </li>
                <li>
                  <strong>Right to Correct:</strong>
                  {" You may have the right to challenge the accuracy and completeness of your Personal Information and request that it be corrected."}
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong>
                  {" You may have the right to withdraw your consent to our collection, use, or disclosure of your Personal Information, subject to legal or contractual restrictions."}
                </li>
              </ul>
              <p>You may exercise your rights by submitting a request as described in the “How to Contact Us” section above. Please note that we may ask you to verify your identity before responding to such requests, and we will respond within the timeframe required by applicable law.</p>
              <h3 data-anchor-id="additional-rights-for-quebec-residents" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="additional-rights-for-quebec-residents" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Additional Rights for Quebec Residents
              </h3>
              <p>Residents of the Province of Québec may have additional rights under applicable privacy laws, including rights relating to access, rectification, withdrawal of consent, portability of certain computerized personal information, and obtaining information about cross-border transfers and automated decision-making processes where applicable. Where such laws apply, Owner will comply with those requirements.</p>
              <h3 data-anchor-id="call-recordings-and-voice-information" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="call-recordings-and-voice-information" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Call Recordings and Voice Information
              </h3>
              <p>{"Calls that are recorded, including calls handled through automated phone features, may contain audio information, transcripts, call metadata, and information voluntarily provided by participants during the call. Owner does not collect or use biometric voiceprints from ordinary customer service or ordering calls and does not use ordinary call recordings to authenticate an individual's identity through voice recognition technology unless separately disclosed and permitted by applicable law."}</p>
              <h3 data-anchor-id="artificial-intelligence-development-and-improvement" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="artificial-intelligence-development-and-improvement" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Artificial Intelligence Development and Improvement
              </h3>
              <p>Owner may use information generated through use of the Services to develop, evaluate, test, monitor, secure, and improve artificial intelligence systems and related technologies. Unless otherwise disclosed, such activities are generally conducted using aggregated, statistical, platform-level, or de-identified information. Where Personal Information is used in connection with such activities, Owner will do so only as permitted by applicable law and this Privacy Policy.</p>
              <h3 data-anchor-id="complaints" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="complaints" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Complaints
              </h3>
              <p>If you have a concern about how we have handled your Personal Information, please contact us first using the information in the “How to Contact Us” section above so we can try to resolve it. If you are not satisfied with our response, you have the right to file a complaint with the Office of the Privacy Commissioner of Canada, at priv.gc.ca.</p>
              <h3 data-anchor-id="privacy-officer" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="privacy-officer" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Privacy Officer
              </h3>
              <p>We have designated an individual responsible for overseeing our compliance with applicable Canadian privacy law. You can reach our privacy officer using the contact information in the “How to Contact Us” section above.</p>
              <h2 data-anchor-id="questions-2" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="questions-2" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Questions
              </h2>
              <p>If you have any questions regarding these additional disclosures, please contact us using the information in the “How to Contact Us” section above.</p>
              <h3 data-anchor-id="additional-disclosures-for-residents-of-european-union-and-u" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="additional-disclosures-for-residents-of-european-union-and-u" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Additional Disclosures for Residents of European Union and United Kingdom
              </h3>
              <h3 data-anchor-id="roles" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="roles" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Roles
              </h3>
              <p>The EU GDPR and UK GDPR distinguish between organizations that process Personal Data for their own purposes (known as “controllers”) and organizations that process Personal Information on behalf of other organizations (known as “processors”). We act as a controller with respect to Personal Data collected as you interact with our Services.</p>
              <h3 data-anchor-id="lawful-basis-for-processing" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="lawful-basis-for-processing" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Lawful Basis for Processing
              </h3>
              <p>The EU GDPR and UK GDPR require a “lawful basis” for processing Personal Information. Our lawful bases include where:</p>
              <ul role="list">
                <li>
                  <strong>Consent:</strong>
                  {" You have given consent to the processing of your Personal for one or more specific purposes either to us or to our service providers or partners."}
                </li>
                <li>
                  <strong>Contractual Necessity:</strong>
                  {" Processing your Personal Data is necessary for the performance of a contract between you and us."}
                </li>
                <li>
                  <strong>Legal Obligation:</strong>
                  {" Processing your Personal Data is necessary for compliance with a legal obligation."}
                </li>
                <li>
                  <strong>Legitimate Interests:</strong>
                  {" Processing your Personal Data is necessary for the purposes of the legitimate interests pursued by us or a third party provided that your interests and fundamental rights and freedoms do not override those interests."}
                </li>
              </ul>
              <h3 data-anchor-id="your-rights-under-the-eu-gdpr-and-uk-gdpr-and-how-to-exercis" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="your-rights-under-the-eu-gdpr-and-uk-gdpr-and-how-to-exercis" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Your Rights Under the EU GDPR and UK GDPR and How to Exercise Them
              </h3>
              <ul role="list">
                <li>
                  <strong>Right to Be Informed:</strong>
                  {" You may have the right to know or be notified about the collection of your Personal Data."}
                </li>
                <li>
                  <strong>Right to Access:</strong>
                  {" You may have the right to be provided with a copy of your Personal Data."}
                </li>
                <li>
                  <strong>Right to Data Portability:</strong>
                  {" You may have the right to receive the Personal Data you have provided to us in a structured, commonly used, and machine-readable format and/or to ask that we transmit your Personal Data to a third party, where applicable."}
                </li>
                <li>
                  <strong>Right to Delete/Be Forgotten:</strong>
                  {" You may have the right to request that we delete the Personal Data we have collected about you, subject to certain legal exceptions."}
                </li>
                <li>
                  <strong>Right to Correct:</strong>
                  {" You may have the right to request that we correct any inaccurate Personal Data we have collected about you."}
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong>
                  {" You may have the right to require us to restrict processing of your Personal Data."}
                </li>
                <li>
                  <strong>Right to Object:</strong>
                  {" You may have the right to object to the processing of your Personal Data for direct marketing/profiling or where we are processing your Personal Data for our legitimate interests."}
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong>
                  {" Where you have provided us with consent the processing of your Personal Data, you may have the right to withdraw such consent."}
                </li>
                <li>
                  <strong>Right to Not be Subject to Automated Individual Decision-Making:</strong>
                  {" You may have the right to not be subject to a decision based solely on automated processing that produces legal effects concerning you or similarly significantly affects you."}
                </li>
                <li>
                  <strong>Right to Contact Supervisory Authority:</strong>
                  {" You may have the right to contact the relevant supervisory authority."}
                </li>
              </ul>
              <p>You may exercise your rights by contacting us through the avenues listed above in the “Your Privacy Rights” section above. Please note that we may ask you to verify your identity before responding to such requests. If you make a request, we will try our best to respond to you as soon as possible.</p>
              <h2 data-anchor-id="questions-3" style={{ "position": "relative" }}>
                <span data-anchor-target="" id="questions-3" aria-hidden="true" style={{ "position": "absolute", "top": "calc(-7.5em)", "left": "0px", "width": "1px", "height": "1px", "fontSize": "1rem", "pointerEvents": "none" }}></span>
                Questions
              </h2>
              <p>If you have any questions regarding these additional disclosures, please contact us using the information in the “How to Contact Us” section above.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
