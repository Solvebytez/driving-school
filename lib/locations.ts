export interface LocationData {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbed: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const locations: Record<string, LocationData> = {
  bradford: {
    id: "bradford",
    name: "Bradford",
    address: "Bradford West Gwillimbury, Ontario",
    phone: "(905)-392-1472",
    email: "bradford@topstardriving.com",
    hours: "Mon to Sat: 8:00 am - 7:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1234567890!2d-79.555555!3d44.111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA2JzQwLjAiTiA3OcKwMzMnMjAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123",
    coordinates: { lat: 44.111111, lng: -79.555555 },
  },
  markham: {
    id: "markham",
    name: "Markham",
    address: "Markham, Ontario",
    phone: "(905)-392-1472",
    email: "markham@topstardriving.com",
    hours: "Mon to Sat: 8:00 am - 7:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2345678901!2d-79.333333!3d43.888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUzJzIwLjAiTiA3OcKwMjAnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123",
    coordinates: { lat: 43.888889, lng: -79.333333 },
  },
  newmarket: {
    id: "newmarket",
    name: "Newmarket",
    address: "Newmarket, Ontario",
    phone: "(905)-392-1472",
    email: "newmarket@topstardriving.com",
    hours: "Mon to Sat: 8:00 am - 7:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3456789012!2d-79.444444!3d44.055556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDAzJzIwLjAiTiA3OcKwMjYnNDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123",
    coordinates: { lat: 44.055556, lng: -79.444444 },
  },
  "richmond-hill": {
    id: "richmond-hill",
    name: "Richmond Hill",
    address: "Richmond Hill, Ontario",
    phone: "(905)-392-1472",
    email: "richmondhill@topstardriving.com",
    hours: "Mon to Sat: 8:00 am - 7:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4567890123!2d-79.222222!3d43.777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzQwLjAiTiA3OcKwMTMnMjAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123",
    coordinates: { lat: 43.777778, lng: -79.222222 },
  },
  scarborough: {
    id: "scarborough",
    name: "Scarborough",
    address: "Scarborough, Ontario",
    phone: "(905)-392-1472",
    email: "scarborough@topstardriving.com",
    hours: "Mon to Sat: 8:00 am - 7:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5678901234!2d-79.111111!3d43.666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQwJzAwLjAiTiA3OcKwMDYnNDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890123",
    coordinates: { lat: 43.666667, lng: -79.111111 },
  },
};

export const defaultLocation = "bradford";

export const getLocationData = (locationId: string): LocationData => {
  return locations[locationId] || locations[defaultLocation];
};






