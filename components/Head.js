import Head from 'next/head';

export default ( { title } ) => {
    return (
            <Head>
                <meta charSet="UTF-8" />
                <title>Arslan Khan | { (title) ? title : 'Chief Technology Officer' } ☠️</title>
                <meta name="description" content="Veteran CTO. Founder/Owner Alpha Squad and i-Intellect Inc. Balls to the wall." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="additionalName" content="A Q Khan" />
                <meta name="keywords" content="CTO,gun for hire,team lead,alpha squad,iintellect,i-Intellect,aqkhan,a q khan,arslan khan,balls to the wall"></meta>
                {/* Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://aqkhan.ninja/" />
                <meta property="og:title" content="Arslan Khan | Chief Technology Officer" />
                <meta property="og:description" content="Veteran CTO. Founder/Owner Alpha Squad and i-Intellect. Balls to the wall." />
                <meta property="og:image" content="https://avatars1.githubusercontent.com/u/4011536?s=460&v=4"></meta>
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://aqkhan.ninja/" />
                <meta property="twitter:title" content="Arslan Khan | Chief Technology Officer" />
                <meta property="twitter:description" content="Tom Brady of developers" />
                <meta property="twitter:image" content="https://avatars1.githubusercontent.com/u/4011536?s=460&v=4"></meta>
            </Head>
    )
}
