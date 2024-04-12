import SharedLayout from 'components/SharedLayout/SharedLayout';
import Hero from 'components/Sections/NoRegisrerUser/SectionHero/Hero';
import SectionOne from '../../components/Sections/NoRegisrerUser/SectionOne/SectionOne';

export default function HomePageNoReg() {
  return (
    <>
      <SharedLayout>
        <Hero />
        <SectionOne />
      </SharedLayout>
    </>
  );
}
