import { Card, DashboardShell, Icon, StatCard, ActionButton } from '../components/Ui'
import { adminActivity, adminStats, weeklyBars } from '../data'

function DonutChart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative flex h-56 w-56 items-center justify-center rounded-full"
        style={{
          background:
            'conic-gradient(#51b2fe 0 270deg, #e5ecf5 270deg 360deg)',
        }}
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-inner">
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-[#24389c]">75%</p>
            <p className="mt-1 text-sm text-[#757684]">On-time Returns</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full justify-between text-sm">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#51b2fe]" />
          Active Staff
        </span>
        <strong>142</strong>
      </div>
      <div className="mt-4 flex w-full justify-between text-sm">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#e5ecf5]" />
          On Leave
        </span>
        <strong>12</strong>
      </div>
    </div>
  )
}

function BarChart() {
  return (
    <div className="flex h-[360px] items-end gap-4 rounded-2xl border border-[#edf0f5] bg-white px-6 pb-6 pt-4">
      {weeklyBars.map((bar) => (
        <div key={bar.day} className="flex flex-1 flex-col items-center justify-end gap-2">
          <div className="flex w-full items-end justify-center gap-2">
            <div className="w-6 rounded-t-xl bg-[#d9ebff]" style={{ height: `${bar.secondary}%` }} />
            <div className="w-6 rounded-t-xl bg-[#4453a7]" style={{ height: `${bar.primary}%` }} />
          </div>
          <span className="text-xs text-[#757684]">{bar.day}</span>
        </div>
      ))}
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <DashboardShell
      title="Dashboard"
      subtitle="Administration overview"
      searchPlaceholder="Search analytics, courses, or evaluations..."
      userName="Admin User"
      userRole="Academic Director"
      avatar="AU"
    >
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.9fr)]">
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Engagement Overview</h3>
            <div className="flex gap-2">
              <ActionButton className="rounded-full px-4 py-2 text-sm">Weekly</ActionButton>
              <ActionButton tone="neutral" className="rounded-full px-4 py-2 text-sm">
                Monthly
              </ActionButton>
            </div>
          </div>
          <BarChart />
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Faculty Pulse</h3>
          <div className="mt-6">
            <DonutChart />
          </div>
        </Card>
      </section>

      <Card className="mt-8 overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-[#edf0f5] p-6">
          <div>
            <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Recent Evaluation Activity</h3>
            <p className="mt-1 text-sm text-[#454652]">Track real-time student submissions and departmental updates</p>
          </div>
          <div className="flex gap-3">
            <ActionButton tone="neutral">
              <Icon name="filter_list" />
              Filter
            </ActionButton>
            <ActionButton>View All</ActionButton>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#edf0f5] text-left">
            <thead className="bg-[#fafbfe] text-xs uppercase tracking-[0.18em] text-[#757684]">
              <tr>
                <th className="px-6 py-4">Evaluation Name</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Responses</th>
                <th className="px-6 py-4">Last Activity</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf0f5]">
              {adminActivity.map((row) => (
                <tr key={row.name}>
                  <td className="px-6 py-5">
                    <p className="text-base font-semibold text-[#1b1c1c]">{row.name}</p>
                    <p className="mt-1 text-sm text-[#757684]">Mid-term Course Feedback</p>
                  </td>
                  <td className="px-6 py-5 text-sm text-[#1b1c1c]">{row.department}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                        row.status === 'Completed'
                          ? 'bg-[#eafaf2] text-[#0f9d58]'
                          : row.status === 'Draft'
                            ? 'bg-[#edf2ff] text-[#3f51b5]'
                            : 'bg-[#fff4d6] text-[#b45309]'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-[#1b1c1c]">{row.responses}</td>
                  <td className="px-6 py-5 text-sm text-[#757684]">{row.last}</td>
                  <td className="px-6 py-5 text-right text-[#757684]">
                    <Icon name="more_vert" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardShell>
  )
}

