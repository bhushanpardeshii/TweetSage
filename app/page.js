import Link from "next/link"
import { BrainCircuit, MessageCircle, Zap, Globe, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center  border-b">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">TweetSage</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#examples">
            Examples
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="https://twitter.com/TweetSage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Understand Any Tweet with TweetSage
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get instant clarity on terms and concepts in tweets. Just tag @TweetSage and let our AI explain it for
                  you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start understanding tweets better. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="examples">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              TweetSage in Action
            </h2>

          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Instant Explanations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get clear, concise explanations for any term or concept in a tweet, instantly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">No App Switching</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay on Twitter. No need to leave the platform or open new tabs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Contextual Understanding</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI considers the context of the entire thread for more accurate explanations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="how-it-works">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">1</div>
                <h3 className="text-xl font-bold">Find a Tweet</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Spot a term or concept you don't understand in a tweet.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">2</div>
                <h3 className="text-xl font-bold">Tag @TweetSage</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Reply to the tweet and mention @TweetSage with your question.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">3</div>
                <h3 className="text-xl font-bold">Get an Explanation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive a clear, concise explanation right in the thread.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Understand Every Tweet?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                  Start using TweetSage today and never be confused by a tweet again.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">

              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TweetSage. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

