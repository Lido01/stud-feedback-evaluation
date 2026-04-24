import { useNavigate } from 'react-router-dom'
import hero from '../assets/hero.png'
import { ActionButton, Icon } from '../components/Ui'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--background)] px-6 py-10">
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#e6ecff] blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#e6f4ff] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center gap-8">
        <section className="text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#24389c] text-white shadow-card">
              <Icon name="school" filled className="text-[24px]" />
            </div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-[#24389c]">EduEval</h1>
          </div>
          <p className="text-lg text-[#454652]">Academic Evaluation &amp; Management Portal</p>
        </section>

        <section className="w-full max-w-[520px] rounded-[28px] border border-[#e6e2e2] bg-white p-8 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <h2 className="font-display text-4xl font-bold text-[#1b1c1c]">Login</h2>
            <p className="mt-3 max-w-md text-lg leading-8 text-[#454652]">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault()
              navigate('/student/dashboard')
            }}
          >
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#454652]">Email Address</span>
              <div className="relative">
                <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684]" />
                <input
                  className="w-full rounded-xl border border-[#a8adbd] bg-transparent py-4 pl-12 pr-4 text-[#1b1c1c] outline-none transition focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10"
                  placeholder="name@institution.edu"
                  type="email"
                  required
                />
              </div>
            </label>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#454652]">Password</span>
                <a href="#" className="text-sm font-semibold text-[#24389c] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Icon name="lock" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684]" />
                <input
                  className="w-full rounded-xl border border-[#a8adbd] bg-transparent py-4 pl-12 pr-12 text-[#1b1c1c] outline-none transition focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10"
                  placeholder="password"
                  type="password"
                  required
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757684]">
                  <Icon name="visibility" />
                </button>
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm text-[#454652]">
              <input className="h-5 w-5 rounded border-[#757684] text-[#24389c] focus:ring-[#24389c]" type="checkbox" />
              Remember this device
            </label>

            <ActionButton type="submit" className="w-full justify-center py-4 text-base">
              Login
              <Icon name="arrow_forward" />
            </ActionButton>
          </form>

          <div className="mt-8 border-t border-[#e6e2e2] pt-8 text-center">
            <p className="mb-4 text-sm font-semibold text-[#454652]">New to EduEval?</p>
            <ActionButton tone="secondary" className="w-full justify-center py-4 text-base">
              Request Institution Access
            </ActionButton>
          </div>
        </section>

        <footer className="text-center text-sm text-[#454652]">
          <p>(c) 2024 EduEval. All rights reserved.</p>
          <p className="mt-1">Privacy Policy | Terms of Service</p>
        </footer>
      </div>

      <aside className="absolute bottom-6 left-6 hidden max-w-sm items-center gap-4 rounded-2xl border border-[#e6e2e2] bg-white/80 p-4 shadow-card backdrop-blur md:flex">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f2f4ff]">
          <img alt="EduEval illustration" className="h-10 w-10 object-contain" src={hero} />
        </div>
        <div>
          <p className="text-sm text-[#454652]">Trusted by over</p>
          <p className="text-lg font-bold text-[#24389c]">500+ Institutions</p>
        </div>
      </aside>
    </main>
  )
}
