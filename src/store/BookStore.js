import {makeAutoObservable} from "mobx";


export default class BookStore {
    constructor() {
        this._genres = []
        this._books = []
        this._selectedGenre = {}
        this._selectedSearchString = ''
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setSelectedSearchString(value) {
        this._selectedSearchString = value
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedGenres(genre) {
        this.setPage(1)
        this._selectedGenre = genre
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    get genres() {
        return this._genres
    }

    get books() {
        return this._books
    }

    get selectedSearchString() {
        return this._selectedSearchString
    }

    get selectedGenre() {
        return this._selectedGenre
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}