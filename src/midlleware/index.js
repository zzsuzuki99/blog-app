import { postSagas } from './sagas/post'

export default function * sagas () {
  yield [postSagas()]
}
