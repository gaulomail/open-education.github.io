import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-purple-900">
        <div className="absolute inset-0 bg-purple-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-purple-100 mt-4 max-w-3xl mx-auto">The rules and conditions for using our platform.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-gray-800">
        <section>
          <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
          <p>By accessing or using our platform, you agree to these Terms. If you do not agree, please do not use the services.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Accounts & Access</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You must provide accurate information during registration and purchases.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Payments & Refunds</h2>
          <p>Payments are processed securely via our provider. Refunds, if applicable, will be handled per our refund policy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Use of Content</h2>
          <p>Course content is for personal use and may not be redistributed without permission.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>Questions about these terms? Contact us at hello@openedai.com.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;


