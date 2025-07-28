import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mic, BookOpen, Sparkles, Play, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              MammaTales
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-pink-600 transition-colors">
              Sign In
            </Link>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Sparkles className="w-10 h-10 text-white animate-sparkle" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Your Voice,
            </span>
            <br />
            <span className="text-gray-800">Their Favorite Stories</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Record your voice telling beautiful children&apos;s stories. Create magical moments that your little ones
            can treasure forever, even when you&apos;re not there to tuck them in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Mic className="w-5 h-5 mr-2" />
              Start Recording Stories
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-8 py-3 text-lg bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Creating Magical Moments</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every story becomes a precious memory when told in mama&apos;s loving voice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse our curated collection of beautiful children&apos;s stories with stunning illustrations, perfect
                for bedtime or any time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Record Your Voice</h3>
              <p className="text-gray-600 leading-relaxed">
                Narrate each slide with your own voice. Take your time, re-record if needed, and make it perfect for
                your little one.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Share the Magic</h3>
              <p className="text-gray-600 leading-relaxed">
                Your child can listen to your stories anytime, with automatic transcripts to help them follow along and
                learn to read.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-pink-100 via-purple-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Mamas Love MammaTales</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Connected</h3>
                    <p className="text-gray-600">
                      Even when you&apos;re away, your voice can still comfort and delight your child at bedtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Private & Secure</h3>
                    <p className="text-gray-600">
                      Your recordings are private to your family. Only you and your child can access your special
                      stories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Learning Support</h3>
                    <p className="text-gray-600">
                      Automatic transcripts help children follow along and develop their reading skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-xl">
                  <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Mother & Child</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Create Magic?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of loving mothers who are creating precious memories, one story at a time.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-12 py-4 text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Heart className="w-6 h-6 mr-2" />
            Start Your First Story
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MammaTales</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-pink-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-pink-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="hover:text-pink-300 transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; 2024 MammaTales. Made with ❤️ for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
