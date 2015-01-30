import ENV from "../config/environment";
import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: ENV.apiURL
});
