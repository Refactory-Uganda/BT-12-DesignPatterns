// //!

// class Adventure {
// 	getBookList() {
// 		return `List of Adventure books ... [Peter Pan, Treasure Island...]`;
// 	}
// }

// class Fiction {
// 	getBookList() {
// 		return `List of Fiction books ... [Oliver Twist, 1984]`;
// 	}
// }

// class NonFiction {
// 	getBookList() {
// 		return `List of NonFiction books ... [Principia Mathematica, Concepts of Engineering....]`;
// 	}
// }

// class Horror {
// 	getBookList() {
// 		return `List of Horror books ... [Game of Thrones, I know what you did last summer......]`;
// 	}
// }

// function getGenreBook(genre) {
// 	return genre;
// }

// console.log(getGenreBook(new Fiction().getBookList()));
// console.log(getGenreBook(new Adventure().getBookList()));
// console.log(getGenreBook(new NonFiction().getBookList()));

interface ILibrary {
	getGenre(): string;
	getUser(): string;
}

interface BookGenre {
	getBookList(): string;
}

class Adventure implements BookGenre {
	getBookList() {
		return `List of Adventure books ... [Peter Pan, Treasure Island...]`;
	}
}

class Fiction implements BookGenre {
	getBookList() {
		return `List of Fiction books ... [Oliver Twist, 1984]`;
	}
}

class NonFiction implements BookGenre {
	getBookList() {
		return `List of NonFiction books ... [Principia Mathematica, Concepts of Engineering....]`;
	}
}

class Horror implements BookGenre {
	getBookList() {
		return `List of Horror books ... [Game of Thrones, I know what you did last summer......]`;
	}
}

class Library implements ILibrary {
	private userName: string;
	private getBookGenre: BookGenre;

	constructor(userName: string, getBookGenre: BookGenre) {
		this.userName = userName;
		this.getBookGenre = getBookGenre;
	}

	getGenre() {
		return this.getBookGenre.getBookList();
	}
	getUser() {
		return `Books borrowed by ${this.userName}`;
	}
}

let library = new Library("Pamela", new Horror());

console.log(library.getGenre());
console.log(library.getUser());
