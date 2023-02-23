function setColorFromType(type) {
  switch (type) {
    case "grass":
      return "#7AC74C";
    case "water":
      return "#6390F0";
    case "fire":
      return "#EE8130";
    case "bug":
      return "#A6B91A";
    case "normal":
      return "#A8A77A";
    case "poison":
      return "#A33EA1";
    case "electric":
      return "#F7D02C";
    case "ground":
      return "#F7D02C";
    case "fairy":
      return "#E2BF65";
    case "fighting":
      return "#C22E28";
    case "psychic":
      return "#F95587";
    case "rock":
      return "#B6A136";
    case "ghost":
      return "#735797";
    case "ice":
      return "#96D9D6";
    case "dragon":
      return "#6F35FC";
    default:
      return "#A8A77A";
  }
}
