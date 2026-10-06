// IA section(s): hero.section-legal (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// Restaurant Participation Agree — the section's real markup, read from the rendered page (route /restaurant-participation-agreement, section 1).
export default function RestaurantParticipationAgree() {
  return (
    <section className="section-legal" data-clone-section="RestaurantParticipationAgree">
      <div className="container-large">
        <div className="legal_wrap">
          <div className="legal-nav_wrap">
            <div className="embed w-embed"></div>
            <ul role="list" className="legal-nav">
              <li className="legal-item">
                <A href="/privacy-policy" className="legal-link w-inline-block">
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
                <A href="/restaurant-participation-agreement" aria-current="page" className="legal-link w-inline-block w--current">
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
              <h1 className="h1">Restaurant Participation Agreement</h1>
            </div>
            <div data-anchors-headings="" data-anchors="scope" data-anchors-offset="7.5em" className="text-rich-text w-richtext">
              <p>Last Updated Date: August 27, 2024</p>
              <p>
                This Restaurant Participation Agreement (this “
                <strong>RPA</strong>
                ”) is a binding contract between Business (defined below) and Owner.com, Inc. (“
                <strong>Owner</strong>
                ”). This RPA sets forth the terms pursuant to which Business may be permitted to use or access certain technology made available by Owner that powers direct online ordering and provides restaurants information relating to those orders (the “
                <strong>Platform</strong>
                ” and the Platform, together with any services provided to Business by or on behalf of Owner in connection with Business’s use of the Platform, the “
                <strong>Service</strong>
                ”).
              </p>
              <p>
                ACCEPTING THIS RPA, EITHER BY CLICKING A BOX INDICATING BUSINESS’S ACCEPTANCE, ACCESSING OR USING ANY PART OF THE SERVICE, OR OTHERWISE AFFIRMATIVELY INDICATING BUSINESS’S ACCEPTANCE OF THIS RPA, YOU, THE INDIVIDUAL ACCEPTING THIS RPA: (i) AGREE TO THIS RPA ON BEHALF OF THE ORGANIZATION, COMPANY, OR OTHER LEGAL ENTITY FOR WHICH YOU ACT (“
                <strong>Business</strong>
                ”) AND (ii) REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND BUSINESS TO THIS RPA. IF YOU DO NOT HAVE SUCH AUTHORITY, OR DO NOT AGREE WITH THE TERMS OF THIS RPA, YOU MUST NOT ACCEPT THIS RPA AND NEITHER YOU NOR THE BUSINESS MAY USE OR ACCESS THE SERVICE.
              </p>
              <p>
                <strong>ARBITRATION NOTICE</strong>
                {". Except for certain kinds of disputes described in Section "}
                <a href="#23">23</a>
                {" ("}
                <em>Dispute Resolution and Arbitration</em>
                ), Business agrees that disputes arising under this RPA will be resolved by binding, individual arbitration, and BY ACCEPTING THIS RPA, BUSINESS AND OWNER ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.
              </p>
              <p>
                The Service enables patrons and prospective patrons of restaurants (“
                <strong>Customers</strong>
                ”) to access and use Business websites and mobile applications powered by the Platform (collectively “Business Websites”) and order and pay for items from those restaurants. Business may visit Owner’s then-current pricing page (available at Owner.com/pricing or other URL specified by Owner) to see current pricing information, including fees, applicable to Business’s use of the Service (the “
                <strong>Pricing Page</strong>
                ”) for restaurants operated by Business (each, a “
                <strong>Restaurant</strong>
                ”).
              </p>
              <h2>{"1. Material Terms. "}</h2>
              <p>As provided in greater detail in this RPA (and without limiting the express language below), Business acknowledges the following:</p>
              <ol role="list">
                <li>the Platform is licensed, not sold to Business, and that Business may use the Service only as set forth in this RPA;</li>
                <li>
                  Business consents to the collection, use, and disclosure of information Business provides and other information obtained about Business from Business’s use of the Service, including personally identifiable information and location information, in accordance with Owner’s Privacy Policy (available at Owner.com/Privacy) (the “
                  <strong>Privacy Policy</strong>
                  ”);
                </li>
                <li>the Platform, Service, and Tablets (as defined below) and Printers (as defined below) are provided “as is” without warranties of any kind and Owner’s liability to Business is limited; and</li>
                <li>
                  {"disputes arising hereunder will be resolved by binding arbitration. By accepting this RPA, as provided in greater detail in Section "}
                  <a>23</a>
                  {" of this RPA, Business and Owner are each waiving the right to a trial by jury or to participate in a class action."}
                </li>
              </ol>
              <h2>2. Fees; Payment.</h2>
              <h3>{"2.1 Setup and Equipment Fees. "}</h3>
              <ol role="list">
                <li>
                  <strong>Setup</strong>
                  {" "}
                  <strong>Fees</strong>
                  . Owner may charge Business a setup fee when Business starts using the Service as indicated on the Pricing Page (“
                  <strong>Setup Fee</strong>
                  ”). Notwithstanding anything else in this RPA and unless otherwise mutually agreed to by the parties, Business acknowledges and agrees that Setup Fees are non-refundable.
                </li>
                <li>
                  <strong>Tablet Fees</strong>
                  . As a part of that setup, Owner may also provide Business with one or more Loaned Tablets (defined below) for use in connection with the Service. Owner may charge Business a monthly per-Loaned Tablet fee as indicated on the Pricing Page for each Loaned Tablet that Owner makes available to Business (the “
                  <strong>Tablet Fee</strong>
                  ”). If Business chooses to purchase any Tablets provided to Business by Owner, and Owner provides an option for Business to do so, Owner may charge a fee per Purchased Tablet (as defined below), as agreed by Owner and Business at the time of that purchase (the “
                  <strong>Tablet</strong>
                  {" "}
                  <strong>Purchase Fee</strong>
                  {"”). Additional terms applicable to Tablets are set forth in Section "}
                  <a href="#8">8</a>
                  {". The monthly Tablet Fee (if any) will be charged in advance on a monthly basis, until Owner receives Business’s Loaned Tablet(s) in accordance with Section "}
                  <a href="#8.2">8.2</a>
                  {". "}
                </li>
                <li>
                  <strong>Printer Fees</strong>
                  . As a part of a setup, Owner may also provide Business with one or more Loaned Printers (defined below) for use in connection with the Service. Owner may charge Business a monthly per-Loaned Printer fee as indicated on the Pricing Page for Loaned Printers that Owner makes available to Business (the “
                  <strong>Printer Fee</strong>
                  ”). If Business chooses to purchase any Printers provided to Business by Owner, and Owner provides an option for Business to do so, Owner may charge a fee per Purchased Printer (as defined below), as agreed by Owner and Business at the time of that purchase (the “
                  <strong>Printer Purchase Fee</strong>
                  {"”). Additional terms applicable to Printers are set forth in Section "}
                  <a href="#9">9</a>
                  {". The monthly Printer Fee (if any) will be charged in advance on a monthly basis, until Owner receives Business’s Loaned Printer(s) in accordance with Section "}
                  <a href="#9.2">9.2</a>
                  {". "}
                </li>
                <li>
                  <strong>Setup and Equipment Fees Payment Process</strong>
                  . Setup Fees, Tablet Fees (if any), Printer Fees (if any), the Tablet Purchase Fees (if any), and the Printer Purchase Fees (if any) (collectively, “
                  <strong>Setup and Equipment Fees</strong>
                  ”) are due in advance and Business authorizes Owner to automatically charge those fees to the credit card or other payment method Business provides upon registration with the Service. Owner uses a third party to process credit card transactions and does not store Business’s credit card information. Business agrees to keep its payment information up to date and may review its payment plan and other account details in the dashboard on the Service.
                </li>
              </ol>
              <h3>{"2.2 Subscription Service. "}</h3>
              <p>
                The Service may include certain subscription-based plans with automatically recurring payments for periodic charges (“
                <strong>Subscription Service</strong>
                ”). The “
                <strong>Subscription Billing Date</strong>
                ” is the date when Owner signs Business up for Business’s subscription to the Service. The initial term of the Subscription Service will begin on the Subscription Billing Date and continue for one month (such period, the “
                <strong>Initial Subscription Period</strong>
                ”) and will automatically renew for successive monthly periods (the Initial Subscription Period and each such renewal period, if any, each a “
                <strong>Subscription Period</strong>
                ”), unless Business cancels the Subscription Service or Owner terminates it. If Business activates a Subscription Service, then Business authorizes Owner or its third-party payment processors to periodically charge, on a going-forward basis and until cancellation of the Subscription Service, all accrued sums on or before the applicable payment due date. For information on the “
                <strong>Subscription Fee</strong>
                {",” please see the Pricing Page. Business’s account will be charged automatically on the Subscription Billing Date and thereafter on the renewal date of Business’s Subscription Service for all applicable fees and Taxes (as defined below) for the next Subscription Period. Business must cancel its Subscription Service before it renews in order to avoid billing of the next periodic Subscription Fee to Business’s account. Owner or its third-party payment processor will bill the monthly Subscription Fee to the payment method associated with Business’s account or that Business otherwise provides to Owner. Business may cancel the Subscription Service by contacting Owner at "}
                <a href="mailto:contact@owner.com">support@owner.com</a>
                . BUSINESS’S CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL DATE FOR THE SUBSEQUENT SUBSCRIPTION PERIOD IN ORDER TO AVOID A CHARGE FOR THAT SUBSCRIPTION PERIOD.
              </p>
              <h3>2.3 Delinquent Accounts.</h3>
              <p>{" Owner may suspend or terminate access to the Service, including fee-based portions of the Service, for any account for which any amount is due but unpaid. In addition to the amounts due for the Service, a delinquent account will be charged with fees or charges that are incidental to any chargeback or collection of any the unpaid amount, including collection fees. Owner reserves the right to set off all amounts owed by Owner to Business under this RPA, including all Balance Payments (as defined below), up to the full amount of fees that are due that but unpaid. If Business’s payment method is no longer valid at the time a fee is due, then Owner reserves the right to delete Business’s account and any information associated with Business’s account without any liability to."}</p>
              <h3>2.4 Guarantee Policy</h3>
              <p>Owner may from time to time have a guarantee policy applicable to some customers. If applicable, the terms of the guarantee are governed by the guarantee policy.</p>
              <h3>{"2.5 Transactions and Deliveries. "}</h3>
              <p>
                For each order placed by a Customer through the Platform (each a “
                <strong>Customer Order</strong>
                ”), Owner will charge Business the transaction fees indicated on the Pricing Page (“
                <strong>Transaction Fee</strong>
                ”). If a Customer Order is for delivery by one of Owner’s delivery partners (each, a “
                <strong>Delivery Partner</strong>
                ”), Owner will additionally charge Business the delivery fee calculated as indicated in that Customer Order (“
                <strong>Delivery Fee</strong>
                ”), which may be calculated as a percentage of the total price of that Customer Order. Business acknowledges that Owner may charge the applicable Customer directly for the applicable Customer Order and Business hereby authorizes Owner and its third party payment processors to collect from such Customers, on Business’s behalf, payment for such Customer Orders. Owner will remit to Business any such amounts less the Transaction Fees and Delivery Fees owed, if any (“
                <strong>Balance Payments</strong>
                {"”). Business will be responsible for the payment of any refunds, chargebacks, or other fees incurred in connection with each Customer Order and Business agrees to reimburse Owner for amounts actually paid by Owner for those refunds, chargebacks, or other fees. Owner reserves the right to offset any amounts Business owes to Owner against the Balance Payments. Business acknowledges that the prices charged to the Customer will be based on the pricing information that Business provides through the Service, and that it is Business’s responsibility to keep such pricing information up to date. In some cases, certain regulations that may be applicable to Business and its use of the Services may require specific itemization of certain fees and charges (e.g. California SB 478; California Consumer Legal Remedies Act (Civil Code Section 1770)). While Owner endeavors to offer features that will allow Business to comply with all potentially applicable regulations, Owner does not represent that such features exist or will exist with respect to all regulations in all jurisdictions. Business is solely responsible for ensuring that all Business Websites comply with applicable law. Customer may request development of a feature intended to assist with legal compliance by submitting a ticket at "}
                support@owner.com
                . Business should consult with a licensed attorney to determine whether any Business Website is compliant with consumer protection regulations such as SB 478.
              </p>
              <h3>{"2.6 Taxes. "}</h3>
              <p>
                All fees and amounts payable by Business to Owner are exclusive of all applicable sales, use, withholding, excise, value added or other taxes, duties, or other charges levied by any governmental authority in connection with Business’s use of the Service, loan or purchase of a Tablet or Printer, or a Customer Order (collectively, “
                <strong>Taxes</strong>
                ”). Business will be responsible for the payment of all Taxes (other than those based on Owner’s net income) incurred in connection with its use of the Service or any Customer Order.
              </p>
              <h2>3. The Service.</h2>
              <h3>{"3.1 Privacy Policy. "}</h3>
              <p>Business’s use of the Service is subject to Owner’s Privacy Policy. Business has read, understood, and agrees to the terms of the Privacy Policy, including the data collection, use, and disclosure provisions set forth therein, which is hereby incorporated into this RPA by this reference.</p>
              <h3>{"3.2 Accounts on the Service. "}</h3>
              <p>To create an account on the Service, Business may be required to provide the name of a contact person for the Business, Business’s name, Business address(es) (including the address(es) of each Restaurant), email address, and payment information for Business’s payment method, which may include Business’s credit card or bank account information and billing address. Business represents and warrants that all such information that Business provides to Owner is accurate and Business agrees to keep such information up to date.</p>
              <h2>4. Customer Orders.</h2>
              <h3>4.1 Generally.</h3>
              <p>Business will not act in a manner that disfavors or deprioritizes the fulfillment or delivery of Customer Orders placed on or through the Service. In all cases, Business will prepare food and beverages in accordance with the Customer Orders and with the same quality of food and beverage served to Customers who dine in-person or otherwise order independently from the Service. Business will use commercially reasonable efforts to prepare the order as soon as reasonably practicable. In the event that demand at a given location exceeds Business’s capacity (as determined by Business in its sole discretion), Business will have the right to request that Owner customer service suspend Customer Orders for a given location for a mutually agreed upon timeframe and Owner will make reasonable efforts to accommodate those requests. The foregoing will not apply to Customer Orders placed by Customers prior to Owner’s receipt of Business’s suspension request.</p>
              <h3>{"4.2 Deliveries. "}</h3>
              <p>Business will indicate to Owner, either over the phone or otherwise via the Service for each Restaurant, whether delivery will be provided by the Restaurant or by Delivery Partners, along with any geographic limitations on delivery. Upon receiving a Customer Order for delivery, Business will promptly provide to Owner via the Service the expected prep time for the Customer Order, and, if the Customer Order is designated for delivery to be handled by a Restaurant, the expected delivery time. Business will endeavor to have the Customer Order available for pickup no more than 30 minutes from Business’s receipt of the applicable Customer Order. Business will promptly inform Owner of any delays in food preparation through the Service or as otherwise instructed by Owner (which may be directly to the delivery person, via the Service, or otherwise). Business acknowledges that the delivery services are not provided by Owner, and Owner makes no warranties with respect to the timely delivery of any items. Business will bear all risk of loss of any items in transit for all deliveries.</p>
              <h3>{"4.3 Food and Safety. "}</h3>
              <p>Business and its employees and contractors will prepare and handle food in accordance with industry practices and in compliance all applicable food safety laws and regulations, including the Food Safety and Inspection Service Guidelines as set forth by the United States Department of Agriculture Food Safety and Inspection Service and any other applicable food handling rules.</p>
              <h3>{"4.4 Tobacco and Alcohol. "}</h3>
              <p>Business may not offer or sell any tobacco products or tobacco related products on or through the Service. Except as otherwise agreed between Business and Owner, Business may not offer or sell alcoholic beverages, whether for pickup or delivery on or through the Service.</p>
              <p>
                <strong>DOORDASH Service – Incorporated Third-Party Terms.</strong>
                {" If Client elects to utilize DoorDash for third-party delivery within the Direct Delivery Connection Platform, Client provides its agreement to become bound by the DoorDash terms and conditions of service located at: "}
                <a target="_blank">https://help.doordash.com/merchants/s/terms-of-service-us?language=en_US</a>
                . In addition, if Client utilizes DoorDash for the sale and distribution of alcohol, Client expressly agrees to also become bound by DoorDash’s Alcohol Addendum, attached as Addendum A-1 hereto.
              </p>
              <h2>5. Business Content.</h2>
              <h3>{"5.1 Owner Claims No Ownership. "}</h3>
              <p>
                The Service may provide Business with the ability to create or post content (“
                <strong>Business Content</strong>
                ”) (e.g., menus and other information about the Restaurant(s)). Owner claims no ownership over Business Content. Business and its third party licensors, as appropriate, retain all copyright, patent, and trademark rights to the Business Content. Business is solely responsible for protecting those rights and acknowledges that Business Content is non-confidential and non-proprietary.
              </p>
              <h3>{"5.2 Owner’s Use of Business Content. "}</h3>
              <p>
                <strong>‍</strong>
                By creating, posting, or sharing Business Content on or through the Service, Business hereby grants Owner a worldwide, non-exclusive, royalty-free license to use, modify, remove, publish, transmit, or display Business Content solely in conjunction with the operation of the Service and any marketing or advertising of the Service. Owner will discontinue this licensed use within a commercially reasonable period after the termination of this RPA. If Business objects in any way to Owner’s alteration or manipulation of the Business Content, Business will promptly notify Owner, and Owner will consider any reasonable requests regarding its use of the Business Content. Owner reserves the right to refuse to accept, post, display, or transmit any Business Content in its sole discretion.
              </p>
              <h3>{"5.3 Third-Party Services. "}</h3>
              <p>Owner may provide tools through the Service that enable Business to export information to third-party services. By using one of these tools, Business agrees that Owner may transfer that information to the applicable third-party service. Third-party services are not under Owner’s control and Owner is not responsible for any third-party service’s use of Business’s exported information. The Service may also contain links to third-party websites. Linked websites are not under Owner’s control and Owner is not responsible for their content. In some cases, Business may be legally required to obtain consent from a Customer before information can be transferred to a third-party service. If Business enables information transfer to a third-party service, Business is solely responsible for obtaining and managing such consent, even if a mechanism of obtaining consent is not made available by Owner or the third-party service. Owner expressly disclaims liability for any such transfer of information without lawful consent.</p>
              <h3>5.4 Americans With Disabilities Act; Applicability, Credits and Business Responsibilities</h3>
              <p>Owner values the right to access for all Customers and has expended substantial resources to offer a Platform that complies with access standards established for disabled Americans accessing public-facing websites under the Americans with Disabilities Act (ADA) and similar State laws. Such laws may be applicable to Business Websites. As such, components of the Services may make Business eligible for certain tax incentives, i.e. Disabled Access Credit (Form 8826). Owner makes no warranty as to eligibility for any such credit or the value of credit that may be claimed. Business should consult with a licensed and qualified tax professional to determine eligibility for any such tax incentive. Owner expressly disclaims liability for any related information provided to Business during sales or onboarding. Any such information is not legal or tax advice and should not be relied upon as such. The Platform is intended to comply with all applicable standards under the ADA and similarly applicable State laws. However, Owner permits Business to make certain design decisions with respect to Business Websites. Such design decisions may include features like font, font color, primary brand color, and  secondary brand color. Assistive devices used by disabled persons to navigate websites include technology such as screen readers, which may use visual cues to navigate public-facing websites. To the extent that Business chooses designs that hinder the effective use of screen readers or similar assistive technology, Owner is not responsible for the Business Websites’ noncompliance with the ADA or similar State laws. Any information provided by Owner to Business regarding potential compliance considerations under the ADA or similar State laws is provided as is, includes no representations of accuracy or applicability and should not be construed as legal advice or relied upon as such. Business should consult with a licensed attorney or ADA professional to determine whether any Business Website is navigable by the use of assistive technology or otherwise compliant with the ADA or similar State laws.</p>
              <h2>6. Owner Content.</h2>
              <h3>{"6.1 Owner Content. "}</h3>
              <p>
                Owner hereby authorizes Business, subject to the terms of this RPA, to access and use the designs, text, graphics, images, video, information, logos, button icons, software (including mobile applications and hosted software services), audio files, computer code, Third Party Content (as defined below), and other Owner content included within the Service (collectively, “
                <strong>Owner Content</strong>
                ”) solely for Business’s use of the Service. Any other use is expressly prohibited. All Owner Content and the compilation (meaning the collection, arrangement, and assembly) of all Owner Content are the property of Owner or its licensors and are protected under copyright, trademark, and other laws. Unauthorized use of the Owner Content may violate copyright, trademark, and applicable communications regulations and statutes and is strictly prohibited. Business must preserve all copyright, trademarks, service marks, and other proprietary notices contained in the original Owner Content.
              </p>
              <h3>{"6.2 All Owner Rights Reserved. "}</h3>
              <p>
                <strong>‍</strong>
                {"Business acknowledges that the license granted in Section "}
                <a href="#6.1">6.1</a>
                {" confers no title or ownership and is not a sale of any rights in the Owner Content and understands that this RPA is not intended to confer, and does not confer, any rights or remedies on any person other than a non-exclusive, non-transferable, non-sublicensable, limited license. As between Owner and Business, Owner retains all intellectual property rights in the Service and Owner Content, including all patent, copyright, and trademark rights. All rights not expressly granted to Business are reserved solely to Owner. There are no implied licenses granted hereunder."}
              </p>
              <h3>{"6.3 Third Party Content. "}</h3>
              <p>
                The Service may contain content from Owner’s licensors, including from Customers (“
                <strong>Third Party Content</strong>
                ”). Business acknowledges that Business will not obtain, as a result of Business’s use of the Service, any right, title, or interest in or to Third Party Content delivered via the Service or in any intellectual property rights (including any copyrights, patents, trademarks, trade secrets, or other rights) in the Third Party Content. Except as expressly permitted by this RPA, Business may not copy, modify, translate, publish, broadcast, transmit, distribute, perform, display, or sell any Third Party Content.
              </p>
              <h2>7. Marketing and Publicity.</h2>
              <p>{"7.1 Marketing Materials. "}</p>
              <p>
                Owner may, from time to time, provide Business with marketing materials, which may include fliers, door decals, signs, or other materials (“
                <strong>Marketing Materials</strong>
                {"”). Subject to Section "}
                <a href="#7.2">7.2</a>
                {" below, Business may use the Marketing Materials that Business finds acceptable in its reasonable discretion. Business may not modify any Marketing Materials without Owner’s prior written consent. Owner will, as between Owner and Business, retain all right, title, and interest in and to all Marketing Materials provided to Business under this RPA."}
              </p>
              <h3>{"7.2 Marketing Efforts. "}</h3>
              <p>Business shall use commercially reasonable efforts to conduct the following marketing activities during the term of this RPA: (i) hand out fliers or other Marketing Materials, as applicable, to Customers or other patrons of the Restaurant promoting the Service, (ii) refer Customers who call Restaurants to place an order to place an order online via the Service instead, and (iii) promote the Service by emailing or SMS messaging Customers, in each case, conducted in compliance with all applicable law.</p>
              <h3>{"7.3 Website. "}</h3>
              <p>
                Within 30 days from the date Business first uses the Service, and thereafter at all times during the term of the RPA, Business will feature on each Business Website Owner’s company name and logo, a narrative description of the Service as they apply to the relationship contemplated hereunder, and a hyperlink to Owner’s website (“
                <strong>Owner Reference</strong>
                ”). Business and Owner will agree upon placement, appearance, and content of the Owner Reference prior to making the Owner Reference public. Business will remove any Owner Reference promptly upon Owner’s request.
              </p>
              <h3>{"7.4 Publicity. "}</h3>
              <p>Owner may use Business’s name and logo in its marketing materials, press releases, and on its website solely to identify Business as a user of the Service.</p>
              <h2>8. Tablets.</h2>
              <h3>{"8.1 Generally. "}</h3>
              <p>
                <strong>‍</strong>
                For the purposes of this RPA, “
                <strong>Tablet</strong>
                {"” means a configured tablet (i) for which the Service is optimized and (ii) provided to Business by Owner. Any firmware or other software that is preinstalled in a Tablet is “Owner Content” under this RPA and is licensed to Business in accordance with Section "}
                <a>6</a>
                . Owner may, in its sole discretion, provide support for Tablets and any software preinstalled on Tablets.
              </p>
              <h3>{"8.2 Loaned Tablets. "}</h3>
              <p>
                {"The terms in this Section "}
                <a href="#8.2">8.2</a>
                {" only apply to Tablets that Business loans from Owner (“"}
                <strong>Loaned Tablets</strong>
                ”). Business will use Loaned Tablets in a careful and lawful manner and will not make any alterations, additions, or improvements to such Loaned Tablets without Owner’s prior written consent. Business will take reasonable and prudent care to maintain Loaned Tablets in a safe and secure manner. Business will be responsible for the entire replacement cost of any Loaned Tablet that is lost, stolen, or damaged. Business will immediately notify Owner if any Loaned Tablet is lost, stolen, or damaged. Upon termination of this RPA, Business will return all Loaned Tablets to Owner within five business days (the “
                <strong>Tablet Return Period</strong>
                ”). If Business fails to return all Loaned Tablets within the Tablet Return Period, Owner reserves the right to charge Business the replacement cost of such unreturned Loaned Tablets. Loaned Tablets are loaned, not sold, to Business, solely for Business’s use during the term of this RPA. Nothing in this RPA transfers ownership of any Loaned Tablet to Business and Business has no title or property interest in Loaned Tablets. Business will keep Loaned Tablets free of all security interests, liens, and other encumbrances.
              </p>
              <h3>{"8.3 Purchased Tablets. "}</h3>
              <p>
                {"The terms in this Section "}
                <a href="#8.3">8.3</a>
                {" only apply to Tablets that Business purchases from Owner (“"}
                <strong>Purchased Tablets</strong>
                ”).
              </p>
              <h4>{"8.3.1 Risk of Loss; Title. "}</h4>
              <p>All Purchased Tablets are subject to a shipment contract. This means that the risk of loss and title for Purchased Tablets will pass to Business upon Owner’s delivery of the applicable Purchased Tablet to the carrier. Owner will not ship a Purchased Tablet until it has received the Tablet Purchase Fee for the applicable Purchased Tablet.</p>
              <h4>{"8.3.2 Returns and Refunds. "}</h4>
              <p>If Business is dissatisfied with a Purchased Tablet, Business may return it at its own cost for a full refund within 30 days of the date Business receives that Purchased Tablet.</p>
              <h4>{"8.3.3 Shipping. "}</h4>
              <p>Currently, the Service and Tablets are only available to businesses in the United States. Owner will bear the cost of shipping Tablets to Business.</p>
              <h3>{"8.4 Pass-Through Warranty. "}</h3>
              <p>Whether Business is loaned or purchases a Tablet, Business acknowledges that each Tablet is provided to Owner by third party equipment manufacturers. Owner will, to the extent transferable, pass through to Business the warranty, if any, as provided to Owner by such third party equipment manufacturers.</p>
              <h2>9. Printers.</h2>
              <h3>{"9.1 Generally. "}</h3>
              <p>
                <strong>‍</strong>
                For the purposes of this RPA, “
                <strong>Printer</strong>
                {"” means a configured printer (i) for which the Service is optimized and (ii) provided to Business by Owner. Any firmware or other software that is preinstalled in a Printer is “Owner Content” under this RPA and is licensed to Business in accordance with Section "}
                <a>6</a>
                . Owner may, in its sole discretion, provide support for Printers and any software preinstalled on Printers.
                <strong>‍</strong>
              </p>
              <h3>{"9.2 Loaned Printers. "}</h3>
              <p>
                {"The terms in this Section "}
                <a href="#9.2">9.2</a>
                {" only apply to Printers that Business purchases from Owner (“"}
                <strong>Loaned Printers</strong>
                ”). Business will use Loaned Printers in a careful and lawful manner and will not make any alterations, additions, or improvements to such Loaned Printers without Owner’s prior written consent. Business will take reasonable and prudent care to maintain Loaned Printers in a safe and secure manner. Business will be responsible for the entire replacement cost of any Loaned Printer that is lost, stolen, or damaged. Business will immediately notify Owner if any Loaned Printer is lost, stolen, or damaged. Upon termination of this RPA, Business will return all Loaned Printers to Owner within five business days (the “
                <strong>Printer</strong>
                {" "}
                <strong>Return Period</strong>
                ”). If Business fails to return all Loaned Printers within the Printer Return Period, Owner reserves the right to charge Business the replacement cost of such unreturned Loaned Printers. Loaned Printers are loaned, not sold, to Business, solely for Business’s use during the term of this RPA. Nothing in this RPA transfers ownership of any Loaned Printer to Business, and Business has no title or property interest in Loaned Printers. Business will keep Loaned Printers free of all security interests, liens, and other encumbrances.
              </p>
              <h3>{"9.3 Purchased Printers. "}</h3>
              <p>
                {"The terms in this Section "}
                <a href="#9.3">9.3</a>
                {" only apply to Printers that Business purchases from Owner (“"}
                <strong>Purchased Printers</strong>
                ”).
              </p>
              <h3>{"9.3.1 Risk of Loss; Title. "}</h3>
              <p>{"All Purchased Printers are subject to a shipment contract. This means that the risk of loss and title for such Purchased Printers will pass to Business upon Owner’s delivery of the applicable Purchased Printer to the carrier. Owner will not ship a Purchased Printer until it has received the Printer Purchase Fee for the applicable Purchased Printer. "}</p>
              <h3>
                ‍
                <strong>9.3.2 Returns and Refunds</strong>
                .
              </h3>
              <p>{" If Business is dissatisfied with a Purchased Printer, Business may return it at its own cost for a full refund within 30 days of the date Business receives that Purchased Printer."}</p>
              <h3>{"9.4 Shipping. "}</h3>
              <p>Currently, the Service and Printers are only available to businesses in the United States. Owner will bear the cost of shipping Printers to Business.</p>
              <h3>{"9.5 Pass-Through Warranty. "}</h3>
              <p>Whether Business is loaned or purchases a Printer, Business acknowledges that each Printer is provided to Owner by third-party equipment manufacturers. Owner will, to the extent transferable, pass through to Business the warranty, if any, as provided to Owner by such third party equipment manufacturers.</p>
              <h2>10. Loyalty Programs and Promotions.</h2>
              <h3>{"10.1 Loyalty Programs. "}</h3>
              <p>
                The Service may enable Business to offer Customers loyalty points or other programs through which Customers may receive rewards or benefits for placing Customer Orders (“
                <strong>Loyalty Program</strong>
                ”). Business is solely responsible for the lawful operation of such Loyalty Programs and agrees to honor any rewards or benefits offered to Customers in connection with such Loyalty Programs.
              </p>
              <h3>{"10.2 Promotions. "}</h3>
              <p>
                If Business or its designee uses the Service to advertise or run a promotion (including a contest or sweepstakes) (a “
                <strong>Promotion</strong>
                ”), Business is fully responsible for the lawful operation of each Promotion, including the official rules, offer terms and eligibility requirements, and compliance with applicable rules and regulations governing each Promotion and prizes offered (including registration and bonding and obtaining any necessary approvals). Promotions must include a complete release of Owner, its affiliates, employees, contractors, and agents by the participants and an acknowledgement that the applicable Promotion is not sponsored by or associated with Owner. Owner will not provide any support for Promotions and Business agrees that use of the Service in connection with any Promotion is at Business’s own risk.
              </p>
              <h2>11. Gift Cards.</h2>
              <h3>{"11.1 Gift Cards. "}</h3>
              <p>
                The Service may enable Business to offer to Customers electronic gift cards or gift certificates to a specified Restaurant (each, a “
                <strong>Gift Card</strong>
                {"”). Owner provides to Business a service by which Business can offer and manage such Gift Cards and Owner processes the related payments. Business, and not Owner, is the issuer of Gift Cards. Business may not issue a Gift Card with a value in excess of $2,000, add value to a previously issued Gift Card so that the total funds loaded on a Gift Card in any single day exceed $2,000, or issue more than $10,000 in Gift Cards to any single person in any one day. Business may not impose an expiration date on Gift Cards and any unused balance of a Gift Card must remain available to the holder of the Gift Card until fully redeemed. Business may not provide a cash refund from or cash back on Gift Cards except to the extent required by applicable law (and, if required by law, will refund any amount due from a Gift Card balance). Business is solely responsible for complying with all laws related to the sale, issuance, and acceptance of Gift Cards, including notice and disclosure requirements, expiration dates and fees, refunds, unclaimed property or escheat requirements (such as tracking, reporting, and remittance of unclaimed property balances in all states), and customer service for buyers and holders of Gift Cards. Business represents and warrants that it will provide clear and conspicuous disclosure of, and bind Customers to, applicable Gift Card terms. Business represents and warrants that it is and will remain knowledgeable of the applicable laws and regulations related to the sale, issuance, and acceptance of Gift Cards and will comply with the same, including as they may evolve, even after the termination of this RPA. "}
                <br />
              </p>
              <h3>{"11.2 Fees; Payment. "}</h3>
              <p>
                For each purchase of a Gift Card, Owner will process the entire transaction for the value of the Gift Card and will retain 5% of the total sale amount (the “
                <strong>Gift Card Fee</strong>
                ”) as a processing and services fee. Owner will use commercially reasonable efforts to remit remaining balance of the total sale amount, minus third party processing fees and Taxes (the “
                <strong>Gift Card Payment</strong>
                {"”) to Business within 7 days from the date on which Owner receives the Gift Card Fee. Owner may offset chargebacks, refunds, or adjustments against any Gift Card Payment before remittance. "}
              </p>
              <h3>{"11.3 Liability; Indemnification. "}</h3>
              <p>
                Business agrees to indemnify and hold Owner, its officers, directors, employees, agents, service providers, and licensors harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in any way connected to Gift Card terms and the sale of Gift Cards, including claims related to violations of applicable law and claims by Customers. Business further acknowledges and agrees that Business will be solely responsible for handling all claims by Customers related to the sale of Gift Cards, including claims related to violations of applicable law and claims by Customers, directly with such Customers. Business further acknowledges and agrees that Business will be solely responsible for handling all claims by Customers related to the sale of Gift Cards directly with such Customers.
                <strong>‍</strong>
              </p>
              <h2>{"12. Prohibited Service Uses. "}</h2>
              <p>
                <strong>‍</strong>
                Business will only use the Service for its intended purpose. Business must use the Service in compliance with all privacy, data protection, intellectual property, and other applicable laws. Business will not (and will not permit, enable, or assist others to): (i) aggregate, copy, or duplicate any Owner Content; (ii) use data mining, robots, or other data gathering devices on the Service; (iii) remove, disable, damage, circumvent, or otherwise interfere with the security of the Service; (iv) interfere or attempt to interfere with the proper working of the Service; (v) gain or attempt to gain unauthorized access to the Service or computers linked to the Service; (vi) reverse engineer or attempt to reverse engineer the Service; (vii) frame or link to the Service without permission; (viii) attempt to submit or submit a virus to the Service; (ix) take any action imposing an unreasonable or disproportionately large load on Owner’s infrastructure; (x) obtain or attempt to obtain unauthorized access to other users’ accounts; (xi) sell, transfer, or assign any of its rights to use the Service to a third party without Owner’s express written consent; (xii) use the Service in a manner that results in or may result in complaints, disputes, claims, fines, penalties, and other liability to Owner or others; (xiii) use the Service in an illegal way or to commit an illegal act; (xiv) access the Service from a jurisdiction where it is illegal, unauthorized, or penalized; or (xv) attempt to do any of the foregoing. Business further agrees that it will not use Customer Data (as defined below) in any manner other than in accordance with the Privacy Policy.
                <strong>‍</strong>
              </p>
              <h2>{"13. Third Party Software. "}</h2>
              <p>
                <strong>‍</strong>
                The Platform may include or be accompanied by software owned or licensed by a third party (“
                <strong>Third Party Software</strong>
                ”). Third Party Software may be subject to separate license terms, which may be provided or made available to Business by Owner.
              </p>
              <h2>14. Data.</h2>
              <h3>{"14.1 Consent to Use of Business’s Data; SMS Marketing and TCPA. "}</h3>
              <p>Business agrees that Owner and its service providers may collect and use technical data and related information, including device identifiers and other technical information about Business’s devices, systems, and application software, and peripherals that is gathered periodically to facilitate the provision of software updates, product support, and other services to Business (if any) related to the Platform and the Service, and to track and report Business’s activity inside of the Service, including for analytics purposes. Please see the Privacy Policy for more details regarding the personally identifiable information Owner collects and how it uses and discloses that information. The Service includes telemarketing. Specifically, SMS texts will be sent to Customers on behalf of Business. During Business onboarding to the Platform, Owner will request from Business a phone list, a list of Customer phone numbers for the purpose of SMS telemarketing. The Telephone Consumer Protection Act (TCPA) 47 USC § 227 requires affirmative (opt-in) consent for the use of phone numbers for telemarketing. To the extent that the TCPA or any subsequent or similar US State or Federal law governing consent to telemarketing is applicable to the use of Business Customer phone numbers for SMS marketing purposes, Business represents and warrants that it has obtained or will obtain such lawful consent prior to providing such phone list to Owner. Owner expressly disclaims liability for any violation of the TCPA or similar US State or Federal laws related to Customer phone numbers provided to Owner by Business.</p>
              <h3>{"14.2 Customer Data. “Customer Data” "}</h3>
              <p>means all information submitted by or collected regarding Customers via the Service, including addresses and contact information. To the extent Owner provides Business with any Customer Data, Business may use such Customer Data only in connection with its use of the Services and at all times in a manner consistent with the Privacy Policy.</p>
              <h2>{"15. Ownership. "}</h2>
              <p>
                <strong>‍</strong>
                The Service and the Owner Content, including all intellectual property rights therein, are the sole and exclusive property of Owner and its licensors, including other users of the Service, provided that Business retains ownership of any intellectual property rights it may have in any Business Content that Business uploads to the Service. Except for the limited license expressly granted by and to Business under this RPA, no other rights, licenses, or immunities are granted or will be deemed to be granted under this RPA, either expressly, or by implication, estoppel, or otherwise. All rights not expressly granted by a party hereunder are expressly reserved.
              </p>
              <h2>{"16. Creative Ideas. "}</h2>
              <p>
                <strong>‍</strong>
                Owner appreciates hearing from Owner’s users and welcomes Business’s comments regarding the Service. Please be advised, however, that if Business sends Owner creative ideas, suggestions, inventions, or materials (“
                <strong>Creative Ideas</strong>
                ”), Business agrees that Owner (A) will not be subject to any obligation of confidentiality and will not be liable for any use or disclosure of any Creative Idea and (B) may use such Creative Ideas without restriction for any purpose whatsoever, whether commercial or otherwise, without compensation to Business or any other person.
              </p>
              <h2>17. Termination.</h2>
              <p>
                <strong></strong>
                {"The RPA is effective until terminated by Business or Owner. Business’s rights under this RPA will terminate automatically without notice from Owner if Business fails to comply with any term(s) of this RPA (including by violating any license restriction provided herein). Business may terminate this RPA at any time by: (i) notifying Owner of Business’s intent to do so, and (ii) returning all Loaned Tablets to Owner in accordance with Section "}
                <a href="#8.2">8.2</a>
                {", and (iii) returning all Loaned Printers to Owner in accordance with Section "}
                <a href="#9.2">9.2</a>
                {". Upon termination, Business must immediately cease all use of the Platform, and destroy all copies, full or partial, of the Platform and any Marketing Materials in Business’s possession or control, take down all Owner references, and return all Loaned Tablets to Owner within five business days of termination. Business’s payment obligations, obligations to comply with laws related to sale, issuance and receipt of Gift Cards, and Sections "}
                <a href="#6.2">6.2</a>
                {", "}
                <a href="#6.3">6.3</a>
                {", "}
                <a href="#11.3">11.3</a>
                {", "}
                <a href="#12">12</a>
                {", "}
                <a href="#14.1">14.1</a>
                {", "}
                <a href="#15">15</a>
                {", "}
                <a href="#16">16</a>
                {", "}
                <a href="#17">17</a>
                {", "}
                <a href="#19">19</a>
                {", "}
                <a href="#20">20</a>
                {", "}
                <a href="#21">21</a>
                {", "}
                <a href="#22">22</a>
                {" "}
                <a href="#23">23</a>
                {", and "}
                <a href="#24">24</a>
                {" will survive termination of this RPA for any reason. Owner may terminate this RPA upon notice to Business. Additionally, Owner may terminate this RPA on 10 days’ notice in the event of Business’s breach of this RPA if the breach is not remedied within such 10-day period or immediately in the event the breach is incapable of cure."}
              </p>
              <h2>{"18. Revisions. "}</h2>
              <p>
                <strong>‍</strong>
                Except as otherwise specified herein, Owner
                <strong></strong>
                may revise this RPA, the Pricing Page, or the pricing otherwise offered to Business on a going forward basis at any time on notice to Business, to be effective 30 days following such notice. Business agrees that such notice may be delivered via email. Business may terminate this RPA if Business objects to any such revision by providing Owner notice within 30 days following such notice (such notice, an “
                <strong>Objection</strong>
                ”), in which case, Business may continue to use the Service for up to 90 days following Owner’s notice of the revised RPA or pricing. Business’s continued use of the Service between Owner’s receipt of an Objection and the effective date of Business’s termination will be governed by the RPA in effect immediately prior to the date of the Objection.
              </p>
              <h2>{"19. Indemnity. "}</h2>
              <p>
                <strong>‍</strong>
                Business agrees to indemnify and hold Owner, its officers, directors, employees, agents, service providers, and licensors (the “
                <strong>Released Parties</strong>
                ”) harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in any way connected to (i) the Business Content or any other material or information provided by Business to Owner, including the names or other identifying information of Business’s employees, (ii) Business’s access, use, or misuse of the Service or Owner Content, (iii) Business’s violation of this RPA, (iv) Business’s Loyalty Programs or Promotions, (v) claims for personal injury or death caused by Business’s products or services, (vi) Business’s sale, issuance or acceptance of Gift Cards, including claims related to violations of applicable law by Business and claims by Customers related to Gift Cards, (vii) Business’s: violation of a consumer protection regulation related to transparent pricing (Section 2.5), failure to obtain lawful consent for a transfer of information to a third-party service (Section 5.3), violation or alleged violation of the ADA or similar State laws (5.4), failure to obtain consent for SMS marketing (Section 14.1), or (viii) Business’s dealings with any Customer. Owner will use reasonable efforts to notify Business of any such claim, action, or proceeding upon becoming aware of it but if Owner is unable to communicate with Business in a timely manner because of an inactive e-mail address, Business’s indemnification obligation will continue notwithstanding Owner’s inability to contact Business in a timely manner.
              </p>
              <h2>{"20. NO WARRANTY. "}</h2>
              <p>
                <strong>‍</strong>
                {"BUSINESS EXPRESSLY ACKNOWLEDGES AND AGREES THAT USE OF THE SERVICE, TABLETS (EXCEPT AS SET FORTH IN SECTION "}
                <a href="#8.4">8.4</a>
                {"), PRINTERS (EXCEPT AS SET FORTH IN SECTION "}
                <a href="#9.5">9.5</a>
                {"), AND OWNER CONTENT (INCLUDING ANY GIFT CARD TERMS FOR USE BY BUSINESS) ARE AT BUSINESS’S SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, AND ACCURACY IS WITH BUSINESS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, TABLETS (EXCEPT AS SET FORTH IN SECTION "}
                <a href="#8.4">8.4</a>
                {"), PRINTERS (EXCEPT AS SET FORTH IN SECTION "}
                <a href="#9.5">9.5</a>
                ), AND ALL OWNER CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND OWNER HEREBY DISCLAIMS, ON BEHALF OF ITSELF AND ITS SUPPLIERS AND LICENSORS, ALL WARRANTIES AND CONDITIONS WITH RESPECT THERETO, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, TITLE, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS. OWNER DOES NOT WARRANT AGAINST INTERFERENCE WITH BUSINESS’S ENJOYMENT OF THE SERVICE, TABLETS, PRINTERS, OR OWNER CONTENT, THAT THE FUNCTIONS CONTAINED IN OR SERVICES PERFORMED OR PROVIDED BY THE SERVICE, TABLETS, PRINTERS, OR OWNER CONTENT WILL MEET BUSINESS’S REQUIREMENTS, THAT THE OPERATION OF THE SERVICE, TABLETS, PRINTERS, OR OWNER CONTENT WILL BE SECURE, UNINTERRUPTED, OR ERROR-FREE, OR THAT ANY DEFECTS IN ANY OF THE FOREGOING WILL BE CORRECTED. OWNER EXPRESSLY DISCLAIMS ANY AND ALL LIABILITY FOR FAILING TO OBTAIN CUSTOMER CONSENT FOR THE TRANSFER OF INFORMATION FROM THE PLATFORM TO A THIRD-PARTY SERVICE. OWNER EXPRESSLY DISCLAIMS ANY AND ALL LIABILITY FOR FAILING TO OBTAIN CUSTOMER CONSENT FOR FAILING TO OBTAIN CONSENT FOR SMS TEXT MARKETING TO CUSTOMER PHONE NUMBERS PROVIDED TO OWNER BY BUSINESS. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY OWNER OR ITS REPRESENTATIVES WILL CREATE A WARRANTY NOT EXPRESSLY PROVIDED FOR IN THIS RPA. SHOULD THE SERVICE, TABLETS, PRINTERS, OR OWNER CONTENT PROVE DEFECTIVE, BUSINESS ASSUMES THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO BUSINESS, BUT IN SUCH A CASE THE FOREGOING WILL BE APPLIED TO THE GREATEST EXTENT ENFORCEABLE UNDER APPLICABLE LAW.
              </p>
              <h2>{"21. Limitation of Liability. "}</h2>
              <p>
                <strong>‍</strong>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE RELEASED PARTIES BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDINGDAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES ARISING OUT OF OR RELATED TO BUSINESS’S USE OR INABILITY TO USE THE SERVICE, TABLETS, PRINTERS, OR ANY OWNER CONTENT, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF ANY OF THE RELEASED PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO BUSINESS. IN NO EVENT WILL THE RELEASED PARTIES’ TOTAL LIABILITY TO BUSINESS FOR ALL DAMAGES (OTHER THAN AS MAY BE REQUIRED BY APPLICABLE LAW IN CASES INVOLVING PERSONAL INJURY), EXCEED THE AMOUNTS PAID BY RESTAURANT TO OWNER PURSUANT TO THIS RPA IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATION OF CERTAIN TYPES OF DAMAGES OR LIABILITIES, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO BUSINESS, BUT IN SUCH A CASE THE FOREGOING WILL BE APPLIED TO THE GREATEST EXTENT ENFORCEABLE UNDER APPLICABLE LAW.
              </p>
              <h2>{"22. Third Party Disputes. "}</h2>
              <p>
                <strong>‍</strong>
                Owner is not responsible for any disputes or disagreements between Business and any third party, such as a Customer, that Business interacts with using the Service. Business assumes all risk associated with dealing with third parties. Business agrees to resolve disputes directly with the other party. Business hereby releases Owner of all claims, demands, and damages in disputes among users of the Service. Business also agrees not to involve Owner in such disputes.
              </p>
              <h2>23. Dispute Resolution and Arbitration.</h2>
              <h3>{"23.1 Generally. "}</h3>
              <p>
                {"Except as described in Section "}
                <a href="#23.2">23.2</a>
                {" ("}
                <em>Exceptions</em>
                {") and "}
                <a href="#23.2">23.2</a>
                {" ("}
                <em>Opt-Out</em>
                ), Business and Owner agree that every dispute arising in connection with this RPA, the Service, or communications from Owner will be resolved through binding arbitration. Arbitration uses a neutral arbitrator instead of a judge or jury, is less formal than a court proceeding, may allow for more limited discovery than in court, and is subject to very limited review by courts. This agreement to arbitrate disputes includes all claims whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of this RPA. Any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement will be resolved by the arbitrator. BUSINESS UNDERSTANDS AND AGREES THAT, BY ENTERING INTO THIS RPA, BUSINESS AND OWNER ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
              </p>
              <h3>{"23.2 Exceptions. "}</h3>
              <p>Although the parties are agreeing to arbitrate most disputes between themselves, nothing in this RPA will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (c) seek injunctive relief in a court of law in aid of arbitration; or (d) to file suit in a court of law to address an intellectual property infringement claim.</p>
              <h3>{"23.3 Opt-Out. "}</h3>
              <p>
                {"If Business does not wish to resolve disputes by binding arbitration, Business may opt out of the provisions of this Section "}
                <a href="#23">23</a>
                {" ("}
                <em>Dispute Resolution and Arbitration</em>
                ) within 30 days after the date that Business agrees to this RPA by sending a letter to Owner.com, Inc., Attention: Legal Department – Arbitration Opt-Out, 530 Lytton Avenue, 2
                <sup>nd</sup>
                {" Floor, Palo Alto, CA 94301 that specifies: Business’s full legal name, the email address associated with Business’s account on the Service, and a statement that Business wishes to opt out of arbitration (“"}
                <strong>Opt-Out Notice</strong>
                {"”). Once Owner receives Business’s Opt-Out Notice, this Section "}
                <a href="#23">23</a>
                {" ("}
                <em>Dispute Resolution and Arbitration</em>
                {") will be void and any action arising out of this RPA will be resolved as set forth in Section "}
                <a href="#24.1">24.1</a>
                {" ("}
                <em>Governing Law</em>
                ). The remaining provisions of this RPA will not be affected by Business’s Opt-Out Notice.
              </p>
              <h3>{"23.4 Arbitrator. "}</h3>
              <p>
                This arbitration agreement, and any arbitration between the parties, is subject the Federal Arbitration Act and will be administered by the American Arbitration Association (“
                <strong>AAA</strong>
                ”) under its Consumer Arbitration Rules (collectively, “
                <strong>AAA Rules</strong>
                ”) as modified by this RPA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at +1-800-778-7879, or by contacting Owner.
              </p>
              <h3>{"23.5 Commencing Arbitration. "}</h3>
              <p>
                Before initiating arbitration, a party must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, only if that other party has not provided a current physical address, then by electronic mail (“
                <strong>Notice of Arbitration</strong>
                ”). Owner’s address for Notice is: Owner.com, Inc., 530 Lytton Avenue, 2
                <sup>nd</sup>
                {" Floor, Palo Alto, CA 94301. The Notice of Arbitration must: (a) identify the name or account number of the party making the claim; (b) describe the nature and basis of the claim or dispute; and (c) set forth the specific relief sought (“"}
                <strong>Demand</strong>
                ”). The parties will make good faith efforts to resolve the claim directly, but if the parties do not reach an agreement to do so within 30 days after the Notice of Arbitration is received, Business or Owner may commence an arbitration proceeding. If Business commences arbitration in accordance with this RPA, Owner will reimburse Business for its payment of the filing fee, unless Business’s claim is for more than US$10,000 or if Owner has received 25 or more similar demands for arbitration, in which case the payment of any fees will be decided by the AAA Rules. If the arbitrator finds that either the substance of the claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules and the other party may seek reimbursement for any fees paid to AAA Rules.
              </p>
              <h3>{"23.6 Arbitration Proceedings. "}</h3>
              <p>Any arbitration hearing will take place in the county and state of Business’s billing address unless the parties agree otherwise or, if the claim is for US$10,000 or less (and does not seek injunctive relief), Business may choose whether the arbitration will be conducted: (a) solely on the basis of documents submitted to the arbitrator; (b) through a telephonic or video hearing; or (c) by an in-person hearing as established by the AAA Rules in the county (or parish) of Business’s billing address. During the arbitration, the amount of any settlement offer made by Business or Owner must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based.</p>
              <h3>{"23.7 Arbitration Relief. "}</h3>
              <p>
                {"Except as provided in Section "}
                <a href="#23.8">23.8</a>
                {" ("}
                <em>No Class Actions</em>
                ), the arbitrator can award any relief that would be available if the claims had been brought in a court of competent jurisdiction. If the arbitrator awards Business an amount higher than the last written settlement amount offered by Owner before an arbitrator was selected, Owner will pay to Business the higher of: (a) the amount awarded by the arbitrator and (b) US$10,000. The arbitrator’s award shall be final and binding on all parties, except (1) for judicial review expressly permitted by law or (2) if the arbitrator’s award includes an award of injunctive relief against a party, in which case that party shall have the right to seek judicial review of the injunctive relief in a court of competent jurisdiction that shall not be bound by the arbitrator’s application or conclusions of law. Judgment on the award may be entered in any court having jurisdiction.
              </p>
              <h3>{"23.8 No Class Actions. "}</h3>
              <p>BUSINESS AND OWNER AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN BUSINESS’S OR OWNER’S INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both Business and Owner agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding.</p>
              <h3>{"23.9 Modifications to this Arbitration Provision. "}</h3>
              <p>If Owner makes any substantive change to this arbitration provision, Business may reject the change by sending Owner written notice within 30 days of the change to Owner’s address for Notice of Arbitration, in which case Business’s account with Owner will be immediately terminated and this arbitration provision, as in effect immediately prior to the changes Business rejected will survive.</p>
              <h3>{"23.10 Enforceability. "}</h3>
              <p>
                {"If Section "}
                <a href="#23.8">23.8</a>
                {" ("}
                <em>No Class Actions</em>
                {") or the entirety of this Section "}
                <a href="#23">23</a>
                {" ("}
                <em>Dispute Resolution and Arbitration</em>
                {") is found to be unenforceable, or if Owner receives an Opt-Out Notice from Business, then the entirety of this Section "}
                <a href="#23">23</a>
                {" ("}
                <em>Dispute Resolution and Arbitration</em>
                {") will be null and void and, in that case, the exclusive jurisdiction and venue described in Section "}
                <a href="#24.1">24.1</a>
                {" ("}
                <em>Governing Law</em>
                ) will govern any action arising out of or related to this RPA.
              </p>
              <h2>24. General Terms.</h2>
              <h3>{"24.1 Governing Law. "}</h3>
              <p>{"This RPA and the relationship between Business and Owner will be governed by the laws of the state of California without regard to its conflict of laws provisions that would result in the application of the laws of another jurisdiction. Business and Owner submit to the personal and exclusive jurisdiction of the state courts and federal courts located within Los Angeles County, California for resolution of any lawsuit or court proceeding permitted under this RPA. "}</p>
              <h3>24.2 Assignment.</h3>
              <p>Business may not assign this RPA or any of the rights or licenses granted hereunder, directly or indirectly, without the prior written consent of Owner. This means that, if Business purchases a Tablet, in the event Business disposes of that Tablet, such as by sale or gift, Business is responsible for deleting Owner Content and other Service-related content from that Tablet prior to such disposition. Owner may assign this RPA, including all its rights hereunder, in whole or in part, without restriction. Any assignment made in violation of this RPA is void. This RPA will be binding upon, and inure to the benefit of, Owner, Business, and their respective successors and permitted assignees.</p>
              <h3>{"24.3 Consent to Electronic Communications. "}</h3>
              <p>By using the Service, Business consents to receiving certain electronic communications from Owner as further described in the Privacy Policy. Business agrees that any notices, agreements, disclosures, or other communications that Owner sends to Business electronically will satisfy any legal communication requirements, including that such communications be in writing.</p>
              <h3>24.4 Consent to Contact Mobile Number</h3>
              <p>By voluntarily providing your mobile phone number to Owner or through any Owner Services, you confirm you are authorized to provide that number to Owner and agree that Owner may contact you at that number. If you provide a mobile number, you expressly agree that Owner may contact you using automated telephone call, and SMS or MMS messages at that phone number, and you hereby consent to receiving such communications for transactional, informational, and operational purposes.</p>
              <h3>{"24.5 Jurisdictional Matters. "}</h3>
              <p>The Service is controlled and operated by or on behalf of Owner from its offices within the state of California. Owner makes no representation that materials on the Service are appropriate or available for use in other locations. If Business chooses to access or use the Service from other locations, including from outside the United States of America, Business does so on its own initiative and is responsible for compliance with local laws, if and to the extent local laws are applicable. Access to the Service from jurisdictions where the contents or practices of the Service are illegal, unauthorized, or penalized is strictly prohibited.</p>
              <h3>24.6 Additional Terms.</h3>
              <p>
                ‍
                <strong></strong>
                This RPA,
                <strong></strong>
                together with the Privacy Policy, the Pricing Page, and Business’s commitments to Owner regarding the acquisition of Tablets, Printers, or other goods or services in connection with this RPA, any other agreements expressly incorporated by reference herein, constitute the entire and exclusive understanding and agreement between Business and Owner regarding Business’s use of and access to the Service and all Owner Content and except as expressly permitted herein may be amended only by a written agreement signed by Business and an authorized representative of Owner that references this RPA. The failure to require performance of any provision will not affect Owner’s right to require performance at any time thereafter, nor will a waiver of any breach or default of this RPA or any provision of this RPA constitute a waiver of any subsequent breach or default or a waiver of the provision itself. In the event that any part of this RPA is held to be invalid or unenforceable, the unenforceable part will be given effect to the greatest extent possible and the remaining parts will remain in full force and effect.
              </p>
              <h3>{"24.7 Interpretation. "}</h3>
              <p>Use of section headers in this RPA is for convenience only and will not have any impact on the interpretation of particular provisions. For purposes of this RPA: (i) the words “include,” “includes” and “including” will be deemed to be followed by the words “without limitation”; (ii) the words “such as”, “for example” “e.g.” and any derivatives of those words will mean by way of example and the items that follow these words will not be deemed an exhaustive list; (iii) the word “or” is used in the inclusive sense of “and/or” and the terms “or,” “any,” and “either” are not exclusive; (iv) the words “herein,” “hereof,” “hereby,” “hereto” and “hereunder” refer to this RPA as a whole; and (v) words denoting the singular have a comparable meaning when used in the plural, and vice-versa. References to “$” and “dollars” are to the currency of the United States of America. Any law defined or referred to herein means such law as from time to time amended, modified or supplemented, including (in the case of statutes) by succession of comparable successor laws.</p>
              <h3>{"24.8 Contacting Owner. "}</h3>
              <p>
                {"Business can contact Owner by email at "}
                <a href="mailto:contact@owner.com">support@owner.com</a>
                {" or at 530 Lytton Avenue, 2"}
                <sup>nd</sup>
                {" Floor, Palo Alto, CA 94301, as may be updated from time to time by Owner."}
              </p>
              <h2>25. Addendum</h2>
              <h3>DOORDASH ALCOHOL ADDENDUM</h3>
              <h3>{"25.1 BACKGROUND. "}</h3>
              <p>The Parties entered into the Agreement to market and deliver Merchant Products to consumers in certain markets in the United States. Merchant is a licensed alcoholic beverage retailer, and the Parties wish to incorporate the following terms specific to Alcohol Products to consumers in some or all of the Applicable Jurisdictions. In consideration of the mutual covenants and agreements stated in this Addendum, and for other good and valuable consideration, the receipt and sufficiency of which is acknowledged, the Parties agree to amend the Agreement as follows.</p>
              <h3>{"25.2. DEFINITIONS. "}</h3>
              <p>
                <strong>25.2.1. “Alcohol Laws”</strong>
                {" means all federal, state, and local laws pertaining to the sale of Alcohol Products, regulations, ordinances, rules, and Alcohol Product regulatory agency policies."}
              </p>
              <p>
                <strong>25.2.2. “Alcohol Licenses</strong>
                ” means all applicable Alcohol Licenses, permits, license and/or permit endorsements, and/or authorizations from state and/or local Alcohol Product licensing authorities.
              </p>
              <p>
                <strong>25.2.3. “Alcohol Products”</strong>
                {" means alcoholic beverages and other products sold by Merchant."}
              </p>
              <p>
                <strong>25.2.4. “Applicable Jurisdictions”</strong>
                {" means California, Florida, Missouri, New York, Oregon, Texas, Virginia, and Washington; Aurora, IL; Chicago, IL; Elgin, IL; Evanston, IL; Joliet, IL; Springfield, IL; and Washington, DC and any other jurisdictions that may be added by the parties via the form attached as Exhibit A."}
              </p>
              <p>
                <strong>25.2.5. “Delivery Records”</strong>
                {" means all delivery information that Merchant is required to record or retain by applicable Alcohol Laws."}
              </p>
              <p>
                <strong>25.2.6. “Damages”</strong>
                {" means all liability, cost, expense, claim, loss or damages caused by any act or omission by Merchant, including, but not limited to, injury (whether to body, property, personal or business character or reputation) sustained by any person or to any person or to any property relating to the production, sale, and/or delivery of the Alcohol Products which may result from the sale or distribution of the Alcohol Products under this Agreement (but excluding any Damages solely to the extent they arise from the negligence of DoorDash or any Dasher)."}
              </p>
              <p>
                <strong>25.2.7. “End Customer”</strong>
                {" means the purchasing consumer."}
              </p>
              <p>
                <strong>25.2.8. “Merchant Product”</strong>
                {" means a product sold by Merchant."}
              </p>
              <p>
                <strong>25.2.9. “Order”</strong>
                {" means an order for Alcohol Products placed by an End Customer."}
              </p>
              <p>
                <strong>25.2.10. “Party”</strong>
                {" means DoorDash or Merchant, as the context requires."}
              </p>
              <h3>{"25.3. ALCOHOL LAWS. "}</h3>
              <p>
                <strong>25.3.1. Alcohol Laws</strong>
                . Merchant will only send orders to DoorDash during hours where alcohol delivery is legal in the Applicable Jurisdiction. Merchant will offer Alcohol Products for delivery only to the extent authorized by Merchant’s Alcohol Licenses, and in factory sealed containers authorized under Merchant’s Alcohol Licenses and the applicable Alcohol Laws. Merchant will not offer Alcohol Products in “kegs” or other containers the volume of which are 7.75 gallons or more.
              </p>
              <p>
                <strong>25.3.2.</strong>
                {" "}
                <strong>Seller of Record</strong>
                . Merchant is the seller of all Alcohol Products under the Agreement. Merchant further agrees that it shall be solely responsible for the issuance of any refunds, to the extent permitted under state law. Merchant shall at all times be solely responsible for determining the selection and setting the price of all Alcohol Products sold in connection with this Agreement. For avoidance of doubt, title for all Alcohol Products sold under this agreement shall pass directly from Merchant to the End Customer on Merchant’s licensed premises prior to DoorDash taking possession of any Alcohol Products for delivery.
              </p>
              <p>
                <strong>25.3.3.</strong>
                {" "}
                <strong>DoorDash Obligations</strong>
                . DoorDash holds no federal or state alcoholic beverage retail permits or licenses in its name and DoorDash conducts its activities under this Agreement on Merchant’s behalf at Merchant’s express direction, and under the authority of Merchant’s Alcohol Licenses as Merchant’s agent. DoorDash shall not have the authority to offer, solicit, peddle, or sell alcoholic beverages and will not be deemed to have offered, solicited, peddled, or sold any Alcohol Products sold by Merchant. The Parties agree that DoorDash shall not receive any proceeds for the sale of Alcohol Products.
              </p>
              <p>
                <strong>25.3.4.</strong>
                {" "}
                <strong>Change in Laws</strong>
                . In the event that any government agency or regulatory body provides guidance that any terms of this Addendum are in violation of, or prohibited by, any Alcohol Laws, such terms shall be deemed to be amended or deleted to conform to such Alcohol Laws. Alternatively, in such circumstances, either Party may terminate this Agreement upon written notice to the other Party.
              </p>
              <h3>{"25.4. DELIVERY PROCESS. "}</h3>
              <p>
                <strong>25.4.1.</strong>
                {" "}
                <strong>Merchant Responsibilities</strong>
                . The Merchant responsibilities mirror those of the Agreement.
              </p>
              <p>
                <strong>25.4.2.</strong>
                {" "}
                <strong>Dasher Responsibilities</strong>
                . In addition to the DoorDash responsibilities in the Agreement, Dashers will pick up Orders from Merchant’s licensed premises and deliver them to the addresses provided by the applicable End Customers. Upon delivering an Order, Dashers shall: (1) request and review valid, government-issued identification demonstrating that the recipient is 21 years of age or older; (2) verify that the recipient is not visibly intoxicated; and (3) collect and record Delivery Records.
              </p>
              <p>
                <strong>25.4.3.</strong>
                {" "}
                <strong>Records</strong>
                . DoorDash will provide all such records to Merchant for Merchant’s recordkeeping requirements pursuant to Alcohol Laws. Merchant shall maintain and retain Delivery Records in a manner fully compliant with Alcohol Laws. Merchant further agrees to maintain the confidentiality of all End Customer and recipient data contained in the Delivery Records and not use such data for any purpose other than to maintain records as required by Alcohol Laws. Merchant agrees to indemnify, defend, and hold harmless DoorDash against all liabilities, damages, and costs incurred by DoorDash as a result of any violation by Merchant of this provision.
              </p>
              <p>
                <strong>{"25.5. STATE-SPECIFIC PROVISIONS. "}</strong>
                If Merchant operates locations in the following states, these provisions will apply. Merchant acknowledges these state-specific provisions are not inclusive of all Alcohol Laws, and that Merchant may be subject to additional Alcohol Laws.
              </p>
              <p>
                <strong>25.5.1. Florida</strong>
                : Dashers assigned to deliver orders containing Alcohol Products will act as agents of the End Customer.
              </p>
              <p>
                <strong>25.5.2. Texas</strong>
                : Merchant will not offer (1) delivery of Alcohol Products in excess of 5.0% ABV or (2) delivery to addresses in dry counties or localities where the sale or delivery of Alcohol Products is prohibited. Merchant represents and warrants that it has the necessary capabilities to accurately comply with wet and dry regulatory restrictions in Texas.
              </p>
              <p>
                <strong>25.5.3.</strong>
                {" "}
                <strong>Oregon</strong>
                : Merchant warrants that it has obtained Same-Day Delivery approval from the Oregon Liquor Control Commission. Merchant will affix a notice to the outermost surface of each package containing Alcohol Products that states: “Contains alcohol: signature of person age 21 years or older required for delivery”. Merchant further agrees that it will not send DoorDash orders (i) containing Alcohol Products after 8:30 p.m. or (ii) containing a quantity of Alcohol Products that exceeds the quantity limitation imposed by OR. Admin. Rs. 845-006-0392, 845-006-0396, and any other applicable state laws or regulations for the time of day at which the order is placed.
              </p>
              <p>
                <strong>25.5.4.</strong>
                {" "}
                <strong>Missouri</strong>
                : Merchant will affix a notice to the outermost surface of each package containing Alcohol Products that states: “CONTAINS ALCOHOL; SIGNATURE OF PERSON AGE 21 OR OLDER REQUIRED FOR DELIVERY.”
              </p>
              <p>
                <strong>25.5.5.</strong>
                {" "}
                <strong>Virginia</strong>
                : Dashers assigned to fulfill orders containing Alcohol Products will act as agents of the Merchant in compliance with Va. Code Ann. § 4.1-212.1(C). Pursuant to 3 Va. Admin. Code 5-70-225(F), Merchant will affix a notice in 16-point type or larger in a conspicuous location on the outside of each package of Alcohol Products to be delivered in Virginia that states: “CONTAINS ALCOHOLIC BEVERAGES; SIGNATURE OF PERSON AGED 21 YEARS OR OLDER REQUIRED FOR DELIVERY.” Such notice shall also contain the Merchant’s Delivery Permit number.
              </p>
              <p>
                <strong>25.5.6. Washington</strong>
                : Merchant will affix a notice to the outermost surface of each package containing Alcohol Products that states all of the following: (a) the package contains “liquor”; (b) the recipient must be 21 years of age or older; and (c) delivery to intoxicated persons is prohibited.
              </p>
              <h3>25.6. PAYMENTS AND PROCESSING.</h3>
              <p>
                <strong>25.6.1.</strong>
                {" "}
                <strong>Processing</strong>
                . The End Customer’s payment for all Orders containing Alcohol Products shall be processed by a third-party payment processor, and all proceeds for Orders shall be remitted to Merchant. Merchant agrees that it shall pay DoorDash any fees due to DoorDash under this Agreement by authorizing Stripe to remit such fees to DoorDash after Orders are processed and Merchant has received all sales proceeds for Orders
                <strong>{". "}</strong>
              </p>
              <p>
                <strong>25.6.2. Returns</strong>
                . 6.2.1. DoorDash shall not process any returns, exchanges, or substitutions of Alcohol Products that have been delivered to End Customers. DoorDash will inform End Customers that requests for returns or exchanges should be handled directly by Merchant, in accordance with Merchant’s standard return policy. Merchant will handle all End Customer support issues relating to such refunds or returns.
              </p>
              <p>
                <strong>25.6.2.2.</strong>
                {" An Alcohol Product will be deemed undeliverable in the following circumstances: (i) the recipient does not present valid identification indicating that he or she is at least 21 years of age, (ii) the recipient is visibly intoxicated; (iii) the recipient is not available to receive the delivery; (iv) the Alcohol Product is damaged prior to delivery to the recipient; or (v) there are other circumstances that would render the delivery of the Alcohol Product unreasonable or unlawful, as determined in DoorDash’s sole discretion. In the event that an Alcohol Product is undeliverable, DoorDash will communicate to Merchant that the delivery was not completed and Pursuant to Merchant’s direction, DoorDash shall return the Alcohol Product to the Merchant Location from which it was picked up."}
              </p>
              <p>‍</p>
              <h3>25.7. REPRESENTATIONS AND WARRANTIES.</h3>
              <p>{" In addition to the representations and warranties set forth in the Agreement, and notwithstanding anything in the Agreement to the contrary, the Parties make the following representations, warranties, and covenants."}</p>
              <p>
                <strong>25.7.1.</strong>
                {" "}
                <strong>Mutual</strong>
                . DoorDash and Merchant hereby represent and warrant that each complies and shall continue to comply during the term of the Agreement with all applicable laws necessary for each to perform its obligations under this Addendum and the Agreement.
              </p>
              <p>
                <strong>25.7.2.</strong>
                {" "}
                <strong>DoorDash</strong>
                . DoorDash hereby represents and warrants that it shall ensure that Dashers fulfilling Orders that include Alcohol Products: (1) will be 21 years of age or older; (2) will have received orientation materials relating to the delivery of Alcohol Products in accordance with Alcohol Beverage Laws, including verifying that recipients are at least 21 years of age and identifying whether individuals are visibly intoxicated; and (3) will collect information required for record-keeping purposes by Alcohol Laws.
              </p>
              <p>
                <strong>25.7.3. Merchant</strong>
                . Merchant hereby represents and warrants that Merchant (i) shall promptly inform DoorDash of any regulatory or governmental inquiry that could reasonably jeopardize Merchant’s legal ability to sell or deliver Alcohol Products or otherwise perform its obligations under this Agreement; (ii) holds and will maintain in good standing throughout the term of this Agreement the Alcohol Licenses required for the sale of Alcohol Products directly to consumers in Applicable Jurisdictions, including but not limited to any Alcohol Licenses required to accept orders for Alcohol Products from consumers direct or through a third party via the internet and/or to deliver Alcohol Products to End Customers; and (iii) currently complies with and will continue to comply with all Alcohol Laws, and that it is responsible for alcoholic beverage regulatory compliance related to DoorDash’s activities and any sales or deliveries of Alcohol Products under this Agreement.
              </p>
              <h3>{"25.8. INDEMNIFICATION. "}</h3>
              <p>
                <strong>‍</strong>
                The Indemnifying Party will defend, indemnify, pay and hold harmless the Indemnified Party from and against any third-party claims arising from the breach of any representations or warranties or covenants made under this Addendum. Notwithstanding the foregoing, Merchant assumes all responsibility for, shall bear all liabilities and expenses and shall indemnify and hold DoorDash harmless from all Damages caused by any act or omission by Merchant, including, but not limited to, injury (whether to body, property, personal or business character or reputation) sustained by any person or to any person or to any property relating to the production, sale, and/or delivery of the Alcohol Products which may result from the sale or distribution of the Alcohol Products under this Agreement (but excluding any Damages solely to the extent they arise from the negligence of DoorDash or any Dasher).
              </p>
              <h3>{"25.9. LIMITATION OF LIABILITY. "}</h3>
              <p>
                <strong>‍</strong>
                THE PARTIES AGREE THAT (i) NEITHER PARTY WILL BE LIABLE TO THE OTHER UNDER THIS ADDENDUM, FOR INDIRECT, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES, AND (ii) EACH PARTY’S MAXIMUM AGGREGATE LIABILITIES RELATED TO OR IN CONNECTION WITH THIS ADDENDUM SHALL NOT EXCEED THE TOTAL AMOUNT PAID OR PAYABLE BY ONE PARTY TO THE OTHER PARTY UNDER THE AGREEMENT IN THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING ANY CLAIM.
              </p>
              <h3>25.10. CONFLICT.</h3>
              <p>
                <strong></strong>
                If there is a conflict between the provisions of this Addendum and the Agreement, the provisions of this Addendum will control.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
