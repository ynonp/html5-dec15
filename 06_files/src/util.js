export function lengthOf(textarea) {
  return textarea.value.length;
}

export function demo() {
  console.log('demo!!!');
}

const Util = {
  lengthOf: lengthOf,
  demo: demo,
};

export default Util;