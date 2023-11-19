import dataset from '../../../public/dataset.json'

export async function GET(
    request: Request,
    { params }: { params: { id: Number } }
  ) {
    return Response.json({dataset})
  }