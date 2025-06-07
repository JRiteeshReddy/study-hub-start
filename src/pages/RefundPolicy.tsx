
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
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Refund Eligibility</h2>
                  <p>
                    We offer refunds for our AI development courses under the following conditions:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Refund requests must be made within 30 days of purchase</li>
                    <li>You must have completed less than 25% of the course content</li>
                    <li>Technical issues that prevent course access and cannot be resolved</li>
                    <li>Duplicate purchases made in error</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Non-Refundable Situations</h2>
                  <p>
                    Refunds will not be provided in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>More than 30 days have passed since purchase</li>
                    <li>You have completed 25% or more of the course content</li>
                    <li>You have downloaded or accessed all course materials</li>
                    <li>Failure to complete the course due to personal reasons</li>
                    <li>Change of mind after substantial course consumption</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Refund Process</h2>
                  <p>
                    To request a refund, please follow these steps:
                  </p>
                  <ol className="list-decimal list-inside mt-4 space-y-2">
                    <li>Contact our support team with your refund request</li>
                    <li>Provide your account email and purchase details</li>
                    <li>Explain the reason for your refund request</li>
                    <li>Wait for our team to review your request (usually 3-5 business days)</li>
                    <li>If approved, refunds will be processed within 7-10 business days</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Cancellation Policy</h2>
                  <p>
                    You may cancel your course enrollment at any time by:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Contacting our support team</li>
                    <li>Logging into your account and requesting cancellation</li>
                    <li>Note: Cancellation does not automatically qualify for a refund</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Course Access After Refund</h2>
                  <p>
                    Once a refund is processed:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Your access to the course will be immediately revoked</li>
                    <li>All progress and certificates will be removed from your account</li>
                    <li>Downloaded materials should be deleted from your devices</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Partial Refunds</h2>
                  <p>
                    In exceptional circumstances, we may offer partial refunds based on:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>The amount of content accessed</li>
                    <li>Time elapsed since purchase</li>
                    <li>Specific circumstances of your situation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Contact for Refunds</h2>
                  <p>
                    For all refund and cancellation requests, please contact our support team. We're committed to resolving all issues fairly and promptly.
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

export default RefundPolicy;
