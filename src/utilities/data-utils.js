import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const getData = async () => {
  const { result, loading, error } = await useQuery(gql`
    query getSpacecraft {
      wikipedia {
        LaunchDate {
          text
        }
        MissionType {
          text
        }
        Operator {
          text
        }
        Outcome {
          text
        }
        Spacecraft {
          text
        }
        _id
      }
    }
  `)

  return {
    result,
    loading,
    error
  }
}

export const filterData = async data => {
  // const dataset = 
  console.log('DATA:', await data.result.value)
  return await data.result.value.wikipedia.filter(object => object.Outcome.text === 'Operational')
}
