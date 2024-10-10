import {
  FaBed,
  FaUsers,
  FiBox,
  IoIosPeople,
  MdBusinessCenter,
  MdKingBed,
} from "@/components/icons";
import { Categories } from ".";

export const dictionaryStrings = (dictionary: Categories) => [
  {
    btnText: dictionary.rooms.basics.btnText,
    title: dictionary.rooms.basics.title,
    description: dictionary.rooms.basics.description,
    slug: dictionary.rooms.basics.slug,
    Icon: FiBox,
  },
  {
    btnText: dictionary.rooms.doubles.btnText,
    title: dictionary.rooms.doubles.title,
    description: dictionary.rooms.doubles.description,
    slug: dictionary.rooms.doubles.slug,
    Icon: IoIosPeople,
  },
  {
    btnText: dictionary.rooms.standards.btnText,
    title: dictionary.rooms.standards.title,
    description: dictionary.rooms.standards.description,
    slug: dictionary.rooms.standards.slug,
    Icon: FaBed,
  },
  {
    btnText: dictionary.rooms.double_beds.btnText,
    title: dictionary.rooms.double_beds.title,
    description: dictionary.rooms.double_beds.description,
    slug: dictionary.rooms.double_beds.slug,
    Icon: MdKingBed,
  },
  {
    btnText: dictionary.rooms.family.btnText,
    title: dictionary.rooms.family.title,
    description: dictionary.rooms.family.description,
    slug: dictionary.rooms.family.slug,
    Icon: FaUsers,
  },
  {
    btnText: dictionary.rooms.executives.btnText,
    title: dictionary.rooms.executives.title,
    description: dictionary.rooms.executives.description,
    slug: dictionary.rooms.executives.slug,
    Icon: MdBusinessCenter,
  },
];
