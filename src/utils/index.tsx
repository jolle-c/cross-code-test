export const sort = (toSort: any[], key: string) =>
	toSort.sort(function (a: any, b: any) {
		var itemA = a[key].toUpperCase();
		var itemB = b[key].toUpperCase();
		if (itemA < itemB) {
			return -1;
		}
		if (itemA > itemB) {
			return 1;
		}
		return 0;
	});

/**
* @param {{ emObf: string, emText: string }}
*/
export const ObfuscateEmail = ({emObf, emText}: { emObf: string; emText: string; } ) => {

   const decodedEm = `mailto:${atob(emObf)}`;
   return <>{decodedEm && <a href={decodedEm}>{emText}</a>}</>;
};
