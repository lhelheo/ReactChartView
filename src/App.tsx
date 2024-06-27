import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts"

function App() {

  const userData = [
    { date: '2021-01-01', userClicks: 10 },
    { date: '2021-01-02', userClicks: 20 },
    { date: '2021-01-03', userClicks: 30 },
    { date: '2021-01-04', userClicks: 40 },
    { date: '2021-01-05', userClicks: 50 },
    { date: '2021-01-06', userClicks: 60 },
    { date: '2021-01-07', userClicks: 70 },
    { date: '2021-01-08', userClicks: 80 },
    { date: '2021-01-09', userClicks: 90 },
    { date: '2021-01-10', userClicks: 100 },
  ]

  return (
    <>
      <div className="w-[100%]">
        <BarChart data={userData} width={300} height={300}>
          <XAxis dataKey="date" />
          <YAxis dataKey="userClicks" />
          <Tooltip />
          <Bar dataKey="userClicks" />
        </BarChart>
      </div>
    </>
  )
}

export default App
