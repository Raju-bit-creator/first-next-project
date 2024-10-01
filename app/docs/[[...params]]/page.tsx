interface Props {
    params: {
        featureId: string;
    };
}

export default function Feature({ params }: Props) {
    const { featureId } = params;
    console.log(featureId);

    return (
        <div>
            <h4>This is our feature: {featureId}</h4>
        </div>
    );
}