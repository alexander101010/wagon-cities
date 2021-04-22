export default function (state = null, action) {
  switch (action.type) {
    case "ACTIVE_CITY":
      return action.payload;
    default:
      return state;
  }
}
