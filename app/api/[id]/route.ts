import dataset from '../../../public/dataset.json'

export async function GET(
    request: Request,
    { params }: { params: { id: Number } }
  ) {
    const player = dataset.find(p => p.id === Number(params.id));
    if (!player) {
        return Response.json({ message: 'Player not found' });
    }
    return Response.json(player)
  }