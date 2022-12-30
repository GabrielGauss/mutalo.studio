import React from "react";

import HeaderAlt from "../partials/HeaderAlt";
import Footer from "../partials/Footer";

function Privacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <HeaderAlt />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Privacy policy</h1>
                <p className="text-xl text-gray-600">
                  Privacy Policy This privacy policy ("Policy") explains how
                  Mutalo.studio ("we," "us," or "our") collects, uses, and
                  shares information about you when you use our website, mobile
                  application, and other online products and services
                  (collectively, the "Services"). Please read this Policy
                  carefully to understand our policies and practices regarding
                  your information and how we will treat it. If you do not agree
                  with our policies and practices, do not use the Services. By
                  accessing or using the Services, you agree to this Policy.
                  This Policy may change from time to time. Your continued use
                  of the Services after we make changes is deemed to be
                  acceptance of those changes, so please check the Policy
                  periodically for updates. Information We Collect We collect
                  information about you in the following ways: Information you
                  provide to us: We collect information that you provide to us
                  directly, such as when you create an account, update your
                  profile, post content, or communicate with us. This
                  information may include your name, email address, phone
                  number, and any other information you choose to provide.
                  Information we collect automatically: We may automatically
                  collect certain information about you when you use the
                  Services, such as your IP address, device type, and
                  information about your activity on the Services. We may also
                  collect information about your location, such as your city and
                  country. Information we collect from third parties: We may
                  receive information about you from third parties, such as
                  social media platforms, advertisers, or partners. Use of
                  Information We use the information we collect to provide,
                  maintain, and improve the Services, and to develop new
                  products and services. We may also use the information for the
                  following purposes: To personalize your experience: We may use
                  the information we collect to provide personalized content and
                  recommendations, and to customize your experience on the
                  Services. To communicate with you: We may use the information
                  to communicate with you about the Services or to respond to
                  your inquiries. To improve the Services: We may use the
                  information we collect to understand how people use the
                  Services, and to improve the Services and develop new
                  features. For marketing and advertising: We may use the
                  information to personalize advertising and marketing
                  communications and to measure the effectiveness of our
                  advertising campaigns. Sharing of Information We may share the
                  information we collect with third parties in the following
                  situations: With service providers: We may share the
                  information with service providers who perform services on our
                  behalf, such as hosting, analytics, or payment processing.
                  With third-party advertisers: We may share the information
                  with third-party advertisers who may use it to show you
                  targeted ads. With business partners: We may share the
                  information with business partners who may use it for their
                  own marketing or advertising purposes. In the event of a
                  merger or acquisition: If we are involved in a merger,
                  acquisition, or sale of all or a portion of our assets, we may
                  share the information with the parties involved in the
                  transaction. As required by law: We may share the information
                  as required by law, such as to comply with a subpoena or
                  similar legal process, or to protect the rights, property, or
                  safety of MUTALO.studio , our users, or others. Security of
                  Information We take steps to protect the information we
                  collect from unauthorized access, disclosure, or destruction.
                  However, no security measures are perfect and we cannot
                  guarantee the security of your information. Your Choices You
                  have the following choices regarding the information we
                  collect and how we use it: Opting out of marketing
                  communications: You can opt out of receiving marketing
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

export default Privacy;
