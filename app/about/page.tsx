import ContactCard from '@/components/ContactCard';

const contact = {
    name: 'Daniel Rasmuson',
    title: 'Software Development Student',
    email: 'drasmuson@byupathway.edu',
    location: 'Orem, Utah',
    links: [
        { label: 'GitHub', url: 'https://github.com/derasmuso' },
        { label: 'LinkedIn', url: 'www.linkedin.com/in/daniel-rasmuson-59063c' },
    ],
};

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-700">
                    This about page shares more information about my background and work.
                </p>
            </section>

            <h3 className="text-2xl font-semibold mb-4 text-center">Contact Me</h3>
            <div className="flex justify-center">
                <ContactCard {...contact} />
            </div>
        </main>
    );
}