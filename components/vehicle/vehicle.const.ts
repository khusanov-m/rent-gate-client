export const SORT_BY_OPTIONS = [
  {
    key: "price-asc",
    value: "Price: Low to High",
  },
  {
    key: "price-desc",
    value: "Price: High to Low",
  },
];

export const VEHICLE_SERVICES = [
  {
    id: "gps",
    option: "GPS Navigation",
    price: 10,
  },
  {
    id: "child-seat",
    option: "Child Seat",
    price: 2,
    notFor: "car",
  },
  {
    id: "bike-rack",
    option: "Bike Rack",
    price: 5,
    onlyFor: "bike",
  },
  {
    id: "return-without-full-fuel",
    option: "Return without full fuel",
    price: 50,
  },
  {
    id: "personal-assistant",
    option: "Personal assistant",
    price: 20,
  },
  {
    id: "driver",
    option: "Driver",
    price: 20,
  },
  {
    id: "standard-insurance",
    option: "Standard Insurance",
    price: 30,
  },
  {
    id: "premium-insurance",
    option: "Premium Insurance",
    price: 50,
  }
];
