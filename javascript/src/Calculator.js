function Add(stringOfNumbers) {
	if ( stringOfNumbers === "") return 0;

	var stringArray = stringOfNumbers.split(",");

	var sum = 0;
	for (var i = stringArray.length - 1; i >= 0; i--) {
		sum = sum + parseInt(stringArray[i]);
	};

	return sum;
}
