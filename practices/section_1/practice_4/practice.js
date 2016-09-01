function collect_same_elements(collection_a, object_b) {
  return collection_a.map(a => a.key)
    .filter(f => object_b.value.find(b => b === f) === undefined ? false : true);
}

module.exports = collect_same_elements;
