import React from "react";

import HeaderAlt from "../partials/HeaderAlt";
import Footer from "../partials/Footer";

function Terms() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*   nav */}
      <HeaderAlt />

      {/*   content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* sub header */}
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
                <h1 className="h1">Terms and Conditions.</h1>
                <br />
                <p>
                  Welcome to Mutalo.studio ("we," "us," or "our"). These terms
                  and conditions ("Terms") govern your access to and use of our
                  website, mobile application, and other online products and
                  services (collectively, the "Services").
                  <br />
                  <br />
                  Please read these Terms carefully before using the Services.
                  By accessing or using the Services, you agree to be bound by
                  these Terms. If you do not agree to these Terms, do not use
                  the Services.<br></br>
                  <br></br>
                  Modifications to the Services and these Terms
                  <br />
                  <br />
                  We reserve the right to modify the Services and these Terms at
                  any time. If we make material changes to these Terms, we will
                  provide notice through the Services or by other means, such as
                  email. Your continued use of the Services after the effective
                  date of the revised Terms constitutes your acceptance of the
                  revised Terms.
                  <br />
                  <br />
                  Accounts
                  <br />
                  <br />
                  In order to access certain features of the Services, you may
                  be required to create an account. You are responsible for
                  safeguarding your account and password and for restricting
                  access to your account. You agree to accept responsibility for
                  all activities that occur under your account or password. We
                  reserve the right to terminate your account at any time for
                  any reason.
                  <br />
                  <br />
                  Content
                  <br />
                  <br />
                  The Services may allow you to post, upload, or otherwise make
                  available content, such as text, photos, or videos ("User
                  Content"). You are solely responsible for your User Content
                  and for ensuring that it complies with these Terms. By
                  posting, uploading, or otherwise making your User Content
                  available on or through the Services, you grant us a
                  non-exclusive, royalty-free, perpetual, irrevocable, and
                  worldwide license to use, reproduce, modify, adapt, publish,
                  translate, create derivative works from, distribute, and
                  display your User Content. You represent and warrant that you
                  own or have the necessary rights and permissions to use and
                  authorize us to use all patent, trademark, trade secret,
                  copyright, or other proprietary rights in and to your User
                  Content to enable inclusion and use of your User Content in
                  the manner contemplated by the Services and these Terms.
                  <br />
                  <br />
                  We reserve the right to remove any User Content that violates
                  these Terms or that we consider inappropriate or otherwise
                  unacceptable.
                  <br />
                  <br />
                  Intellectual Property
                  <br />
                  <br />
                  The Services and all content and materials included on the
                  Services, such as text, graphics, logos, images, and software,
                  are the property of Mutalo.studio or its licensors and are
                  protected by copyright and other intellectual property laws.
                  You may use the Services and the content and materials on the
                  Services for your personal, non-commercial use only. You may
                  not use any content or materials on the Services for any
                  commercial purpose without the prior written consent of
                  Mutalo.studio.
                  <br />
                  <br />
                  Links to Other Websites
                  <br />
                  <br />
                  The Services may contain links to third-party websites or
                  services that are not owned or controlled by Mutalo.studio. We
                  have no control over, and assume no responsibility for, the
                  content, privacy policies, or practices of any third-party
                  websites or services. We strongly advise you to read the terms
                  and conditions and privacy policy of any third-party website
                  or service that you visit.
                  <br />
                  <br />
                  Disclaimer of Warranties
                  <br />
                  <br />
                  The Services are provided on an "as is" and "as available"
                  basis. We make no representations or warranties of any kind,
                  express or implied, as to the operation of the Services or the
                  information, content, materials, or products included on the
                  Services. We do not warrant that the Services will be
                  uninterrupted or error-free. We will not be liable for any
                  interruptions or errors, or for any actions taken in reliance
                  thereon.
                  <br />
                  <br />
                  Governing Law These Terms and your use of the Services will be
                  governed by and construed in accordance with the laws of the
                  State of [State], without giving effect to any principles of
                  conflicts of law.
                  <br />
                  <br />
                  Dispute Resolution
                  <br />
                  <br />
                  Any dispute arising out of or relating to these Terms or the
                  Services will be resolved through binding arbitration in
                  accordance with the [Name of arbitration organization] rules.
                  The arbitration will be conducted in the State of [State].
                  <br />
                  <br />
                  Severability
                  <br />
                  <br />
                  If any provision of these Terms is found to be invalid or
                  unenforceable, that provision will be enforced to the maximum
                  extent possible, and the remaining provisions will remain in
                  full force and effect.
                  <br />
                  <br />
                  Waiver
                  <br />
                  <br />
                  Our failure to exercise or enforce any right or provision of
                  these Terms will not constitute a waiver of such right or
                  provision.
                  <br />
                  <br />
                  Entire Agreement
                  <br />
                  <br />
                  These Terms constitute the entire agreement between you and
                  Mutalo.studio and govern your use of the Services, superseding
                  any prior agreements between you and Mutalo.studio (including,
                  but not limited to, any prior versions of the Terms).
                  <br />
                  <br />
                  Contact Us
                  <br />
                  <br />
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a
                    href="mailto:Hello@mutalo.studio?subject = Feedback&body = Message"
                    className=" text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    Hello@mutalo.studio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
