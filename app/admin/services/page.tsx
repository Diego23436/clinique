'use client';
import { useState, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  isActive: boolean;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState({
    title: '', slug: '', iconName: '', shortDescription: '', fullDescription: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Charger les services existants
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data.data || []));
  }, []);

  // Auto-générer le slug depuis le titre
  function handleTitleChange(title: string) {
    const slug = title
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    setForm({ ...form, title, slug });
  }

  async function handleSubmit() {
    if (!form.title || !form.shortDescription || !form.fullDescription) {
      setMessage('❌ Veuillez remplir tous les champs obligatoires');
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
        setForm({ title: '', slug: '', iconName: '', shortDescription: '', fullDescription: '' });
        setServices(prev => [data.data, ...prev]);
      }
    } catch {
      setMessage('❌ Erreur de connexion');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Gestion des Services</h1>

      {/* Formulaire d'ajout */}
      <div className="bg-white border rounded-xl p-6 mb-10 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Ajouter un service</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Titre *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => handleTitleChange(e.target.value)}
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
              value={form.iconName}
              onChange={e => setForm({ ...form, iconName: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ex: heart, stethoscope"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description courte *</label>
            <textarea
              value={form.shortDescription}
              onChange={e => setForm({ ...form, shortDescription: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              rows={2}
              placeholder="Résumé affiché sur la carte"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description complète *</label>
            <textarea
              value={form.fullDescription}
              onChange={e => setForm({ ...form, fullDescription: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              rows={5}
              placeholder="Détails complets du service"
            />
          </div>

          {message && <p className="text-sm">{message}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : 'Ajouter le service'}
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
                <p className="font-medium text-sm">{s.title}</p>
                <p className="text-xs text-gray-400">/services/{s.slug}</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Actif</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}