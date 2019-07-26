import Head from '../components/Head';
import '../static/style.css';
import Hero from '../components/Hero';

export default function index() {
    return (
        <React.Fragment>
            <Head title="Portfolio" />
            <Hero imageUrl="/static/images/fly.jpg" 
                children={
                    <>
                        <h2>Well, here it is</h2>
                        <p>This should contain portfolio items.</p>
                    </>
                }
            />
        </React.Fragment>
    )
}