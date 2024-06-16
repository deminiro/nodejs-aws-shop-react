export const openApiSpec = {
  swagger: "2.0",
  info: {
    title: "Product Service API",
    description: "API for managing products",
    version: "1.0.0",
  },
  paths: {
    "/products": {
      get: {
        summary: "Get a list of products",
        responses: {
          "200": {
            description: "A list of products",
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  title: { type: "string" },
                  price: { type: "number" },
                  description: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    "/products/{productId}": {
      get: {
        summary: "Get a product by ID",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "A product",
            schema: {
              type: "object",
              properties: {
                id: { type: "string" },
                title: { type: "string" },
                price: { type: "number" },
                description: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};
