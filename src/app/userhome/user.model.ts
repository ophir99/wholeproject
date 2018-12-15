interface Skill {
  name: string;
  yoe: string;
  rating: string;
}
interface Address {
  state: string;
  city: string;
  pin: string;
}
interface AddressWhole {
  permanent?: Address;
  temporary?: Address;
}
export interface User {
  name: string;
  mobile: string;
  skills: Skill[];
  location: AddressWhole;
}
