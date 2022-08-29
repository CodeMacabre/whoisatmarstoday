import wtf from 'wtf_wikipedia'
import fs from 'fs'

export const handler = async () => {
  // Retrieve data from wikipedia
  const doc = await wtf.fetch('List_of_missions_to_Mars')
  const data = doc.section('Missions').json()
  const table = JSON.stringify(data.tables[0])

  console.log(table)

  // Save copy of data locally
  await fs.writeFile('./src/assets/data/mars-missions.json', table, err => {
    if (err) {
      console.error(err)
    }
  })

  // TODO compare data to DB
  // if different
  // TODO Save data to MongoDB

  return {
    statusCode: 200
  }
}
