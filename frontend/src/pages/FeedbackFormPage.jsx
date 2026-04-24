import { useState } from 'react'
import { ActionButton, Card, DashboardShell, Icon } from '../components/Ui'
import { feedbackSteps } from '../data'

function RatingRow({ title, value, onChange }) {
  const ratings = [1, 2, 3, 4, 5]

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-[#1b1c1c]">{title}</h3>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <span className="text-sm text-[#757684]">Strongly Disagree</span>
        <div className="flex gap-3">
          {ratings.map((rating) => {
            const active = rating === value

            return (
              <button
                key={rating}
                type="button"
                onClick={() => onChange(rating)}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition active:scale-95 ${
                  active
                    ? 'border-[#24389c] bg-[#24389c] text-white shadow-md shadow-[#24389c]/25'
                    : 'border-[#c9cddd] text-[#757684] hover:border-[#00639a] hover:bg-[#51b2fe]/10'
                }`}
              >
                {rating}
              </button>
            )
          })}
        </div>
        <span className="text-sm text-[#757684]">Strongly Agree</span>
      </div>
    </Card>
  )
}

export default function FeedbackFormPage() {
  const [ratings, setRatings] = useState(feedbackSteps.map((step) => step.value))

  return (
    <DashboardShell
      title="Evaluations"
      subtitle="Mid-Semester Faculty Evaluation"
      searchPlaceholder="Search evaluations..."
      userName="Alex Rivera"
      userRole="Student"
      avatar="AR"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="mb-6 overflow-hidden border-t-8 border-t-[#24389c] p-6">
          <h2 className="font-display text-4xl font-bold text-[#1b1c1c]">CS101: Introduction to Computer Science</h2>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-[#454652]">
            Mid-Semester Faculty Evaluation. Your feedback is anonymous and helps us improve our academic standards.
          </p>
        </Card>

        <div className="mb-8">
          <div className="h-2 overflow-hidden rounded-full border border-[#d9deea] bg-[#f2f5fb]">
            <div className="h-full w-2/5 rounded-full bg-[#00639a]" />
          </div>
          <div className="mt-3 flex items-center justify-between px-1 text-sm">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#24389c]">Step 2 of 5</span>
            <span className="text-[#757684]">Section: Teaching Methodology</span>
          </div>
        </div>

        <div className="space-y-6">
          {feedbackSteps.map((step, index) => (
            <RatingRow
              key={step.title}
              title={step.title}
              value={ratings[index]}
              onChange={(nextValue) =>
                setRatings((current) => current.map((value, currentIndex) => (currentIndex === index ? nextValue : value)))
              }
            />
          ))}

          <Card className="p-6">
            <label className="block">
              <span className="block text-2xl font-semibold text-[#1b1c1c]">Specific examples of what the instructor could improve?</span>
              <textarea
                className="mt-6 min-h-48 w-full resize-none rounded-2xl border border-[#d7dceb] bg-transparent px-4 py-4 text-base outline-none transition placeholder:text-[#a6adbf] focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10"
                placeholder="Your answer"
              />
            </label>
          </Card>

          <Card className="p-6">
            <label className="block">
              <span className="block text-2xl font-semibold text-[#1b1c1c]">What did you find most effective about this course so far?</span>
              <textarea
                className="mt-6 min-h-48 w-full resize-none rounded-2xl border border-[#d7dceb] bg-transparent px-4 py-4 text-base outline-none transition placeholder:text-[#a6adbf] focus:border-[#24389c] focus:ring-4 focus:ring-[#24389c]/10"
                placeholder="Your answer"
              />
            </label>
          </Card>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#e6e2e2] pt-8 sm:flex-row sm:items-center">
          <ActionButton tone="secondary" className="justify-start bg-transparent px-0 text-[#24389c] hover:bg-transparent">
            <Icon name="arrow_back" />
            Previous
          </ActionButton>
          <div className="flex flex-wrap gap-3">
            <ActionButton tone="neutral">Clear Form</ActionButton>
            <ActionButton>
              Next Section
              <Icon name="arrow_forward" />
            </ActionButton>
          </div>
        </div>

        <footer className="mt-10 border-t border-[#e6e2e2] py-8 text-center">
          <p className="text-sm text-[#757684]">Powered by EduEval Intelligence Engine</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#24389c]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </div>
        </footer>
      </div>
    </DashboardShell>
  )
}
