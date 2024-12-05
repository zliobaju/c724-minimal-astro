export default function dateCheck() {
  const today = new Date();
  const d = new Date(import.meta.env.PUBLIC_CHANGE_DATE);
  return today > d;
}
