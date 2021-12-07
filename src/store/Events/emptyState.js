const emptyState = {
  bookEvent: {
    budget: 0,
    duration: 0,
    address: "",
    date: "",
    description: "",
    placement: "",
    guests: 0,
    additional_equipment: [],
    artists: [],
    name: "",
    email: "",
    phone_number: "",
    additional_info: "",
    items_of_production: [],
    type: "",
    budget_tbd: 0,
    duration_tbd: 0,
    event_name: "",
  },
  rebook: {
    budget: 0,
    duration: 0,
    address: "",
    date: "",
    description: "",
    placement: "",
    guests: 0,
    additional_equipment: [],
    artists: [],
    name: "",
    email: "",
    phone_number: "",
    additional_info: "",
    items_of_production: [],
    type: "",
    budget_tbd: 0,
    duration_tbd: 0,
    event_name: "",
  },
  userBookings: [
    {
      id: null,
      user_id: null,
      artist_id: null,
      name: "",
      address: "",
      description: "",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      date: "",
      additional_entertainment: [],
      additional_equipment: [],
      placement: "",
      guests: 0,
      duration: 0,
      budget: 0,
      additional_info: "",
      created_at: "",
      updated_at: "",
      done_at: "",
      items_of_production: [],
      others: null,
      accepted: 0,
      type: "",
      event_name: null,
      duration_tbd: 0,
      budget_tbd: 0,
    },
  ],
  selectedBooking: {
    id: null,
    user_id: null,
    artist_id: null,
    name: "",
    address: "",
    description: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    date: "",
    additional_entertainment: [],
    additional_equipment: [],
    placement: "",
    guests: 0,
    duration: 0,
    budget: 0,
    additional_info: "",
    created_at: "",
    updated_at: "",
    done_at: "",
    items_of_production: "",
    others: null,
    accepted: 0,
    type: "",
    event_name: null,
    duration_tbd: 0,
    budget_tbd: 0,
    artists: [],
  },
  selectedBookingArtists: [],
  selectedArtists: {},
  addToBooking: {
    artist_id: "",
    artist: {},
    event_ids: [],
  },
  error: "",
};

export default emptyState;
