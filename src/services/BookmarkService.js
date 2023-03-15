const STUB = [
  { _id: "123451234", body: "lorem ipsum1" },
  { _id: "790582345", body: "lorem ipsum2" },
  { _id: "102398471", body: "lorem ipsum3" },
];

class BookmarkService {
  base_url = "http://localhost:3001/api";

  async getAllBookmarks() {
    return STUB;
  }
  async getOneBookmark(id) {
    return STUB.filter((val) => val._id === id);
  }
  async createBookmark(bookmark) {
    return { _id: String(Math.random() * 1235462435), body: bookmark };
  }
  async deleteBookmark(id) {
    return;
  }
  async updateBookmark(id, bookmark) {
    return {
      _id: id,
      body: bookmark,
    };
  }
}

const bookmarkService = new BookmarkService();
export default bookmarkService;
