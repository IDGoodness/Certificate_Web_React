import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const Admin = () => {
  const [config, setConfig] = useState({
    title: '',
    description: '',
    date: '',
    signatory: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchConfig = async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('id', 'ginsti')
        .single();

      if (error) {
        console.error('Fetch error:', error);
      } else {
        setConfig({
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          signatory: data.signatory || '',
        });
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setStatus('');
    const { error } = await supabase
      .from('certificates')
      .update(config)
      .eq('id', 'ginsti');

    if (error) {
      console.error('Update error:', error);
      setStatus('Error saving config');
    } else {
      setStatus('Configuration saved successfully');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Certificate Editor</h2>

      <label className="block mb-2 font-semibold">Title</label>
      <input name="title" value={config.title} onChange={handleChange} className="w-full p-2 border mb-4" />

      <label className="block mb-2 font-semibold">Description</label>
      <textarea name="description" value={config.description} onChange={handleChange} className="w-full p-2 border mb-4" />

      <label className="block mb-2 font-semibold">Date</label>
      <input name="date" value={config.date} onChange={handleChange} type="date" className="w-full p-2 border mb-4" />

      <label className="block mb-2 font-semibold">Signatory</label>
      <input name="signatory" value={config.signatory} onChange={handleChange} className="w-full p-2 border mb-4" />

      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </button>

      {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
    </div>
  );
};

export default Admin;