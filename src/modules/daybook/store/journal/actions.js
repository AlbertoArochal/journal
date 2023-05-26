import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = ({ commit }, entry) => {
  const { date, text } = entry;
  const dataToSave = { date, text };
  journalApi.put(`/entries/${entry.id}.json`, dataToSave);
  commit("updateEntry", entry);
};

export const createEntry = async ({ commit }, entry) => {
  const { date, text } = entry;
  const dataToSave = { date, text };
  const { data } = await journalApi.post(`/entries.json`, dataToSave);
  entry.id = data.name;
  commit("addEntry", entry);
  return entry.id;
};
