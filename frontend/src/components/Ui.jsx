import { NavLink } from 'react-router-dom'

export function Icon({ name, filled = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`.trim()}
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
    >
      {name}
    </span>
  )
}

export function Card({ className = '', children }) {
  return <div className={`rounded-2xl bg-white shadow-card border border-[#e6e2e2] ${className}`.trim()}>{children}</div>
}

export function StatCard({ label, value, icon, tone, subtext, progress, trend }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium tracking-wide text-[#757684]">{label}</p>
        <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tone}`}>
          <Icon name={icon} className="text-[24px]" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-end gap-2">
          <h3 className="font-display text-4xl font-bold tracking-tight text-[#24389c]">{value}</h3>
          {trend === 'up' ? <span className="pb-1 text-sm text-[#0f9d58]">+</span> : null}
        </div>
        {typeof progress === 'number' ? (
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#eef1f7]">
            <div className="h-full rounded-full bg-[#51b2fe]" style={{ width: `${progress}%` }} />
          </div>
        ) : null}
        {subtext ? <p className="mt-2 text-sm text-[#454652]">{subtext}</p> : null}
      </div>
    </Card>
  )
}

export function StatusPill({ children, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-[#eef1f7] text-[#454652]',
    success: 'bg-[#eafaf2] text-[#0f9d58]',
    warning: 'bg-[#fff4d6] text-[#b45309]',
    info: 'bg-[#e8f1ff] text-[#24389c]',
  }

  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tones[tone]}`}>{children}</span>
}

export function ActionButton({ children, tone = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-[#24389c] text-white shadow-md shadow-[#24389c]/25 hover:bg-[#3f51b5]',
    secondary: 'border border-[#24389c] text-[#24389c] hover:bg-[#24389c]/5',
    neutral: 'bg-[#f2f4fa] text-[#454652] hover:bg-[#e9edf7]',
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${styles[tone]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function Sidebar({ links }) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-[#e6e2e2] bg-white px-5 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.01)]">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#24389c] text-white shadow-card">
          <Icon name="school" filled />
        </div>
        <div>
          <h1 className="font-display text-2xl font-extrabold leading-none text-[#24389c]">EduEval Portal</h1>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#757684]">Academic Management</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? 'border-r-4 border-[#24389c] bg-[#f2f4ff] text-[#24389c] shadow-sm'
                  : 'text-[#61677d] hover:translate-x-1 hover:bg-[#f7f8fb]'
              }`
            }
          >
            {({ isActive }) => <Icon name={link.icon} filled={isActive} className="text-[22px]" />}
            <span className="text-sm font-semibold">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-1 pt-6">
        <NavLink
          to="/feedback"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#24389c] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#24389c]/25 transition hover:bg-[#3f51b5]"
        >
          <Icon name="add" />
          New Evaluation
        </NavLink>
      </div>
    </aside>
  )
}

export function Topbar({ title, subtitle, searchPlaceholder, userName, userRole, avatar = 'AR' }) {
  return (
    <header className="fixed left-[280px] right-0 top-0 z-40 border-b border-[#e6e2e2] bg-white/95 backdrop-blur-sm">
      <div className="flex h-[70px] items-center justify-between gap-4 px-8">
        <div>
          {title ? <h2 className="font-display text-2xl font-bold text-[#24389c]">{title}</h2> : null}
          {subtitle ? <p className="text-sm text-[#454652]">{subtitle}</p> : null}
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-xl">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684]" />
            <input
              className="w-full rounded-full border border-transparent bg-[#f2f5fb] py-3 pl-12 pr-4 text-sm text-[#1b1c1c] outline-none transition focus:border-[#24389c]/20 focus:bg-white focus:ring-4 focus:ring-[#24389c]/10"
              placeholder={searchPlaceholder}
              type="search"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 text-[#61677d] transition hover:bg-[#f4f6fb]">
            <Icon name="notifications" />
          </button>
          <button className="rounded-full p-2 text-[#61677d] transition hover:bg-[#f4f6fb]">
            <Icon name="help" />
          </button>
          <div className="h-8 w-px bg-[#e6e2e2]" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#1b1c1c]">{userName}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-[#757684]">{userRole}</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24389c] text-sm font-bold text-white shadow-card">
              {avatar}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export function DashboardShell({ children, title, subtitle, searchPlaceholder, userName, userRole, avatar }) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[#1b1c1c]">
      <Sidebar links={[{ to: '/student/dashboard', label: 'Student Dashboard', icon: 'dashboard' }, { to: '/feedback', label: 'Feedback Form', icon: 'rate_review' }, { to: '/admin/dashboard', label: 'Admin Dashboard', icon: 'admin_panel_settings' }, { to: '/reports', label: 'Reports', icon: 'analytics' }]} />
      <Topbar title={title} subtitle={subtitle} searchPlaceholder={searchPlaceholder} userName={userName} userRole={userRole} avatar={avatar} />
      <main className="ml-[280px] pt-[86px]">
        <div className="mx-auto w-full max-w-[1280px] px-8 pb-12">{children}</div>
      </main>
    </div>
  )
}
