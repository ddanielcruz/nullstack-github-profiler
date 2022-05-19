import Nullstack, { NullstackClientContext } from 'nullstack'

import './Application.scss'

import Profiler from './Profiler'

declare function Head(): typeof Application.prototype.renderHead

class Application extends Nullstack {
  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  renderHead({ project }: NullstackClientContext) {
    return (
      <head>
        <title>{project.name}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Profiler route="/" />
      </main>
    )
  }
}

export default Application
