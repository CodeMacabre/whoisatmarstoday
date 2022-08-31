// CRUD operations to manipulate MongoDB data
export const findSpacecraftByName = async (collection, name) => {
  const result = await collection.findOne({ "Spacecraft.text": name });

  if (result) {
      console.log(`Found a spacecraft in the collection with the name '${name}':`)
      console.log(result)
  } else {
      console.log(`No spacecraft found with the name '${name}'`)
  }
}

export const findSpacecraftsByOutcome = async (collection, outcome) => {
  const cursor = await collection.find({ "Outcome.text": outcome })
  const results = await cursor.toArray()
  
  if (results.length > 0) {
    console.log(`Found spacecraft in the collection with the outcome '${outcome}':`)
    
    results.forEach((result, i) => {
      let date = new Date(result['Launch Date'].text).toDateString()
      console.log(`${i + 1} ${result.Spacecraft.text}`)
      console.log(`_id: ${result._id}`)
      console.log(`Type: ${result['Mission Type'].text}`)
      console.log(`Launched: ${date}`)
    })

    return results
  } else {
      console.log(`No spacecraft found with the outcome '${outcome}'`)
  }
}

export const upsertSpacecraft = async (collection, spacecraft, newData) => {
  const result = await collection.updateOne({
    'Spacecraft.text': spacecraft
   },
   { $set: newData },
   { upsert: true })

  console.log(`${result.matchedCount} document(s) matched the query criteria.`)

  if (result.upsertedCount > 0) {
    console.log(`One document was inserted with the id ${result.upsertedId} (${spacecraft})`)
  } else {
      console.log(`${spacecraft} updated`)
  }
}
