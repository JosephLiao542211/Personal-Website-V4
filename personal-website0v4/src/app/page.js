import Hero from './sections/hero';
import ArtSection from './sections/art';
import TechSection from './sections/tech';
import LifeSection from './sections/life';

// Home component
export default function Home() {
    // Function to format date

    return (
        <div>
            <Hero></Hero>
            <TechSection></TechSection>
            <ArtSection></ArtSection>
            <LifeSection> </LifeSection>
        </div>
    );
}
