export const createNote = (id, title, content) => ({
  id,
  title,
  content,
  date: new Date().toLocaleDateString('tr-TR')
})