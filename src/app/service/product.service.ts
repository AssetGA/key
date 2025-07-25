import httpService from "./http.service";

const productEndpoint = "/api/product";

const productService = {
  get: async () => {
    const { data } = await httpService.get(`/lib${productEndpoint}`);
    return data;
  },
};

export default productService;
