
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const TermsAndConditions = () => {
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
              <h1 className="text-3xl font-bold text-white">Terms and Conditions</h1>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using DevPanda's AI development course platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on DevPanda's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Course Access and Content</h2>
                  <p>
                    DevPanda provides educational content related to AI development. Course materials are provided for educational purposes only. We reserve the right to modify, suspend, or discontinue any part of our service at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. User Accounts</h2>
                  <p>
                    When creating an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer</h2>
                  <p>
                    The materials on DevPanda's website are provided on an 'as is' basis. DevPanda makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Limitations</h2>
                  <p>
                    In no event shall DevPanda or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevPanda's website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us through our support channels.
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

export default TermsAndConditions;
