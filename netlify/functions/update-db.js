import fs from 'fs'
import wtf from 'wtf_wikipedia'

export const handler = async () => {
  // Retrieve data from wikipedia
  const doc = await wtf.fetch('List_of_missions_to_Mars')
  const data = doc.section('Missions').json()
  const missionData = JSON.stringify(data.tables[0])

  // Save copy of data locally
  await fs.writeFile(`./src/assets/data/mars-missions.json`, missionData, err => {
    if (err) {
      console.error(err)
    }
  })

  return {
    statusCode: 200
  }
}
