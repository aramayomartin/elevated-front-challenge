import axios from "axios";
const baseUrl = "http://localhost:3001";
const client = {
  
  async getBooks(): Promise<any> {
    const { data } = await axios(`${baseUrl}/books`);
    return data;
  },

  async createBook(body: any): Promise<any> {
    await axios.post(`${baseUrl}/book/create`, body);
  },
  async editBook(id: any, body: any): Promise<any> {
    await axios.put(`${baseUrl}/book/edit/${id}`, body);
  },
  async deleteBook(id: any): Promise<any> {
    await axios.delete(`${baseUrl}/book/edit/${id}`);
  },
};

export default client;
