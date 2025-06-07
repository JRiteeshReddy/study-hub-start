
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, RefreshCw } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const Policies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policyPages = [
    {
      title: 'Terms and Conditions',
      description: 'Our terms of service and usage guidelines',
      icon: FileText,
      route: '/terms-and-conditions',
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your data',
      icon: Shield,
      route: '/privacy-policy',
    },
    {
      title: 'Refund & Cancellation Policy',
      description: 'Information about refunds and cancellations',
      icon: RefreshCw,
      route: '/refund-policy',
    },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black page-transition">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              onClick={() => navigate('/')}
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
              <h1 className="text-3xl font-bold text-white">Policies</h1>
            </div>
          </div>

          {/* Introduction */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Legal Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to our legal information center. Here you can find all the important policies and terms that govern your use of DevPanda's AI development course platform. Please take a moment to review these documents to understand your rights and responsibilities.
            </p>
          </div>

          {/* Policy Cards */}
          <div className="grid md:grid-cols-1 gap-6">
            {policyPages.map((policy) => (
              <Card key={policy.title} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <policy.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{policy.title}</h3>
                      <p className="text-gray-400 mb-4">{policy.description}</p>
                      <Button
                        onClick={() => navigate(policy.route)}
                        className="modern-button"
                      >
                        Read Policy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to Profile */}
          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate('/')}
              className="modern-button-outline"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Policies;
