
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const RefundPolicy = () => {
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
              <h1 className="text-3xl font-bold text-white">Refund & Cancellation Policy</h1>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">1. ✅ Refund Eligibility</h2>
                  <p>You may be eligible for a full refund under the following conditions:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>The refund request is made within 30 days of the purchase date.</li>
                    <li>You have completed less than 25% of the course content.</li>
                    <li>There is a technical issue preventing access that cannot be resolved by our support team.</li>
                    <li>You made a duplicate purchase by mistake.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. ❌ Non-Refundable Situations</h2>
                  <p>We do not issue refunds in the following cases:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>More than 30 days have passed since the purchase.</li>
                    <li>You have completed 25% or more of the course content.</li>
                    <li>You have accessed or downloaded all course materials.</li>
                    <li>Refund requested due to personal reasons (e.g. no time, lost interest).</li>
                    <li>Change of mind after substantial course usage.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. 🛠 Refund Request Process</h2>
                  <p>To request a refund, please follow these steps:</p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li>Contact our support team via email at jriteeshreddy@gmail.com.</li>
                    <li>Include your account email and purchase details.</li>
                    <li>Provide a brief explanation for your refund request.</li>
                    <li>Our team will review your request within 3–5 business days.</li>
                    <li>If approved, your refund will be processed within 7–10 business days.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. 🗑 Cancellation Policy</h2>
                  <p>You may cancel your course enrollment at any time by:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Contacting our support team, or</li>
                    <li>Logging into your account and selecting "Cancel Enrollment" (if available)</li>
                  </ul>
                  <p className="mt-4"><strong>⚠️ Note:</strong> Canceling your course does not guarantee a refund unless you meet the refund eligibility criteria above.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. 🚫 Course Access After Refund</h2>
                  <p>Once your refund is successfully processed:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Your access to the course will be immediately revoked.</li>
                    <li>All course progress and earned certificates will be permanently removed.</li>
                    <li>You are required to delete any downloaded materials from your devices.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. 💡 Partial Refunds</h2>
                  <p>In certain rare circumstances, partial refunds may be issued based on:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>How much content was accessed</li>
                    <li>Time elapsed since purchase</li>
                    <li>The nature of the issue you experienced</li>
                  </ul>
                  <p className="mt-4">These are handled on a case-by-case basis at DevPanda's sole discretion.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. 📬 Contact for Refunds</h2>
                  <p>For all refund or cancellation requests, please contact:</p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> jriteeshreddy@gmail.com</p>
                    <p><strong>Support Hours:</strong> Monday to Friday, 9 AM – 6 PM IST</p>
                  </div>
                  <p className="mt-4">We're here to support you and will do our best to resolve your concern fairly and promptly.</p>
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

export default RefundPolicy;
