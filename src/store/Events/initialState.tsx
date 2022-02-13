interface event {
  id: string;
  additional_entertainment: any[];
  user_id: string;
  contact_email: string;
  artist_id: string;
  event_name: string;
  contact_phone: string;
  contact_name: string;
  additional_info: string;
  budget: number;
  duration: number;
  budget_tbd: boolean;
  duration_tbd: boolean;
  address: string;
  date: string;
  description: string;
  placement: string;
  guests: number;
  additional_equipment: string[];
  artists: string[];
  name: string;
  email: string;
  phone_number: string;
  production_items: string[];
  type: string;
  items_of_production: string[];
}
interface BookEventState {
  bookEvent: event;
  error: string;
  artists: any[];
  cart: event;
  userBookings: event[];
}
const bookEventState: BookEventState = {
  bookEvent: {
    id: "",
    contact_name: "",
    additional_entertainment: [],
    user_id: "",
    contact_phone: "",
    contact_email: "",
    event_name: "",
    artist_id: "",
    additional_info: "",
    budget: 0,
    duration: 0,
    budget_tbd: false,
    duration_tbd: false,
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
    production_items: [],
    items_of_production: [],
    type: "",
  },
  error: "",
  artists: [],
  cart: {
    id: "",
    contact_name: "",
    user_id: "",
    additional_entertainment: [],
    contact_phone: "",
    contact_email: "",
    artist_id: "",
    event_name: "",
    additional_info: "",
    budget: 0,
    duration: 0,
    budget_tbd: false,
    duration_tbd: false,
    address: "",
    date: "",
    description: "",
    placement: "",
    guests: 0,
    additional_equipment: [],
    artists: [],
    items_of_production: [],
    name: "",
    email: "",
    phone_number: "",
    production_items: [],
    type: "",
  },
  userBookings: [
    {
      id: "",
      contact_name: "",
      user_id: "",
      additional_entertainment: [],
      contact_phone: "",
      contact_email: "",
      artist_id: "",
      event_name: "",
      additional_info: "",
      budget: 0,
      duration: 0,
      budget_tbd: false,
      duration_tbd: false,
      address: "",
      date: "",
      description: "",
      placement: "",
      guests: 0,
      additional_equipment: [],
      artists: [],
      items_of_production: [],
      name: "",
      email: "",
      phone_number: "",
      production_items: [],
      type: "",
    },
  ],
};

export default bookEventState;
