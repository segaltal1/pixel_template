import { AppHeader } from './cmps/AppHeader';
import { AppHero } from './cmps/AppHero'
import { AppFilter } from './cmps/AppFilter';
import { AppMain } from './cmps/AppMain';
import { AppCard } from './cmps/AppCard';
import { AppStart } from './cmps/AppStart';
import { AppFooter } from './cmps/AppFooter';
import { AppHeaderHAM } from './cmps/AppHeaderHAM';

export const App = () => {
  return (
    <section className="app">
      <AppHeaderHAM />
      {/* <AppHeader /> */}
      <AppHero />
      {/* <AppFilter /> */}
      <AppMain />
      {/* <AppCard /> */}
      <AppStart />
      <AppFooter />
    </section>
  )
}

