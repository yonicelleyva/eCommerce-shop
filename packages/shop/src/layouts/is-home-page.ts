import {
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING_PAGE,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  MEDICINE_PAGE,
} from 'site-settings/site-navigation';
const arr = [
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING_PAGE,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  MEDICINE_PAGE,
];
export function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`);
}
export function isHomePageRoute(pathname) {
  return pathname.includes('clothing')
}
