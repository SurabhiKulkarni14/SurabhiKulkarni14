import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CameraIcon, MicrophoneIcon } from '@heroicons/react/24/outline'

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg gradient-text">
            <span className="sr-only">AI Sign ↔ Speech</span>
            <span aria-hidden>AI Sign ↔ Speech</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#features">Features</a>
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <Link
              to="/settings"
              className="px-3 py-1.5 rounded-full glass hover:glow transition-colors"
            >
              Settings
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text"
          >
            AI Sign ↔ Speech Communication
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Bridging communication between deaf and hearing communities with real-time AI gesture
            recognition, speech synthesis, and animated sign avatars.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/sign-to-speech" className="group">
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                className="glass card-hover rounded-3xl p-6 md:p-8 text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      'radial-gradient(600px 300px at -10% -10%, rgba(59,130,246,0.25), transparent), radial-gradient(600px 300px at 110% 10%, rgba(168,85,247,0.25), transparent)'
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/15 ring-1 ring-blue-400/30">
                    <CameraIcon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">Sign to Speech Conversion</h3>
                    <p className="text-slate-300 mt-1">Capture signs via camera and confirm detected text before natural speech output.</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            <Link to="/speech-to-sign" className="group">
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                className="glass card-hover rounded-3xl p-6 md:p-8 text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      'radial-gradient(600px 300px at -10% -10%, rgba(99,102,241,0.25), transparent), radial-gradient(600px 300px at 110% 10%, rgba(236,72,153,0.25), transparent)'
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-500/15 ring-1 ring-purple-400/30">
                    <MicrophoneIcon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">Speech to Sign Conversion</h3>
                    <p className="text-slate-300 mt-1">Transcribe audio to text and render a friendly avatar signing with subtitles.</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        <section id="features" className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'On-device AI or Cloud Speed',
                desc: 'Choose privacy-first on-device inference or burst to cloud for faster performance.',
              },
              {
                title: 'Accessibility-first',
                desc: 'High contrast, large tap targets, voice prompts, and optional haptics.',
              },
              {
                title: 'Futuristic UI',
                desc: 'Glass panels, gradients, glowing outlines, tasteful micro-interactions and motion.',
              },
            ].map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6">
                <h4 className="font-semibold text-lg">{f.title}</h4>
                <p className="text-slate-300 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} AI Sign ↔ Speech</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#feedback" className="hover:underline">Feedback</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-to-speech" element={<div className="p-6">Sign to Speech - Coming next</div>} />
        <Route path="/speech-to-sign" element={<div className="p-6">Speech to Sign - Coming next</div>} />
        <Route path="/settings" element={<div className="p-6">Settings - Coming next</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
