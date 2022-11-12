// metodos: index, show, update, store, destroy
/*
index: listagem de sessões
store: criar nova sessão
show: listar uma única sessão
update: alteral alguma sessão
destroy: quando queremos deletar uma sessão
*/

import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação!' });
    }

    // verificação de email, se não houver no banco, cria um novo
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
