const initialState = {
  categories: [
    {
      id: "",
      name: "",
      image: "",
      created_at: "",
      updated_at: "",
      artists_count: "",
    },
  ],
  category: {
    id: 0,
    name: "",
    image: "",
    artists: [
      {
        id: "",
        name: "",
        image: "",
        category_id: "",
        country_id: "",
        created_at: "",
        updated_at: "",
        description: "",
        price_ranges: "",
        mainstream: "",
        international: "",
        featured: "",
        image_url: "",
        tags: [
          {
            id: "",
            name: "",
            created_at: "",
            updated_at: "",
            pivot: {
              artist_id: "",
              tag_id: "",
            },
          },
        ],
      },
    ],
  },
  artist: {
    id: "",
    name: "",
    description: "",
    image: "",
    international: "",
    mainstream: "",
    featured: "",
    category_id: "",
    image_url: "",
    works: [
      {
        id: "",
        content: "",
        type: "",
        artist_id: "",
        created_at: "",
        updated_at: "",
      },
    ],
    events: [
      {
        id: 1,
        name: "",
        artist_id: 1,
        created_at: "",
        updated_at: "",
      },
    ],
    category: {
      id: 0,
      name: "",
      image: "",
      created_at: "",
      updated_at: "",
    },
  },
};
export default initialState;
