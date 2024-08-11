import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdMovieEdit } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";



export const navigation = [
  {
    label : 'TV Shows',
    href : 'tv',
    icon : <PiTelevisionSimpleFill />
  },
  {
    label : 'Movies',
    href : 'movie',
    icon : <MdMovieEdit />
  }
]

export const mobileNavigation = [
  {
    label : 'Home',
    href : '/',
    icon : <IoHome />
  },
  ...navigation,
  {
    label : 'Search',
    href : '/search',
    icon : <IoSearchOutline />
  }
]