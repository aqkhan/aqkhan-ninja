import Link from 'next/link';

export default () => (
    <div className="navigation">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/work"><a>Work</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    </div>
)