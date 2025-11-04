import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-purple-900">
        <div className="absolute inset-0 bg-purple-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
          <p className="text-purple-100 mt-4 max-w-3xl mx-auto">How we use cookies and similar technologies.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-gray-800">
        <section>
          <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device to help our site function and improve your experience.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Essential cookies for basic functionality</li>
            <li>Analytics cookies to understand usage and improve features</li>
            <li>Preference cookies to remember your settings</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
          <p>You can control cookies in your browser settings. Disabling some cookies may affect functionality.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;


