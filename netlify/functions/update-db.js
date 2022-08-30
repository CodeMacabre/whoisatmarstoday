import { MongoClient } from 'mongodb'
import wtf from 'wtf_wikipedia'

import upsertSpacecraft from '../../src/utilities/crud-utils'

const dbURI = import.meta.env.VITE_DB_URI;

export const handler = async () => {
  // Retrieve data from wikipedia
  const doc = await wtf.fetch('List_of_missions_to_Mars')
  const data = doc.section('Missions').json()
  const missionData = JSON.stringify(data.tables[0])

  // Save copy of data locally
  // await fs.writeFile(`./src/assets/data/mars-missions.json`, missionData, err => {
  //   if (err) {
  //     console.error(err)
  //   }
  // })

  // Connect to MongoDB
  const client = new MongoClient(dbURI)
  
  try {
    await client.connect()
    console.log('Connected successfully to server')
    
    const db = client.db('wikipedia')
    const collection = db.collection('wikipedia')
    
    // Compare data to DB
    missionData.forEach(item => {
      upsertSpacecraft(collection, item.Spacecraft.text, item)
    })
  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }

  return {
    statusCode: 200
  }
}
