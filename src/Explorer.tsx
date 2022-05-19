import Nullstack, { NullstackClientContext } from 'nullstack'

import Repositories from './Repositories'

import './Explorer.scss'

interface ExplorerProps extends NullstackClientContext {
  route: string
}

export default class Explorer extends Nullstack<ExplorerProps> {
  private profile = ''
  private repositories = []

  private async loadRepositories() {
    if (!this.profile) {
      return
    }

    const response = await fetch(`https://api.github.com/users/${this.profile}/repos`)
    this.repositories = await response.json()
  }

  render() {
    return (
      <section class="explorer container col-4 mt-5">
        <div className="row">
          <div className="col">
            <h1 class="mb-4">Explore GitHub profiles!</h1>
          </div>
        </div>
        <div className="row">
          <form onsubmit={this.loadRepositories} class="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search for a GitHub profile"
                aria-label="Search for a GitHub profile"
                bind={this.profile}
              />
              <button class="btn btn-primary" type="submit" id="button-addon2">
                Button
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <Repositories repositories={this.repositories} />
          </div>
        </div>
      </section>
    )
  }
}
