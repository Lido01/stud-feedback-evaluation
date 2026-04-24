import { Card, DashboardShell, Icon, ActionButton, StatusPill } from '../components/Ui'
import { keywordChips, ranking, reportsRows, reportsSummary } from '../data'

function SimpleColumnChart() {
  const bars = [
    { label: 'CS101', quality: 86, materials: 72 },
    { label: 'DS402', quality: 74, materials: 63 },
    { label: 'ML201', quality: 91, materials: 77 },
    { label: 'AI605', quality: 67, materials: 68 },
    { label: 'UX301', quality: 82, materials: 59 },
    { label: 'SE105', quality: 79, materials: 71 },
    { label: 'MA202', quality: 69, materials: 54 },
  ]

  return (
    <div className="flex h-[320px] items-end gap-4 rounded-2xl border border-[#edf0f5] bg-white px-6 pb-6 pt-4">
      {bars.map((bar) => (
        <div key={bar.label} className="flex flex-1 flex-col items-center justify-end gap-2">
          <div className="flex w-full items-end justify-center gap-2">
            <div className="w-5 rounded-t-xl bg-[#d9ebff]" style={{ height: `${bar.materials}%` }} />
            <div className="w-5 rounded-t-xl bg-[#24389c]" style={{ height: `${bar.quality}%` }} />
          </div>
          <span className="-rotate-45 text-[10px] text-[#757684]">{bar.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function ReportsPage() {
  return (
    <DashboardShell
      title="Reports & Analytics"
      subtitle="Aggregate performance data and student feedback trends."
      searchPlaceholder="Search analytics..."
      userName="Dr. Julian Vance"
      userRole="Academic Lead"
      avatar="JV"
    >
      <section className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl font-bold text-[#24389c]">Reports &amp; Analytics</h2>
          <p className="mt-4 text-lg leading-8 text-[#454652]">
            Aggregate performance data and student feedback trends.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-[#757684]">Semester</span>
            <select className="w-full rounded-xl border border-[#d7dceb] bg-white px-4 py-3 text-sm outline-none focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10">
              <option>Fall 2023</option>
              <option>Spring 2024</option>
              <option>Summer 2024</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-[#757684]">Department</span>
            <select className="w-full rounded-xl border border-[#d7dceb] bg-white px-4 py-3 text-sm outline-none focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10">
              <option>Computer Science</option>
              <option>Mathematics</option>
              <option>Humanities</option>
              <option>Engineering</option>
            </select>
          </label>

          <ActionButton className="sm:col-span-2 justify-center">
            <Icon name="file_download" />
            Export
          </ActionButton>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div className="space-y-6">
          {reportsSummary.map((item) => (
            <Card key={item.label} className="p-6">
              <p className="text-sm text-[#757684]">{item.label}</p>
              <div className="mt-4 flex items-end gap-3">
                <h3 className="font-display text-4xl font-bold text-[#24389c]">{item.value}</h3>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.tone}`}>{item.badge}</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Average Ratings per Course</h3>
            <div className="flex items-center gap-4 text-sm text-[#61677d]">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#24389c]" />
                Quality
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#51b2fe]" />
                Materials
              </span>
            </div>
          </div>
          <SimpleColumnChart />
        </Card>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <Card className="p-6">
          <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Instructor Ranking</h3>
          <div className="mt-6 space-y-5">
            {ranking.map((item) => (
              <div key={item.name}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf2ff] text-sm font-bold text-[#24389c]">
                    {item.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate font-semibold text-[#1b1c1c]">{item.name}</p>
                      <span className="text-sm font-semibold text-[#24389c]">{item.score}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#eef1f7]">
                      <div className="h-full rounded-full bg-[#24389c]" style={{ width: `${Number(item.score) * 20}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ActionButton tone="secondary" className="mt-6 w-full justify-center">
            View All Instructors
          </ActionButton>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#edf0f5] p-6">
            <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Course Evaluation Details</h3>
            <span className="text-sm text-[#757684]">Showing 5 of 42 results</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#edf0f5] text-left">
              <thead className="bg-[#fafbfe] text-xs uppercase tracking-[0.18em] text-[#757684]">
                <tr>
                  <th className="px-6 py-4">Course Name</th>
                  <th className="px-6 py-4">Instructor</th>
                  <th className="px-6 py-4">Responses</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edf0f5]">
                {reportsRows.map((row) => (
                  <tr key={row.course}>
                    <td className="px-6 py-5 font-medium text-[#1b1c1c]">{row.course}</td>
                    <td className="px-6 py-5 text-[#1b1c1c]">{row.instructor}</td>
                    <td className="px-6 py-5 text-[#1b1c1c]">{row.responses}</td>
                    <td className="px-6 py-5 font-semibold text-[#24389c]">{row.score}</td>
                    <td className="px-6 py-5">
                      <StatusPill tone={row.status === 'Completed' ? 'success' : 'warning'}>
                        {row.status}
                      </StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <Card className="mt-8 p-6">
        <h3 className="font-display text-3xl font-bold text-[#1b1c1c]">Student Sentiment Keywords</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {keywordChips.map((chip, index) => (
            <span
              key={chip}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
                index === 2 || index === 5
                  ? 'border-[#f4c7c7] bg-[#fff5f5] text-[#ba1a1a]'
                  : 'border-[#c8d0ea] bg-[#f5f7ff] text-[#24389c]'
              }`}
            >
              <Icon name={index % 2 === 0 ? 'thumb_up' : 'book'} className="text-[18px]" />
              {chip}
            </span>
          ))}
        </div>
      </Card>
    </DashboardShell>
  )
}

