
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await signUp(email, password);
      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success!",
          description: "Please check your email to confirm your account.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black page-transition relative">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full floating-element"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full floating-element delayed-animation"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/10 rounded-full floating-element" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="min-h-screen flex items-center justify-center responsive-container relative z-10">
        <div className="w-full max-w-md">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" 
                alt="DevPanda Logo" 
                className="w-16 h-16 rounded-lg shadow-lg floating-element" 
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              DevPanda
            </h1>
            <p className="text-gray-400 text-lg">
              Join the future of AI education
            </p>
          </div>

          <Card className="glass-card shadow-2xl card-hover-effect">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-white">Welcome</CardTitle>
              <CardDescription className="text-gray-400">
                Sign in to continue your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 rounded-xl p-1">
                  <TabsTrigger 
                    value="login" 
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black text-white transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black text-white transition-all duration-300"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-6">
                  <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-xl py-3 px-4 focus:border-white/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-xl py-3 px-4 focus:border-white/50 transition-all duration-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="modern-button w-full text-black font-semibold py-3"
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="mt-6">
                  <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-xl py-3 px-4 focus:border-white/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-xl py-3 px-4 focus:border-white/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Choose a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-xl py-3 px-4 focus:border-white/50 transition-all duration-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="modern-button w-full text-black font-semibold py-3"
                    >
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Secure authentication powered by Supabase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
