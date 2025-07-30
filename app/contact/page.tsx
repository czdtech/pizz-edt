import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Bug, Lightbulb, Heart, Clock, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Pizza Edition',
  description: 'Get in touch with the Pizza Edition team. Report bugs, suggest games, provide feedback, or ask questions about our free HTML5 games platform.',
  keywords: 'contact pizza edition, support, feedback, bug report, game suggestions, help',
  openGraph: {
    title: 'Contact Pizza Edition - Get in Touch',
    description: 'Get in touch with the Pizza Edition team. Report bugs, suggest games, provide feedback, or ask questions.',
    type: 'website',
    url: 'https://pizzaedition.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pizza Edition - Get in Touch',
    description: 'Get in touch with the Pizza Edition team. Report bugs, suggest games, provide feedback, or ask questions.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions, 
            our team is here to help make your gaming experience even better.
          </p>
          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-full px-6 py-3 text-lg">
            <Clock className="w-5 h-5 mr-2" />
            Usually respond within 24 hours
          </Badge>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Can We Help?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bug className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Report a Bug</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Found something not working? Let us know so we can fix it quickly.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Report Bug
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Suggest a Game</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have a game you'd love to see on our platform? Tell us about it!
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Suggest Game
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">General Feedback</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Share your thoughts on how we can improve Pizza Edition.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Feedback
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Partnership</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interested in partnering with us? Let's discuss opportunities.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Partner With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="game-suggestion">Game Suggestion</option>
                  <option value="feedback">General Feedback</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  I'd like to receive updates about new games and features
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Ways to Reach Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries and support
                </p>
                <a href="mailto:hello@pizzaedition.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  hello@pizzaedition.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Response Time</h3>
                <p className="text-gray-600 mb-4">
                  We typically respond within
                </p>
                <div className="text-green-600 font-bold text-lg">24 hours</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  Serving players worldwide
                </p>
                <div className="text-purple-600 font-medium">Global Coverage</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I report a game that's not working?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Use the "Report Bug" option above or send us an email with the game name, 
                  what browser you're using, and a description of the issue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I suggest new games to add?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! We love hearing game suggestions from our community. 
                  Use the "Suggest Game" button or contact us with your ideas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer advertising opportunities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer various partnership and advertising opportunities. 
                  Please contact us using the "Partnership" option for more details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can I stay updated on new games?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Check the "newsletter" option in our contact form, or visit our homepage regularly 
                  to see the latest additions to our game collection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
