import { getStaticProps } from '../../lib/getStaticProps';

export async function generateStaticParams() {
    return [{ params: { slug: 'crs' } }];
}

const Pages = async () => {
    const pageStaticProps = await getStaticProps();
    const { sections } = pageStaticProps;

    return (
        <>
            {sections.map((section) => (
                <h1 key={section.id}>{section.title}</h1>
            ))}
        </>
    );
};

export default Pages;
