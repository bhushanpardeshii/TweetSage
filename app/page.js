import Link from "next/link"
import { BrainCircuit, MessageCircle, Zap, Globe, Twitter } from "lucide-react"
import { PinContainer } from "@/components/ui/3d-pin"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function Home() {
  const testimonials = [
    {
      quote:
        "sol is the native cryptocurrency of the solana blockchain. it's designed for fast, low-cost transactions, making it perfect for tipping and microtransactions on platforms like this one.",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 px-4 lg:px-6 h-14 flex items-center  border-b">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">TweetSage</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:font-bold  transition-colors" href="#examples">
            Examples
          </Link>
          <Link className="text-sm font-medium hover:font-bold transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:font-bold transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:font-bold transition-colors"
            href="https://x.com/TweetSage_AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-20 ">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Understand Any Tweet with TweetSage
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-500">
                  Get instant clarity on terms and concepts in tweets. Just tag @TweetSage and let our AI explain it for
                  you.
                </p>
              </div>
              <div className="py-8 w-full flex items-center justify-center ">
                <PinContainer
                  title="x.com/TweetSage_AI"
                  href="https://x.com/TweetSage_AI"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs font-semibold  text-xl text-slate-100">
                      TweetSage
                    </h3>
                    <div className="text-base py-2 font-normal">
                      <span className="text-slate-500">
                        Get clear, concise explanations for any term or concept in a tweet, instantly.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </div>

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white" id="examples">

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            TweetSage in Action
          </h2>
          <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>


        </section>
        <section className="w-full py-12 md:py-24 " id="features">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Instant Explanations</h3>
                <p className="text-gray-500 ">
                  Get clear, concise explanations for any term or concept in a tweet, instantly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10  text-primary" />
                <h3 className="text-xl font-bold">No App Switching</h3>
                <p className="text-gray-500 ">
                  Stay on Twitter. No need to leave the platform or open new tabs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Contextual Understanding</h3>
                <p className="text-gray-500 ">
                  Our AI considers the context of the entire thread for more accurate explanations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t " id="how-it-works">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">1</div>
                <h3 className="text-xl font-bold">Find a Tweet</h3>
                <p className="text-gray-500 ">
                  Spot a term or concept you don't understand in a tweet.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">2</div>
                <h3 className="text-xl font-bold">Tag @TweetSage_AI</h3>
                <p className="text-gray-500 ">
                  Reply to the tweet and mention @TweetSage_AI with your question.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">3</div>
                <h3 className="text-xl font-bold">Get an Explanation</h3>
                <p className="text-gray-500 ">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full bg-primary shrink-0 items-center px-4 md:px-6 ">
        <p className="text-xs text-gray-500">© 2025 TweetSage. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

