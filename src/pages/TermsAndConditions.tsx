
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
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
                  <p className="text-lg font-semibold text-gray-400 mb-6">
                    <strong>Last updated: [8th June 2025]</strong>
                  </p>
                  <p className="text-lg">
                    Welcome to DevPanda!
                  </p>
                  <p>
                    By using our platform, you agree to the following Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.
                  </p>
                </div>

                <hr className="border-gray-600 my-8" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using DevPanda's AI development course platform, you accept and agree to be bound by these terms. Continued use of the platform constitutes your agreement to all current and future versions of these terms.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                  <p>
                    You are granted a limited, non-transferable license to temporarily download one copy of the course materials for <strong>personal, non-commercial</strong> viewing only.
                  </p>
                  <p className="mt-4 mb-3">Under this license, you may not:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial or public display</li>
                    <li>Attempt to reverse engineer any software on the site</li>
                    <li>Remove any copyright or proprietary notations</li>
                  </ul>
                  <p className="mt-4">
                    Violation of this license may result in immediate termination of your access.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Course Access and Content</h2>
                  <p>
                    DevPanda provides curated educational content focused on AI and related technologies. We reserve the right to update, modify, suspend, or discontinue any course or feature at any time without notice.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. User Accounts</h2>
                  <p>
                    When creating a DevPanda account, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your password and for all activity under your account. Notify us immediately if you suspect unauthorized access.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer</h2>
                  <p>
                    All materials and content are provided "as is." DevPanda makes no warranties, expressed or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Limitations of Liability</h2>
                  <p>
                    In no event shall DevPanda or its suppliers be liable for any indirect, incidental, or consequential damages (including data loss, profit loss, or business interruption) arising out of the use or inability to use the platform, even if DevPanda has been notified of the possibility of such damage.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
                  <p>
                    These terms shall be governed and interpreted in accordance with the laws of <strong>India</strong>, with jurisdiction under the courts of <strong>Bangalore, Karnataka</strong>.
                  </p>
                </section>

                <hr className="border-gray-600 my-6" />

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
                  <p>
                    For any questions about these Terms, reach out to us at:<br />
                    <strong>jriteeshreddy@gmail.com</strong>
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
