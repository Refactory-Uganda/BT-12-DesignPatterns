var Adventure = /** @class */ (function () {
    function Adventure() {
    }
    Adventure.prototype.getBookList = function () {
        return "List of Adventure books ... [Peter Pan, Treasure Island...]";
    };
    return Adventure;
}());
var Fiction = /** @class */ (function () {
    function Fiction() {
    }
    Fiction.prototype.getBookList = function () {
        return "List of Fiction books ... [Oliver Twist, 1984]";
    };
    return Fiction;
}());
var NonFiction = /** @class */ (function () {
    function NonFiction() {
    }
    NonFiction.prototype.getBookList = function () {
        return "List of NonFiction books ... [Design Patterns, Principia Mathematica, Concepts of Engineering....]";
    };
    return NonFiction;
}());
var Horror = /** @class */ (function () {
    function Horror() {
    }
    Horror.prototype.getBookList = function () {
        return "List of Horror books ... [Game of Thrones, I know what you did last summer......]";
    };
    return Horror;
}());
var Library = /** @class */ (function () {
    function Library(userName, getBookGenre) {
        this.userName = userName;
        this.getBookGenre = getBookGenre;
    }
    Library.prototype.getGenre = function () {
        return this.getBookGenre.getBookList();
    };
    Library.prototype.getUser = function () {
        return "Books borrowed by ".concat(this.userName);
    };
    Library.prototype.setBookGenre = function (getBookGenre) {
        this.getBookGenre = getBookGenre;
    };
    return Library;
}());
var library = new Library("Pamela", new NonFiction());
console.log(library.getGenre());
// console.log(library.getUser());
// library.setBookGenre(new Fiction());
// console.log(library.getGenre());
