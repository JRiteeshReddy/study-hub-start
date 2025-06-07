
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black page-transition">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              onClick={() => navigate('/policies')}
              variant="outline"
              className="modern-button-outline p-2"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" 
                alt="DevPanda Logo" 
                className="w-8 h-8 rounded"
              />
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. 📥 Information We Collect</h2>
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Your name and email address (during signup or when contacting support)</li>
                    <li>Course enrollment and progress data</li>
                    <li>Any feedback, questions, or messages submitted via forms</li>
                  </ul>
                  <p className="mt-4">We may also collect technical data like your device info, IP address, and browser type.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. ⚙️ How We Use Your Information</h2>
                  <p>Your data helps us:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Provide and maintain our educational services</li>
                    <li>Track your course progress</li>
                    <li>Process enrollments and access</li>
                    <li>Respond to your questions or support requests</li>
                    <li>Improve platform performance and user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. 🔄 Information Sharing</h2>
                  <p>We do not sell or rent your personal data. We only share it:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>With trusted service providers (e.g., hosting, analytics, payment)</li>
                    <li>To comply with applicable laws or legal processes</li>
                    <li>In the event of a merger, acquisition, or business transfer</li>
                  </ul>
                  <p className="mt-4">All shared data is handled securely and only for operational needs.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. 🔐 Data Security</h2>
                  <p>We use reasonable and industry-standard security practices to protect your data:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Password encryption</li>
                    <li>Secure storage on Supabase</li>
                    <li>Access limited to authorized personnel</li>
                  </ul>
                  <p className="mt-4">While we do our best, no system is 100% secure, so use the platform at your discretion.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. 🍪 Cookies & Tracking</h2>
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Maintain your login session</li>
                    <li>Analyze user behavior and site performance</li>
                    <li>Personalize your experience</li>
                  </ul>
                  <p className="mt-4">You can control cookies via your browser. Some features may not work properly if disabled.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. 🧍 Your Rights</h2>
                  <p>You can:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Access, update, or delete your personal data</li>
                    <li>Request account deletion</li>
                    <li>Opt out of certain emails or messages</li>
                  </ul>
                  <p className="mt-4">To request any of the above, email us at jriteeshreddy@gmail.com. We'll respond within a reasonable time frame.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. 📢 Changes to This Policy</h2>
                  <p>
                    We may revise this Privacy Policy from time to time. When we do, we'll update the "Effective Date" and notify users if the changes are significant.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. 📬 Contact Us</h2>
                  <p>If you have questions, concerns, or feedback about this Privacy Policy, reach out to:</p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> jriteeshreddy@gmail.com</p>
                    <p><strong>Support Hours:</strong> Monday to Friday, 9 AM – 6 PM IST</p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate('/policies')}
              className="modern-button-outline"
            >
              Back to Policies
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PrivacyPolicy;
