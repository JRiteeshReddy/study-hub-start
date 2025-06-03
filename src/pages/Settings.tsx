
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, User, Mail, Lock, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProtectedRoute from '@/components/ProtectedRoute';

const Settings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.email?.split('@')[0] || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      // Simulate save operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate password change
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Password Updated",
        description: "Your password has been successfully changed.",
      });
      
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

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
              <h1 className="text-3xl font-bold text-white">Settings</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Settings */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <User size={24} />
                Profile Information
              </h2>
              
              {/* Profile Picture */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <User size={32} className="text-black" />
                </div>
                <Button className="modern-button-outline">
                  <Camera size={16} className="mr-2" />
                  Change Photo
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Display Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <Input
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>

                <Button 
                  onClick={handleSaveProfile}
                  disabled={loading}
                  className="modern-button w-full"
                >
                  {loading ? 'Saving...' : 'Save Profile'}
                </Button>
              </div>
            </div>

            {/* Password Settings */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Lock size={24} />
                Password & Security
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    New Password
                  </label>
                  <Input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Confirm new password"
                  />
                </div>

                <Button 
                  onClick={handlePasswordChange}
                  disabled={loading || !formData.currentPassword || !formData.newPassword}
                  className="modern-button w-full"
                >
                  {loading ? 'Updating...' : 'Change Password'}
                </Button>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="glass-card p-8 mt-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Account Actions</h2>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10"
              >
                Delete Account
              </Button>
              <Button 
                variant="outline"
                className="modern-button-outline"
              >
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Settings;
