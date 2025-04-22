import Usuario from '../models/Usuario.js';
import Procedimento from "../models/Procedimento.js";

await Usuario.sync()
await Procedimento.sync()