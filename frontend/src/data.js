export const sidebarLinks = [
  { to: '/student/dashboard', label: 'Student Dashboard', icon: 'dashboard' },
  { to: '/feedback', label: 'Feedback Form', icon: 'rate_review' },
  { to: '/admin/dashboard', label: 'Admin Dashboard', icon: 'admin_panel_settings' },
  { to: '/reports', label: 'Reports', icon: 'analytics' },
]

export const studentStats = [
  { label: 'Current Courses', value: '6', icon: 'auto_stories', tone: 'bg-[#e8f0ff] text-[#3f51b5]' },
  { label: 'Evaluations Sent', value: '12', icon: 'verified', tone: 'bg-[#e8f8ef] text-[#0f9d58]' },
  { label: 'Pending Feedback', value: '3', icon: 'schedule', tone: 'bg-[#fff7df] text-[#d97706]' },
  { label: 'GPA Score', value: '3.8', icon: 'grade', tone: 'bg-[#f5ebff] text-[#7c3aed]' },
]

export const evaluationCards = [
  {
    status: 'PENDING',
    title: 'Advanced Linear Algebra',
    instructor: 'Dr. Sarah Jenkins',
    dueLabel: 'Due Date',
    dueDate: 'Oct 24, 2024',
    action: 'Give Feedback',
    actionTone: 'primary',
    accent: 'from-slate-900 via-slate-700 to-[#24389c]',
  },
  {
    status: 'PENDING',
    title: 'Intro to UX/UI Design',
    instructor: 'Prof. Michael Chen',
    dueLabel: 'Due Date',
    dueDate: 'Oct 28, 2024',
    action: 'Give Feedback',
    actionTone: 'primary',
    accent: 'from-cyan-900 via-sky-700 to-[#00639a]',
  },
  {
    status: 'COMPLETED',
    title: 'Experimental Psychology',
    instructor: 'Dr. Elena Rodriguez',
    dueLabel: 'Submitted',
    dueDate: 'Sep 15, 2024',
    action: 'View Entry',
    actionTone: 'neutral',
    accent: 'from-zinc-900 via-zinc-600 to-zinc-500',
  },
  {
    status: 'COMPLETED',
    title: 'Software Engineering Capstone',
    instructor: 'Prof. David Wilson',
    dueLabel: 'Submitted',
    dueDate: 'Sep 10, 2024',
    action: 'View Entry',
    actionTone: 'neutral',
    accent: 'from-slate-900 via-slate-500 to-slate-600',
  },
]

export const recentActivity = [
  { title: 'Evaluation submitted for Experimental Psychology', meta: '2 hours ago', icon: 'check_circle', tone: 'bg-[#e6f8ef] text-[#0f9d58]' },
  { title: 'Draft updated for Advanced Linear Algebra', meta: 'Yesterday at 4:30 PM', icon: 'edit', tone: 'bg-[#e6edff] text-[#3f51b5]' },
  { title: 'New evaluation available: Intro to UX/UI Design', meta: 'Oct 10, 2024', icon: 'notifications', tone: 'bg-[#ede8ff] text-[#7c3aed]' },
]

export const adminStats = [
  { label: 'Total Responses', value: '12,482', icon: 'group', accent: 'bg-[#e6f1ff] text-[#24389c]', subtext: '+8.4% this month', trend: 'up' },
  { label: 'Average Rating', value: '4.82/5', icon: 'star_half', accent: 'bg-[#e6f1ff] text-[#24389c]', subtext: 'Consistent growth', trend: 'up' },
  { label: 'Completion Rate', value: '92.4%', icon: 'task_alt', accent: 'bg-[#e6f1ff] text-[#24389c]', subtext: '', progress: 92.4 },
  { label: 'Active Sessions', value: '24', icon: 'pending_actions', accent: 'bg-[#e6f1ff] text-[#24389c]', subtext: '4 ending today', trend: 'neutral' },
]

export const weeklyBars = [
  { day: 'Mon', primary: 42, secondary: 62 },
  { day: 'Tue', primary: 38, secondary: 46 },
  { day: 'Wed', primary: 68, secondary: 76 },
  { day: 'Thu', primary: 35, secondary: 58 },
  { day: 'Fri', primary: 82, secondary: 92 },
  { day: 'Sat', primary: 16, secondary: 40 },
  { day: 'Sun', primary: 18, secondary: 28 },
]

export const adminActivity = [
  { name: 'Advanced Computer Science 102', department: 'Technology', status: 'In Progress', responses: '342 / 400', last: '2 mins ago' },
  { name: 'Macroeconomics Foundations', department: 'Business', status: 'Draft', responses: '0 / 120', last: '1 hour ago' },
  { name: 'Psychology & Behavioral Studies', department: 'Social Sciences', status: 'Completed', responses: '850 / 850', last: '4 hours ago' },
]

export const feedbackSteps = [
  {
    title: 'The instructor explains complex concepts in an understandable way?',
    value: 3,
  },
  {
    title: 'The course materials provided were helpful and relevant?',
    value: 4,
  },
]

export const reportsSummary = [
  { label: 'Total Evaluations', value: '1,248', badge: '+12%', tone: 'text-[#0f9d58] bg-[#ecfdf3]' },
  { label: 'Average Satisfaction', value: '4.82', badge: 'High', tone: 'text-[#0f9d58] bg-[#ecfdf3]' },
  { label: 'Completion Rate', value: '89.4%', badge: '-3%', tone: 'text-[#ba1a1a] bg-[#fff1f2]' },
]

export const ranking = [
  { name: 'Dr. Sarah Chen', score: '4.96', avatar: 'SC' },
  { name: 'Prof. James Miller', score: '4.88', avatar: 'JM' },
  { name: 'Dr. Elena Rodriguez', score: '4.75', avatar: 'ER' },
]

export const reportsRows = [
  { course: 'Algorithms II (CS204)', instructor: 'Dr. Sarah Chen', responses: '142/150', score: '4.92', status: 'Completed' },
  { course: 'Database Systems (DS402)', instructor: 'Prof. James Miller', responses: '88/95', score: '4.65', status: 'Completed' },
  { course: 'Intro to AI (AI101)', instructor: 'Dr. Alan Turing Jr.', responses: '54/200', score: '--', status: 'In Progress' },
  { course: 'Linear Algebra (MA302)', instructor: 'Dr. Elena Rodriguez', responses: '112/120', score: '4.42', status: 'Completed' },
  { course: 'Machine Learning (ML201)', instructor: 'Dr. Julian Vance', responses: '195/205', score: '4.78', status: 'Completed' },
]

export const keywordChips = [
  'Engaging Lectures',
  'Timely Feedback',
  'Heavy Workload',
  'Excellent Resources',
  'Clear Objectives',
  'Difficult Exams',
]

