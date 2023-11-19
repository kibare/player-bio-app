
import dataset from '../../public/dataset.json'

export async function GET () {
  return Response.json(dataset)
}