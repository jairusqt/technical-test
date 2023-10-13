function ImageDataGetter() {}

ImageDataGetter.getImagesByCategory = async (category, page) => {
  const response = await fetch(`http://localhost:8888/images?category=${category}&page=${page}`);
  const result = await response.json();
  return result;
};
