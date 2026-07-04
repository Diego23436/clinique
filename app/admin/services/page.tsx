'use client';
import { useState, useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  featured: boolean;
  isActive: boolean;
  createdAt: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    longDescription: '',
    icon: '',
    featured: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load existing services
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.data || []));
  }, []);

  // Auto-generate slug from name
  function handleNameChange(name: string) {
    const slug = name
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    setForm({ ...form, name, slug });
  }

  // Submit form (create or update)
  async function handleSubmit() {
    if (!form.name || !form.slug) {
      setMessage('❌ Le nom et le slug sont obligatoires');
      return;
    }
    
    setLoading(true);
    setMessage('');
    
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (!res.ok) {
        setMessage(`❌ ${data.error}`);
      } else {
        setMessage('✅ Service ajouté avec succès !');
        setForm({ name: '', slug: '', description: '', icon: '', featured: false });
        setServices(prev => [data.data, ...prev]);
        setEditingId(null);
      }
    } catch {
      setMessage('❌ Erreur de connexion');
    } finally {
      setLoading(false);
    }
  }

  // Delete service
  async function handleDelete(id: number) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) return;
    
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setServices(prev => prev.filter(s => s.id !== id));
        setMessage('✅ Service supprimé avec succès');
      } else {
        setMessage('❌ Erreur lors de la suppression');
      }
    } catch {
      setMessage('❌ Erreur de connexion');
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Gestion des Services</h1>

      {/* Formulaire d'ajout */}
      <div className="bg-white border rounded-xl p-6 mb-10 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">{editingId ? 'Modifier' : 'Ajouter'} un service</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Titre *</label>
            <input
              type="text"
              value={form.name}
              onChange={e => handleNameChange(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ex: Chirurgie Cardiaque"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug (auto-généré)</label>
            <input
              type="text"
              value={form.slug}
              onChange={e => setForm({ ...form, slug: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nom de l'icône</label>
            <input
              type="text"
              value={form.icon}
              onChange={e => setForm({ ...form, icon: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ex: heart, stethoscope"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description (optionnel)</label>
            <textarea
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              rows={2}
              placeholder="Description du service"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description détaillée (longue)</label>
            <textarea
              value={form.longDescription}
              onChange={e => setForm({ ...form, longDescription: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              rows={6}
              placeholder="Texte long présentant le service en détail"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">À la une ?</label>
            <input
              type="checkbox"
              checked={form.featured}
              onChange={e => setForm({ ...form, featured: e.target.checked })}
              className="rounded"
            />
          </div>

          {message && <p className="text-sm">{message}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : editingId ? 'Mettre à jour' : 'Ajouter le service'}
          </button>
        </div>
      </div>

      {/* Liste des services existants */}
      <h2 className="text-lg font-semibold mb-4">Services existants ({services.length})</h2>
      {services.length === 0 ? (
        <p className="text-gray-400 text-sm">Aucun service encore ajouté.</p>
      ) : (
        <div className="space-y-3">
          {services.map(s => (
            <div key={s.id} className="flex justify-between items-center border rounded-lg px-4 py-3 bg-white">
              <div>
                <p className="font-medium text-sm">{s.name}</p>
                <p className="text-xs text-gray-400">/services/{s.slug}</p>
                {s.featured && <span className="text-xs text-amber-600">★ À la une</span>}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(s.id)}
                  className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}