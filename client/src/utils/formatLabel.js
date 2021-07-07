export function formatLabel(name) {
  switch (name) {
    case "goals":
      name = "Goals";
      break;
    case "assists":
      name = "Assists";
      break;
    case "games_played":
      name = "Games Played";
      break;
    case "yellow_cards":
      name = "Yellow Cards";
      break;
    case "red_cards":
      name = "Red Cards";
      break;
    default:
      name = "Goals per Game";
  }
  return name;
}
