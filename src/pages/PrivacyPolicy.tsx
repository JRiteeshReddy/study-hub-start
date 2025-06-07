
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
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, enroll in our courses, or contact us for support. This may include your name, email address, and course progress data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Provide, maintain, and improve our educational services</li>
                    <li>Process course enrollments and track your progress</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve our platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>With service providers who assist us in operating our platform</li>
                    <li>To comply with legal obligations or protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar technologies to enhance your experience on our platform, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
                  <p>
                    You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us through our support channels.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy, please contact us through our support channels.
                  </p>
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
