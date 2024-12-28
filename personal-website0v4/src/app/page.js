import Hero from './sections/hero';
import ArtSection from './sections/art';
import TechSection from './sections/tech';

// Home component
export default function Home() {
    // Function to format date

    return (
        <div>
            <Hero></Hero>
            <TechSection></TechSection>
            <ArtSection></ArtSection>
        </div>
    );
}
