
import Header from './components/header/header';
import MainSection from './components/MainSection/Mainsection';
import PopularCompany from './components/MainSection/popularCompany/PopularCompany';
import CardsGroup from './components/MainSection/Category_Work/work_Categories';
import VacanciesGroup from './components/MainSection/Vacanciesgroup/VacanciesGroup';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <PopularCompany />
      <CardsGroup />
      <VacanciesGroup />
      <Footer />
    </>
  );
}

export default App;
