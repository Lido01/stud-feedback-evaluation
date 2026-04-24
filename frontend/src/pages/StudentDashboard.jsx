import { ActionButton, Card, Icon, StatusPill, StatCard, DashboardShell } from '../components/Ui'
import { evaluationCards, recentActivity, studentStats } from '../data'

export default function StudentDashboard() {
  return (
    <DashboardShell
      title="Dashboard"
      subtitle="Student overview"
      searchPlaceholder="Search courses or reports..."
      userName="Alex Rivera"
      userRole="Student ID: 48291"
      avatar="AR"
    >
      <section className="mb-10 rounded-[28px] bg-gradient-to-r from-[#24389c] to-[#4453a7] p-8 text-white shadow-[0_18px_48px_rgba(36,56,156,0.28)]">
        <div className="max-w-3xl">
          <h2 className="font-display text-5xl font-extrabold tracking-tight">Welcome back, Alex!</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
            You have 3 pending course evaluations for the Fall 2024 semester. Your feedback helps us improve your learning experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ActionButton tone="neutral" className="bg-white text-[#24389c] hover:bg-white/90">
              <Icon name="pending_actions" />
              View Pending Tasks
            </ActionButton>
            <ActionButton tone="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              Download Progress Report
            </ActionButton>
          </div>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {studentStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Course Evaluations</h3>
              <p className="mt-1 text-sm text-[#454652]">Review and submit feedback for your active modules.</p>
            </div>
            <div className="flex gap-3">
              <ActionButton tone="neutral" className="px-4 py-2 text-sm">
                Semester: Fall 2024
              </ActionButton>
              <ActionButton tone="neutral" className="px-4 py-2 text-sm">
                Filter: All
              </ActionButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {evaluationCards.map((item) => (
              <Card key={item.title} className="overflow-hidden p-4">
                <div className={`mb-4 h-32 rounded-2xl bg-gradient-to-br ${item.accent} p-4 text-white shadow-inner`}>
                  <div className="flex items-start justify-between">
                    <StatusPill tone={item.status === 'PENDING' ? 'warning' : 'success'}>{item.status}</StatusPill>
                    <Icon name="more_vert" className="text-white/80" />
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h4 className="text-2xl font-semibold text-[#1b1c1c]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[#61677d]">{item.instructor}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#757684]">{item.dueLabel}</p>
                      <p className="mt-1 text-sm font-semibold text-[#1b1c1c]">{item.dueDate}</p>
                    </div>
                    <ActionButton tone={item.actionTone === 'primary' ? 'primary' : 'neutral'} className="px-4 py-2 text-sm">
                      {item.action}
                    </ActionButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[24px] bg-[#4b5cc8] p-6 text-white shadow-[0_18px_40px_rgba(75,92,200,0.35)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <Icon name="notifications" />
            </div>
            <h3 className="font-display text-3xl font-bold">Upcoming Deadline</h3>
            <p className="mt-3 text-sm leading-7 text-white/90">
              The feedback window for "Advanced Linear Algebra" closes in 2 days. Don't forget to submit your evaluation!
            </p>
            <div className="mt-6 rounded-2xl bg-white/12 p-4">
              <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                <span>Completion Progress</span>
                <span>45%</span>
              </div>
              <div className="h-2 rounded-full bg-white/20">
                <div className="h-2 rounded-full bg-white" style={{ width: '45%' }} />
              </div>
            </div>
            <ActionButton className="mt-6 w-full justify-center bg-white text-[#24389c] hover:bg-white/90">
              Start Evaluation Now
            </ActionButton>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-2xl font-bold text-[#1b1c1c]">Recent Activity</h3>
            <div className="mt-5 space-y-4">
              {recentActivity.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-xl border border-[#eef0f4] p-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full ${item.tone}`}>
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-[#1b1c1c]">{item.title}</p>
                    <p className="mt-1 text-xs text-[#757684]">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </DashboardShell>
  )
}

