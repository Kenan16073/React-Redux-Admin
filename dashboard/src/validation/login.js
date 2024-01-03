import { object, string} from 'yup';

let loginSchema = object({
  email: string().email().required(),
  password: string().required()
});

export default loginSchema