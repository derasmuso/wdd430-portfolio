interface SocialLink {
    label: string;
    url: string;
}

interface ContactCardProps {
    name: string;
    email: string;
    title?: string;
    phone?: string;
    location?: string;
    links?: SocialLink[];
}

export default function ContactCard({ name, email, title, phone, location, links }: ContactCardProps) {
    return (
        <article className="p-6 border-l-4 border-blue-800 bg-gray-50 rounded shadow-sm max-w-md">
            <h3 className="text-2xl font-bold">{name}</h3>
            {title && <p className="text-gray-600 mb-4">{title}</p>}

            <ul className="space-y-2 text-gray-700">
                <li>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${email}`} className="text-blue-800 hover:underline">{email}</a>
                </li>
                {location && (
                    <li>
                        <strong>Location:</strong> {location}
                    </li>
                )}
            </ul>

            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
}