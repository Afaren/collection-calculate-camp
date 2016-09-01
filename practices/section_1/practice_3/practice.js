function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(a => object_b.value.find(v => v === a) === undefined ? false : true);
}

module.exports = collect_same_elements;
