import Head from '../components/Head';
import '../static/style.css';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

export default function index() {
    return (
        <React.Fragment>
            <Head title="Chief Technology Officer" />
            <Navigation />
            <Hero imageUrl="/static/images/aqk_in_the_jungle.jpg" />
        </React.Fragment>
    )
}