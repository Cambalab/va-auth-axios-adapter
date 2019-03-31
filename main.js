import { description, homepage, name, version } from './package.json'
import createAxiosAdapter from './lib'

// Comments are just self-reminders ヘ(◕。◕ヘ)

// Import my program from src/ if I'm building an app
// or lib/ if I'm building a library.

module.exports = {
  description,
  name,
  version,
  doc: `Nothing to do here. Visit ${homepage} for more information.`,
  createAxiosAdapter,
}
