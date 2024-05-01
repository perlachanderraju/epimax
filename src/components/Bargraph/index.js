import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
  const Bargraph = (props)=> {
    
    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
  
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={props.total}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="ct" name="Completedtasks" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="pt" name="Pendingtasks" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Bargraph;  