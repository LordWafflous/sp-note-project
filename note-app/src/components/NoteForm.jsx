import { useState, useEffect } from 'react'

export default function NoteForm({ onSave, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title)
      setContent(editingNote.content)
    } else {
      setTitle('')
      setContent('')
    }
  }, [editingNote])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    onSave({ title, content })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <h5 className="mb-3">{editingNote ? 'Notu Düzenle' : 'Yeni Not'}</h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Not başlığı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {editingNote ? 'Güncelle' : 'Not ekle'}
        </button>
        {editingNote && (
          <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
            İptal
          </button>
        )}
      </div>
    </form>
  )
}