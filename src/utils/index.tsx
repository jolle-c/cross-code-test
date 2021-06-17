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
