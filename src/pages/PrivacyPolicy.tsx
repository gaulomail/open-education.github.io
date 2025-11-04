import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-purple-900">
        <div className="absolute inset-0 bg-purple-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-purple-100 mt-4 max-w-3xl mx-auto">How we collect, use, and protect your information.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-gray-800">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p>We value your privacy. This policy explains what data we collect, why we collect it, and how we handle it.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Data We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account details (name, email, phone)</li>
            <li>Enrollment and payment details necessary to process orders</li>
            <li>Usage analytics to improve our services</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide learning services and support</li>
            <li>To process secure payments via our payment provider</li>
            <li>To improve platform performance and user experience</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p>You can request access, correction, or deletion of your data. Contact us via the details on the Contact page.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>If you have privacy questions, please contact us at hello@openedai.com.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


