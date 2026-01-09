import React, { useState, useEffect } from 'react';
import { getProjects, saveProject, deleteProject, uploadImage } from '../../services/ProjectService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/gatekeeper-v1-9f2');
            return;
        }
        const load = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        load();
    }, [isAuthenticated, navigate]);

    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            const imageUrl = await uploadImage(file);
            setImagePreview(imageUrl);
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const projectData = {
            id: editingProject?.id,
            title: formData.get('title'),
            client: formData.get('client'),
            image: imagePreview || editingProject?.image || '',
            status: formData.get('status')
        };

        await saveProject(projectData);
        setProjects(await getProjects());
        setEditingProject(null);
        setImagePreview('');
        e.target.reset();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            await deleteProject(id);
            setProjects(await getProjects());
        }
    };

    if (!isAuthenticated) return null;

    return (
        <div className="admin-dashboard">
            <header className="admin-header glass">
                <div className="container admin-nav">
                    <div className="logo-container">
                        <img src="/assets/logo.svg" alt="JOTEK" className="admin-logo" />
                    </div>
                    <div className="admin-actions">
                        <button onClick={() => navigate('/')} className="btn-text">View Site</button>
                        <button onClick={logout} className="btn-secondary">Logout</button>
                    </div>
                </div>
            </header>

            <main className="container admin-main">
                <div className="admin-grid">
                    <section className="project-form-section glass">
                        <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
                        <form key={editingProject?.id || 'new'} onSubmit={handleSave} className="admin-form">
                            <div className="form-group">
                                <label>Project Title</label>
                                <input name="title" defaultValue={editingProject?.title} required />
                            </div>
                            <div className="form-group">
                                <label>Client / Partner</label>
                                <input name="client" defaultValue={editingProject?.client} required />
                            </div>
                            <div className="form-group">
                                <label>Project Image Upload</label>
                                <div className="upload-box">
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                    {uploading && <p>Uploading...</p>}
                                </div>
                                {(imagePreview || editingProject?.image) && (
                                    <div className="image-preview-box">
                                        <img src={imagePreview || editingProject?.image} alt="Preview" />
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select name="status" defaultValue={editingProject?.status || 'Ongoing'}>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="form-btns">
                                <button type="submit" className="btn-primary" disabled={uploading}>
                                    {editingProject ? 'Update Project' : 'Add Project'}
                                </button>
                                {editingProject && (
                                    <button type="button" onClick={() => {
                                        setEditingProject(null);
                                        setImagePreview('');
                                    }} className="btn-text">Cancel</button>
                                )}
                            </div>
                        </form>
                    </section>

                    <section className="project-list-section glass">
                        <h3>Existing Projects</h3>
                        <div className="admin-project-list">
                            {projects.map(project => (
                                <div key={project.id} className="admin-project-item">
                                    <img src={project.image} alt="" className="admin-item-img" />
                                    <div className="admin-item-info">
                                        <h4>{project.title}</h4>
                                        <p>{project.client} | <span className={`status-pill ${project.status.toLowerCase()}`}>{project.status}</span></p>
                                    </div>
                                    <div className="admin-item-btns">
                                        <button onClick={() => {
                                            setEditingProject(project);
                                            setImagePreview(project.image);
                                        }} className="btn-icon">Edit</button>
                                        <button onClick={() => handleDelete(project.id)} className="btn-icon delete">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
