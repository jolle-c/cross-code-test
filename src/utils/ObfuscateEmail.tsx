
/**
 * @param {{ emObf: string, emText: string }}
 */
const ObfuscateEmail = ({emObf, emText}: { emObf: string; emText: string; } ) => {

	const decodedEm = emObf ? `mailto:${atob(emObf)}` : null;
	return <>{decodedEm && <a href={decodedEm}>{emText}</a>}</>;
};

export default ObfuscateEmail;
