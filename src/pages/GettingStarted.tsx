import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

const GettingStarted = () => {
  const [success, setSuccess] = useState(false);

  // Placeholder for payment handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-purple-800/30 relative overflow-hidden">
        {/* Glassy overlay */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background:'radial-gradient(circle at 70% 30%, rgba(160,132,232,0.08) 0%, rgba(20,20,40,0.18) 100%)'}} />
        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="bg-white rounded-full p-2 shadow-md mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-10 w-16 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-purple-100 mb-2 text-center drop-shadow">Get Started with Your AI Certification</h1>
          <p className="text-purple-300 text-center mb-2">Secure your spot and unlock premium AI learning content. Pay easily with Mastercard.</p>
        </div>
        {success ? (
          <div className="flex flex-col items-center py-12 relative z-10">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-purple-100">Payment Successful!</h2>
            <p className="text-purple-300 text-center">Thank you for your payment. You now have access to all premium content and certifications.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <Label htmlFor="name" className="text-purple-200">Full Name</Label>
              <Input id="name" name="name" type="text" required placeholder="Enter your full name" className="mt-2 bg-gray-800/80 text-white border border-purple-800/30 placeholder-gray-400" />
            </div>
            <div>
              <Label htmlFor="email" className="text-purple-200">Email Address</Label>
              <Input id="email" name="email" type="email" required placeholder="Enter your email" className="mt-2 bg-gray-800/80 text-white border border-purple-800/30 placeholder-gray-400" />
            </div>
            <div>
              <Label htmlFor="card" className="text-purple-200">Card Number</Label>
              <Input id="card" name="card" type="text" required maxLength={19} placeholder="1234 5678 9012 3456" className="mt-2 bg-gray-800/80 text-white border border-purple-800/30 placeholder-gray-400" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="expiry" className="text-purple-200">Expiry</Label>
                <Input id="expiry" name="expiry" type="text" required maxLength={5} placeholder="MM/YY" className="mt-2 bg-gray-800/80 text-white border border-purple-800/30 placeholder-gray-400" />
              </div>
              <div className="flex-1">
                <Label htmlFor="cvc" className="text-purple-200">CVC</Label>
                <Input id="cvc" name="cvc" type="text" required maxLength={4} placeholder="CVC" className="mt-2 bg-gray-800/80 text-white border border-purple-800/30 placeholder-gray-400" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-purple-700/90 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-purple-700/30 hover:ring-2 hover:ring-purple-400 transition-all text-lg mt-2">Pay Now</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GettingStarted; 