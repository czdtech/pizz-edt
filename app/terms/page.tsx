import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, Shield, AlertTriangle, Scale, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Pizza Edition',
  description: 'Read the terms of service for Pizza Edition. Understand your rights and responsibilities when using our free HTML5 games platform.',
  keywords: 'terms of service, user agreement, terms and conditions, legal, Pizza Edition',
  openGraph: {
    title: 'Terms of Service - Pizza Edition',
    description: 'Read the terms of service for Pizza Edition. Understand your rights and responsibilities.',
    type: 'website',
    url: 'https://pizzaedition.com/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Pizza Edition',
    description: 'Read the terms of service for Pizza Edition. Understand your rights and responsibilities.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            These terms govern your use of Pizza Edition. By using our platform, you agree to these terms 
            and conditions.
          </p>
          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-full px-6 py-3 text-lg">
            <FileText className="w-5 h-5 mr-2" />
            Effective Date: January 2024
          </Badge>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Points</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here are the most important things you should know about using Pizza Edition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Free to Use</h3>
                <p className="text-gray-600 text-sm">
                  All games on Pizza Edition are free to play. No hidden fees or premium subscriptions required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Family Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Our platform is designed to be safe and appropriate for users of all ages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fair Use</h3>
                <p className="text-gray-600 text-sm">
                  Use our platform responsibly and respect other users and our community guidelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  By accessing and using Pizza Edition ("the Service"), you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
                <p className="text-gray-600">
                  These Terms of Service apply to all visitors, users, and others who access or use the Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-green-600" />
                  Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pizza Edition is a free online gaming platform that provides access to HTML5 games. 
                  Our service includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access to a curated collection of HTML5 games</li>
                  <li>Game categories and search functionality</li>
                  <li>Game ratings and play statistics</li>
                  <li>Responsive design for various devices</li>
                  <li>Regular updates with new games</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of the service at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-purple-600" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">As a user of Pizza Edition, you agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to any part of the service</li>
                  <li>Not use automated systems to access the service excessively</li>
                  <li>Not interfere with or disrupt the service or servers</li>
                  <li>Not attempt to reverse engineer or modify any games</li>
                  <li>Respect intellectual property rights of game developers</li>
                  <li>Provide accurate information when contacting us</li>
                  <li>Not engage in any activity that could harm other users</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-orange-600" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Our Content</h4>
                    <p className="text-gray-600">
                      The Pizza Edition website, including its design, layout, graphics, and text, is owned by 
                      Pizza Edition and is protected by copyright and other intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Game Content</h4>
                    <p className="text-gray-600">
                      The games available on our platform are owned by their respective developers and publishers. 
                      We have obtained proper licensing or permission to host these games. Users may not copy, 
                      distribute, or modify these games without permission.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">User-Generated Content</h4>
                    <p className="text-gray-600">
                      Any feedback, suggestions, or other content you provide to us may be used by Pizza Edition 
                      without restriction or compensation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                  Prohibited Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">The following activities are strictly prohibited:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Attempting to hack, crack, or exploit any games or the platform</li>
                  <li>Using bots, scripts, or automated tools to play games or access the site</li>
                  <li>Distributing malware, viruses, or harmful code</li>
                  <li>Impersonating other users or entities</li>
                  <li>Collecting personal information from other users</li>
                  <li>Engaging in any form of harassment or abuse</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Attempting to overload or crash our servers</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Violation of these terms may result in immediate termination of your access to the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                </p>
                <p className="text-gray-600">
                  By using our service, you consent to the collection and use of information as described 
                  in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Service Availability</h4>
                    <p className="text-gray-600">
                      We strive to maintain high availability, but we do not guarantee that the service will 
                      be available 100% of the time. The service may be temporarily unavailable due to 
                      maintenance, updates, or technical issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Game Content</h4>
                    <p className="text-gray-600">
                      We do not guarantee the accuracy, completeness, or quality of any games or content 
                      on our platform. Games are provided "as is" and we are not responsible for any 
                      issues with individual games.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Limitation of Liability</h4>
                    <p className="text-gray-600">
                      Pizza Edition shall not be liable for any direct, indirect, incidental, special, 
                      or consequential damages resulting from the use or inability to use our service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Links and Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our service may contain links to third-party websites or services that are not owned 
                  or controlled by Pizza Edition. We have no control over and assume no responsibility 
                  for the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p className="text-gray-600">
                  You acknowledge and agree that Pizza Edition shall not be responsible or liable for 
                  any damage or loss caused by your use of any third-party content or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to the service immediately, without prior notice 
                  or liability, for any reason, including if you breach these Terms of Service.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use the service will cease immediately. All provisions 
                  of these Terms which should survive termination shall survive, including ownership 
                  provisions, warranty disclaimers, and limitations of liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify or replace these Terms of Service at any time. If a 
                  revision is material, we will try to provide at least 30 days notice prior to any 
                  new terms taking effect.
                </p>
                <p className="text-gray-600">
                  Your continued use of the service after any changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
                  Pizza Edition operates, without regard to conflict of law provisions. Any disputes 
                  arising from these terms will be resolved through binding arbitration or in the courts 
                  of competent jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@pizzaedition.com</p>
                  <p><strong>General Contact:</strong> hello@pizzaedition.com</p>
                  <p><strong>Response Time:</strong> We typically respond within 24-48 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
