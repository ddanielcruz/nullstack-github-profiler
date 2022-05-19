import Nullstack, { NullstackClientContext } from 'nullstack';
import Logo from 'nullstack/logo';
import './Home.css';

declare function Link(): typeof Home.prototype.renderLink

interface HomeProps extends NullstackClientContext {
  route: string
}

class Home extends Nullstack<HomeProps> {

  prepare({ project, page }: HomeProps) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.description = `${project.name} was made with Nullstack`;
  }

  renderLink({ children, href }: { children: Element[], href: string }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }: HomeProps) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <p>
            We made some examples to help you getting started! Take a look at the
            <Link href="vscode://file//mnt/ba5a0cc7-ff06-47f8-aed7-68935652bda2/studies/nullstack-github-profiler/src">
              src folder
            </Link>.
          </p>
          <span>
            Hint: we have a
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              VS Code Extension
            </Link>
          </span>
          <ul>
            <li>
              <Link href="https://nullstack.app/stateless-components">
                🎉 Create your first component 
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/routes-and-params">
                ✨ Set your first route
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/context">
                ⚡ Define your context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Leave a star on github
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Subscribe to our Youtube Channel
              </Link>
            </li>
          </ul>
        </article>
        <aside>
          <Link href="https://nullstack.app/waifu">
            <img src="/nulla-chan.webp" alt="Nulla-Chan: Nullstack's official waifu" />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;