import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Cookie, UserCheck, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pizza Edition',
  description: 'Learn how Pizza Edition protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.',
  keywords: 'privacy policy, data protection, user privacy, cookies, data collection, Pizza Edition',
  openGraph: {
    title: 'Privacy Policy - Pizza Edition',
    description: 'Learn how Pizza Edition protects your privacy and handles your data.',
    type: 'website',
    url: 'https://pizzaedition.com/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Pizza Edition',
    description: 'Learn how Pizza Edition protects your privacy and handles your data.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information 
            when you use Pizza Edition.
          </p>
          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-full px-6 py-3 text-lg">
            <Shield className="w-5 h-5 mr-2" />
            Last Updated: January 2024
          </Badge>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Privacy at a Glance</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here's what you need to know about how we handle your data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">No Personal Data Required</h3>
                <p className="text-gray-600 text-sm">
                  You can play all our games without creating an account or providing personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Essential Cookies Only</h3>
                <p className="text-gray-600 text-sm">
                  We only use cookies that are necessary for the website to function properly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Data Protection</h3>
                <p className="text-gray-600 text-sm">
                  Any data we collect is encrypted and stored securely with industry-standard protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address (anonymized)</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Game play statistics (anonymous)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Information You Provide</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Contact form submissions</li>
                    <li>Feedback and bug reports</li>
                    <li>Email address (only if you choose to subscribe to updates)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Website Operation:</strong> To provide and maintain our gaming platform</li>
                  <li><strong>Performance Improvement:</strong> To analyze usage patterns and improve user experience</li>
                  <li><strong>Technical Support:</strong> To respond to your inquiries and provide customer support</li>
                  <li><strong>Security:</strong> To protect against fraud, abuse, and security threats</li>
                  <li><strong>Analytics:</strong> To understand which games are popular and how users interact with our site</li>
                  <li><strong>Communication:</strong> To send updates about new games (only if you opt-in)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-orange-600" />
                  Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                  <p className="text-gray-600">
                    We use essential cookies that are necessary for the website to function. These include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Session cookies to maintain your browsing session</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Security cookies to protect against fraud</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Analytics</h4>
                  <p className="text-gray-600">
                    We use Google Analytics to understand how visitors use our site. This data is anonymized 
                    and helps us improve the user experience. You can opt-out of Google Analytics tracking 
                    by installing the Google Analytics Opt-out Browser Add-on.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-600" />
                  Data Protection and Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Encryption:</strong> All data transmission is encrypted using SSL/TLS</li>
                  <li><strong>Access Control:</strong> Limited access to personal data on a need-to-know basis</li>
                  <li><strong>Regular Updates:</strong> We keep our security systems up to date</li>
                  <li><strong>Data Minimization:</strong> We only collect data that is necessary for our services</li>
                  <li><strong>Secure Storage:</strong> Data is stored on secure servers with regular backups</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We use the following third-party services:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Google Analytics</h4>
                    <p className="text-gray-600 text-sm">For website analytics and performance monitoring</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Content Delivery Network (CDN)</h4>
                    <p className="text-gray-600 text-sm">To deliver games and content faster to users worldwide</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hosting Provider</h4>
                    <p className="text-gray-600 text-sm">For secure and reliable website hosting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">You have the following rights regarding your data:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request information about what data we have about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at privacy@pizzaedition.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pizza Edition is designed to be family-friendly and safe for users of all ages. We do not 
                  knowingly collect personal information from children under 13. If we become aware that we 
                  have collected personal information from a child under 13, we will take steps to delete 
                  such information promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. When we do, we will post the updated 
                  policy on this page and update the "Last Updated" date. We encourage you to review this 
                  policy periodically to stay informed about how we protect your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@pizzaedition.com</p>
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
