import House from '../models/House';

class DashBoardController {
  async show(req, res) {
    // pegar id do logado
    const { user_id } = req.headers;
    // todas as casas do usuário
    const houses = await House.find({ user: user_id });

    return res.json(houses);
  }
}

export default new DashBoardController();
