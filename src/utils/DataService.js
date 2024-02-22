class DataService {
  async getAll() {
    const response = await fetch("/tutorials");
    return await response.json();
  }

  async get(id) {
    const response = await fetch(`/tutorials/${id}`);
    return await response.json();
  }

  async createBook(data) {
    const response = await fetch("/tutorials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async updateBook(id, data) {
    const response = await fetch(`/tutorials/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async delete(id) {
    const response = await fetch(`/tutorials/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }

  async deleteAll() {
    const response = await fetch("/tutorials", {
      method: "DELETE",
    });
    return await response.json();
  }

  async findByTitle(title) {
    const response = await fetch(`/tutorials?title=${title}`);
    return await response.json();
  }
}

export default new DataService();
