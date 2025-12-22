interface IdPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({ params }: IdPageProps) {
    const { id } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold">{id}</h1>
        </div>
    );
}