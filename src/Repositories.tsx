import { NullstackClientContext } from 'nullstack'

import './Repositories.scss'

interface IRepository {
  id: string
  name: string
  html_url: string
  description: string
  language: string
  stargazers_count: number
}

interface RepositoriesProps extends NullstackClientContext {
  repositories: IRepository[]
}

function openRepository(url: string) {
  window.open(url, '_blank').focus()
}

export default function Repositories({ repositories }: RepositoriesProps) {
  return (
    <div class="repositories pt-4 pb-4">
      {repositories.map((repo) => (
        <div class="repository card shadow-sm" onclick={() => openRepository(repo.html_url)}>
          <div class="card-body">
            <h5 class="card-title">{repo.name}</h5>
            <p class="card-text">{repo.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
