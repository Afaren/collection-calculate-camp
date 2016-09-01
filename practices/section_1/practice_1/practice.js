function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(a => collection_b.find(b=> b === a) === undefined ? false : true);
}

module.exports = collect_same_elements;
