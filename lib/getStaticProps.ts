export async function getStaticProps() {
    const response = await import('../public/mock-data.json');
    return response;
}
