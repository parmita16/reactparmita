{filteredFood.map((food) => (
  <MenuCard
    key={food.id}
    image={food.image}
    name={food.name}
    description={food.description}
    price={food.price}
    addToCart={() => addToCart(food)}
  />
))}